'use client'

import { useState } from 'react'

function similarity(a: string, b: string): number {
  if (!a && !b) return 100
  if (!a || !b) return 0
  const wordsA = new Set(a.toLowerCase().split(/\s+/))
  const wordsB = new Set(b.toLowerCase().split(/\s+/))
  const intersection = new Set([...wordsA].filter(w => wordsB.has(w)))
  const union = new Set([...wordsA, ...wordsB])
  return Math.round((intersection.size / union.size) * 100)
}

export default function TextSimilarityChecker() {
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const pct = similarity(text1.trim(), text2.trim())
  const color = pct >= 80 ? 'text-green-400' : pct >= 50 ? 'text-yellow-400' : 'text-red-400'

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Text Similarity Checker</h1>
        <p className="text-gray-400 mb-6">Compare two texts and measure their similarity (Jaccard index).</p>
        {(text1 || text2) && (
          <div className="bg-gray-800 rounded-xl p-6 mb-6 text-center">
            <div className={`text-6xl font-bold ${color}`}>{pct}%</div>
            <div className="text-gray-400 mt-2">Similarity Score</div>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Text 1</label>
            <textarea className="w-full h-48 bg-gray-800 border border-gray-700 rounded-lg p-4 text-white resize-none focus:outline-none focus:border-blue-500" placeholder="Enter first text..." value={text1} onChange={e => setText1(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Text 2</label>
            <textarea className="w-full h-48 bg-gray-800 border border-gray-700 rounded-lg p-4 text-white resize-none focus:outline-none focus:border-blue-500" placeholder="Enter second text..." value={text2} onChange={e => setText2(e.target.value)} />
          </div>
        </div>
      </div>
    </main>
  )
}
