'use client'
import React, { useState, useRef, useEffect } from 'react'
import { CldImage } from 'next-cloudinary';
import { ImageIcon, Download, Wand2 } from 'lucide-react';

const socialFormats = {
  "Instagram Square (1:1)": { width: 1080, height: 1080, aspectRatio: "1:1" },
  "Instagram Portrait (4:5)": { width: 1080, height: 1350, aspectRatio: "4:5" },
  "Twitter Post (16:9)": { width: 1200, height: 675, aspectRatio: "16:9" },
  "Twitter Header (3:1)": { width: 1500, height: 500, aspectRatio: "3:1" },
  "Facebook Cover (205:78)": { width: 820, height: 312, aspectRatio: "205:78" },
};

type SocialFormat = keyof typeof socialFormats;

export default function SocialShare() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<SocialFormat>("Instagram Square (1:1)");
  const [isUploading, setIsUploading] = useState(false);
  const [isTransforming, setIsTransforming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (uploadedImage) {
      setIsTransforming(true);
    }
  }, [selectedFormat, uploadedImage]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/image-upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok)
        throw new Error("Failed to upload image");

      const data = await response.json();
      setUploadedImage(data.publicId);
    } catch (error) {
      console.log(error);
      setError("Failed to upload image. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDownload = async () => {
    if (!imageRef.current) return;

    try {
      const response = await fetch(imageRef.current.src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `social-image-${selectedFormat.toLowerCase().replace(/\s+/g, '-')}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      setError("Failed to download image. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="bg-primary/10 p-3 rounded-lg">
            <ImageIcon className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold">Social Media Creator</h1>
        </div>
        <p className="text-lg text-base-content/70">
          Transform your images for perfect social media posts
        </p>
      </div>

      {error && (
        <div className="alert alert-error mb-6">
          <span>{error}</span>
        </div>
      )}

      <div className="bg-base-100 rounded-xl shadow-xl p-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center space-x-2">
              <Wand2 className="h-6 w-6 text-primary" />
              <span>Upload Image</span>
            </h2>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Choose an image file</span>
                <span className="label-text-alt">JPG, PNG, WebP supported</span>
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="file-input file-input-bordered file-input-primary w-full"
                disabled={isUploading}
              />
            </div>

            {isUploading && (
              <div className="mt-4">
                <div className="flex items-center space-x-2">
                  <span className="loading loading-spinner loading-sm"></span>
                  <span>Uploading your image...</span>
                </div>
                <progress className="progress progress-primary w-full mt-2"></progress>
              </div>
            )}
          </div>

          {uploadedImage && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Select Platform Format</h3>
                <select
                  className="select select-bordered w-full"
                  value={selectedFormat}
                  onChange={(e) => setSelectedFormat(e.target.value as SocialFormat)}
                >
                  {Object.keys(socialFormats).map((format) => (
                    <option key={format} value={format}>
                      {format}
                    </option>
                  ))}
                </select>
                <div className="mt-2 text-sm text-base-content/70">
                  Dimensions: {socialFormats[selectedFormat].width} × {socialFormats[selectedFormat].height}px
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Preview</h3>
                <div className="bg-base-200 rounded-lg p-6 relative">
                  {isTransforming && (
                    <div className="absolute inset-0 flex items-center justify-center bg-base-100/80 rounded-lg z-10">
                      <div className="text-center">
                        <span className="loading loading-spinner loading-lg mb-2 block"></span>
                        <span>Transforming image...</span>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-center">
                    <div className="max-w-lg">
                      <CldImage
                        width={socialFormats[selectedFormat].width}
                        height={socialFormats[selectedFormat].height}
                        src={uploadedImage}
                        sizes="100vw"
                        alt="Transformed image"
                        crop="fill"
                        aspectRatio={socialFormats[selectedFormat].aspectRatio}
                        gravity='auto'
                        ref={imageRef}
                        onLoad={() => setIsTransforming(false)}
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={handleDownload}
                  disabled={isTransforming}
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download for {selectedFormat}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}