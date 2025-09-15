import React from 'react'
import { BookOpen, Video, Image, Download, Upload, Share2, Zap } from 'lucide-react'

const DocPage = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-3 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                        <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                    <h1 className="text-4xl font-bold">Documentation</h1>
                </div>
                <p className="text-lg text-base-content/70">
                    Learn how to use CloudVid Pro to transform your media
                </p>
            </div>

            <div className="space-y-8">
                {/* Getting Started */}
                <div className="bg-base-100 rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center space-x-2">
                        <Zap className="h-6 w-6 text-primary" />
                        <span>Getting Started</span>
                    </h2>
                    <div className="prose prose-sm max-w-none">
                        <p className="text-base-content/80 mb-4">
                            CloudVid Pro is a powerful platform for video compression and social media content creation.
                            Here is how to get started:
                        </p>
                        <ol className="list-decimal list-inside space-y-2 text-base-content/80">
                            <li>Sign in to your account</li>
                            <li>Navigate to the video upload section</li>
                            <li>Upload your video files (max 70MB)</li>
                            <li>Let our AI-powered compression work its magic</li>
                            <li>Download or share your optimized videos</li>
                        </ol>
                    </div>
                </div>

                {/* Video Upload */}
                <div className="bg-base-100 rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center space-x-2">
                        <Upload className="h-6 w-6 text-primary" />
                        <span>Video Upload & Compression</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-medium mb-3">Features</h3>
                            <ul className="space-y-2 text-base-content/80">
                                <li className="flex items-center space-x-2">
                                    <Video className="h-4 w-4 text-green-500" />
                                    <span>AI-powered compression</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <Zap className="h-4 w-4 text-yellow-500" />
                                    <span>Lightning-fast processing</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <Download className="h-4 w-4 text-blue-500" />
                                    <span>High-quality output</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium mb-3">Supported Formats</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <div className="bg-base-200 rounded px-3 py-2">.mp4</div>
                                <div className="bg-base-200 rounded px-3 py-2">.mov</div>
                                <div className="bg-base-200 rounded px-3 py-2">.avi</div>
                                <div className="bg-base-200 rounded px-3 py-2">.mkv</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media Creator */}
                <div className="bg-base-100 rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center space-x-2">
                        <Share2 className="h-6 w-6 text-primary" />
                        <span>Social Media Creator</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-medium mb-3">Platform Formats</h3>
                            <ul className="space-y-2 text-base-content/80">
                                <li>Instagram Square (1:1)</li>
                                <li>Instagram Portrait (4:5)</li>
                                <li>Twitter Post (16:9)</li>
                                <li>Twitter Header (3:1)</li>
                                <li>Facebook Cover (205:78)</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium mb-3">How to Use</h3>
                            <ol className="list-decimal list-inside space-y-1 text-base-content/80 text-sm">
                                <li>Upload your image</li>
                                <li>Select target platform</li>
                                <li>Preview the result</li>
                                <li>Download optimized image</li>
                            </ol>
                        </div>
                    </div>
                </div>

                {/* Tips & Best Practices */}
                <div className="bg-base-100 rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Tips & Best Practices</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-medium mb-3 text-green-400">what it Does</h3>
                            <ul className="space-y-2 text-base-content/80 text-sm">
                                <li>• Use high-quality source videos</li>
                                <li>• Add descriptive titles</li>
                                <li>• Choose appropriate formats</li>
                                <li>• Test different compression settings</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium mb-3 text-red-400">Do not</h3>
                            <ul className="space-y-2 text-base-content/80 text-sm">
                                <li>• Do not exceed file size limits</li>
                                <li>• Avoid corrupted files</li>
                                <li>• Do not use copyrighted content</li>
                                <li>• Avoid extremely long videos</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Support */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                    <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
                    <p className="text-base-content/80 mb-4">
                        If you are having trouble or need assistance, here are some resources:
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="btn btn-primary btn-sm">Contact Support</button>
                        <button className="btn btn-outline btn-sm">View FAQ</button>
                        <button className="btn btn-ghost btn-sm">Community Forum</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DocPage