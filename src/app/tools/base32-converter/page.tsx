'''use client'''
import { useState } from 'react'

export default function ToolPage() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState('encode')

  function process() {
    try {

      if (mode === 'encode') {
        const bytes = new TextEncoder().encode(input)
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'
        let bits = 0, value = 0, result = ''
        for (const byte of bytes) {
          value = (value << 8) | byte
          bits += 8
          while (bits >= 5) {
            result += alphabet[(value >>> (bits - 5)) & 31]
            bits -= 5
          }
        }
        if (bits > 0) result += alphabet[(value << (5 - bits)) & 31]
        const pad = (8 - result.length % 8) % 8
        setOutput(result + '='.repeat(pad))
      } else {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'
        const clean = input.toUpperCase().replace(/=/g, '')
        let bits = 0, value = 0
        const bytes = []
        for (const ch of clean) {
          const idx = alphabet.indexOf(ch)
          if (idx < 0) continue
          value = (value << 5) | idx
          bits += 5
          if (bits >= 8) { bytes.push((value >>> (bits - 8)) & 255); bits -= 8 }
        }
        setOutput(new TextDecoder().decode(new Uint8Array(bytes)))
      }

    } catch (e: any) {
      setOutput('Error: ' + e.message)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Base32 Encoder/Decoder</h1>
        <p className="text-gray-400 mb-6">Encode and decode text using Base32 encoding</p>

        <div className="flex gap-4 mb-4">
          {['encode','decode'].map(m => (
            <button key={m} onClick={() => setMode(m)}
              className={`px-4 py-2 rounded font-medium ${mode===m?'bg-blue-600':'bg-gray-800 hover:bg-gray-700'}`}>
              {m.charAt(0).toUpperCase()+m.slice(1)}
            </button>
          ))}
        </div>

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
