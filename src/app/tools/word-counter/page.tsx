'use client'

import { useState } from 'react'

export default function WordCounter() {
  const [text, setText] = useState('')

  const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length
  const chars = text.length
  const charsNoSpace = text.replace(/\s/g, '').length
  const sentences = text.trim() === '' ? 0 : text.split(/[.!?]+/).filter(s => s.trim()).length
  const paragraphs = text.trim() === '' ? 0 : text.split(/

+/).filter(p => p.trim()).length
  const lines = text === '' ? 0 : text.split('
').length

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Word Counter</h1>
        <p className="text-gray-400 mb-6">Count words, characters, sentences, and more in your text.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {[['Words', words], ['Characters', chars], ['Chars (no spaces)', charsNoSpace], ['Sentences', sentences], ['Paragraphs', paragraphs], ['Lines', lines]].map(([label, val]) => (
            <div key={label} className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-400">{val}</div>
              <div className="text-gray-400 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
        <textarea
          className="w-full h-64 bg-gray-800 border border-gray-700 rounded-lg p-4 text-white resize-none focus:outline-none focus:border-blue-500"
          placeholder="Type or paste your text here..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        {text && (
          <button onClick={() => setText('')} className="mt-3 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm">Clear</button>
        )}
      </div>
    </main>
  )
}
