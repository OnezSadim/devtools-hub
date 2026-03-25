"use client";
import { useState } from 'react';

const units = [
        { value: 'j', label: 'Joule (J)' },
        { value: 'kj', label: 'Kilojoule (kJ)' },
        { value: 'mj', label: 'Megajoule (MJ)' },
        { value: 'cal', label: 'Calorie (cal)' },
        { value: 'kcal', label: 'Kilocalorie (kcal)' },
        { value: 'kwh', label: 'Kilowatt-hour (kWh)' },
        { value: 'btu', label: 'BTU' },
        { value: 'ev', label: 'Electron-volt (eV)' },
        { value: 'erg', label: 'Erg' },
];

function toBaseFn(v: number, from: string): number {
  let toBase = 0;
  switch(from) {
      case 'j': toBase = v * 1; break;
      case 'kj': toBase = v * 1000.0; break;
      case 'mj': toBase = v * 1000000.0; break;
      case 'cal': toBase = v * 4.1868; break;
      case 'kcal': toBase = v * 4186.8; break;
      case 'kwh': toBase = v * 3600000.0; break;
      case 'btu': toBase = v * 1055.05585; break;
      case 'ev': toBase = v * 1.602176634e-19; break;
      case 'erg': toBase = v * 1e-07; break;
    default: toBase = v;
  }
  return toBase;
}

function fromBaseFn(base: number, to: string): number {
  switch(to) {
      case 'j': return toBase / 1;
      case 'kj': return toBase / 1000.0;
      case 'mj': return toBase / 1000000.0;
      case 'cal': return toBase / 4.1868;
      case 'kcal': return toBase / 4186.8;
      case 'kwh': return toBase / 3600000.0;
      case 'btu': return toBase / 1055.05585;
      case 'ev': return toBase / 1.602176634e-19;
      case 'erg': return toBase / 1e-07;
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
        <h1 style={{fontSize:'1.5rem',fontWeight:700,marginBottom:'0.5rem'}}>Energy Converter</h1>
        <p style={{color:'#94a3b8',marginBottom:'1.5rem',fontSize:'0.875rem'}}>Convert between energy and work units.</p>
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
