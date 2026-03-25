'use client'
import { useState } from 'react'

const units = [
    { name: 'Kilogram/second', symbol: 'kg/s', toBase: 1 },
    { name: 'Kilogram/minute', symbol: 'kg/min', toBase: 60 },
    { name: 'Kilogram/hour', symbol: 'kg/h', toBase: 3600 },
    { name: 'Gram/second', symbol: 'g/s', toBase: 1000 },
    { name: 'Gram/minute', symbol: 'g/min', toBase: 60000 },
    { name: 'Gram/hour', symbol: 'g/h', toBase: 3600000 },
    { name: 'Milligram/second', symbol: 'mg/s', toBase: 1000000 },
    { name: 'Pound/second', symbol: 'lb/s', toBase: 2.20462 },
    { name: 'Pound/minute', symbol: 'lb/min', toBase: 132.277 },
    { name: 'Pound/hour', symbol: 'lb/h', toBase: 7936.64 },
    { name: 'Ton/hour (metric)', symbol: 't/h', toBase: 3.6 },
    { name: 'Ton/hour (short)', symbol: 'ton/h', toBase: 3.96832 },
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
      <h1 style={{fontSize:'2rem',marginBottom:'0.5rem'}}>Mass Flow Rate Converter</h1>
      <p style={{color:'#94a3b8',marginBottom:'2rem'}}>Convert between mass flow rate units including kg/s, kg/h, lb/s, lb/h, and more.</p>
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
