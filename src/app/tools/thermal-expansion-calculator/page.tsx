'use client';
import { useState } from 'react';
export default function ThermalExpansionCalculator() {
  const [length, setLength] = useState('');
  const [alpha, setAlpha] = useState('');
  const [delta, setDelta] = useState('');
  const [result, setResult] = useState<string|null>(null);
  const calc = () => {
    const L = parseFloat(length), a = parseFloat(alpha), dT = parseFloat(delta);
    if (isNaN(L)||isNaN(a)||isNaN(dT)) { setResult('Enter valid values'); return; }
    const dL = L * a * dT;
    setResult('ΔL = ' + dL.toExponential(4) + ' m  |  New length: ' + (L+dL).toFixed(6) + ' m');
  };
  return (
    <main style={{minHeight:'100vh',background:'#0f172a',color:'#f1f5f9',padding:'2rem'}}>
      <h1 style={{fontSize:'2rem',fontWeight:700,marginBottom:'0.5rem'}}>Thermal Expansion Calculator</h1>
      <p style={{color:'#94a3b8',marginBottom:'2rem'}}>Calculate linear expansion: ΔL = L·α·ΔT</p>
      <div style={{background:'#1e293b',borderRadius:'0.75rem',padding:'2rem',maxWidth:'480px'}}>
        <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Original Length (m)</label>
        <input value={length} onChange={e=>setLength(e.target.value)} placeholder="e.g. 1" style={{width:'100%',background:'#0f172a',border:'1px solid #334155',borderRadius:'0.5rem',padding:'0.75rem',color:'#f1f5f9',marginBottom:'1rem'}} />
        <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Coefficient of Expansion α (1/K)</label>
        <input value={alpha} onChange={e=>setAlpha(e.target.value)} placeholder="e.g. 1.2e-5 for steel" style={{width:'100%',background:'#0f172a',border:'1px solid #334155',borderRadius:'0.5rem',padding:'0.75rem',color:'#f1f5f9',marginBottom:'1rem'}} />
        <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Temperature Change ΔT (K)</label>
        <input value={delta} onChange={e=>setDelta(e.target.value)} placeholder="e.g. 100" style={{width:'100%',background:'#0f172a',border:'1px solid #334155',borderRadius:'0.5rem',padding:'0.75rem',color:'#f1f5f9',marginBottom:'1rem'}} />
        <button onClick={calc} style={{width:'100%',background:'#3b82f6',color:'white',border:'none',borderRadius:'0.5rem',padding:'0.75rem',cursor:'pointer',fontWeight:600}}>Calculate</button>
        {result && <div style={{marginTop:'1rem',padding:'1rem',background:'#0f172a',borderRadius:'0.5rem',color:'#34d399',fontWeight:600}}>{result}</div>}
      </div>
    </main>
  );
}
