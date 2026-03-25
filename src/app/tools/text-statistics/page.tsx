"use client";
import { useState } from "react";
export default function TextStatistics() {
  const [text, setText] = useState('');
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s/g,'').length;
  const sentences = text.split(/[.!?]+/).filter(s=>s.trim()).length;
  const paragraphs = text.split(/

+/).filter(p=>p.trim()).length;
  const readTime = Math.ceil(words / 200);
  const stats = [
    { label: 'Words', value: words },
    { label: 'Characters', value: chars },
    { label: 'Chars (no spaces)', value: charsNoSpaces },
    { label: 'Sentences', value: sentences },
    { label: 'Paragraphs', value: paragraphs },
    { label: 'Read time', value: readTime + ' min' },
    { label: 'Lines', value: text.split('
').length },
    { label: 'Avg word length', value: words ? (charsNoSpaces / words).toFixed(1) : 0 },
  ];
  return (<div style={{padding:'2rem',fontFamily:'monospace',background:'#0f172a',minHeight:'100vh',color:'#e2e8f0'}}>
    <h1 style={{fontSize:'1.5rem',marginBottom:'1rem',color:'#7dd3fc'}}>Text Statistics</h1>
    <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Paste your text here..." style={{width:'100%',height:'200px',padding:'0.5rem',background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:'4px',fontFamily:'monospace',fontSize:'0.9rem',boxSizing:'border-box',marginBottom:'1rem'}} />
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:'0.75rem'}}>
      {stats.map(s=><div key={s.label} style={{background:'#1e293b',padding:'1rem',borderRadius:'4px',textAlign:'center'}}><div style={{fontSize:'1.5rem',color:'#7dd3fc',fontWeight:'bold'}}>{s.value}</div><div style={{color:'#94a3b8',fontSize:'0.8rem',marginTop:'0.25rem'}}>{s.label}</div></div>)}
    </div>
  </div>);
}
