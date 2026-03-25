"use client";
import { useState } from "react";
export default function JavascriptObfuscator() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  function obfuscate() {
    // Simple variable renaming obfuscation
    let r = input;
    const vars = {};
    let counter = 0;
    r = r.replace(/\bvar\s+(\w+)/g, (m, name) => { if (!vars[name]) vars[name] = '_0x' + (counter++).toString(16).padStart(4,'0'); return 'var ' + vars[name]; });
    r = r.replace(/\blet\s+(\w+)/g, (m, name) => { if (!vars[name]) vars[name] = '_0x' + (counter++).toString(16).padStart(4,'0'); return 'let ' + vars[name]; });
    r = r.replace(/\bconst\s+(\w+)/g, (m, name) => { if (!vars[name]) vars[name] = '_0x' + (counter++).toString(16).padStart(4,'0'); return 'const ' + vars[name]; });
    for (const [orig, obf] of Object.entries(vars)) {
      r = r.replace(new RegExp('\\b' + orig + '\\b', 'g'), obf);
    }
    r = r.replace(/\s+/g, ' ').trim();
    setOutput(r);
  }
  return (
    <div style={{maxWidth:900,margin:'0 auto',padding:'2rem',fontFamily:'monospace',background:'#0f172a',minHeight:'100vh',color:'#e2e8f0'}}>
      <h1 style={{fontSize:'1.8rem',fontWeight:700,marginBottom:'0.5rem'}}>JavaScript Obfuscator</h1>
      <p style={{color:'#94a3b8',marginBottom:'1.5rem'}}>Obfuscate JavaScript code by renaming variables.</p>
      <button onClick={obfuscate} style={{background:'#3b82f6',color:'#fff',border:'none',borderRadius:6,padding:'0.75rem 2rem',fontSize:'1rem',cursor:'pointer',marginBottom:'1rem'}}>Obfuscate</button>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
        <div>
          <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Input JavaScript:</label>
          <textarea value={input} onChange={e=>setInput(e.target.value)} rows={16} placeholder="var userName = 'Alice';
let count = 0;
const maxItems = 10;" style={{width:'100%',background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:6,padding:'0.75rem',fontSize:'0.85rem',boxSizing:'border-box'}} />
        </div>
        <div>
          <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Obfuscated:</label>
          <textarea value={output} readOnly rows={16} style={{width:'100%',background:'#1e293b',color:'#a3e635',border:'1px solid #334155',borderRadius:6,padding:'0.75rem',fontSize:'0.85rem',boxSizing:'border-box'}} />
        </div>
      </div>
    </div>
  );
}