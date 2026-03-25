'use client'
import { useState } from 'react'

const factors: Record<string, number> = {
    'J/K': 1,
    'kJ/K': 1000,
    'cal/°C': 4.1868,
    'kcal/°C': 4186.8,
    'BTU/°F': 1899.1,
    'BTU/°R': 1899.1,
    'ft·lbf/°F': 2.6889,
    'kJ/°C': 1000,
  }

export default function Page() {
  const [value, setValue] = useState('1')
  const [from, setFrom] = useState('J/K')
  const [to, setTo] = useState('kJ/°C')
  const result = (parseFloat(value) * factors[from]) / factors[to]
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Heat Capacity Converter</h1>
        <p className="text-gray-400 mb-6">Convert heat capacity units between J/K, kJ/K, cal/°C, BTU/°F and more.</p>
        <div className="space-y-4">
          <input type="number" value={value} onChange={e => setValue(e.target.value)}
            className="w-full bg-gray-800 rounded p-3 text-white" />
          <div className="flex gap-4">
            <select value={from} onChange={e => setFrom(e.target.value)} className="flex-1 bg-gray-800 rounded p-3 text-white">
            <option value="J/K">J per K (J/K)</option>
            <option value="kJ/K">kJ per K (kJ/K)</option>
            <option value="cal/°C">cal per °C (cal/°C)</option>
            <option value="kcal/°C">kcal per °C (kcal/°C)</option>
            <option value="BTU/°F">BTU per °F (BTU/°F)</option>
            <option value="BTU/°R">BTU per °R (BTU/°R)</option>
            <option value="ft·lbf/°F">ft·lbf per °F (ft·lbf/°F)</option>
            <option value="kJ/°C">kJ per °C (kJ/°C)</option>
            </select>
            <select value={to} onChange={e => setTo(e.target.value)} className="flex-1 bg-gray-800 rounded p-3 text-white">
            <option value="J/K">J per K (J/K)</option>
            <option value="kJ/K">kJ per K (kJ/K)</option>
            <option value="cal/°C">cal per °C (cal/°C)</option>
            <option value="kcal/°C">kcal per °C (kcal/°C)</option>
            <option value="BTU/°F">BTU per °F (BTU/°F)</option>
            <option value="BTU/°R">BTU per °R (BTU/°R)</option>
            <option value="ft·lbf/°F">ft·lbf per °F (ft·lbf/°F)</option>
            <option value="kJ/°C">kJ per °C (kJ/°C)</option>
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
