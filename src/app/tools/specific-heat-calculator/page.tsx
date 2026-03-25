'use client';
import { useState } from 'react';
export default function SpecificHeatCalculator() {
  const [Q, setQ] = useState('');
  const [mass, setMass] = useState('');
  const [delta, setDelta] = useState('');
  const [result, setResult] = useState<string|null>(null);
  const calc = () => {
    const q = parseFloat(Q), m = parseFloat(mass), dT = parseFloat(delta);
    if (isNaN(q)||isNaN(m)||isNaN(dT)||m===0||dT===0) { setResult('Enter valid non-zero values'); return; }
    const c = q / (m * dT);
    setResult('c = ' + c.toFixed(4) + ' J/(kg·K)');
  };
  return (
    <main style={{minHeight:'100vh',background:'#0f172a',color:'#f1f5f9',padding:'2rem'}}>
      <h1 style={{fontSize:'2rem',fontWeight:700,marginBottom:'0.5rem'}}>Specific Heat Calculator</h1>
      <p style={{color:'#94a3b8',marginBottom:'2rem'}}>Find specific heat: c = Q / (m·ΔT)</p>
      <div style={{background:'#1e293b',borderRadius:'0.75rem',padding:'2rem',maxWidth:'480px'}}>
        <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Heat Added Q (J)</label>
        <input value={Q} onChange={e=>setQ(e.target.value)} placeholder="e.g. 4186" style={{width:'100%',background:'#0f172a',border:'1px solid #334155',borderRadius:'0.5rem',padding:'0.75rem',color:'#f1f5f9',marginBottom:'1rem'}} />
        <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Mass (kg)</label>
        <input value={mass} onChange={e=>setMass(e.target.value)} placeholder="e.g. 1" style={{width:'100%',background:'#0f172a',border:'1px solid #334155',borderRadius:'0.5rem',padding:'0.75rem',color:'#f1f5f9',marginBottom:'1rem'}} />
        <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Temperature Change ΔT (K)</label>
        <input value={delta} onChange={e=>setDelta(e.target.value)} placeholder="e.g. 1" style={{width:'100%',background:'#0f172a',border:'1px solid #334155',borderRadius:'0.5rem',padding:'0.75rem',color:'#f1f5f9',marginBottom:'1rem'}} />
        <button onClick={calc} style={{width:'100%',background:'#3b82f6',color:'white',border:'none',borderRadius:'0.5rem',padding:'0.75rem',cursor:'pointer',fontWeight:600}}>Calculate</button>
        {result && <div style={{marginTop:'1rem',padding:'1rem',background:'#0f172a',borderRadius:'0.5rem',color:'#34d399',fontWeight:600}}>{result}</div>}
      </div>
    </main>
  );
}
