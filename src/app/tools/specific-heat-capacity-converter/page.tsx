'use client'
import { useState } from 'react'

const factors: Record<string, number> = {
    'J/(kg·K)': 1,
    'kJ/(kg·K)': 1000,
    'cal/(g·°C)': 4186.8,
    'kcal/(kg·°C)': 4186.8,
    'BTU/(lb·°F)': 4186.8,
    'J/(g·K)': 1000,
    'kJ/(mol·K)': 1000,
    'kcal/(mol·K)': 4186800,
  }

export default function Page() {
  const [value, setValue] = useState('1')
  const [from, setFrom] = useState('J/(kg·K)')
  const [to, setTo] = useState('kcal/(mol·K)')
  const result = (parseFloat(value) * factors[from]) / factors[to]
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Specific Heat Capacity Converter</h1>
        <p className="text-gray-400 mb-6">Convert specific heat capacity units between J/kg·K, kJ/kg·K, cal/g·°C, BTU/lb·°F and more.</p>
        <div className="space-y-4">
          <input type="number" value={value} onChange={e => setValue(e.target.value)}
            className="w-full bg-gray-800 rounded p-3 text-white" />
          <div className="flex gap-4">
            <select value={from} onChange={e => setFrom(e.target.value)} className="flex-1 bg-gray-800 rounded p-3 text-white">
            <option value="J/(kg·K)">J per kg per K (J/(kg·K))</option>
            <option value="kJ/(kg·K)">kJ per kg per K (kJ/(kg·K))</option>
            <option value="cal/(g·°C)">cal per g per °C (cal/(g·°C))</option>
            <option value="kcal/(kg·°C)">kcal per kg per °C (kcal/(kg·°C))</option>
            <option value="BTU/(lb·°F)">BTU per lb per °F (BTU/(lb·°F))</option>
            <option value="J/(g·K)">J per g per K (J/(g·K))</option>
            <option value="kJ/(mol·K)">kJ per mol per K (kJ/(mol·K))</option>
            <option value="kcal/(mol·K)">kcal per mol per K (kcal/(mol·K))</option>
            </select>
            <select value={to} onChange={e => setTo(e.target.value)} className="flex-1 bg-gray-800 rounded p-3 text-white">
            <option value="J/(kg·K)">J per kg per K (J/(kg·K))</option>
            <option value="kJ/(kg·K)">kJ per kg per K (kJ/(kg·K))</option>
            <option value="cal/(g·°C)">cal per g per °C (cal/(g·°C))</option>
            <option value="kcal/(kg·°C)">kcal per kg per °C (kcal/(kg·°C))</option>
            <option value="BTU/(lb·°F)">BTU per lb per °F (BTU/(lb·°F))</option>
            <option value="J/(g·K)">J per g per K (J/(g·K))</option>
            <option value="kJ/(mol·K)">kJ per mol per K (kJ/(mol·K))</option>
            <option value="kcal/(mol·K)">kcal per mol per K (kcal/(mol·K))</option>
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
