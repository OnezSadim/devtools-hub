'''use client'''
import { useState } from 'react'

export default function Page() {
  const [result, setResult] = useState('')
  const [inputs, setInputs] = useState<Record<string,string>>({})

  const set = (k: string, v: string) => setInputs(prev => ({...prev, [k]: v}))

  const calculate = () => {
    try {

      const age = parseFloat(inputs.age || '0')
      const rhr = parseFloat(inputs.rhr || '60')
      if (!age) { setResult('Enter age'); return }
      const maxHR = 220 - age
      const hrr = maxHR - rhr
      const z1 = [Math.round(rhr + hrr * 0.50), Math.round(rhr + hrr * 0.60)]
      const z2 = [Math.round(rhr + hrr * 0.60), Math.round(rhr + hrr * 0.70)]
      const z3 = [Math.round(rhr + hrr * 0.70), Math.round(rhr + hrr * 0.80)]
      const z4 = [Math.round(rhr + hrr * 0.80), Math.round(rhr + hrr * 0.90)]
      const z5 = [Math.round(rhr + hrr * 0.90), maxHR]
      setResult(`Max HR: ${maxHR} | Z1(50-60%): ${z1[0]}-${z1[1]} | Z2(60-70%): ${z2[0]}-${z2[1]} | Z3(70-80%): ${z3[0]}-${z3[1]} | Z4(80-90%): ${z4[0]}-${z4[1]} | Z5(90-100%): ${z5[0]}-${z5[1]}`)

    } catch(e) {
      setResult('Calculation error')
    }
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Heart Rate Zone Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate your target heart rate zones for optimal cardio training based on age and resting heart rate.</p>
        <div className="space-y-3">

          <input className="w-full bg-gray-800 rounded p-3" placeholder="Age" onChange={e=>set('age',e.target.value)} />
          <input className="w-full bg-gray-800 rounded p-3" placeholder="Resting Heart Rate (bpm, default 60)" onChange={e=>set('rhr',e.target.value)} />

        </div>
        <button onClick={calculate} className="mt-4 w-full bg-blue-600 hover:bg-blue-700 rounded p-3 font-semibold">Calculate</button>
        {result && <div className="mt-4 p-4 bg-gray-800 rounded text-green-400 font-mono text-sm whitespace-pre-wrap">{result}</div>}
      </div>
    </main>
  )
}
