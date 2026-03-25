'use client'

import { useState } from 'react'

const units = [
      { name: 'Coulomb', symbol: 'C', toBase: 1 },
      { name: 'Millicoulomb', symbol: 'mC', toBase: 0.001 },
      { name: 'Microcoulomb', symbol: 'μC', toBase: 1e-06 },
      { name: 'Nanocoulomb', symbol: 'nC', toBase: 1e-09 },
      { name: 'Picocoulomb', symbol: 'pC', toBase: 1e-12 },
      { name: 'Faraday', symbol: 'F', toBase: 96485.3321 },
      { name: 'Ampere-hour', symbol: 'Ah', toBase: 3600 },
      { name: 'Milliampere-hour', symbol: 'mAh', toBase: 3.6 }
    ]

export default function Page() {
  const [value, setValue] = useState('')
  const [from, setFrom] = useState(units[0].symbol)
  const [to, setTo] = useState(units[1].symbol)

  const convert = () => {
    const num = parseFloat(value)
    if (isNaN(num)) return ''
    const fromUnit = units.find(u => u.symbol === from)
    const toUnit = units.find(u => u.symbol === to)
    if (!fromUnit || !toUnit) return ''
    const base = num * fromUnit.toBase
    const result = base / toUnit.toBase
    return result.toPrecision(6)
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Electric Charge Converter</h1>
        <p className="text-gray-400 mb-8">Convert between electric charge units: Coulombs, Millicoulombs, Microcoulombs, Nanocoulombs, Picocoulombs, Faradays, Ampere-hours, Milliampere-hours.</p>
        <div className="space-y-4 bg-gray-900 p-6 rounded-xl">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Value</label>
            <input
              type="number"
              value={value}
              onChange={e => setValue(e.target.value)}
              className="w-full bg-gray-800 rounded px-4 py-2 text-white"
              placeholder="Enter value"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)} className="w-full bg-gray-800 rounded px-4 py-2 text-white">
                {units.map(u => <option key={u.symbol} value={u.symbol}>{u.name} ({u.symbol})</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)} className="w-full bg-gray-800 rounded px-4 py-2 text-white">
                {units.map(u => <option key={u.symbol} value={u.symbol}>{u.name} ({u.symbol})</option>)}
              </select>
            </div>
          </div>
          {value && (
            <div className="bg-gray-800 rounded p-4 text-center">
              <span className="text-2xl font-bold text-blue-400">{convert()}</span>
              <span className="text-gray-400 ml-2">{to}</span>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
