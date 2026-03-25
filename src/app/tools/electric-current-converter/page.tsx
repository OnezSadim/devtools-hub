'use client'
import { useState } from 'react'

const units = [
    { name: 'Ampere (A)', factor: 1 },
    { name: 'Milliampere (mA)', factor: 0.001 },
    { name: 'Microampere (μA)', factor: 1e-06 },
    { name: 'Kiloampere (kA)', factor: 1000 },
    { name: 'Nanoampere (nA)', factor: 1e-09 }
  ]

export default function Page() {
  const [value, setValue] = useState('')
  const [from, setFrom] = useState(units[0].name)

  const fromFactor = units.find(u => u.name === from)?.factor ?? 1
  const base = parseFloat(value) * fromFactor

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Electric Current Converter</h1>
        <p className="text-gray-400 mb-8">Convert between electric current units including amperes, milliamperes, microamperes, and kiloamperes.</p>
        <div className="flex gap-4 mb-8">
          <input
            type="number"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Enter value"
            className="flex-1 bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white"
          />
          <select
            value={from}
            onChange={e => setFrom(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white"
          >
            {units.map(u => <option key={u.name}>{u.name}</option>)}
          </select>
        </div>
        <div className="grid gap-3">
          {units.map(u => (
            <div key={u.name} className="bg-gray-800 rounded-lg p-4 flex justify-between">
              <span className="text-gray-400">{u.name}</span>
              <span className="font-mono text-green-400">
                {value ? (base / u.factor).toPrecision(6) : '—'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
