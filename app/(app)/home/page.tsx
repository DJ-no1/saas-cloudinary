"use client"
import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import VideoCard from '@/components/VideoCard'
import { Video } from '@/types'
import { VideoIcon, RefreshCw } from 'lucide-react'

function Home() {
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [downloadStatus, setDownloadStatus] = useState<string | null>(null)

  const fetchVideos = useCallback(async () => {
    try {
      setLoading(true)
      const response = await axios.get("/api/videos")
      if (Array.isArray(response.data)) {
        setVideos(response.data)
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      console.log(error);
      setError("Failed to fetch videos")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchVideos()
  }, [fetchVideos])

  const handleDownload = useCallback(async (url: string, title: string) => {
    try {
      setDownloadStatus("Preparing download...")

      // Try to fetch the video as a blob first
      try {
        const response = await fetch(url, {
          mode: 'cors',
          headers: {
            'Cache-Control': 'no-cache',
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        setDownloadStatus("Downloading...")
        const blob = await response.blob();

        // Create a temporary URL for the blob
        const blobUrl = window.URL.createObjectURL(blob);

        // Create and trigger download
        const link = document.createElement("a");
        link.href = blobUrl;
        link.setAttribute("download", `${title}.mp4`);
        document.body.appendChild(link);
        link.click();

        // Cleanup
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);

        setDownloadStatus("Download completed!")
        setTimeout(() => setDownloadStatus(null), 3000);

      } catch (fetchError) {
        // If fetch fails due to CORS or other issues, use fallback method
        console.log('Fetch failed, using fallback:', fetchError);
        setDownloadStatus("Using browser download...")

        // Force download using direct link
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${title}.mp4`);
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setDownloadStatus("Download initiated!")
        setTimeout(() => setDownloadStatus(null), 3000);
      }

    } catch (error) {
      console.error('Download failed:', error);
      setDownloadStatus("Download failed, opening video...")

      // Last fallback - open in new tab
      window.open(url, '_blank');

      setTimeout(() => setDownloadStatus(null), 3000);
    }
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <div className="loading loading-spinner loading-lg mb-4"></div>
          <p className="text-lg text-base-content/70">Loading your videos...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <div className="text-error text-xl mb-4">⚠️ {error}</div>
          <button
            onClick={fetchVideos}
            className="btn btn-primary"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Download Status Toast */}
      {downloadStatus && (
        <div className={`alert mb-6 ${downloadStatus.includes('completed') ? 'alert-success' :
            downloadStatus.includes('failed') ? 'alert-error' : 'alert-info'
          }`}>
          <div className="flex items-center space-x-2">
            {downloadStatus.includes('completed') ? (
              <span>✅</span>
            ) : downloadStatus.includes('failed') ? (
              <span>⚠️</span>
            ) : (
              <span className="loading loading-spinner loading-sm"></span>
            )}
            <span>{downloadStatus}</span>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="bg-primary/10 p-3 rounded-lg">
            <VideoIcon className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Your Videos</h1>
            <p className="text-base-content/70">
              {videos.length} {videos.length === 1 ? 'video' : 'videos'} available
            </p>
          </div>
        </div>
        <button
          onClick={fetchVideos}
          className="btn btn-ghost btn-circle"
          title="Refresh videos"
        >
          <RefreshCw className="h-5 w-5" />
        </button>
      </div>

      {videos.length === 0 ? (
        <div className="text-center py-16">
          <div className="bg-base-200 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <VideoIcon className="h-12 w-12 text-base-content/50" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No videos yet</h3>
          <p className="text-base-content/70 mb-6">
            Upload your first video to get started with compression and sharing
          </p>
          <a href="/video-upload" className="btn btn-primary">
            Upload Video
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onDownload={handleDownload}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home