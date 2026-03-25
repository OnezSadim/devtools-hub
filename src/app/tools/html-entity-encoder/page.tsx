'''use client'''
import { useState } from 'react';

export default function HtmlEntityEncoder() {
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<'encode'|'decode'>('encode');

  const encode = (s: string) => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  const decode = (s: string) => s.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&#(\d+);/g,(_,n)=>String.fromCharCode(parseInt(n))).replace(/&#x([0-9a-fA-F]+);/g,(_,h)=>String.fromCharCode(parseInt(h,16)));

  const output = mode === 'encode' ? encode(input) : decode(input);

  return (
    <main style={{minHeight:'100vh',background:'#0f172a',color:'#e2e8f0',fontFamily:'monospace',padding:'2rem'}}>
      <h1 style={{fontSize:'2rem',fontWeight:'bold',marginBottom:'0.5rem',color:'#38bdf8'}}>HTML Entity Encoder</h1>
      <p style={{color:'#94a3b8',marginBottom:'2rem'}}>Encode and decode HTML entities in text.</p>
      <div style={{display:'flex',gap:'1rem',marginBottom:'1.5rem'}}>
        {(['encode','decode'] as const).map(m => (
          <button key={m} onClick={() => setMode(m)} style={{background:mode===m?'#0ea5e9':'#1e293b',border:'1px solid #334155',borderRadius:'6px',padding:'0.5rem 1.5rem',color:mode===m?'#fff':'#94a3b8',cursor:'pointer',textTransform:'capitalize'}}>{m}</button>
        ))}
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.5rem'}}>
        <div>
          <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Input</label>
          <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Enter text..." style={{width:'100%',minHeight:'200px',background:'#1e293b',border:'1px solid #334155',borderRadius:'8px',padding:'0.75rem',color:'#e2e8f0',fontSize:'0.9rem',boxSizing:'border-box'}} />
        </div>
        <div>
          <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Output</label>
          <textarea readOnly value={output} style={{width:'100%',minHeight:'200px',background:'#0f172a',border:'1px solid #334155',borderRadius:'8px',padding:'0.75rem',color:'#4ade80',fontSize:'0.9rem',boxSizing:'border-box'}} />
          <button onClick={() => navigator.clipboard.writeText(output)} style={{marginTop:'0.5rem',background:'#0ea5e9',border:'none',borderRadius:'6px',padding:'0.5rem 1.5rem',color:'#fff',cursor:'pointer'}}>Copy</button>
        </div>
      </div>
    </main>
  );
}
