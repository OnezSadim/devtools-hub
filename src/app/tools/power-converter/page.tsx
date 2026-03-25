"use client";
import { useState } from 'react';

const units = [
        { value: 'w', label: 'Watt (W)' },
        { value: 'kw', label: 'Kilowatt (kW)' },
        { value: 'mw', label: 'Megawatt (MW)' },
        { value: 'hp', label: 'Horsepower (hp)' },
        { value: 'btu_hr', label: 'BTU/hour' },
        { value: 'cal_s', label: 'Calorie/second' },
        { value: 'ft_lb_s', label: 'ft·lbf/s' },
        { value: 'erg_s', label: 'Erg/second' },
];

function toBaseFn(v: number, from: string): number {
  let toBase = 0;
  switch(from) {
      case 'w': toBase = v * 1; break;
      case 'kw': toBase = v * 1000.0; break;
      case 'mw': toBase = v * 1000000.0; break;
      case 'hp': toBase = v * 745.69987; break;
      case 'btu_hr': toBase = v * 0.29307107; break;
      case 'cal_s': toBase = v * 4.1868; break;
      case 'ft_lb_s': toBase = v * 1.35582; break;
      case 'erg_s': toBase = v * 1e-07; break;
    default: toBase = v;
  }
  return toBase;
}

function fromBaseFn(base: number, to: string): number {
  switch(to) {
      case 'w': return toBase / 1;
      case 'kw': return toBase / 1000.0;
      case 'mw': return toBase / 1000000.0;
      case 'hp': return toBase / 745.69987;
      case 'btu_hr': return toBase / 0.29307107;
      case 'cal_s': return toBase / 4.1868;
      case 'ft_lb_s': return toBase / 1.35582;
      case 'erg_s': return toBase / 1e-07;
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
        <h1 style={{fontSize:'1.5rem',fontWeight:700,marginBottom:'0.5rem'}}>Power Converter</h1>
        <p style={{color:'#94a3b8',marginBottom:'1.5rem',fontSize:'0.875rem'}}>Convert between power units.</p>
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
