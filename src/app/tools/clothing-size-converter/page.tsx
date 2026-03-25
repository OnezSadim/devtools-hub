'use client'

import { useState } from 'react'

export default function ToolPage() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Clothing Size Converter</h1>
        <p className="text-gray-400 mb-8">Convert clothing sizes between US, UK, EU, and international sizing standards.</p>
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Enter value to convert..."
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
          {result && (
            <div className="mt-4 p-4 bg-gray-800 rounded-lg">
              <p className="text-green-400 font-mono">{result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
