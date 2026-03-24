'use client';
import { useState } from 'react';
export default function HtmlEntityEncoder() {
  const [input, setInput] = useState('');
  const [mode, setMode] = useState('encode');
  function process() {
    if (mode === 'encode') {
      return input.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
    } else {
      return input.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&#(\d+);/g,(_,n)=>String.fromCharCode(n));
    }
  }
  const output = input ? process() : '';
  return (
    <main style={{minHeight:'100vh',background:'#0f172a',color:'#e2e8f0',padding:'2rem',fontFamily:'sans-serif'}}>
      <h1 style={{fontSize:'2rem',marginBottom:'0.5rem'}}>HTML Entity Encoder</h1>
      <p style={{color:'#94a3b8',marginBottom:'2rem'}}>Encode and decode HTML entities</p>
      <div style={{display:'flex',gap:'1rem',marginBottom:'1.5rem'}}>
        {['encode','decode'].map(m=><button key={m} onClick={()=>setMode(m)} style={{padding:'0.5rem 1.5rem',background:mode===m?'#6366f1':'#1e293b',color:'white',border:'1px solid #334155',borderRadius:'6px',cursor:'pointer'}}>{m.charAt(0).toUpperCase()+m.slice(1)}</button>)}
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
        <div>
          <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Input</label>
          <textarea value={input} onChange={e=>setInput(e.target.value)} style={{width:'100%',height:'250px',background:'#1e293b',border:'1px solid #334155',borderRadius:'8px',padding:'1rem',color:'#e2e8f0',fontFamily:'monospace',fontSize:'0.875rem'}} placeholder={mode==='encode'?'<p>Hello & "World"</p>':'&lt;p&gt;Hello &amp; &quot;World&quot;&lt;/p&gt;'} />
        </div>
        <div>
          <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Output</label>
          <textarea readOnly value={output} style={{width:'100%',height:'250px',background:'#1e293b',border:'1px solid #334155',borderRadius:'8px',padding:'1rem',color:'#10b981',fontFamily:'monospace',fontSize:'0.875rem'}} />
        </div>
      </div>
    </main>
  );
}
