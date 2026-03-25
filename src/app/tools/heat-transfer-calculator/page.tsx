'use client';
import { useState } from 'react';
export default function HeatTransferCalculator() {
  const [mass, setMass] = useState('');
  const [specific, setSpecific] = useState('');
  const [delta, setDelta] = useState('');
  const [result, setResult] = useState<string|null>(null);
  const calc = () => {
    const m = parseFloat(mass), c = parseFloat(specific), dT = parseFloat(delta);
    if (isNaN(m)||isNaN(c)||isNaN(dT)) { setResult('Enter valid values'); return; }
    setResult('Q = ' + (m*c*dT).toFixed(4) + ' J');
  };
  return (
    <main style={{minHeight:'100vh',background:'#0f172a',color:'#f1f5f9',padding:'2rem'}}>
      <h1 style={{fontSize:'2rem',fontWeight:700,marginBottom:'0.5rem'}}>Heat Transfer Calculator</h1>
      <p style={{color:'#94a3b8',marginBottom:'2rem'}}>Calculate heat transfer using Q = mcΔT</p>
      <div style={{background:'#1e293b',borderRadius:'0.75rem',padding:'2rem',maxWidth:'480px'}}>
        <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Mass (kg)</label>
        <input value={mass} onChange={e=>setMass(e.target.value)} placeholder="e.g. 2" style={{width:'100%',background:'#0f172a',border:'1px solid #334155',borderRadius:'0.5rem',padding:'0.75rem',color:'#f1f5f9',marginBottom:'1rem'}} />
        <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Specific Heat (J/kg·K)</label>
        <input value={specific} onChange={e=>setSpecific(e.target.value)} placeholder="e.g. 4186 for water" style={{width:'100%',background:'#0f172a',border:'1px solid #334155',borderRadius:'0.5rem',padding:'0.75rem',color:'#f1f5f9',marginBottom:'1rem'}} />
        <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Temperature Change ΔT (K)</label>
        <input value={delta} onChange={e=>setDelta(e.target.value)} placeholder="e.g. 10" style={{width:'100%',background:'#0f172a',border:'1px solid #334155',borderRadius:'0.5rem',padding:'0.75rem',color:'#f1f5f9',marginBottom:'1rem'}} />
        <button onClick={calc} style={{width:'100%',background:'#3b82f6',color:'white',border:'none',borderRadius:'0.5rem',padding:'0.75rem',cursor:'pointer',fontWeight:600}}>Calculate</button>
        {result && <div style={{marginTop:'1rem',padding:'1rem',background:'#0f172a',borderRadius:'0.5rem',color:'#34d399',fontWeight:600}}>{result}</div>}
      </div>
    </main>
  );
}
