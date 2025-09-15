'use client'

import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Upload, FileVideo, AlertCircle } from 'lucide-react'

export default function VideoUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter();

  //max file size of 70 mb
  const MAX_FILE_SIZE = 70 * 1024 * 1024

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!file || !title) {
      setError('Please provide both a title and select a video file')
      return
    }

    if (file.size > MAX_FILE_SIZE) {
      setError('File size must be less than 70MB')
      return
    }

    setIsUploading(true)

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('originalSize', file.size.toString());

    try {
      const response = await axios.post('/api/video-upload', formData)
      router.push('/home')
    } catch (error) {
      console.log('Error uploading file:', error)
      setError('Failed to upload video. Please try again.')
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-base-100 rounded-xl shadow-xl p-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-primary/10 p-3 rounded-lg">
            <Upload className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Upload Video</h1>
        </div>

        {error && (
          <div className="alert alert-error mb-6">
            <AlertCircle className="h-5 w-5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Video Title</span>
              <span className="label-text-alt text-error">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Enter a descriptive title for your video"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Description</span>
              <span className="label-text-alt">Optional</span>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="textarea textarea-bordered w-full h-24"
              placeholder="Add a description for your video"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Video File</span>
              <span className="label-text-alt text-error">*</span>
            </label>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="file-input file-input-bordered w-full"
              required
            />
            <label className="label">
              <span className="label-text-alt">Maximum file size: 70MB</span>
              {file && (
                <span className="label-text-alt">
                  Selected: {formatFileSize(file.size)}
                </span>
              )}
            </label>
          </div>

          {file && (
            <div className="bg-base-200 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <FileVideo className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">{file.name}</p>
                  <p className="text-sm text-base-content/70">
                    {formatFileSize(file.size)} • {file.type}
                  </p>
                </div>
              </div>
            </div>
          )}

          <button
            type="submit"
            className={`btn btn-primary w-full ${isUploading ? 'loading' : ''}`}
            disabled={isUploading}
          >
            {isUploading ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                Uploading...
              </>
            ) : (
              <>
                <Upload className="h-5 w-5" />
                Upload Video
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

