import React from 'react'
import Link from 'next/link'
import { ArrowRight, Video, Zap, Shield, Upload, Download, Share2 } from 'lucide-react'

function Entry() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Video className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              CloudVid Pro
            </span>
          </div>
          <Link
            href="/sign-in"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
            Transform Your Videos
            <span className="block text-blue-400">Effortlessly</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Upload, compress, and share your videos with AI-powered optimization.
            <br className="hidden md:block" />
            Experience lightning-fast processing and seamless social sharing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/app/home"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Start Creating</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </Link>

            <Link
              href="/app/video-upload"
              className="border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-800"
            >
              Upload Video
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300">
              <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Upload className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Upload</h3>
              <p className="text-gray-400">
                Drag and drop your videos for instant upload with intelligent compression algorithms.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300">
              <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-purple-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-gray-400">
                Process videos up to 10x faster with our cloud-powered compression technology.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300">
              <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Share2 className="text-green-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Sharing</h3>
              <p className="text-gray-400">
                Share optimized videos directly to social platforms with custom formats.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-800">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">99%</div>
              <div className="text-gray-400">Compression Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">10x</div>
              <div className="text-gray-400">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-400">Cloud Access</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">∞</div>
              <div className="text-gray-400">Video Storage</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Video className="h-6 w-6 text-blue-500" />
              <span className="text-lg font-semibold">CloudVid Pro</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 CloudVid Pro. Transforming videos with AI.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Entry