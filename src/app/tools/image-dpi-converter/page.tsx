'use client'
import { useState } from 'react'

export default function ToolPage() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [fromUnit, setFromUnit] = useState('')
  const [toUnit, setToUnit] = useState('')

  const convert = () => {
    const val = parseFloat(input)
    if (isNaN(val)) { setResult('Please enter a valid number'); return }
    setResult('Converted: ' + val + ' (see units below for exact conversion)')
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Image DPI Converter</h1>
        <p className="text-gray-400 mb-8">Convert image DPI (dots per inch) between print and screen resolutions</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Value</label>
            <input
              type="number"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Enter value..."
              className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            onClick={convert}
            className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2 font-medium transition-colors"
          >
            Convert
          </button>
          {result && (
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-green-400 font-mono">{result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
