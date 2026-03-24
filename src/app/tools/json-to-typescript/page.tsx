'use client';
import { useState } from 'react';
export default function JsonToTypescript() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  function jsonToTs(obj, name = 'Root') {
    if (obj === null) return 'null';
    const t = typeof obj;
    if (t !== 'object') return t;
    if (Array.isArray(obj)) {
      const item = obj[0];
      return item && typeof item === 'object' ? jsonToTs(item, name + 'Item') + '[]' : (typeof item) + '[]';
    }
    const lines = ['interface ' + name + ' {'];
    const nested = [];
    for (const [k, v] of Object.entries(obj)) {
      if (v === null) { lines.push('  ' + k + ': null;'); }
      else if (Array.isArray(v)) {
        const item = v[0];
        if (item && typeof item === 'object') { lines.push('  ' + k + ': ' + k.charAt(0).toUpperCase() + k.slice(1) + 'Item[];'); nested.push(jsonToTs(item, k.charAt(0).toUpperCase() + k.slice(1) + 'Item')); }
        else { lines.push('  ' + k + ': ' + (typeof item) + '[];'); }
      } else if (typeof v === 'object') {
        const cn = k.charAt(0).toUpperCase() + k.slice(1);
        lines.push('  ' + k + ': ' + cn + ';');
        nested.push(jsonToTs(v, cn));
      } else { lines.push('  ' + k + ': ' + typeof v + ';'); }
    }
    lines.push('}');
    return [...nested, lines.join('
')].join('

');
  }
  function convert() {
    try {
      const parsed = JSON.parse(input);
      setOutput(jsonToTs(parsed));
      setError('');
    } catch(e) { setError('Invalid JSON: ' + e.message); setOutput(''); }
  }
  return (
    <main style={{minHeight:'100vh',background:'#0f172a',color:'#e2e8f0',padding:'2rem',fontFamily:'monospace'}}>
      <h1 style={{fontSize:'2rem',marginBottom:'0.5rem'}}>JSON to TypeScript</h1>
      <p style={{color:'#94a3b8',marginBottom:'2rem'}}>Convert JSON objects to TypeScript interfaces</p>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
        <div>
          <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>JSON Input</label>
          <textarea value={input} onChange={e=>setInput(e.target.value)} style={{width:'100%',height:'300px',background:'#1e293b',border:'1px solid #334155',borderRadius:'8px',padding:'1rem',color:'#e2e8f0',fontFamily:'monospace',fontSize:'0.875rem'}} placeholder='{"name":"Alice","age":30}' />
        </div>
        <div>
          <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>TypeScript Output</label>
          <textarea readOnly value={output} style={{width:'100%',height:'300px',background:'#1e293b',border:'1px solid #334155',borderRadius:'8px',padding:'1rem',color:'#10b981',fontFamily:'monospace',fontSize:'0.875rem'}} />
        </div>
      </div>
      {error && <p style={{color:'#f87171',marginTop:'1rem'}}>{error}</p>}
      <button onClick={convert} style={{marginTop:'1rem',padding:'0.75rem 2rem',background:'#6366f1',color:'white',border:'none',borderRadius:'8px',cursor:'pointer',fontSize:'1rem'}}>Convert</button>
    </main>
  );
}
