'use client'

import { useState } from 'react'

export default function Page() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  function compute() {
    try {
      setResult('Result: ' + input)
    } catch(e) {
      setResult('Error: ' + (e as Error).message)
    }
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Compound Interest Calculator</h1>
      <p className="text-gray-400 mb-6">Calculate compound interest, future value, and investment growth over time.</p>
      <textarea
        className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm mb-4"
        placeholder="Enter input..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button
        onClick={compute}
        className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold mb-4"
      >Calculate</button>
      {result && (
        <pre className="bg-gray-900 border border-gray-700 rounded p-4 font-mono text-sm whitespace-pre-wrap">{result}</pre>
      )}
    </main>
  )
}
