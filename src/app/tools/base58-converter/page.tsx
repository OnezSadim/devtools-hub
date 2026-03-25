'''use client'''
import { useState } from 'react'

export default function ToolPage() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState('encode')

  function process() {
    try {

      const alphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
      if (mode === 'encode') {
        const bytes = Array.from(new TextEncoder().encode(input))
        let num = BigInt('0x' + bytes.map(b => b.toString(16).padStart(2,'0')).join(''))
        let result = ''
        while (num > 0n) { result = alphabet[Number(num % 58n)] + result; num /= 58n }
        const leading = bytes.findIndex(b => b !== 0)
        setOutput('1'.repeat(leading === -1 ? bytes.length : leading) + result)
      } else {
        let num = 0n
        for (const ch of input) { const idx = alphabet.indexOf(ch); if (idx < 0) throw new Error('Invalid char'); num = num * 58n + BigInt(idx) }
        let hex = num.toString(16)
        if (hex.length % 2) hex = '0' + hex
        const bytes = hex.match(/.{2}/g)!.map(h => parseInt(h, 16))
        const leading = input.match(/^1*/)?.[0].length ?? 0
        const arr = new Uint8Array([...new Array(leading).fill(0), ...bytes])
        setOutput(new TextDecoder().decode(arr))
      }

    } catch (e: any) {
      setOutput('Error: ' + e.message)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Base58 Encoder/Decoder</h1>
        <p className="text-gray-400 mb-6">Encode and decode text using Base58 encoding</p>

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
