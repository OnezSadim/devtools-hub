'use client';
import { useState } from 'react';
export default function CarnotEfficiencyCalculator() {
  const [Th, setTh] = useState('');
  const [Tc, setTc] = useState('');
  const [result, setResult] = useState<string|null>(null);
  const calc = () => {
    const h = parseFloat(Th), c = parseFloat(Tc);
    if (isNaN(h)||isNaN(c)||c<=0||h<=c) { setResult('T_hot must be greater than T_cold (both in Kelvin)'); return; }
    const eff = (1 - c/h) * 100;
    setResult('η = ' + eff.toFixed(2) + '%  (max theoretical efficiency)');
  };
  return (
    <main style={{minHeight:'100vh',background:'#0f172a',color:'#f1f5f9',padding:'2rem'}}>
      <h1 style={{fontSize:'2rem',fontWeight:700,marginBottom:'0.5rem'}}>Carnot Efficiency Calculator</h1>
      <p style={{color:'#94a3b8',marginBottom:'2rem'}}>Maximum heat engine efficiency: η = 1 − T_cold/T_hot</p>
      <div style={{background:'#1e293b',borderRadius:'0.75rem',padding:'2rem',maxWidth:'480px'}}>
        <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Hot Reservoir Temperature T_hot (K)</label>
        <input value={Th} onChange={e=>setTh(e.target.value)} placeholder="e.g. 600" style={{width:'100%',background:'#0f172a',border:'1px solid #334155',borderRadius:'0.5rem',padding:'0.75rem',color:'#f1f5f9',marginBottom:'1rem'}} />
        <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Cold Reservoir Temperature T_cold (K)</label>
        <input value={Tc} onChange={e=>setTc(e.target.value)} placeholder="e.g. 300" style={{width:'100%',background:'#0f172a',border:'1px solid #334155',borderRadius:'0.5rem',padding:'0.75rem',color:'#f1f5f9',marginBottom:'1rem'}} />
        <button onClick={calc} style={{width:'100%',background:'#3b82f6',color:'white',border:'none',borderRadius:'0.5rem',padding:'0.75rem',cursor:'pointer',fontWeight:600}}>Calculate</button>
        {result && <div style={{marginTop:'1rem',padding:'1rem',background:'#0f172a',borderRadius:'0.5rem',color:'#34d399',fontWeight:600}}>{result}</div>}
      </div>
    </main>
  );
}
