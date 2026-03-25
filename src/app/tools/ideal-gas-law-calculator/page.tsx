'use client';
import { useState } from 'react';
export default function IdealGasLawCalculator() {
  const [P, setP] = useState('');
  const [V, setV] = useState('');
  const [n, setN] = useState('');
  const [T, setTv] = useState('');
  const [solve, setSolve] = useState('P');
  const [result, setResult] = useState<string|null>(null);
  const R = 8.314;
  const calc = () => {
    const pv = parseFloat(P), vv = parseFloat(V), nv = parseFloat(n), tv = parseFloat(T);
    if (solve === 'P') { if (isNaN(vv)||isNaN(nv)||isNaN(tv)) { setResult('Enter V, n, T'); return; } setResult('P = ' + (nv*R*tv/vv).toFixed(4) + ' Pa'); }
    else if (solve === 'V') { if (isNaN(pv)||isNaN(nv)||isNaN(tv)) { setResult('Enter P, n, T'); return; } setResult('V = ' + (nv*R*tv/pv).toFixed(6) + ' m³'); }
    else if (solve === 'n') { if (isNaN(pv)||isNaN(vv)||isNaN(tv)) { setResult('Enter P, V, T'); return; } setResult('n = ' + (pv*vv/(R*tv)).toFixed(6) + ' mol'); }
    else { if (isNaN(pv)||isNaN(vv)||isNaN(nv)) { setResult('Enter P, V, n'); return; } setResult('T = ' + (pv*vv/(nv*R)).toFixed(4) + ' K'); }
  };
  return (
    <main style={{minHeight:'100vh',background:'#0f172a',color:'#f1f5f9',padding:'2rem'}}>
      <h1 style={{fontSize:'2rem',fontWeight:700,marginBottom:'0.5rem'}}>Ideal Gas Law Calculator</h1>
      <p style={{color:'#94a3b8',marginBottom:'2rem'}}>PV = nRT — solve for any variable</p>
      <div style={{background:'#1e293b',borderRadius:'0.75rem',padding:'2rem',maxWidth:'480px'}}>
        <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Solve for</label>
        <select value={solve} onChange={e=>setSolve(e.target.value)} style={{width:'100%',background:'#0f172a',border:'1px solid #334155',borderRadius:'0.5rem',padding:'0.75rem',color:'#f1f5f9',marginBottom:'1rem'}}>
          <option value="P">Pressure (P)</option>
          <option value="V">Volume (V)</option>
          <option value="n">Moles (n)</option>
          <option value="T">Temperature (T)</option>
        </select>
        {solve !== 'P' && <><label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Pressure (Pa)</label><input value={P} onChange={e=>setP(e.target.value)} placeholder="e.g. 101325" style={{width:'100%',background:'#0f172a',border:'1px solid #334155',borderRadius:'0.5rem',padding:'0.75rem',color:'#f1f5f9',marginBottom:'1rem'}} /></>}
        {solve !== 'V' && <><label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Volume (m³)</label><input value={V} onChange={e=>setV(e.target.value)} placeholder="e.g. 0.0224" style={{width:'100%',background:'#0f172a',border:'1px solid #334155',borderRadius:'0.5rem',padding:'0.75rem',color:'#f1f5f9',marginBottom:'1rem'}} /></>}
        {solve !== 'n' && <><label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Moles (n)</label><input value={n} onChange={e=>setN(e.target.value)} placeholder="e.g. 1" style={{width:'100%',background:'#0f172a',border:'1px solid #334155',borderRadius:'0.5rem',padding:'0.75rem',color:'#f1f5f9',marginBottom:'1rem'}} /></>}
        {solve !== 'T' && <><label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Temperature (K)</label><input value={T} onChange={e=>setTv(e.target.value)} placeholder="e.g. 273.15" style={{width:'100%',background:'#0f172a',border:'1px solid #334155',borderRadius:'0.5rem',padding:'0.75rem',color:'#f1f5f9',marginBottom:'1rem'}} /></>}
        <button onClick={calc} style={{width:'100%',background:'#3b82f6',color:'white',border:'none',borderRadius:'0.5rem',padding:'0.75rem',cursor:'pointer',fontWeight:600}}>Calculate</button>
        {result && <div style={{marginTop:'1rem',padding:'1rem',background:'#0f172a',borderRadius:'0.5rem',color:'#34d399',fontWeight:600}}>{result}</div>}
      </div>
    </main>
  );
}
