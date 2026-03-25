'use client'

import { useState } from 'react'

export default function ToolPage() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const process = () => {
    try {
      let output = ''

      const val = parseFloat(input)
      if (isNaN(val)) { output = 'Enter annual salary (e.g. 60000)'; setResult(output); return }
      const hourly = val / 2080
      const daily = val / 260
      const weekly = val / 52
      const monthly = val / 12
      output = 'Annual: $' + val.toLocaleString() + '\nMonthly: $' + monthly.toLocaleString('en', {maximumFractionDigits: 2}) + '\nWeekly: $' + weekly.toLocaleString('en', {maximumFractionDigits: 2}) + '\nDaily: $' + daily.toLocaleString('en', {maximumFractionDigits: 2}) + '\nHourly: $' + hourly.toLocaleString('en', {maximumFractionDigits: 2})

      setResult(output)
    } catch(e) {
      setResult('Error: ' + (e as Error).message)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Salary Calculator</h1>
        <p className="text-gray-400 mb-6">Convert salary between hourly, daily, weekly, monthly, and annual rates</p>
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
