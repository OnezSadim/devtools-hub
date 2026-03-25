'use client';
import { useState } from 'react';

const units = [
  { label: "Degrees", factor: 1 },
  { label: "Radians", factor: 57.29577951308232 },
  { label: "Gradians", factor: 0.9 },
  { label: "Arcminutes", factor: 0.016666666666667 },
  { label: "Arcseconds", factor: 0.0002777777777778 },
  { label: "Milliradians", factor: 0.057295779513082 },
];

export default function Page() {
  const [value, setValue] = useState('1');
  const [from, setFrom] = useState('Degrees');
  const [to, setTo] = useState('Radians');

  const convert = () => {
    const v = parseFloat(value);
    if (isNaN(v)) return '';
    const fromUnit = units.find(u => u.label === from);
    const toUnit = units.find(u => u.label === to);
    if (!fromUnit || !toUnit) return '';
    const result = v * fromUnit.factor / toUnit.factor;
    return parseFloat(result.toPrecision(10)).toString();
  };

  return (
    <main style={{minHeight:'100vh',background:'#0f172a',color:'#f1f5f9',padding:'2rem',fontFamily:'sans-serif',maxWidth:'600px',margin:'0 auto'}}>
      <h1 style={{fontSize:'1.8rem',fontWeight:'bold',marginBottom:'0.5rem',color:'#38bdf8'}}>Angle Converter</h1>
      <p style={{color:'#94a3b8',marginBottom:'2rem'}}>Convert between degrees, radians, gradians, arcminutes and arcseconds.</p>
      <div style={{background:'#1e293b',borderRadius:'12px',padding:'1.5rem',display:'flex',flexDirection:'column',gap:'1rem'}}>
        <div>
          <label style={{display:'block',color:'#94a3b8',marginBottom:'0.5rem',fontSize:'0.875rem'}}>Value</label>
          <input type="number" value={value} onChange={e => setValue(e.target.value)} style={{width:'100%',background:'#0f172a',border:'1px solid #334155',borderRadius:'8px',padding:'0.75rem',color:'#f1f5f9',fontSize:'1rem',boxSizing:'border-box'}} />
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
          <div>
            <label style={{display:'block',color:'#94a3b8',marginBottom:'0.5rem',fontSize:'0.875rem'}}>From</label>
            <select value={from} onChange={e => setFrom(e.target.value)} style={{width:'100%',background:'#0f172a',border:'1px solid #334155',borderRadius:'8px',padding:'0.75rem',color:'#f1f5f9',fontSize:'0.9rem'}}>
              {units.map(u => <option key={u.label} value={u.label}>{u.label}</option>)}
            </select>
          </div>
          <div>
            <label style={{display:'block',color:'#94a3b8',marginBottom:'0.5rem',fontSize:'0.875rem'}}>To</label>
            <select value={to} onChange={e => setTo(e.target.value)} style={{width:'100%',background:'#0f172a',border:'1px solid #334155',borderRadius:'8px',padding:'0.75rem',color:'#f1f5f9',fontSize:'0.9rem'}}>
              {units.map(u => <option key={u.label} value={u.label}>{u.label}</option>)}
            </select>
          </div>
        </div>
        <div style={{background:'#0f172a',borderRadius:'8px',padding:'1rem',border:'1px solid #334155'}}>
          <div style={{color:'#94a3b8',fontSize:'0.875rem',marginBottom:'0.25rem'}}>Result</div>
          <div style={{fontSize:'1.5rem',fontWeight:'bold',color:'#34d399'}}>{convert()} <span style={{fontSize:'1rem',color:'#94a3b8'}}>{to}</span></div>
        </div>
      </div>
    </main>
  );
}
