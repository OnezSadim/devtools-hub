'''use client'''
import { useState } from 'react'

export default function Page() {
  const [result, setResult] = useState('')
  const [inputs, setInputs] = useState<Record<string,string>>({})

  const set = (k: string, v: string) => setInputs(prev => ({...prev, [k]: v}))

  const calculate = () => {
    try {

      const weight = parseFloat(inputs.weight || '0')
      const height = parseFloat(inputs.height || '0')
      const age = parseFloat(inputs.age || '0')
      const gender = inputs.gender || 'male'
      const activity = parseFloat(inputs.activity || '1.2')
      if (!weight || !height || !age) { setResult('Enter all fields'); return }
      let bmr: number
      if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161
      }
      const tdee = bmr * activity
      setResult(`BMR: ${bmr.toFixed(0)} kcal/day | TDEE: ${tdee.toFixed(0)} kcal/day`)

    } catch(e) {
      setResult('Calculation error')
    }
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">TDEE Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate your Total Daily Energy Expenditure based on activity level and body stats.</p>
        <div className="space-y-3">

          <input className="w-full bg-gray-800 rounded p-3" placeholder="Weight (kg)" onChange={e=>set('weight',e.target.value)} />
          <input className="w-full bg-gray-800 rounded p-3" placeholder="Height (cm)" onChange={e=>set('height',e.target.value)} />
          <input className="w-full bg-gray-800 rounded p-3" placeholder="Age" onChange={e=>set('age',e.target.value)} />
          <select className="w-full bg-gray-800 rounded p-3" onChange={e=>set('gender',e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select className="w-full bg-gray-800 rounded p-3" onChange={e=>set('activity',e.target.value)}>
            <option value="1.2">Sedentary</option>
            <option value="1.375">Lightly Active</option>
            <option value="1.55">Moderately Active</option>
            <option value="1.725">Very Active</option>
            <option value="1.9">Extra Active</option>
          </select>

        </div>
        <button onClick={calculate} className="mt-4 w-full bg-blue-600 hover:bg-blue-700 rounded p-3 font-semibold">Calculate</button>
        {result && <div className="mt-4 p-4 bg-gray-800 rounded text-green-400 font-mono text-sm whitespace-pre-wrap">{result}</div>}
      </div>
    </main>
  )
}
