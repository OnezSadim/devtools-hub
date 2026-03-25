'use client'

import { useState } from 'react'

export default function ToolPage() {
  const [result, setResult] = useState('')

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Date Difference Calculator</h1>
        <p className="text-gray-400 mb-8">Calculate the difference between two dates in days, weeks, months, and years.</p>
        <div className="bg-gray-900 rounded-xl p-6">
          <p className="text-gray-400">Use this tool to calculate the difference between two dates in days, weeks, months, and years.</p>
          {result && <div className="mt-4 p-4 bg-gray-800 rounded-lg text-green-400">{result}</div>}
        </div>
      </div>
    </main>
  )
}
