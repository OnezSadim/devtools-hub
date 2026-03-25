'use client'
import { useState } from 'react'

const units = [
    { name: 'W/m²', factor: 1.0 },
    { name: 'kW/m²', factor: 1000.0 },
    { name: 'BTU/h/ft²', factor: 3.15459 },
    { name: 'cal/s/cm²', factor: 41840.0 },
    { name: 'kcal/h/m²', factor: 1.163 },
  ]

export default function Page() {
  const [from, setFrom] = useState('W/m²')
  const [to, setTo] = useState('kW/m²')
  const [val, setVal] = useState('1')

  const convert = () => {
    const f = units.find(u => u.name === from)
    const t = units.find(u => u.name === to)
    if (!f || !t) return ''
    return ((parseFloat(val) * f.factor) / t.factor).toPrecision(6)
  }

  return (
    <div style={{maxWidth:480,margin:'40px auto',padding:'24px',fontFamily:'monospace',background:'#111',borderRadius:8,color:'#eee'}}>
      <h1 style={{fontSize:'1.4rem',marginBottom:16}}>Heat Flux Converter</h1>
      <p style={{color:'#aaa',marginBottom:24,fontSize:'0.9rem'}}>Convert heat flux units including W/m2, BTU/h/ft2, and cal/s/cm2.</p>
      <input type='number' value={val} onChange={e=>setVal(e.target.value)}
        style={{width:'100%',padding:'8px',marginBottom:12,background:'#222',border:'1px solid #444',borderRadius:4,color:'#eee',fontSize:'1rem'}} />
      <select value={from} onChange={e=>setFrom(e.target.value)}
        style={{width:'100%',padding:'8px',marginBottom:12,background:'#222',border:'1px solid #444',borderRadius:4,color:'#eee'}}>
        {units.map(u=><option key={u.name}>{u.name}</option>)}
      </select>
      <div style={{textAlign:'center',marginBottom:12,color:'#666'}}>to</div>
      <select value={to} onChange={e=>setTo(e.target.value)}
        style={{width:'100%',padding:'8px',marginBottom:20,background:'#222',border:'1px solid #444',borderRadius:4,color:'#eee'}}>
        {units.map(u=><option key={u.name}>{u.name}</option>)}
      </select>
      <div style={{background:'#1a1a2e',padding:'16px',borderRadius:6,textAlign:'center',fontSize:'1.2rem'}}>
        {val} {from} = <strong>{convert()}</strong> {to}
      </div>
    </div>
  )
}
