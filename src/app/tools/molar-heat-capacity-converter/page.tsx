'use client'
import { useState } from 'react'

const units = ['Joule per Mol Kelvin (J/mol·K)', 'Kilojoule per Mol Kelvin (kJ/mol·K)', 'Calorie per Mol Kelvin (cal/mol·K)', 'Kilocalorie per Mol Kelvin (kcal/mol·K)', 'BTU per Mol Fahrenheit (BTU/mol·°F)']
const toBase = [1, 1000, 4.184, 4184, 1899.1]

export default function Page() {
  const [val, setVal] = useState('1')
  const [from, setFrom] = useState(0)
  const [to, setTo] = useState(1)
  const convert = () => {
    const n = parseFloat(val)
    if (isNaN(n)) return 'Invalid input'
    return (n * toBase[from] / toBase[to]).toPrecision(6)
  }
  return (
    <main className='min-h-screen bg-gray-950 text-white p-8'>
      <div className='max-w-xl mx-auto'>
        <h1 className='text-3xl font-bold mb-2'>Molar Heat Capacity Converter</h1>
        <p className='text-gray-400 mb-6'>Convert molar heat capacity units used in thermodynamics.</p>
        <div className='bg-gray-900 rounded-xl p-6 space-y-4'>
          <div>
            <label className='block text-sm text-gray-400 mb-1'>Value</label>
            <input type='number' value={val} onChange={e => setVal(e.target.value)}
              className='w-full bg-gray-800 rounded-lg px-4 py-2 text-white border border-gray-700 focus:border-blue-500 outline-none' />
          </div>
          <div>
            <label className='block text-sm text-gray-400 mb-1'>From</label>
            <select value={from} onChange={e => setFrom(Number(e.target.value))}
              className='w-full bg-gray-800 rounded-lg px-4 py-2 text-white border border-gray-700 focus:border-blue-500 outline-none'>
              <option value="0">Joule per Mol Kelvin (J/mol·K)</option>
              <option value="1">Kilojoule per Mol Kelvin (kJ/mol·K)</option>
              <option value="2">Calorie per Mol Kelvin (cal/mol·K)</option>
              <option value="3">Kilocalorie per Mol Kelvin (kcal/mol·K)</option>
              <option value="4">BTU per Mol Fahrenheit (BTU/mol·°F)</option>
            </select>
          </div>
          <div>
            <label className='block text-sm text-gray-400 mb-1'>To</label>
            <select value={to} onChange={e => setTo(Number(e.target.value))}
              className='w-full bg-gray-800 rounded-lg px-4 py-2 text-white border border-gray-700 focus:border-blue-500 outline-none'>
              <option value="0">Joule per Mol Kelvin (J/mol·K)</option>
              <option value="1">Kilojoule per Mol Kelvin (kJ/mol·K)</option>
              <option value="2">Calorie per Mol Kelvin (cal/mol·K)</option>
              <option value="3">Kilocalorie per Mol Kelvin (kcal/mol·K)</option>
              <option value="4">BTU per Mol Fahrenheit (BTU/mol·°F)</option>
            </select>
          </div>
          <div className='bg-gray-800 rounded-lg px-4 py-3'>
            <span className='text-sm text-gray-400'>Result: </span>
            <span className='text-xl font-mono text-green-400'>{convert()}</span>
          </div>
        </div>
      </div>
    </main>
  )
}
