'use client'

import { useState } from 'react'

export default function DiscountCalculator() {
  const [price, setPrice] = useState('')
  const [discount, setDiscount] = useState('')
  const [result, setResult] = useState<{savings: number, final: number, pctOff: number} | null>(null)

  const calculate = () => {
    const p = parseFloat(price)
    const d = parseFloat(discount)
    if (!isNaN(p) && !isNaN(d)) {
      const savings = p * (d / 100)
      const final = p - savings
      setResult({ savings, final, pctOff: d })
    }
  }

  return (
    <div style={{maxWidth:600,margin:" + q + "0 auto" + q + ",padding:" + q + "2rem" + q + "}}>
      <h1 style={{fontSize:" + q + "2rem" + q + ",marginBottom:" + q + "0.5rem" + q + "}}>Discount Calculator</h1>
      <p style={{color:" + q + "#aaa" + q + ",marginBottom:" + q + "2rem" + q + "}}>Calculate discounted prices and savings</p>
      <div style={{background:" + q + "#1a1a1a" + q + ",borderRadius:8,padding:" + q + "1.5rem" + q + ",marginBottom:" + q + "1rem" + q + "}}>
        <label style={{display:" + q + "block" + q + ",marginBottom:" + q + "0.5rem" + q + ",color:" + q + "#ccc" + q + "}}>Original Price ($)</label>
        <input type="number" value={price} onChange={e => setPrice(e.target.value)}
          style={{width:" + q + "100%" + q + ",padding:" + q + "0.75rem" + q + ",background:" + q + "#2a2a2a" + q + ",border:" + q + "1px solid #444" + q + ",borderRadius:4,color:" + q + "#fff" + q + ",marginBottom:" + q + "1rem" + q + ",boxSizing:" + q + "border-box" + q + "}} placeholder="e.g. 100" />
        <label style={{display:" + q + "block" + q + ",marginBottom:" + q + "0.5rem" + q + ",color:" + q + "#ccc" + q + "}}>Discount (%)</label>
        <input type="number" value={discount} onChange={e => setDiscount(e.target.value)}
          style={{width:" + q + "100%" + q + ",padding:" + q + "0.75rem" + q + ",background:" + q + "#2a2a2a" + q + ",border:" + q + "1px solid #444" + q + ",borderRadius:4,color:" + q + "#fff" + q + ",marginBottom:" + q + "1rem" + q + ",boxSizing:" + q + "border-box" + q + "}} placeholder="e.g. 20" />
        <button onClick={calculate}
          style={{background:" + q + "#3b82f6" + q + ",color:" + q + "#fff" + q + ",border:" + q + "none" + q + ",borderRadius:4,padding:" + q + "0.75rem 1.5rem" + q + ",cursor:" + q + "pointer" + q + ",fontSize:" + q + "1rem" + q + "}}>Calculate</button>
      </div>
      {result && (
        <div style={{background:" + q + "#1a1a1a" + q + ",borderRadius:8,padding:" + q + "1.5rem" + q + "}}>
          <h2 style={{marginBottom:" + q + "1rem" + q + "}}>Results</h2>
          <div style={{display:" + q + "grid" + q + ",gap:" + q + "0.75rem" + q + "}}>
            <div style={{background:" + q + "#2a2a2a" + q + ",padding:" + q + "1rem" + q + ",borderRadius:4}}>
              <span style={{color:" + q + "#aaa" + q + "}}>You Save: </span><strong>${result.savings.toFixed(2)}</strong>
            </div>
            <div style={{background:" + q + "#2a2a2a" + q + ",padding:" + q + "1rem" + q + ",borderRadius:4}}>
              <span style={{color:" + q + "#aaa" + q + "}}>Final Price: </span><strong>${result.final.toFixed(2)}</strong>
            </div>
            <div style={{background:" + q + "#2a2a2a" + q + ",padding:" + q + "1rem" + q + ",borderRadius:4}}>
              <span style={{color:" + q + "#aaa" + q + "}}>Discount: </span><strong>{result.pctOff}% off</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
