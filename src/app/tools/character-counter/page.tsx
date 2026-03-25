'use client'

import { useState } from 'react'

export default function CharacterCounter() {
  const [text, setText] = useState('')
  const limits = [
    { name: 'Twitter/X', limit: 280 },
    { name: 'Instagram caption', limit: 2200 },
    { name: 'Meta description', limit: 160 },
    { name: 'Title tag', limit: 60 },
    { name: 'SMS', limit: 160 },
    { name: 'LinkedIn post', limit: 3000 },
  ]

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Character Counter</h1>
        <p className="text-gray-400 mb-6">Count characters and check against social media limits.</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-blue-400">{text.length}</div>
            <div className="text-gray-400 text-sm mt-1">Characters</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-green-400">{text.replace(/\s/g, '').length}</div>
            <div className="text-gray-400 text-sm mt-1">No Spaces</div>
          </div>
        </div>
        <textarea
          className="w-full h-40 bg-gray-800 border border-gray-700 rounded-lg p-4 text-white resize-none focus:outline-none focus:border-blue-500 mb-6"
          placeholder="Type or paste your text here..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <h2 className="text-lg font-semibold mb-3">Platform Limits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {limits.map(({ name, limit }) => {
            const pct = Math.min((text.length / limit) * 100, 100)
            const over = text.length > limit
            return (
              <div key={name} className="bg-gray-800 rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm">{name}</span>
                  <span className={over ? 'text-red-400 text-sm' : 'text-gray-400 text-sm'}>{text.length}/{limit}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className={`h-2 rounded-full ${over ? 'bg-red-500' : 'bg-blue-500'}`} style={{ width: pct + '%' }} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
