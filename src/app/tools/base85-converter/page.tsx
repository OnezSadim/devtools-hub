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
        let result = '<~'
        for (let i = 0; i < bytes.length; i += 4) {
          const chunk = bytes.slice(i, i + 4)
          let val = 0
          for (let j = 0; j < 4; j++) val = val * 256 + (chunk[j] ?? 0)
          if (chunk.length === 4 && val === 0) { result += 'z'; continue }
          let enc = ''
          for (let j = 4; j >= 0; j--) { enc = String.fromCharCode(33 + val % 85) + enc; val = Math.floor(val / 85) }
          result += enc.slice(0, chunk.length + 1)
        }
        setOutput(result + '~>')
      } else {
        const clean = input.replace(/<~/,'').replace(/~>/,'').replace(/\s/g,'')
        let result = []
        let i = 0
        while (i < clean.length) {
          if (clean[i] === 'z') { result.push(0,0,0,0); i++; continue }
          const chunk = clean.slice(i, i+5).padEnd(5,'u')
          let val = 0
          for (const c of chunk) val = val * 85 + (c.charCodeAt(0) - 33)
          const bytes = [(val>>>24)&255,(val>>>16)&255,(val>>>8)&255,val&255]
          const take = Math.min(4, clean.length - i + 1) - (chunk.length < 5 ? 5 - chunk.length : 0)
          result.push(...bytes.slice(0, take < 0 ? 0 : take))
          i += 5
        }
        setOutput(new TextDecoder().decode(new Uint8Array(result)))
      }

    } catch (e: any) {
      setOutput('Error: ' + e.message)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Base85 Encoder/Decoder</h1>
        <p className="text-gray-400 mb-6">Encode and decode text using Base85 (Ascii85) encoding</p>

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
