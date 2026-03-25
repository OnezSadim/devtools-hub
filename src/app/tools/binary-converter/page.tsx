'''use client'''
import { useState } from 'react'

export default function Page() {
  const [decimal, setDecimal] = useState('255')
  const [binary, setBinary] = useState('11111111')
  const [hex, setHex] = useState('FF')
  const [octal, setOctal] = useState('377')

  const convert = () => {
    try {

      const dec = parseInt(decimal, 10)
      if (isNaN(dec)) return
      setBinary(dec.toString(2).toUpperCase())
      setHex(dec.toString(16).toUpperCase())
      setOctal(dec.toString(8))

    } catch (e) {}
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Binary Converter</h1>
        <p className="text-gray-400 mb-8">Convert between binary, decimal, hexadecimal, and octal number systems</p>
        <div className="space-y-4">

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Decimal</label>
            <textarea
              value={decimal}
              onChange={e => setDecimal(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-blue-500"
              rows={2}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Binary</label>
            <textarea
              value={binary}
              onChange={e => setBinary(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-blue-500"
              rows={2}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Hexadecimal</label>
            <textarea
              value={hex}
              onChange={e => setHex(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-blue-500"
              rows={2}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Octal</label>
            <textarea
              value={octal}
              onChange={e => setOctal(e.target.value)}
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
