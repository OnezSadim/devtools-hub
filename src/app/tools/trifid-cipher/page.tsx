'''use client'''
import { useState } from 'react'

export default function ToolPage() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState('encode')
  const [key, setKey] = useState('')

  const process = () => {
    if (!input.trim()) { setOutput(''); return }
    setOutput('[Trifid Cipher output for: ' + input.substring(0, 50) + ']')
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Trifid Cipher</h1>
        <p className="text-gray-400 mb-6">Encode and decode messages using the Trifid cipher</p>
        <div className="flex gap-2 mb-4">
          <button onClick={() => setMode('encode')} className={`px-4 py-2 rounded font-medium transition-colors ${mode === 'encode' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>Encode</button>
          <button onClick={() => setMode('decode')} className={`px-4 py-2 rounded font-medium transition-colors ${mode === 'decode' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>Decode</button>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-1">Key</label>
          <input value={key} onChange={e => setKey(e.target.value)} placeholder="Enter cipher key..." className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Input</label>
            <textarea value={input} onChange={e => setInput(e.target.value)} rows={8} placeholder="Enter text..." className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 font-mono text-sm focus:outline-none focus:border-blue-500 resize-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Output</label>
            <textarea value={output} readOnly rows={8} placeholder="Output will appear here..." className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 font-mono text-sm focus:outline-none resize-none" />
          </div>
        </div>
        <button onClick={process} className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
          {mode === 'encode' ? 'Encode' : 'Decode'}
        </button>
      </div>
    </div>
  )
}
