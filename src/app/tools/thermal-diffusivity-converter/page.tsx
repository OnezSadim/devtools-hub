'use client'
import { useState } from 'react'

const factors: Record<string, number> = {
    'm²/s': 1,
    'cm²/s': 0.0001,
    'mm²/s': 1e-06,
    'ft²/s': 0.0929,
    'ft²/h': 2.58e-05,
    'in²/s': 0.000645,
    'm²/h': 0.000278,
    'cm²/h': 2.78e-08,
  }

export default function Page() {
  const [value, setValue] = useState('1')
  const [from, setFrom] = useState('m²/s')
  const [to, setTo] = useState('cm²/h')
  const result = (parseFloat(value) * factors[from]) / factors[to]
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Thermal Diffusivity Converter</h1>
        <p className="text-gray-400 mb-6">Convert thermal diffusivity units between m²/s, cm²/s, mm²/s, ft²/s and more.</p>
        <div className="space-y-4">
          <input type="number" value={value} onChange={e => setValue(e.target.value)}
            className="w-full bg-gray-800 rounded p-3 text-white" />
          <div className="flex gap-4">
            <select value={from} onChange={e => setFrom(e.target.value)} className="flex-1 bg-gray-800 rounded p-3 text-white">
            <option value="m²/s">m² per s (m²/s)</option>
            <option value="cm²/s">cm² per s (cm²/s)</option>
            <option value="mm²/s">mm² per s (mm²/s)</option>
            <option value="ft²/s">ft² per s (ft²/s)</option>
            <option value="ft²/h">ft² per h (ft²/h)</option>
            <option value="in²/s">in² per s (in²/s)</option>
            <option value="m²/h">m² per h (m²/h)</option>
            <option value="cm²/h">cm² per h (cm²/h)</option>
            </select>
            <select value={to} onChange={e => setTo(e.target.value)} className="flex-1 bg-gray-800 rounded p-3 text-white">
            <option value="m²/s">m² per s (m²/s)</option>
            <option value="cm²/s">cm² per s (cm²/s)</option>
            <option value="mm²/s">mm² per s (mm²/s)</option>
            <option value="ft²/s">ft² per s (ft²/s)</option>
            <option value="ft²/h">ft² per h (ft²/h)</option>
            <option value="in²/s">in² per s (in²/s)</option>
            <option value="m²/h">m² per h (m²/h)</option>
            <option value="cm²/h">cm² per h (cm²/h)</option>
            </select>
          </div>
          <div className="bg-gray-800 rounded p-4 text-2xl font-mono">
            {isNaN(result) ? 'Enter a value' : result.toPrecision(6) + ' ' + to}
          </div>
        </div>
      </div>
    </main>
  )
}
