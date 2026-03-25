'''use client'''
import { useState } from 'react'

export default function Page() {
  const [number, setNumber] = useState('255')
  const [fromBase, setFrombase] = useState('10')
  const [toBase, setTobase] = useState('16')

  const convert = () => {
    try {

      const fromB = parseInt(fromBase, 10)
      const toB = parseInt(toBase, 10)
      if (fromB < 2 || fromB > 36 || toB < 2 || toB > 36) return
      const decimal = parseInt(number, fromB)
      if (isNaN(decimal)) return
      setToBase(toB.toString())
      // show result inline
      alert('Result: ' + decimal.toString(toB).toUpperCase())

    } catch (e) {}
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Number Base Converter</h1>
        <p className="text-gray-400 mb-8">Convert numbers between any base from 2 to 36</p>
        <div className="space-y-4">

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Number</label>
            <textarea
              value={number}
              onChange={e => setNumber(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-blue-500"
              rows={2}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">From Base</label>
            <textarea
              value={fromBase}
              onChange={e => setFrombase(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-blue-500"
              rows={2}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">To Base</label>
            <textarea
              value={toBase}
              onChange={e => setTobase(e.target.value)}
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
