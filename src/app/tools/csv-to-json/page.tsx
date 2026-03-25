"use client";
import { useState } from "react";
export default function CsvToJson() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const convert = () => {
    try {
      const lines = input.trim().split('
');
      const headers = lines[0].split(',').map(h => h.trim());
      const data = lines.slice(1).map(line => {
        const vals = line.split(',').map(v => v.trim());
        const obj = {};
        headers.forEach((h,i) => obj[h] = vals[i] || '');
        return obj;
      });
      setOutput(JSON.stringify(data, null, 2));
    } catch(e) { setOutput('Error: ' + e.message); }
  };
  return (<div style={{padding:'2rem',fontFamily:'monospace',background:'#0f172a',minHeight:'100vh',color:'#e2e8f0'}}>
    <h1 style={{fontSize:'1.5rem',marginBottom:'1rem',color:'#7dd3fc'}}>CSV to JSON</h1>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem',marginBottom:'1rem'}}>
      <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="name,age,city
John,30,NYC
Jane,25,LA" style={{height:'300px',padding:'0.5rem',background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:'4px',fontFamily:'monospace',fontSize:'0.85rem'}} />
      <textarea value={output} readOnly placeholder="JSON output" style={{height:'300px',padding:'0.5rem',background:'#1e293b',color:'#a3e635',border:'1px solid #334155',borderRadius:'4px',fontFamily:'monospace',fontSize:'0.85rem'}} />
    </div>
    <button onClick={convert} style={{padding:'0.5rem 1.5rem',background:'#0ea5e9',color:'white',border:'none',borderRadius:'4px',cursor:'pointer'}}>Convert</button>
  </div>);
}
