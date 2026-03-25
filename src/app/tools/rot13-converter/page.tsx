'''use client'''
import { useState } from 'react'

export default function ToolPage() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState('encode')

  function process() {
    try {

      const result = input.replace(/[a-zA-Z]/g, c => {
        const base = c <= 'Z' ? 65 : 97
        return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base)
      })
      setOutput(result)

    } catch (e: any) {
      setOutput('Error: ' + e.message)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">ROT13 Converter</h1>
        <p className="text-gray-400 mb-6">Apply ROT13 substitution cipher to text</p>

        <textarea className="w-full h-40 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm mb-3 focus:outline-none focus:border-blue-500"
          placeholder="Enter text..."
          value={input} onChange={e => setInput(e.target.value)} />
        <button onClick={process} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium mb-4">
          Convert
        </button>
        <textarea className="w-full h-40 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm focus:outline-none" readOnly
          placeholder="Result will appear here..."
          value={output} />
        {output && <button onClick={()=>navigator.clipboard.writeText(output)} className="mt-2 text-sm text-blue-400 hover:text-blue-300">Copy result</button>}
      </div>
    </div>
  )
}
