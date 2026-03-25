'''use client'''
import { useState } from 'react'

export default function Page() {
  const [result, setResult] = useState('')
  const [inputs, setInputs] = useState<Record<string,string>>({})

  const set = (k: string, v: string) => setInputs(prev => ({...prev, [k]: v}))

  const calculate = () => {
    try {

      const weight = parseFloat(inputs.weight || '0')
      const activity = inputs.activity || 'sedentary'
      if (!weight) { setResult('Enter weight'); return }
      let base = weight * 35
      if (activity === 'moderate') base *= 1.2
      if (activity === 'active') base *= 1.4
      if (activity === 'very_active') base *= 1.6
      const liters = base / 1000
      const cups = base / 240
      setResult(`Daily Water: ${liters.toFixed(1)} L (${cups.toFixed(0)} cups / ${base.toFixed(0)} ml)`)

    } catch(e) {
      setResult('Calculation error')
    }
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Water Intake Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate your recommended daily water intake based on weight, activity, and climate.</p>
        <div className="space-y-3">

          <input className="w-full bg-gray-800 rounded p-3" placeholder="Weight (kg)" onChange={e=>set('weight',e.target.value)} />
          <select className="w-full bg-gray-800 rounded p-3" onChange={e=>set('activity',e.target.value)}>
            <option value="sedentary">Sedentary</option>
            <option value="moderate">Moderate Activity</option>
            <option value="active">Active</option>
            <option value="very_active">Very Active</option>
          </select>

        </div>
        <button onClick={calculate} className="mt-4 w-full bg-blue-600 hover:bg-blue-700 rounded p-3 font-semibold">Calculate</button>
        {result && <div className="mt-4 p-4 bg-gray-800 rounded text-green-400 font-mono text-sm whitespace-pre-wrap">{result}</div>}
      </div>
    </main>
  )
}
