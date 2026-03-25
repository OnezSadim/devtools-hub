'use client'

import { useState } from 'react'

const RATES: Record<string, number> = {
  USD: 1, EUR: 0.92, GBP: 0.79, JPY: 149.5, CAD: 1.36,
  AUD: 1.53, CHF: 0.89, CNY: 7.24, INR: 83.1, MXN: 17.1,
  BRL: 4.97, KRW: 1325, SGD: 1.34, HKD: 7.82, NOK: 10.6,
}

export default function CurrencyCalculator() {
  const [amount, setAmount] = useState('')
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('EUR')
  const [result, setResult] = useState<number | null>(null)

  const convert = () => {
    const a = parseFloat(amount)
    if (!isNaN(a)) {
      const usd = a / RATES[from]
      setResult(usd * RATES[to])
    }
  }

  const sel = (val: string, setter: (v: string) => void) => (
    <select value={val} onChange={e => setter(e.target.value)}
      style={{padding:" + q + "0.75rem" + q + ",background:" + q + "#2a2a2a" + q + ",border:" + q + "1px solid #444" + q + ",borderRadius:4,color:" + q + "#fff" + q + ",fontSize:" + q + "1rem" + q + "}}>
      {Object.keys(RATES).map(c => <option key={c} value={c}>{c}</option>)}
    </select>
  )

  return (
    <div style={{maxWidth:600,margin:" + q + "0 auto" + q + ",padding:" + q + "2rem" + q + "}}>
      <h1 style={{fontSize:" + q + "2rem" + q + ",marginBottom:" + q + "0.5rem" + q + "}}>Currency Calculator</h1>
      <p style={{color:" + q + "#aaa" + q + ",marginBottom:" + q + "2rem" + q + "}}>Convert between world currencies (indicative rates)</p>
      <div style={{background:" + q + "#1a1a1a" + q + ",borderRadius:8,padding:" + q + "1.5rem" + q + ",marginBottom:" + q + "1rem" + q + "}}>
        <label style={{display:" + q + "block" + q + ",marginBottom:" + q + "0.5rem" + q + ",color:" + q + "#ccc" + q + "}}>Amount</label>
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)}
          style={{width:" + q + "100%" + q + ",padding:" + q + "0.75rem" + q + ",background:" + q + "#2a2a2a" + q + ",border:" + q + "1px solid #444" + q + ",borderRadius:4,color:" + q + "#fff" + q + ",marginBottom:" + q + "1rem" + q + ",boxSizing:" + q + "border-box" + q + "}} placeholder="Enter amount" />
        <div style={{display:" + q + "flex" + q + ",gap:" + q + "1rem" + q + ",marginBottom:" + q + "1rem" + q + ",alignItems:" + q + "center" + q + "}}>
          {sel(from, setFrom)}
          <span style={{color:" + q + "#666" + q + "}}>→</span>
          {sel(to, setTo)}
        </div>
        <button onClick={convert}
          style={{background:" + q + "#3b82f6" + q + ",color:" + q + "#fff" + q + ",border:" + q + "none" + q + ",borderRadius:4,padding:" + q + "0.75rem 1.5rem" + q + ",cursor:" + q + "pointer" + q + ",fontSize:" + q + "1rem" + q + "}}>Convert</button>
      </div>
      {result !== null && (
        <div style={{background:" + q + "#1a1a1a" + q + ",borderRadius:8,padding:" + q + "1.5rem" + q + "}}>
          <div style={{fontSize:" + q + "1.5rem" + q + "}}>
            {amount} {from} = <strong style={{color:" + q + "#3b82f6" + q + "}}>{result.toFixed(4)} {to}</strong>
          </div>
          <p style={{color:" + q + "#666" + q + ",marginTop:" + q + "0.5rem" + q + ",fontSize:" + q + "0.875rem" + q + "}}>Rate: 1 {from} = {(RATES[to]/RATES[from]).toFixed(4)} {to} (indicative)</p>
        </div>
      )}
    </div>
  )
}
