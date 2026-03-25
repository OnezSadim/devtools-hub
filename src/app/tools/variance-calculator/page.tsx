'''use client'''
import { useState } from 'react'

export default function VarianceCalculatorTool() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const calculate = () => {
    try {
      // calculate Variance Calculator
      setResult('Done')
    } catch(e) {
      setResult('Error: ' + String(e))
    }
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-blue-400">Variance Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate variance and standard deviation from a dataset</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <textarea
            className="w-full bg-gray-800 text-white rounded-lg p-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
            placeholder="Enter values..."
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button
            onClick={calculate}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
          >Calculate</button>
          {result && (
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-green-400 font-mono text-sm whitespace-pre-wrap">{result}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
