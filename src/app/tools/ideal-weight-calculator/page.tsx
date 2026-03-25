'''use client'''
import { useState } from 'react'

export default function Page() {
  const [result, setResult] = useState('')
  const [inputs, setInputs] = useState<Record<string,string>>({})

  const set = (k: string, v: string) => setInputs(prev => ({...prev, [k]: v}))

  const calculate = () => {
    try {

      const h = parseFloat(inputs.height || '0')
      const gender = inputs.gender || 'male'
      if (!h) { setResult('Enter height'); return }
      const hIn = h / 2.54
      let devine = gender === 'male' ? 50 + 2.3 * (hIn - 60) : 45.5 + 2.3 * (hIn - 60)
      let robinson = gender === 'male' ? 52 + 1.9 * (hIn - 60) : 49 + 1.7 * (hIn - 60)
      let miller = gender === 'male' ? 56.2 + 1.41 * (hIn - 60) : 53.1 + 1.36 * (hIn - 60)
      setResult(`Devine: ${devine.toFixed(1)} kg | Robinson: ${robinson.toFixed(1)} kg | Miller: ${miller.toFixed(1)} kg`)

    } catch(e) {
      setResult('Calculation error')
    }
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Ideal Weight Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate your ideal body weight based on height, gender, and frame size using multiple formulas.</p>
        <div className="space-y-3">

          <input className="w-full bg-gray-800 rounded p-3" placeholder="Height (cm)" onChange={e=>set('height',e.target.value)} />
          <select className="w-full bg-gray-800 rounded p-3" onChange={e=>set('gender',e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

        </div>
        <button onClick={calculate} className="mt-4 w-full bg-blue-600 hover:bg-blue-700 rounded p-3 font-semibold">Calculate</button>
        {result && <div className="mt-4 p-4 bg-gray-800 rounded text-green-400 font-mono text-sm whitespace-pre-wrap">{result}</div>}
      </div>
    </main>
  )
}
