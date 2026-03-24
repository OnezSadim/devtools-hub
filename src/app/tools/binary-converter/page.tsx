'use client';
import { useState } from 'react';
export default function BinaryConverter() {
  const [input, setInput] = useState('');
  const [mode, setMode] = useState('textToBin');
  function convert() {
    try {
      if (mode === 'textToBin') {
        return input.split('').map(c=>c.charCodeAt(0).toString(2).padStart(8,'0')).join(' ');
      } else {
        return input.trim().split(/\s+/).map(b=>String.fromCharCode(parseInt(b,2))).join('');
      }
    } catch(e) { return 'Error: ' + e.message; }
  }
  const output = input ? convert() : '';
  return (
    <main style={{minHeight:'100vh',background:'#0f172a',color:'#e2e8f0',padding:'2rem',fontFamily:'sans-serif'}}>
      <h1 style={{fontSize:'2rem',marginBottom:'0.5rem'}}>Binary Converter</h1>
      <p style={{color:'#94a3b8',marginBottom:'2rem'}}>Convert text to binary and back</p>
      <div style={{display:'flex',gap:'1rem',marginBottom:'1.5rem'}}>
        <button onClick={()=>setMode('textToBin')} style={{padding:'0.5rem 1.5rem',background:mode==='textToBin'?'#6366f1':'#1e293b',color:'white',border:'1px solid #334155',borderRadius:'6px',cursor:'pointer'}}>Text to Binary</button>
        <button onClick={()=>setMode('binToText')} style={{padding:'0.5rem 1.5rem',background:mode==='binToText'?'#6366f1':'#1e293b',color:'white',border:'1px solid #334155',borderRadius:'6px',cursor:'pointer'}}>Binary to Text</button>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
        <div>
          <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>{mode==='textToBin'?'Text Input':'Binary Input'}</label>
          <textarea value={input} onChange={e=>setInput(e.target.value)} style={{width:'100%',height:'250px',background:'#1e293b',border:'1px solid #334155',borderRadius:'8px',padding:'1rem',color:'#e2e8f0',fontFamily:'monospace',fontSize:'0.875rem'}} placeholder={mode==='textToBin'?'Hello World':'01001000 01100101 01101100 01101100 01101111'} />
        </div>
        <div>
          <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>{mode==='textToBin'?'Binary Output':'Text Output'}</label>
          <textarea readOnly value={output} style={{width:'100%',height:'250px',background:'#1e293b',border:'1px solid #334155',borderRadius:'8px',padding:'1rem',color:'#10b981',fontFamily:'monospace',fontSize:'0.875rem',wordBreak:'break-all'}} />
        </div>
      </div>
    </main>
  );
}
