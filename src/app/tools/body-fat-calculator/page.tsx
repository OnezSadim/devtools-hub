'''use client'''
import { useState } from 'react'

export default function Page() {
  const [result, setResult] = useState('')
  const [inputs, setInputs] = useState<Record<string,string>>({})

  const set = (k: string, v: string) => setInputs(prev => ({...prev, [k]: v}))

  const calculate = () => {
    try {

      const waist = parseFloat(inputs.waist || '0')
      const neck = parseFloat(inputs.neck || '0')
      const height = parseFloat(inputs.height || '0')
      const hip = parseFloat(inputs.hip || '0')
      const gender = inputs.gender || 'male'
      if (!waist || !neck || !height) { setResult('Enter all measurements'); return }
      let bf: number
      if (gender === 'male') {
        bf = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450
      } else {
        bf = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450
      }
      setResult(`Estimated Body Fat: ${bf.toFixed(1)}%`)

    } catch(e) {
      setResult('Calculation error')
    }
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Body Fat Calculator</h1>
        <p className="text-gray-400 mb-6">Estimate your body fat percentage using measurements like waist, neck, and hip circumference.</p>
        <div className="space-y-3">

          <select className="w-full bg-gray-800 rounded p-3" onChange={e=>set('gender',e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input className="w-full bg-gray-800 rounded p-3" placeholder="Height (cm)" onChange={e=>set('height',e.target.value)} />
          <input className="w-full bg-gray-800 rounded p-3" placeholder="Waist (cm)" onChange={e=>set('waist',e.target.value)} />
          <input className="w-full bg-gray-800 rounded p-3" placeholder="Neck (cm)" onChange={e=>set('neck',e.target.value)} />
          <input className="w-full bg-gray-800 rounded p-3" placeholder="Hip (cm, females only)" onChange={e=>set('hip',e.target.value)} />

        </div>
        <button onClick={calculate} className="mt-4 w-full bg-blue-600 hover:bg-blue-700 rounded p-3 font-semibold">Calculate</button>
        {result && <div className="mt-4 p-4 bg-gray-800 rounded text-green-400 font-mono text-sm whitespace-pre-wrap">{result}</div>}
      </div>
    </main>
  )
}
