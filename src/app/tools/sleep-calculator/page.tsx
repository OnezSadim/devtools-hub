'use client'

import { useState } from 'react'

export default function ToolPage() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const process = () => {
    try {
      let output = ''

      const bedtime = input || '22:00'
      const [h, m] = bedtime.split(':').map(Number)
      const bed = new Date()
      bed.setHours(h, m, 0, 0)
      const cycles = [1, 2, 3, 4, 5, 6]
      const wakes = cycles.map(c => {
        const w = new Date(bed.getTime() + c * 90 * 60000 + 14 * 60000)
        return w.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      })
      output = 'Optimal wake times (after ' + bedtime + '):\n' + wakes.map((t, i) => (i+1) + ' cycle' + (i > 0 ? 's' : '') + ' (' + ((i+1)*1.5).toFixed(1) + 'h): ' + t).join('\n')

      setResult(output)
    } catch(e) {
      setResult('Error: ' + (e as Error).message)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Sleep Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate optimal sleep and wake times based on sleep cycles</p>
        <input
          className="w-full bg-gray-800 border border-gray-700 rounded p-3 mb-4 font-mono"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter value..."
        />
        <button
          onClick={process}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold mb-6"
        >Calculate</button>
        {result && (
          <pre className="bg-gray-800 border border-gray-700 rounded p-4 whitespace-pre-wrap font-mono text-sm">{result}</pre>
        )}
      </div>
    </div>
  )
}
