'use client'
import { useState } from 'react'

const factors: Record<string, number> = {
    'W·s½/(m²·K)': 1,
    'J/(m²·K·s½)': 1,
    'W·s½/(cm²·K)': 10000,
    'cal·s½/(cm²·K)': 41868,
    'BTU·s½/(ft²·°F)': 20442,
    'BTU·h½/(ft²·°F)': 3328,
    'kJ/(m²·K·s½)': 1000,
    'W·min½/(m²·K)': 7.746,
  }

export default function Page() {
  const [value, setValue] = useState('1')
  const [from, setFrom] = useState('W·s½/(m²·K)')
  const [to, setTo] = useState('W·min½/(m²·K)')
  const result = (parseFloat(value) * factors[from]) / factors[to]
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Thermal Effusivity Converter</h1>
        <p className="text-gray-400 mb-6">Convert thermal effusivity units between W·s½/(m²·K), J/(m²·K·s½) and more.</p>
        <div className="space-y-4">
          <input type="number" value={value} onChange={e => setValue(e.target.value)}
            className="w-full bg-gray-800 rounded p-3 text-white" />
          <div className="flex gap-4">
            <select value={from} onChange={e => setFrom(e.target.value)} className="flex-1 bg-gray-800 rounded p-3 text-white">
            <option value="W·s½/(m²·K)">W·s½ per m²·K (W·s½/(m²·K))</option>
            <option value="J/(m²·K·s½)">J per m²·K·s½ (J/(m²·K·s½))</option>
            <option value="W·s½/(cm²·K)">W·s½ per cm²·K (W·s½/(cm²·K))</option>
            <option value="cal·s½/(cm²·K)">cal·s½ per cm²·K (cal·s½/(cm²·K))</option>
            <option value="BTU·s½/(ft²·°F)">BTU·s½ per ft²·°F (BTU·s½/(ft²·°F))</option>
            <option value="BTU·h½/(ft²·°F)">BTU·h½ per ft²·°F (BTU·h½/(ft²·°F))</option>
            <option value="kJ/(m²·K·s½)">kJ per m²·K·s½ (kJ/(m²·K·s½))</option>
            <option value="W·min½/(m²·K)">W·min½ per m²·K (W·min½/(m²·K))</option>
            </select>
            <select value={to} onChange={e => setTo(e.target.value)} className="flex-1 bg-gray-800 rounded p-3 text-white">
            <option value="W·s½/(m²·K)">W·s½ per m²·K (W·s½/(m²·K))</option>
            <option value="J/(m²·K·s½)">J per m²·K·s½ (J/(m²·K·s½))</option>
            <option value="W·s½/(cm²·K)">W·s½ per cm²·K (W·s½/(cm²·K))</option>
            <option value="cal·s½/(cm²·K)">cal·s½ per cm²·K (cal·s½/(cm²·K))</option>
            <option value="BTU·s½/(ft²·°F)">BTU·s½ per ft²·°F (BTU·s½/(ft²·°F))</option>
            <option value="BTU·h½/(ft²·°F)">BTU·h½ per ft²·°F (BTU·h½/(ft²·°F))</option>
            <option value="kJ/(m²·K·s½)">kJ per m²·K·s½ (kJ/(m²·K·s½))</option>
            <option value="W·min½/(m²·K)">W·min½ per m²·K (W·min½/(m²·K))</option>
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
