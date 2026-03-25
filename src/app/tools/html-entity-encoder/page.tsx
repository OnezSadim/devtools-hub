"use client";
import { useState } from "react";
export default function HtmlEntityEncoder() {
  const [input, setInput] = useState('');
  const [mode, setMode] = useState('encode');
  const process = () => {
    if (mode === 'encode') {
      return input.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
    } else {
      return input.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'");
    }
  };
  return (<div style={{padding:'2rem',fontFamily:'monospace',background:'#0f172a',minHeight:'100vh',color:'#e2e8f0'}}>
    <h1 style={{fontSize:'1.5rem',marginBottom:'1rem',color:'#7dd3fc'}}>HTML Entity Encoder</h1>
    <div style={{marginBottom:'1rem'}}>
      <button onClick={()=>setMode('encode')} style={{padding:'0.4rem 1rem',background:mode==='encode'?'#0ea5e9':'#1e293b',color:'white',border:'none',borderRadius:'4px 0 0 4px',cursor:'pointer'}}>Encode</button>
      <button onClick={()=>setMode('decode')} style={{padding:'0.4rem 1rem',background:mode==='decode'?'#0ea5e9':'#1e293b',color:'white',border:'none',borderRadius:'0 4px 4px 0',cursor:'pointer'}}>Decode</button>
    </div>
    <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter HTML text..." style={{width:'100%',height:'150px',padding:'0.5rem',background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:'4px',fontFamily:'monospace',fontSize:'0.85rem',boxSizing:'border-box'}} />
    <div style={{marginTop:'1rem',background:'#1e293b',padding:'1rem',borderRadius:'4px',minHeight:'100px',color:'#a3e635',whiteSpace:'pre-wrap'}}>{process()}</div>
  </div>);
}
