"use client";
import { useState } from "react";
export default function WordFrequencyCounter() {
  const [text, setText] = useState("");
  const counts = text.trim() ? Object.entries(
    text.toLowerCase().match(/\b\w+\b/g)?.reduce((a,w)=>({...a,[w]:(a[w]||0)+1}),{}) || {}
  ).sort((a,b)=>b[1]-a[1]) : [];
  return (<div style={{padding:24,fontFamily:'monospace',background:'#0a0a0a',minHeight:'100vh',color:'#e5e5e5'}}>
    <h1 style={{fontSize:28,marginBottom:8}}>Word Frequency Counter</h1>
    <p style={{color:'#888',marginBottom:20}}>Count how often each word appears in your text.</p>
    <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Paste your text here..." style={{width:'100%',height:160,background:'#111',color:'#e5e5e5',border:'1px solid #333',borderRadius:8,padding:12,fontSize:14,boxSizing:'border-box'}} />
    {counts.length>0 && <div style={{marginTop:20}}>
      <h3 style={{marginBottom:12}}>Results ({counts.length} unique words)</h3>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:8}}>
        {counts.slice(0,50).map(([w,c])=>(
          <div key={w} style={{background:'#111',border:'1px solid #333',borderRadius:6,padding:'8px 12px',display:'flex',justifyContent:'space-between'}}>
            <span>{w}</span><span style={{color:'#7c3aed',fontWeight:'bold'}}>{c}</span>
          </div>
        ))}
      </div>
    </div>}
  </div>);
}