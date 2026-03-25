'use client'
import { useState } from 'react'

export default function Page() {
  const units = [
    { label: 'steradian (sr)', factor: 1 },
    { label: 'square degree', factor: 0.000304617 },
    { label: 'square arcminute', factor: 8.4616e-08 },
    { label: 'square arcsecond', factor: 2.35044e-11 },
    { label: 'hemisphere', factor: 6.28318 },
    { label: 'sphere', factor: 12.5664 },
    { label: 'spat', factor: 12.5664 },
  ]
  const [from, setFrom] = useState(units[0].label)
  const [to, setTo] = useState(units[1].label)
  const [input, setInput] = useState('')
  const convert = () => {
    const n = parseFloat(input)
    if (isNaN(n)) return ''
    const fromU = units.find(u => u.label === from)
    const toU = units.find(u => u.label === to)
    if (!fromU || !toU) return ''
    return ((n * fromU.factor) / toU.factor).toPrecision(6)
  }
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Solid Angle Converter</h1>
        <p className="text-gray-400 mb-6">Convert between solid angle units: steradian, square degree, square arcminute</p>
        <div className="space-y-4">
          <input type="number" value={input} onChange={e => setInput(e.target.value)}
            placeholder="Enter value" className="w-full bg-gray-800 rounded p-3 text-white" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 text-sm">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)}
                className="w-full bg-gray-800 rounded p-3 text-white mt-1">
                {units.map(u => <option key={u.label}>{u.label}</option>)}
              </select>
            </div>
            <div>
              <label className="text-gray-400 text-sm">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full bg-gray-800 rounded p-3 text-white mt-1">
                {units.map(u => <option key={u.label}>{u.label}</option>)}
              </select>
            </div>
          </div>
          {input && (
            <div className="bg-gray-800 rounded p-4 text-center">
              <span className="text-2xl font-mono text-green-400">{convert()}</span>
              <span className="text-gray-400 ml-2">{to}</span>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
