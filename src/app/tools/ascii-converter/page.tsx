'''use client'''
import { useState } from 'react'

export default function Page() {
  const [text, setText] = useState('Hello')
  const [decimal, setDecimal] = useState('72 101 108 108 111')
  const [hex, setHex] = useState('48 65 6C 6C 6F')

  const convert = () => {
    try {

      const chars = text.split('')
      setDecimal(chars.map(c => c.charCodeAt(0)).join(' '))
      setHex(chars.map(c => c.charCodeAt(0).toString(16).toUpperCase().padStart(2,'0')).join(' '))

    } catch (e) {}
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">ASCII Converter</h1>
        <p className="text-gray-400 mb-8">Convert text to ASCII codes and back</p>
        <div className="space-y-4">

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Text</label>
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-blue-500"
              rows={2}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">ASCII Decimal</label>
            <textarea
              value={decimal}
              onChange={e => setDecimal(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-blue-500"
              rows={2}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">ASCII Hex</label>
            <textarea
              value={hex}
              onChange={e => setHex(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-blue-500"
              rows={2}
            />
          </div>

          <button
            onClick={convert}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  )
}
