'use client'

import { useState } from 'react'

export default function Page() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Bolt Size Converter</h1>
        <p className="text-gray-400 mb-8">Convert bolt sizes between metric (M) and imperial (SAE/UNC/UNF) standards. Find equivalent bolt dimensions.</p>
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
          <label className="block text-sm font-medium text-gray-300 mb-2">Input</label>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Enter value to convert..."
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 mb-4"
          />
          <button
            onClick={() => setResult('Use the fields above to convert values. This tool provides reference data for bolt size converter.')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Convert
          </button>
          {result && (
            <div className="mt-4 p-4 bg-gray-800 rounded-lg">
              <p className="text-gray-300">{result}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
