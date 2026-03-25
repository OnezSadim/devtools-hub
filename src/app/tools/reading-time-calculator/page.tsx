'use client'

import { useState } from 'react'

export default function ReadingTimeCalculator() {
  const [text, setText] = useState('')
  const [wpm, setWpm] = useState(200)

  const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length
  const seconds = Math.ceil((words / wpm) * 60)
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60

  const formatTime = () => {
    if (words === 0) return '0 seconds'
    if (mins === 0) return secs + ' second' + (secs !== 1 ? 's' : '')
    if (secs === 0) return mins + ' minute' + (mins !== 1 ? 's' : '')
    return mins + ' min ' + secs + ' sec'
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Reading Time Calculator</h1>
        <p className="text-gray-400 mb-6">Estimate how long it takes to read your content.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-blue-400">{formatTime()}</div>
            <div className="text-gray-400 text-sm mt-1">Reading Time</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-green-400">{words}</div>
            <div className="text-gray-400 text-sm mt-1">Words</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-purple-400">{wpm}</div>
            <div className="text-gray-400 text-sm mt-1">WPM</div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-2">Reading Speed: {wpm} words per minute</label>
          <input type="range" min="100" max="600" value={wpm} onChange={e => setWpm(Number(e.target.value))}
            className="w-full accent-blue-500" />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Slow (100)</span><span>Average (200)</span><span>Fast (400)</span><span>Speed (600)</span>
          </div>
        </div>
        <textarea
          className="w-full h-64 bg-gray-800 border border-gray-700 rounded-lg p-4 text-white resize-none focus:outline-none focus:border-blue-500"
          placeholder="Paste your article or text here..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>
    </main>
  )
}
