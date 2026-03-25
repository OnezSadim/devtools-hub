"use client";
import { useState } from 'react';

const units = [
        { value: 'pa', label: 'Pascal (Pa)' },
        { value: 'kpa', label: 'Kilopascal (kPa)' },
        { value: 'mpa', label: 'Megapascal (MPa)' },
        { value: 'bar', label: 'Bar' },
        { value: 'psi', label: 'PSI (lb/in²)' },
        { value: 'atm', label: 'Atmosphere (atm)' },
        { value: 'mmhg', label: 'mmHg (Torr)' },
        { value: 'inhg', label: 'inHg' },
];

function toBaseFn(v: number, from: string): number {
  let toBase = 0;
  switch(from) {
      case 'pa': toBase = v * 1; break;
      case 'kpa': toBase = v * 1000.0; break;
      case 'mpa': toBase = v * 1000000.0; break;
      case 'bar': toBase = v * 100000.0; break;
      case 'psi': toBase = v * 6894.757; break;
      case 'atm': toBase = v * 101325; break;
      case 'mmhg': toBase = v * 133.322; break;
      case 'inhg': toBase = v * 3386.389; break;
    default: toBase = v;
  }
  return toBase;
}

function fromBaseFn(base: number, to: string): number {
  switch(to) {
      case 'pa': return toBase / 1;
      case 'kpa': return toBase / 1000.0;
      case 'mpa': return toBase / 1000000.0;
      case 'bar': return toBase / 100000.0;
      case 'psi': return toBase / 6894.757;
      case 'atm': return toBase / 101325;
      case 'mmhg': return toBase / 133.322;
      case 'inhg': return toBase / 3386.389;
    default: return base;
  }
}

export default function Page() {
  const [val, setVal] = useState('');
  const [from, setFrom] = useState(units[0].value);
  const [to, setTo] = useState(units[1].value);

  const result = val !== '' && !isNaN(Number(val))
    ? fromBaseFn(toBaseFn(Number(val), from), to)
    : null;

  return (
    <main style={{minHeight:'100vh',background:'#0f172a',color:'#f1f5f9',fontFamily:'monospace',display:'flex',alignItems:'center',justifyContent:'center',padding:'2rem'}}>
      <div style={{background:'#1e293b',borderRadius:'1rem',padding:'2rem',width:'100%',maxWidth:'480px'}}>
        <h1 style={{fontSize:'1.5rem',fontWeight:700,marginBottom:'0.5rem'}}>Pressure Converter</h1>
        <p style={{color:'#94a3b8',marginBottom:'1.5rem',fontSize:'0.875rem'}}>Convert between pressure units.</p>
        <input
          type="number" value={val} onChange={e=>setVal(e.target.value)}
          placeholder="Enter value"
          style={{width:'100%',padding:'0.75rem',background:'#0f172a',border:'1px solid #334155',borderRadius:'0.5rem',color:'#f1f5f9',fontSize:'1rem',marginBottom:'1rem',boxSizing:'border-box'}}
        />
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem',marginBottom:'1rem'}}>
          <div>
            <label style={{display:'block',color:'#94a3b8',fontSize:'0.75rem',marginBottom:'0.25rem'}}>From</label>
            <select value={from} onChange={e=>setFrom(e.target.value)}
              style={{width:'100%',padding:'0.75rem',background:'#0f172a',border:'1px solid #334155',borderRadius:'0.5rem',color:'#f1f5f9',fontSize:'0.875rem'}}>
              {units.map(u=><option key={u.value} value={u.value}>{u.label}</option>)}
            </select>
          </div>
          <div>
            <label style={{display:'block',color:'#94a3b8',fontSize:'0.75rem',marginBottom:'0.25rem'}}>To</label>
            <select value={to} onChange={e=>setTo(e.target.value)}
              style={{width:'100%',padding:'0.75rem',background:'#0f172a',border:'1px solid #334155',borderRadius:'0.5rem',color:'#f1f5f9',fontSize:'0.875rem'}}>
              {units.map(u=><option key={u.value} value={u.value}>{u.label}</option>)}
            </select>
          </div>
        </div>
        {result !== null && (
          <div style={{background:'#0f172a',borderRadius:'0.5rem',padding:'1rem',textAlign:'center'}}>
            <div style={{color:'#94a3b8',fontSize:'0.75rem',marginBottom:'0.25rem'}}>Result</div>
            <div style={{fontSize:'1.5rem',fontWeight:700,color:'#38bdf8'}}>{result.toPrecision(8).replace(/\.?0+$/, '')}</div>
          </div>
        )}
      </div>
    </main>
  );
}
