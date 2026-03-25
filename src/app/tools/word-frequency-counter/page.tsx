"use client";
import { useState } from "react";
export default function WordFrequencyCounter() {
  const [text, setText] = useState('');
  const [minLen, setMinLen] = useState(1);
  const getFreq = () => {
    const words = text.toLowerCase().replace(/[^a-z\s]/g,'').split(/\s+/).filter(w=>w.length>=minLen);
    const freq = {};
    words.forEach(w=>{ freq[w] = (freq[w]||0)+1; });
    return Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,50);
  };
  const freq = text ? getFreq() : [];
  const max = freq[0]?.[1] || 1;
  return (<div style={{padding:'2rem',fontFamily:'monospace',background:'#0f172a',minHeight:'100vh',color:'#e2e8f0'}}>
    <h1 style={{fontSize:'1.5rem',marginBottom:'1rem',color:'#7dd3fc'}}>Word Frequency Counter</h1>
    <div style={{display:'flex',gap:'1rem',marginBottom:'1rem',alignItems:'center'}}>
      <label style={{color:'#94a3b8'}}>Min word length:</label>
      <input type="number" value={minLen} onChange={e=>setMinLen(parseInt(e.target.value)||1)} min={1} max={10} style={{width:'60px',padding:'0.4rem',background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:'4px'}} />
    </div>
    <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Paste text to analyze..." style={{width:'100%',height:'150px',padding:'0.5rem',background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:'4px',fontFamily:'monospace',fontSize:'0.85rem',boxSizing:'border-box',marginBottom:'1rem'}} />
    {freq.map(([word,count])=><div key={word} style={{display:'flex',alignItems:'center',gap:'0.75rem',marginBottom:'0.4rem'}}>
      <span style={{width:'120px',color:'#e2e8f0',overflow:'hidden',textOverflow:'ellipsis'}}>{word}</span>
      <div style={{flex:1,height:'16px',background:'#1e293b',borderRadius:'2px'}}><div style={{width:(count/max*100)+'%',height:'100%',background:'#0ea5e9',borderRadius:'2px'}} /></div>
      <span style={{color:'#7dd3fc',minWidth:'30px',textAlign:'right'}}>{count}</span>
    </div>)}
  </div>);
}
