'use client'

import { useState } from 'react'

export default function ToolPage() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const process = () => {
    try {
      let output = ''

      const parts = input.split(',').map(s => parseFloat(s.trim()))
      const [age, retireAge, savings, monthly, rate] = parts
      if (parts.some(isNaN)) { output = 'Enter: currentAge, retirementAge, currentSavings, monthlyContribution, annualReturnRate%\nExample: 30, 65, 50000, 500, 7'; setResult(output); return }
      const years = retireAge - age
      const r = rate / 100 / 12
      const n = years * 12
      const fv = savings * Math.pow(1 + r, n) + monthly * (Math.pow(1 + r, n) - 1) / r
      const monthly4pct = fv * 0.04 / 12
      output = 'Years to retirement: ' + years + '\nProjected savings: $' + fv.toLocaleString('en', {maximumFractionDigits: 0}) + '\nMonthly income (4% rule): $' + monthly4pct.toLocaleString('en', {maximumFractionDigits: 0})

      setResult(output)
    } catch(e) {
      setResult('Error: ' + (e as Error).message)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Retirement Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate retirement savings and projected income</p>
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
