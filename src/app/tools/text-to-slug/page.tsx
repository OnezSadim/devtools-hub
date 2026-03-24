'use client';
import { useState } from 'react';
export default function TextToSlug() {
  const [input, setInput] = useState('');
  const toSlug = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9\s-]/g,'').trim().replace(/[\s]+/g,'-').replace(/-+/g,'-');
  const slug = toSlug(input);
  return (
    <main style={{minHeight:'100vh',background:'#0f172a',color:'#e2e8f0',padding:'2rem',fontFamily:'sans-serif'}}>
      <h1 style={{fontSize:'2rem',marginBottom:'0.5rem'}}>Text to Slug</h1>
      <p style={{color:'#94a3b8',marginBottom:'2rem'}}>Convert text to URL-friendly slugs</p>
      <div style={{maxWidth:'600px'}}>
        <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Input Text</label>
        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="My Blog Post Title!" style={{width:'100%',background:'#1e293b',border:'1px solid #334155',borderRadius:'8px',padding:'0.75rem',color:'#e2e8f0',fontSize:'1rem',marginBottom:'1.5rem'}} />
        <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Slug Output</label>
        <div style={{background:'#1e293b',border:'1px solid #334155',borderRadius:'8px',padding:'0.75rem',color:'#10b981',fontFamily:'monospace',fontSize:'1rem',marginBottom:'1rem',minHeight:'3rem'}}>{slug || <span style={{color:'#475569'}}>slug-will-appear-here</span>}</div>
        <button onClick={()=>navigator.clipboard.writeText(slug)} disabled={!slug} style={{padding:'0.75rem 2rem',background:slug?'#6366f1':'#334155',color:'white',border:'none',borderRadius:'8px',cursor:slug?'pointer':'default'}}>Copy Slug</button>
      </div>
    </main>
  );
}
