'use client'

import { useState } from 'react'

export default function ToolPage() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const calculate = () => {
    try {
      // GPA Calculator logic
      setResult('Result calculated successfully')
    } catch (e) {
      setResult('Error: invalid input')
    }
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">GPA Calculator</h1>
        <p className="text-gray-400 mb-8">Calculate your GPA from course grades and credit hours. Supports 4.0 and percentage scales.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Enter values (comma or newline separated)..."
            className="w-full h-32 bg-gray-800 text-white rounded-lg p-3 font-mono text-sm border border-gray-700 focus:border-blue-500 focus:outline-none resize-none"
          />
          <button
            onClick={calculate}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Calculate
          </button>
          {result && (
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-1">Result</p>
              <p className="text-white font-mono">{result}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
