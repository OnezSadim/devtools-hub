'use client'
import { useState } from 'react'

export default function Page() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Octal Converter</h1>
        <p className="text-gray-400 mb-6">Convert between octal, decimal, binary, and hexadecimal</p>
        <textarea
          className="w-full h-32 bg-gray-900 border border-gray-700 rounded-lg p-3 text-sm font-mono resize-none"
          placeholder="Enter input..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          className="mt-3 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 font-medium"
          onClick={() => setOutput(input)}
        >Convert</button>
        <div className="mt-4 bg-gray-900 border border-gray-700 rounded-lg p-3 text-sm font-mono min-h-16">
          {output || <span className="text-gray-500">Output will appear here...</span>}
        </div>
      </div>
    </div>
  )
}
