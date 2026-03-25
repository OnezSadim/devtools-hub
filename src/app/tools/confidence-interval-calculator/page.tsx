'use client'

import { useState } from 'react'

export default function ToolPage() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const calculate = () => {
    try {
      const lines = input.trim().split('\n').filter(l => l.trim())
      if (lines.length === 0) { setResult('Please enter data'); return }
      const nums = lines.map(l => parseFloat(l.trim())).filter(n => !isNaN(n))
      if (nums.length < 2) { setResult('Need at least 2 numbers'); return }
      const n = nums.length
      const mean = nums.reduce((a, b) => a + b, 0) / n
      const variance = nums.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (n - 1)
      const std = Math.sqrt(variance)
      setResult(`Count: ${n}\nMean: ${mean.toFixed(4)}\nStd Dev: ${std.toFixed(4)}\nVariance: ${variance.toFixed(4)}`)
    } catch (e) {
      setResult('Error: ' + String(e))
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Confidence Interval Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate confidence intervals for population means and proportions.</p>
        <textarea
          className="w-full h-40 bg-gray-900 border border-gray-700 rounded-lg p-3 font-mono text-sm mb-4 focus:outline-none focus:border-blue-500"
          placeholder="Enter one number per line..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button
          onClick={calculate}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg mb-4"
        >
          Calculate
        </button>
        {result && (
          <pre className="bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono text-sm whitespace-pre-wrap">{result}</pre>
        )}
      </div>
    </div>
  )
}
