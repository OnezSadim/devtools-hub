"use client";
import { useState } from "react";
export default function GitCommitMessageGenerator() {
  const [type, setType] = useState('feat');
  const [scope, setScope] = useState('');
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
  const [breaking, setBreaking] = useState(false);
  const [result, setResult] = useState('');
  const types = ['feat','fix','docs','style','refactor','perf','test','chore','ci','build','revert'];
  function generate() {
    let msg = type;
    if (scope) msg += '(' + scope + ')';
    if (breaking) msg += '!';
    msg += ': ' + description;
    if (body) msg += '

' + body;
    if (breaking) msg += '

BREAKING CHANGE: ' + (body || description);
    setResult(msg);
  }
  return (
    <div style={{maxWidth:600,margin:'0 auto',padding:'2rem',fontFamily:'sans-serif',background:'#0f172a',minHeight:'100vh',color:'#e2e8f0'}}>
      <h1 style={{fontSize:'1.8rem',fontWeight:700,marginBottom:'0.5rem'}}>Git Commit Message Generator</h1>
      <p style={{color:'#94a3b8',marginBottom:'1.5rem'}}>Generate conventional commit messages.</p>
      <div style={{marginBottom:'1rem'}}>
        <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Type:</label>
        <div style={{display:'flex',flexWrap:'wrap',gap:'0.5rem'}}>
          {types.map(t => <button key={t} onClick={()=>setType(t)} style={{background:type===t?'#3b82f6':'#1e293b',color:'#fff',border:'1px solid #334155',borderRadius:4,padding:'0.25rem 0.75rem',cursor:'pointer'}}>{t}</button>)}
        </div>
      </div>
      <div style={{marginBottom:'1rem'}}>
        <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Scope (optional):</label>
        <input value={scope} onChange={e=>setScope(e.target.value)} placeholder="auth, api, ui..." style={{width:'100%',background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:6,padding:'0.75rem',boxSizing:'border-box'}} />
      </div>
      <div style={{marginBottom:'1rem'}}>
        <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Description:</label>
        <input value={description} onChange={e=>setDescription(e.target.value)} placeholder="short description in lowercase" style={{width:'100%',background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:6,padding:'0.75rem',boxSizing:'border-box'}} />
      </div>
      <div style={{marginBottom:'1rem'}}>
        <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Body (optional):</label>
        <textarea value={body} onChange={e=>setBody(e.target.value)} rows={3} style={{width:'100%',background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:6,padding:'0.75rem',boxSizing:'border-box'}} />
      </div>
      <div style={{display:'flex',alignItems:'center',gap:'0.5rem',marginBottom:'1rem'}}>
        <input type="checkbox" checked={breaking} onChange={e=>setBreaking(e.target.checked)} id="breaking" />
        <label htmlFor="breaking" style={{color:'#f87171'}}>Breaking change</label>
      </div>
      <button onClick={generate} style={{background:'#3b82f6',color:'#fff',border:'none',borderRadius:6,padding:'0.75rem 2rem',fontSize:'1rem',cursor:'pointer',marginBottom:'1rem'}}>Generate</button>
      {result && (
        <div>
          <label style={{display:'block',marginBottom:'0.5rem',color:'#94a3b8'}}>Generated commit message:</label>
          <pre style={{background:'#1e293b',borderRadius:6,padding:'1rem',color:'#a3e635',whiteSpace:'pre-wrap',wordBreak:'break-word'}}>{result}</pre>
          <button onClick={()=>navigator.clipboard?.writeText(result)} style={{background:'#1e293b',color:'#94a3b8',border:'1px solid #334155',borderRadius:6,padding:'0.5rem 1rem',cursor:'pointer',marginTop:'0.5rem'}}>Copy</button>
        </div>
      )}
    </div>
  );
}