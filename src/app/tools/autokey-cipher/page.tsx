'use client'

import { useState } from 'react'

export default function Autokey_Cipher_Page() {
  const [input, setInput] = useState('')
  const [key, setKey] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState('encode')

  const process = () => {
    if (!input.trim()) return
    setOutput('autokey-cipher ' + mode + 'd: ' + input.split('').map((c, i) => {
      const k = key ? key[i % key.length] : 'A'
      const shift = k.toUpperCase().charCodeAt(0) - 65
      if (c.match(/[a-zA-Z]/)) {
        const base = c === c.toUpperCase() ? 65 : 97
        if (mode === 'encode') return String.fromCharCode((c.charCodeAt(0) - base + shift) % 26 + base)
        return String.fromCharCode((c.charCodeAt(0) - base - shift + 26) % 26 + base)
      }
      return c
    }).join(''))
  }

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Autokey Cipher</h1>
        <p className="text-gray-400 mb-6">Encode and decode text using the autokey cipher with running key</p>
        <div className="flex gap-2 mb-4">
          <button onClick={() => setMode('encode')} className={`px-4 py-2 rounded font-medium ${mode===' + q + 'encode' + q + ' ? ' + q + 'bg-blue-600' + q + ' : ' + q + 'bg-gray-700 hover:bg-gray-600' + q + '}`}>Encode</button>
          <button onClick={() => setMode('decode')} className={`px-4 py-2 rounded font-medium ${mode===' + q + 'decode' + q + ' ? ' + q + 'bg-blue-600' + q + ' : ' + q + 'bg-gray-700 hover:bg-gray-600' + q + '}`}>Decode</button>
        </div>
        <input
          type="text"
          placeholder="Enter key..."
          value={key}
          onChange={e => setKey(e.target.value)}
          className="w-full bg-gray-900 border border-gray-700 rounded p-3 mb-4 font-mono focus:outline-none focus:border-blue-500"
        />
        <textarea
          className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 mb-4 font-mono focus:outline-none focus:border-blue-500"
          placeholder="Enter text..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button onClick={process} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium mb-4">Process</button>
        {output && (
          <div className="bg-gray-900 border border-gray-700 rounded p-4">
            <pre className="font-mono text-sm whitespace-pre-wrap break-all">{output}</pre>
          </div>
        )}
      </div>
    </main>
  )
}
