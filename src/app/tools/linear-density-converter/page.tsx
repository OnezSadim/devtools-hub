'use client';
import { useState } from 'react';
export default function Page() {
  const [v, sv] = useState('');
  const [f, sf] = useState('kgm');
  const units = {kgm: 1, gm: 0.001, lbm: 0.4536, ozm: 0.02835, kgkm: 1e-3, gcm: 0.1, lbft: 1.4882, lbin: 17.858};
  const res = Object.entries(units).map(([k, r]) => ({ k, val: (parseFloat(v) * (units[f]||1) / r).toFixed(6) }));
  return (<div style={{padding:'2rem',fontFamily:'monospace',background:'#0f172a',minHeight:'100vh',color:'#e2e8f0'}}><h1 style={{fontSize:'1.5rem',marginBottom:'1rem'}}>Linear Density Converter</h1><input type='number' value={v} onChange={e=>sv(e.target.value)} placeholder='Enter value' style={{padding:'0.5rem',background:'#1e293b',border:'1px solid #334155',color:'#e2e8f0',borderRadius:'4px',width:'200px',marginRight:'1rem'}}/><select value={f} onChange={e=>sf(e.target.value)} style={{padding:'0.5rem',background:'#1e293b',border:'1px solid #334155',color:'#e2e8f0',borderRadius:'4px'}}><option value='kgm'>kg/m</option><option value='gm'>g/m</option><option value='lbm'>lb/m</option><option value='gcm'>g/cm</option><option value='lbft'>lb/ft</option><option value='lbin'>lb/in</option></select><div style={{marginTop:'1rem'}}>{res.map(r=>(<div key={r.k} style={{padding:'0.5rem',background:'#1e293b',margin:'0.25rem 0',borderRadius:'4px'}}>{r.k}: {r.val}</div>))}</div></div>);
}