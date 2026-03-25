'use client'
import { useState } from 'react'

const factors: Record<string, number> = {
    'Wh': 1,
    'kWh': 1000,
    'MWh': 1000000,
    'GWh': 1000000000,
    'J': 0.000277778,
    'kJ': 0.277778,
    'MJ': 277.778,
    'cal': 0.00116279,
    'kcal': 1.16279,
    'BTU': 0.293071,
  }

export default function Page() {
  const [value, setValue] = useState('1')
  const [from, setFrom] = useState('Wh')
  const [to, setTo] = useState('BTU')
  const result = (parseFloat(value) * factors[from]) / factors[to]
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Electric Energy Converter</h1>
        <p className="text-gray-400 mb-6">Convert electric energy units between kilowatt-hours, megawatt-hours, watt-hours, joules, and more.</p>
        <div className="space-y-4">
          <input type="number" value={value} onChange={e => setValue(e.target.value)}
            className="w-full bg-gray-800 rounded p-3 text-white" />
          <div className="flex gap-4">
            <select value={from} onChange={e => setFrom(e.target.value)} className="flex-1 bg-gray-800 rounded p-3 text-white">
            <option value="Wh">Watt-hour (Wh)</option>
            <option value="kWh">Kilowatt-hour (kWh)</option>
            <option value="MWh">Megawatt-hour (MWh)</option>
            <option value="GWh">Gigawatt-hour (GWh)</option>
            <option value="J">Joule (J)</option>
            <option value="kJ">Kilojoule (kJ)</option>
            <option value="MJ">Megajoule (MJ)</option>
            <option value="cal">Calorie (cal)</option>
            <option value="kcal">Kilocalorie (kcal)</option>
            <option value="BTU">BTU (BTU)</option>
            </select>
            <select value={to} onChange={e => setTo(e.target.value)} className="flex-1 bg-gray-800 rounded p-3 text-white">
            <option value="Wh">Watt-hour (Wh)</option>
            <option value="kWh">Kilowatt-hour (kWh)</option>
            <option value="MWh">Megawatt-hour (MWh)</option>
            <option value="GWh">Gigawatt-hour (GWh)</option>
            <option value="J">Joule (J)</option>
            <option value="kJ">Kilojoule (kJ)</option>
            <option value="MJ">Megajoule (MJ)</option>
            <option value="cal">Calorie (cal)</option>
            <option value="kcal">Kilocalorie (kcal)</option>
            <option value="BTU">BTU (BTU)</option>
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
