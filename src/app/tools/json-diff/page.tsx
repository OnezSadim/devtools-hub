"use client";
import { useState } from "react";
export default function JsonDiff() {
  const [left, setLeft] = useState('');
  const [right, setRight] = useState('');
  const [result, setResult] = useState('');
  const diff = () => {
    try {
      const a = JSON.parse(left);
      const b = JSON.parse(right);
      const diffs = [];
      const allKeys = new Set([...Object.keys(a), ...Object.keys(b)]);
      allKeys.forEach(k => {
        const av = JSON.stringify(a[k]);
        const bv = JSON.stringify(b[k]);
        if (av !== bv) diffs.push(`Key "${k}": left=${av}, right=${bv}`);
      });
      setResult(diffs.length ? diffs.join('
') : 'No differences found!');
    } catch(e) { setResult('Invalid JSON: ' + e.message); }
  };
  return (<div style={{padding:'2rem',fontFamily:'monospace',background:'#0f172a',minHeight:'100vh',color:'#e2e8f0'}}>
    <h1 style={{fontSize:'1.5rem',marginBottom:'1rem',color:'#7dd3fc'}}>JSON Diff</h1>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem',marginBottom:'1rem'}}>
      <textarea value={left} onChange={e=>setLeft(e.target.value)} placeholder="Left JSON" style={{height:'200px',padding:'0.5rem',background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:'4px',fontFamily:'monospace',fontSize:'0.85rem'}} />
      <textarea value={right} onChange={e=>setRight(e.target.value)} placeholder="Right JSON" style={{height:'200px',padding:'0.5rem',background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:'4px',fontFamily:'monospace',fontSize:'0.85rem'}} />
    </div>
    <button onClick={diff} style={{padding:'0.5rem 1.5rem',background:'#0ea5e9',color:'white',border:'none',borderRadius:'4px',cursor:'pointer',marginBottom:'1rem'}}>Compare</button>
    {result && <pre style={{background:'#1e293b',padding:'1rem',borderRadius:'4px',whiteSpace:'pre-wrap',color:'#fbbf24'}}>{result}</pre>}
  </div>);
}
