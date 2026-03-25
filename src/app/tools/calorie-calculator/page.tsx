'''use client'''
import { useState } from 'react'

export default function ToolPage() {
  const [result, setResult] = useState('')

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Calorie Calculator</h1>
        <p className="text-gray-400 mb-8">Calculate daily calorie needs based on activity level</p>
        <div className="bg-gray-900 rounded-xl p-6">
          <p className="text-gray-300">Use this tool to calculate daily calorie needs based on activity level.</p>
          {result && <div className="mt-4 p-4 bg-gray-800 rounded-lg text-green-400">{result}</div>}
        </div>
      </div>
    </main>
  )
}
