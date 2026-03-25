'use client'
import { useState } from 'react'

const units = [
    { name: 'Pascal', symbol: 'Pa', toBase: 1 },
    { name: 'Kilopascal', symbol: 'kPa', toBase: 0.001 },
    { name: 'Megapascal', symbol: 'MPa', toBase: 1e-06 },
    { name: 'Gigapascal', symbol: 'GPa', toBase: 1e-09 },
    { name: 'Bar', symbol: 'bar', toBase: 1e-05 },
    { name: 'Millibar', symbol: 'mbar', toBase: 0.01 },
    { name: 'Atmosphere', symbol: 'atm', toBase: 9.86923e-06 },
    { name: 'Torr', symbol: 'Torr', toBase: 0.00750062 },
    { name: 'mmHg', symbol: 'mmHg', toBase: 0.00750062 },
    { name: 'inHg', symbol: 'inHg', toBase: 0.000295301 },
    { name: 'PSI', symbol: 'psi', toBase: 0.000145038 },
    { name: 'KSI', symbol: 'ksi', toBase: 1.45038e-07 },
    { name: 'mmH2O', symbol: 'mmH₂O', toBase: 0.101972 },
    { name: 'inH2O', symbol: 'inH₂O', toBase: 0.00401474 },
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
      <h1 style={{fontSize:'2rem',marginBottom:'0.5rem'}}>Hydraulic Pressure Converter</h1>
      <p style={{color:'#94a3b8',marginBottom:'2rem'}}>Convert between hydraulic pressure units including PSI, bar, Pa, MPa, and more.</p>
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
