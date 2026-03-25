'use client'

import { useState } from 'react'

export default function InvestmentReturnCalculator() {
  const [initial, setInitial] = useState('')
  const [final, setFinal] = useState('')
  const [years, setYears] = useState('')
  const [result, setResult] = useState<{roi: number, annualized: number, profit: number} | null>(null)

  const calculate = () => {
    const i = parseFloat(initial)
    const f = parseFloat(final)
    const y = parseFloat(years)
    if (!isNaN(i) && !isNaN(f) && i > 0) {
      const profit = f - i
      const roi = (profit / i) * 100
      const annualized = !isNaN(y) && y > 0 ? (Math.pow(f / i, 1 / y) - 1) * 100 : 0
      setResult({ roi, annualized, profit })
    }
  }

  return (
    <div style={{maxWidth:600,margin:" + q + "0 auto" + q + ",padding:" + q + "2rem" + q + "}}>
      <h1 style={{fontSize:" + q + "2rem" + q + ",marginBottom:" + q + "0.5rem" + q + "}}>Investment Return Calculator</h1>
      <p style={{color:" + q + "#aaa" + q + ",marginBottom:" + q + "2rem" + q + "}}>Calculate ROI and annualized returns</p>
      <div style={{background:" + q + "#1a1a1a" + q + ",borderRadius:8,padding:" + q + "1.5rem" + q + ",marginBottom:" + q + "1rem" + q + "}}>
        {[['Initial Investment ($)', initial, setInitial, 'e.g. 10000'], ['Final Value ($)', final, setFinal, 'e.g. 15000'], ['Years Held (optional)', years, setYears, 'e.g. 5']].map(([label, val, setter, ph]) => (
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
            <div style={{background:" + q + "#2a2a2a" + q + ",padding:" + q + "1rem" + q + ",borderRadius:4}}>
              <span style={{color:" + q + "#aaa" + q + "}}>Profit/Loss: </span><strong style={{color: result.profit >= 0 ? "#22c55e" : "#ef4444"}}>${result.profit.toFixed(2)}</strong>
            </div>
            <div style={{background:" + q + "#2a2a2a" + q + ",padding:" + q + "1rem" + q + ",borderRadius:4}}>
              <span style={{color:" + q + "#aaa" + q + "}}>Total ROI: </span><strong>{result.roi.toFixed(2)}%</strong>
            </div>
            {years && <div style={{background:" + q + "#2a2a2a" + q + ",padding:" + q + "1rem" + q + ",borderRadius:4}}>
              <span style={{color:" + q + "#aaa" + q + "}}>Annualized Return: </span><strong>{result.annualized.toFixed(2)}%/yr</strong>
            </div>}
          </div>
        </div>
      )}
    </div>
  )
}
