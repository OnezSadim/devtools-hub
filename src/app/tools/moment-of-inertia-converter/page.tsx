'use client';
import { useState } from 'react';
export default function Page() {
  const [v, sv] = useState('');
  const [f, sf] = useState('kgm2');
  const units = {kgm2: 1, gm2: 0.001, lbft2: 0.04214, lbin2: 0.000293, ozin2: 1.829e-5, kgcm2: 0.0001, gcm2: 1e-7};
  const res = Object.entries(units).map(([k, r]) => ({ k, val: (parseFloat(v) * (units[f]||1) / r).toFixed(8) }));
  return (<div style={{padding:'2rem',fontFamily:'monospace',background:'#0f172a',minHeight:'100vh',color:'#e2e8f0'}}><h1 style={{fontSize:'1.5rem',marginBottom:'1rem'}}>Moment of Inertia Converter</h1><input type='number' value={v} onChange={e=>sv(e.target.value)} placeholder='Enter value' style={{padding:'0.5rem',background:'#1e293b',border:'1px solid #334155',color:'#e2e8f0',borderRadius:'4px',width:'200px',marginRight:'1rem'}}/><select value={f} onChange={e=>sf(e.target.value)} style={{padding:'0.5rem',background:'#1e293b',border:'1px solid #334155',color:'#e2e8f0',borderRadius:'4px'}}><option value='kgm2'>kg·m²</option><option value='gm2'>g·m²</option><option value='lbft2'>lb·ft²</option><option value='lbin2'>lb·in²</option><option value='kgcm2'>kg·cm²</option><option value='gcm2'>g·cm²</option></select><div style={{marginTop:'1rem'}}>{res.map(r=>(<div key={r.k} style={{padding:'0.5rem',background:'#1e293b',margin:'0.25rem 0',borderRadius:'4px'}}>{r.k}: {r.val}</div>))}</div></div>);
}