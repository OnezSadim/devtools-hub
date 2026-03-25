"use client";
import { useState } from "react";
export default function SvgOptimizer() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [stats, setStats] = useState(null);
  function optimize() {
    let r = input;
    r = r.replace(/<!--[\s\S]*?-->/g, '');
    r = r.replace(/<\?xml[^>]*\?>/g, '');
    r = r.replace(/<!DOCTYPE[^>]*>/g, '');
    r = r.replace(/\s+/g, ' ');
    r = r.replace(/> </g, '><');
    r = r.replace(/ (fill|stroke|style)="none"/g, '');
    r = r.replace(/\b(\d+)\.0+\b/g, '$1');
    r = r.replace(/\b0\.(\d+)/g, '.$1');
    r = r.trim();
    setOutput(r);
    setStats({before: input.length, after: r.length, savings: ((1-r.length/input.length)*100).toFixed(1)});
  }
  return (
    <div style={{maxWidth:900,margin:'0 auto',padding:'2rem',fontFamily:'monospace',background:'#0f172a',minHeight:'100vh',color:'#e2e8f0'}}>
      <h1 style={{fontSize:'1.8rem',fontWeight:700,marginBottom:'0.5rem'}}>SVG Optimizer</h1>
      <p style={{color:'#94a3b8',marginBottom:'1.5rem'}}>Reduce SVG file size by removing unnecessary data.</p>
      <button onClick={optimize} style={{background:'#3b82f6',color:'#fff',border:'none',borderRadius:6,padding:'0.75rem 2rem',fontSize:'1rem',cursor:'pointer',marginBottom:'1rem'}}>Optimize</button>
      {stats && <div style={{background:'#1e293b',borderRadius:6,padding:'0.75rem 1rem',marginBottom:'1rem',display:'flex',gap:'2rem'}}>
        <span>Before: <strong style={{color:'#f87171'}}>{stats.before} bytes</strong></span>
        <span>After: <strong style={{color:'#4ade80'}}>{stats.after} bytes</strong></span>
        <span>Savings: <strong style={{color:'#60a5fa'}}>{stats.savings}%</strong></span>
      </div>}
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
        <div>
          <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Input SVG:</label>
          <textarea value={input} onChange={e=>setInput(e.target.value)} rows={16} placeholder="<svg xmlns='http://www.w3.org/2000/svg'>...</svg>" style={{width:'100%',background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:6,padding:'0.75rem',fontSize:'0.85rem',boxSizing:'border-box'}} />
        </div>
        <div>
          <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Optimized SVG:</label>
          <textarea value={output} readOnly rows={16} style={{width:'100%',background:'#1e293b',color:'#a3e635',border:'1px solid #334155',borderRadius:6,padding:'0.75rem',fontSize:'0.85rem',boxSizing:'border-box'}} />
        </div>
      </div>
    </div>
  );
}