'''use client'''
import { useState } from 'react'

const units: [string, number][] = [['SI (dimensionless)', 1], ['CGS (emu/cm³)', 0.125663706144], ['mSI', 0.001], ['μSI', 1e-06]]

export default function Page() {
  const [val, setVal] = useState('')
  const [from, setFrom] = useState(units[0][0])
  const [to, setTo] = useState(units[1][0])

  function convert(v: string, f: string, t: string) {
    const n = parseFloat(v)
    if (isNaN(n)) return ''
    const ff = units.find(u => u[0] === f)?.[1] ?? 1
    const tf = units.find(u => u[0] === t)?.[1] ?? 1
    return ((n * ff) / tf).toPrecision(8)
  }

  return (
    <main style={{maxWidth:600,margin:'0 auto',padding:'2rem',fontFamily:'sans-serif',color:'#e2e8f0'}}>
      <h1 style={{fontSize:'1.8rem',fontWeight:700,marginBottom:'0.5rem'}}>Magnetic Susceptibility Converter</h1>
      <p style={{color:'#94a3b8',marginBottom:'2rem'}}>Convert magnetic susceptibility and related dimensionless magnetic quantities.</p>
      <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)}
          placeholder="Enter value"
          style={{padding:'0.75rem',borderRadius:8,border:'1px solid #334155',background:'#1e293b',color:'#e2e8f0',fontSize:'1rem'}}/>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
          <select value={from} onChange={e=>setFrom(e.target.value)}
            style={{padding:'0.75rem',borderRadius:8,border:'1px solid #334155',background:'#1e293b',color:'#e2e8f0'}}>
            {units.map(u=><option key={u[0]}>{u[0]}</option>)}
          </select>
          <select value={to} onChange={e=>setTo(e.target.value)}
            style={{padding:'0.75rem',borderRadius:8,border:'1px solid #334155',background:'#1e293b',color:'#e2e8f0'}}>
            {units.map(u=><option key={u[0]}>{u[0]}</option>)}
          </select>
        </div>
        <div style={{padding:'1rem',borderRadius:8,background:'#1e293b',border:'1px solid #334155',fontSize:'1.25rem',fontWeight:600}}>
          {convert(val,from,to) || <span style={{color:'#64748b'}}>Result appears here</span>}
        </div>
      </div>
    </main>
  )
}
