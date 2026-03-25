'use client';
import { useState } from 'react';
export default function Page() {
  const [v, sv] = useState('');
  const [f, sf] = useState('am');
  const units = {am: 1, oer: 1/4/Math.PI*1000, kat: 1000, mam: 0.001, aam: 1e-10};
  const res = Object.entries(units).map(([k, r]) => ({ k, val: (parseFloat(v) * (units[f]||1) / r).toFixed(6) }));
  return (<div style={{padding:'2rem',fontFamily:'monospace',background:'#0f172a',minHeight:'100vh',color:'#e2e8f0'}}><h1 style={{fontSize:'1.5rem',marginBottom:'1rem'}}>Magnetic Field Strength Converter</h1><input type='number' value={v} onChange={e=>sv(e.target.value)} placeholder='Enter value' style={{padding:'0.5rem',background:'#1e293b',border:'1px solid #334155',color:'#e2e8f0',borderRadius:'4px',width:'200px',marginRight:'1rem'}}/><select value={f} onChange={e=>sf(e.target.value)} style={{padding:'0.5rem',background:'#1e293b',border:'1px solid #334155',color:'#e2e8f0',borderRadius:'4px'}}><option value='am'>A/m</option><option value='oer'>Oersted</option><option value='kat'>kA/m</option><option value='mam'>mA/m</option></select><div style={{marginTop:'1rem'}}>{res.map(r=>(<div key={r.k} style={{padding:'0.5rem',background:'#1e293b',margin:'0.25rem 0',borderRadius:'4px'}}>{r.k}: {r.val}</div>))}</div></div>);
}