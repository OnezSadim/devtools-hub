'use client';
import { useState } from 'react';
export default function Page() {
  const [v, sv] = useState('');
  const [f, sf] = useState('vm');
  const units = {vm: 1, vkm: 1e-3, vcm: 100, vmm: 1000, kvm: 1e-3, mvc: 1e6, nc: 1e-9/8.85e-12};
  const res = Object.entries(units).map(([k, r]) => ({ k, val: (parseFloat(v) * (units[f]||1) / r).toFixed(6) }));
  return (<div style={{padding:'2rem',fontFamily:'monospace',background:'#0f172a',minHeight:'100vh',color:'#e2e8f0'}}><h1 style={{fontSize:'1.5rem',marginBottom:'1rem'}}>Electric Field Strength Converter</h1><input type='number' value={v} onChange={e=>sv(e.target.value)} placeholder='Enter value' style={{padding:'0.5rem',background:'#1e293b',border:'1px solid #334155',color:'#e2e8f0',borderRadius:'4px',width:'200px',marginRight:'1rem'}}/><select value={f} onChange={e=>sf(e.target.value)} style={{padding:'0.5rem',background:'#1e293b',border:'1px solid #334155',color:'#e2e8f0',borderRadius:'4px'}}><option value='vm'>V/m</option><option value='vkm'>V/km</option><option value='vcm'>V/cm</option><option value='vmm'>V/mm</option><option value='kvm'>kV/m</option><option value='mvc'>MV/m</option></select><div style={{marginTop:'1rem'}}>{res.map(r=>(<div key={r.k} style={{padding:'0.5rem',background:'#1e293b',margin:'0.25rem 0',borderRadius:'4px'}}>{r.k}: {r.val}</div>))}</div></div>);
}