'use client'
import { useState } from 'react'

const units = [
    { name: 'Pascal-second', symbol: 'Pa·s', toBase: 1 },
    { name: 'Poise', symbol: 'P', toBase: 10 },
    { name: 'Centipoise', symbol: 'cP', toBase: 1000 },
    { name: 'Millipascal-second', symbol: 'mPa·s', toBase: 1000 },
    { name: 'Micropascal-second', symbol: 'μPa·s', toBase: 1000000 },
    { name: 'Newton-second/m²', symbol: 'N·s/m²', toBase: 1 },
    { name: 'Dyne-second/cm²', symbol: 'dyn·s/cm²', toBase: 10 },
    { name: 'Pound-force-second/ft²', symbol: 'lbf·s/ft²', toBase: 0.0208854 },
    { name: 'Pound-mass/foot-second', symbol: 'lb/(ft·s)', toBase: 0.671969 },
    { name: 'Slug/foot-second', symbol: 'slug/(ft·s)', toBase: 0.0208854 },
  ]

export default function Page() {
  const [value, setValue] = useState('1')
  const [from, setFrom] = useState(units[0].name)
  const [to, setTo] = useState(units[1].name)

  function convert() {
    const n = parseFloat(value)
    if (isNaN(n)) return 'Invalid input'
    const fromUnit = units.find(u => u.name === from)
    const toUnit = units.find(u => u.name === to)
    if (!fromUnit || !toUnit) return 'Unknown unit'
    const base = n / fromUnit.toBase
    return (base * toUnit.toBase).toPrecision(8)
  }

  return (
    <main style={{minHeight:'100vh',background:'#0f172a',color:'#f1f5f9',fontFamily:'sans-serif',padding:'2rem'}}>
      <h1 style={{fontSize:'2rem',marginBottom:'0.5rem'}}>Dynamic Viscosity Converter</h1>
      <p style={{color:'#94a3b8',marginBottom:'2rem'}}>Convert between dynamic viscosity units including Pascal-second, Poise, centipoise, and more.</p>
      <div style={{display:'flex',gap:'1rem',flexWrap:'wrap',alignItems:'flex-end',marginBottom:'1.5rem'}}>
        <div>
          <label style={{display:'block',marginBottom:'0.25rem',color:'#94a3b8'}}>Value</label>
          <input type="number" value={value} onChange={e=>setValue(e.target.value)} style={{padding:'0.5rem',borderRadius:'6px',border:'1px solid #334155',background:'#1e293b',color:'#f1f5f9',fontSize:'1rem',width:'180px'}} />
        </div>
        <div>
          <label style={{display:'block',marginBottom:'0.25rem',color:'#94a3b8'}}>From</label>
          <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:'0.5rem',borderRadius:'6px',border:'1px solid #334155',background:'#1e293b',color:'#f1f5f9',fontSize:'1rem'}}>
            {units.map(u=><option key={u.name} value={u.name}>{u.name} ({u.symbol})</option>)}
          </select>
        </div>
        <div>
          <label style={{display:'block',marginBottom:'0.25rem',color:'#94a3b8'}}>To</label>
          <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:'0.5rem',borderRadius:'6px',border:'1px solid #334155',background:'#1e293b',color:'#f1f5f9',fontSize:'1rem'}}>
            {units.map(u=><option key={u.name} value={u.name}>{u.name} ({u.symbol})</option>)}
          </select>
        </div>
      </div>
      <div style={{background:'#1e293b',padding:'1.5rem',borderRadius:'8px',fontSize:'1.5rem',fontWeight:'bold'}}>
        {value} {units.find(u=>u.name===from)?.symbol} = {convert()} {units.find(u=>u.name===to)?.symbol}
      </div>
    </main>
  )
}
