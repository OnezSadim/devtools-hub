'use client';
import { useState } from 'react';
export default function Page() {
  const [v, sv] = useState('');
  const [f, sf] = useState('nm');
  const units = {nm: 1, knm: 1000, mnm: 0.001, lbft: 1.35582, lbin: 0.11299, ozin: 0.00706, kgm: 9.80665, kgcm: 0.0980665, gcm: 9.807e-5, dynm: 1e-7};
  const res = Object.entries(units).map(([k, r]) => ({ k, val: (parseFloat(v) * (units[f]||1) / r).toFixed(6) }));
  return (<div style={{padding:'2rem',fontFamily:'monospace',background:'#0f172a',minHeight:'100vh',color:'#e2e8f0'}}><h1 style={{fontSize:'1.5rem',marginBottom:'1rem'}}>Torque Converter</h1><input type='number' value={v} onChange={e=>sv(e.target.value)} placeholder='Enter value' style={{padding:'0.5rem',background:'#1e293b',border:'1px solid #334155',color:'#e2e8f0',borderRadius:'4px',width:'200px',marginRight:'1rem'}}/><select value={f} onChange={e=>sf(e.target.value)} style={{padding:'0.5rem',background:'#1e293b',border:'1px solid #334155',color:'#e2e8f0',borderRadius:'4px'}}><option value='nm'>N·m</option><option value='knm'>kN·m</option><option value='mnm'>mN·m</option><option value='lbft'>lbf·ft</option><option value='lbin'>lbf·in</option><option value='kgm'>kgf·m</option><option value='kgcm'>kgf·cm</option></select><div style={{marginTop:'1rem'}}>{res.map(r=>(<div key={r.k} style={{padding:'0.5rem',background:'#1e293b',margin:'0.25rem 0',borderRadius:'4px'}}>{r.k}: {r.val}</div>))}</div></div>);
}