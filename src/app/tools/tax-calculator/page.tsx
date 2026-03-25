'use client'

import { useState } from 'react'

export default function TaxCalculator() {
  const [income, setIncome] = useState('')
  const [taxRate, setTaxRate] = useState('')
  const [result, setResult] = useState<{tax: number, net: number, effective: number} | null>(null)

  const calculate = () => {
    const inc = parseFloat(income)
    const rate = parseFloat(taxRate)
    if (!isNaN(inc) && !isNaN(rate)) {
      const tax = inc * (rate / 100)
      const net = inc - tax
      const effective = (tax / inc) * 100
      setResult({ tax, net, effective })
    }
  }

  return (
    <div style={{maxWidth:600,margin:" + q + "0 auto" + q + ",padding:" + q + "2rem" + q + "}}>
      <h1 style={{fontSize:" + q + "2rem" + q + ",marginBottom:" + q + "0.5rem" + q + "}}>Tax Calculator</h1>
      <p style={{color:" + q + "#aaa" + q + ",marginBottom:" + q + "2rem" + q + "}}>Calculate income tax and net pay</p>
      <div style={{background:" + q + "#1a1a1a" + q + ",borderRadius:8,padding:" + q + "1.5rem" + q + ",marginBottom:" + q + "1rem" + q + "}}>
        <label style={{display:" + q + "block" + q + ",marginBottom:" + q + "0.5rem" + q + ",color:" + q + "#ccc" + q + "}}>Gross Income ($)</label>
        <input type="number" value={income} onChange={e => setIncome(e.target.value)}
          style={{width:" + q + "100%" + q + ",padding:" + q + "0.75rem" + q + ",background:" + q + "#2a2a2a" + q + ",border:" + q + "1px solid #444" + q + ",borderRadius:4,color:" + q + "#fff" + q + ",marginBottom:" + q + "1rem" + q + ",boxSizing:" + q + "border-box" + q + "}} placeholder="Enter gross income" />
        <label style={{display:" + q + "block" + q + ",marginBottom:" + q + "0.5rem" + q + ",color:" + q + "#ccc" + q + "}}>Tax Rate (%)</label>
        <input type="number" value={taxRate} onChange={e => setTaxRate(e.target.value)}
          style={{width:" + q + "100%" + q + ",padding:" + q + "0.75rem" + q + ",background:" + q + "#2a2a2a" + q + ",border:" + q + "1px solid #444" + q + ",borderRadius:4,color:" + q + "#fff" + q + ",marginBottom:" + q + "1rem" + q + ",boxSizing:" + q + "border-box" + q + "}} placeholder="e.g. 25" />
        <button onClick={calculate}
          style={{background:" + q + "#3b82f6" + q + ",color:" + q + "#fff" + q + ",border:" + q + "none" + q + ",borderRadius:4,padding:" + q + "0.75rem 1.5rem" + q + ",cursor:" + q + "pointer" + q + ",fontSize:" + q + "1rem" + q + "}}>Calculate</button>
      </div>
      {result && (
        <div style={{background:" + q + "#1a1a1a" + q + ",borderRadius:8,padding:" + q + "1.5rem" + q + "}}>
          <h2 style={{marginBottom:" + q + "1rem" + q + "}}>Results</h2>
          <div style={{display:" + q + "grid" + q + ",gap:" + q + "0.75rem" + q + "}}>
            <div style={{background:" + q + "#2a2a2a" + q + ",padding:" + q + "1rem" + q + ",borderRadius:4}}>
              <span style={{color:" + q + "#aaa" + q + "}}>Tax Amount: </span>
              <strong>${result.tax.toFixed(2)}</strong>
            </div>
            <div style={{background:" + q + "#2a2a2a" + q + ",padding:" + q + "1rem" + q + ",borderRadius:4}}>
              <span style={{color:" + q + "#aaa" + q + "}}>Net Income: </span>
              <strong>${result.net.toFixed(2)}</strong>
            </div>
            <div style={{background:" + q + "#2a2a2a" + q + ",padding:" + q + "1rem" + q + ",borderRadius:4}}>
              <span style={{color:" + q + "#aaa" + q + "}}>Effective Rate: </span>
              <strong>{result.effective.toFixed(2)}%</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
