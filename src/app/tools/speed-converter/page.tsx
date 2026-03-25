"use client";
import { useState } from 'react';

const units = [
        { value: 'm_s', label: 'Meter/second (m/s)' },
        { value: 'km_h', label: 'Kilometer/hour (km/h)' },
        { value: 'mph', label: 'Miles/hour (mph)' },
        { value: 'ft_s', label: 'Foot/second (ft/s)' },
        { value: 'knot', label: 'Knot (kn)' },
        { value: 'mach', label: 'Mach (at sea level)' },
        { value: 'c', label: 'Speed of light (c)' },
];

function toBaseFn(v: number, from: string): number {
  let toBase = 0;
  switch(from) {
      case 'm_s': toBase = v * 1; break;
      case 'km_h': toBase = v * 0.27777778; break;
      case 'mph': toBase = v * 0.44704; break;
      case 'ft_s': toBase = v * 0.3048; break;
      case 'knot': toBase = v * 0.51444444; break;
      case 'mach': toBase = v * 340.29; break;
      case 'c': toBase = v * 299792458; break;
    default: toBase = v;
  }
  return toBase;
}

function fromBaseFn(base: number, to: string): number {
  switch(to) {
      case 'm_s': return toBase / 1;
      case 'km_h': return toBase / 0.27777778;
      case 'mph': return toBase / 0.44704;
      case 'ft_s': return toBase / 0.3048;
      case 'knot': return toBase / 0.51444444;
      case 'mach': return toBase / 340.29;
      case 'c': return toBase / 299792458;
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
        <h1 style={{fontSize:'1.5rem',fontWeight:700,marginBottom:'0.5rem'}}>Speed Converter</h1>
        <p style={{color:'#94a3b8',marginBottom:'1.5rem',fontSize:'0.875rem'}}>Convert between speed and velocity units.</p>
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
