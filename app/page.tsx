'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <span className="text-white text-3xl">🔥</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">DevPlatform</h1>
        <p className="text-gray-600 mb-6">Build like Firebase, deploy like Vercel</p>
        <button 
          onClick={() => router.push('/dashboard')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Enter Dashboard
        </button>
        <div className="mt-4 text-sm text-gray-500">
          <p>✨ No authentication required for demo</p>
        </div>
      </div>
    </div>
  )
}
