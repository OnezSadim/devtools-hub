'use client'

import { useState } from 'react'

export default function TipCalculator() {
  const [bill, setBill] = useState('')
  const [tipPct, setTipPct] = useState('15')
  const [people, setPeople] = useState('1')
  const [result, setResult] = useState<{tip: number, total: number, perPerson: number} | null>(null)

  const calculate = () => {
    const b = parseFloat(bill)
    const t = parseFloat(tipPct)
    const p = parseInt(people) || 1
    if (!isNaN(b) && !isNaN(t)) {
      const tip = b * (t / 100)
      const total = b + tip
      const perPerson = total / p
      setResult({ tip, total, perPerson })
    }
  }

  return (
    <div style={{maxWidth:600,margin:" + q + "0 auto" + q + ",padding:" + q + "2rem" + q + "}}>
      <h1 style={{fontSize:" + q + "2rem" + q + ",marginBottom:" + q + "0.5rem" + q + "}}>Tip Calculator</h1>
      <p style={{color:" + q + "#aaa" + q + ",marginBottom:" + q + "2rem" + q + "}}>Calculate tip and split bills</p>
      <div style={{background:" + q + "#1a1a1a" + q + ",borderRadius:8,padding:" + q + "1.5rem" + q + ",marginBottom:" + q + "1rem" + q + "}}>
        {[['Bill Amount ($)', bill, setBill, 'e.g. 50.00'], ['Tip Percentage (%)', tipPct, setTipPct, 'e.g. 15'], ['Number of People', people, setPeople, 'e.g. 2']].map(([label, val, setter, ph]) => (
          <div key={label as string} style={{marginBottom:" + q + "1rem" + q + "}}>
            <label style={{display:" + q + "block" + q + ",marginBottom:" + q + "0.5rem" + q + ",color:" + q + "#ccc" + q + "}}>{label as string}</label>
            <input type="number" value={val as string} onChange={e => (setter as Function)(e.target.value)}
              style={{width:" + q + "100%" + q + ",padding:" + q + "0.75rem" + q + ",background:" + q + "#2a2a2a" + q + ",border:" + q + "1px solid #444" + q + ",borderRadius:4,color:" + q + "#fff" + q + ",boxSizing:" + q + "border-box" + q + "}} placeholder={ph as string} />
          </div>
        ))}
        <button onClick={calculate}
          style={{background:" + q + "#3b82f6" + q + ",color:" + q + "#fff" + q + ",border:" + q + "none" + q + ",borderRadius:4,padding:" + q + "0.75rem 1.5rem" + q + ",cursor:" + q + "pointer" + q + ",fontSize:" + q + "1rem" + q + "}}>Calculate</button>
      </div>
      {result && (
        <div style={{background:" + q + "#1a1a1a" + q + ",borderRadius:8,padding:" + q + "1.5rem" + q + "}}>
          <h2 style={{marginBottom:" + q + "1rem" + q + "}}>Results</h2>
          <div style={{display:" + q + "grid" + q + ",gap:" + q + "0.75rem" + q + "}}>
            {[['Tip Amount', result.tip], ['Total Bill', result.total], ['Per Person', result.perPerson]].map(([label, val]) => (
              <div key={label as string} style={{background:" + q + "#2a2a2a" + q + ",padding:" + q + "1rem" + q + ",borderRadius:4}}>
                <span style={{color:" + q + "#aaa" + q + "}}>{label as string}: </span>
                <strong>${(val as number).toFixed(2)}</strong>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
