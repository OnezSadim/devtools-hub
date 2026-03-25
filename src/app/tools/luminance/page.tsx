'use client';
import { useState } from 'react';

const toBase: Record<string, number> = {
    "Candela/m² (cd/m²)": 1,
    "Nit (nt)": 1,
    "Foot-lambert (fL)": 3.42626,
    "Millinit (mnt)": 0.001,
    "Stilb (sb)": 10000,
};

export default function Page() {
  const [val, setVal] = useState('');
  const [from, setFrom] = useState(Object.keys(toBase)[0]);
  const [to, setTo] = useState(Object.keys(toBase)[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return 'Invalid input';
    return ((n * toBase[from]) / toBase[to]).toPrecision(8);
  };
  return (
    <main style={{minHeight:'100vh',background:'#0f172a',color:'#f1f5f9',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'monospace'}}>
      <div style={{background:'#1e293b',padding:'2rem',borderRadius:'1rem',width:'100%',maxWidth:'480px'}}>
        <h1 style={{fontSize:'1.4rem',fontWeight:'bold',marginBottom:'0.5rem'}}>Luminance Converter</h1>
        <p style={{color:'#94a3b8',marginBottom:'1.5rem',fontSize:'0.9rem'}}>Convert between Candela per square meter, Nit, and Foot-lambert</p>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:'100%',padding:'0.75rem',background:'#0f172a',border:'1px solid #334155',borderRadius:'0.5rem',color:'#f1f5f9',fontSize:'1rem',marginBottom:'1rem',boxSizing:'border-box'}}/>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem',marginBottom:'1rem'}}>
          <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:'0.75rem',background:'#0f172a',border:'1px solid #334155',borderRadius:'0.5rem',color:'#f1f5f9'}}>
              <option value="Candela/m² (cd/m²)">Candela/m² (cd/m²)</option>
              <option value="Nit (nt)">Nit (nt)</option>
              <option value="Foot-lambert (fL)">Foot-lambert (fL)</option>
              <option value="Millinit (mnt)">Millinit (mnt)</option>
              <option value="Stilb (sb)">Stilb (sb)</option>
          </select>
          <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:'0.75rem',background:'#0f172a',border:'1px solid #334155',borderRadius:'0.5rem',color:'#f1f5f9'}}>
              <option value="Candela/m² (cd/m²)">Candela/m² (cd/m²)</option>
              <option value="Nit (nt)">Nit (nt)</option>
              <option value="Foot-lambert (fL)">Foot-lambert (fL)</option>
              <option value="Millinit (mnt)">Millinit (mnt)</option>
              <option value="Stilb (sb)">Stilb (sb)</option>
          </select>
        </div>
        {val && <div style={{background:'#0f172a',padding:'1rem',borderRadius:'0.5rem',textAlign:'center',fontSize:'1.2rem',color:'#38bdf8'}}>{val} {from} = <strong>{convert()}</strong> {to}</div>}
      </div>
    </main>
  );
}
