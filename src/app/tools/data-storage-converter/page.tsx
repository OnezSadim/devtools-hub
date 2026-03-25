'use client';
import { useState } from 'react';

const units = [
  { label: "Bits", factor: 1 },
  { label: "Bytes", factor: 8 },
  { label: "Kilobytes (KB)", factor: 8000 },
  { label: "Megabytes (MB)", factor: 8000000 },
  { label: "Gigabytes (GB)", factor: 8000000000 },
  { label: "Terabytes (TB)", factor: 8000000000000 },
  { label: "Petabytes (PB)", factor: 8000000000000000 },
  { label: "Kibibytes (KiB)", factor: 8192 },
  { label: "Mebibytes (MiB)", factor: 8388608 },
  { label: "Gibibytes (GiB)", factor: 8589934592 },
];

export default function Page() {
  const [value, setValue] = useState('1');
  const [from, setFrom] = useState('Bits');
  const [to, setTo] = useState('Bytes');

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
      <h1 style={{fontSize:'1.8rem',fontWeight:'bold',marginBottom:'0.5rem',color:'#38bdf8'}}>Data Storage Converter</h1>
      <p style={{color:'#94a3b8',marginBottom:'2rem'}}>Convert between bits, bytes, kilobytes, megabytes, gigabytes and terabytes.</p>
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
