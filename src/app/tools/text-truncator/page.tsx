'use client'

import { useState } from 'react';

export default function ToolPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const [maxLen, setMaxLen] = useState(100);
  const [ellipsis, setEllipsis] = useState('...');
  const convert = () => {
    if (input.length <= maxLen) { setOutput(input); return; }
    setOutput(input.slice(0, maxLen) + ellipsis);
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{minHeight:'100vh',background:'#0f172a',color:'#e2e8f0',padding:'2rem',fontFamily:'system-ui,sans-serif'}}>
      <div style={{maxWidth:'800px',margin:'0 auto'}}>
        <h1 style={{fontSize:'2rem',fontWeight:'bold',marginBottom:'0.5rem',color:'#38bdf8'}}>Text Truncator</h1>
        <p style={{color:'#94a3b8',marginBottom:'2rem'}}>Truncate text to a specified length with custom ellipsis options.</p>

        <div style={{display:'flex',gap:'1rem',marginBottom:'1rem',flexWrap:'wrap'}}>
          <div>
            <label style={{color:'#94a3b8',display:'block',marginBottom:'0.25rem'}}>Max Length:</label>
            <input type="number" value={maxLen} onChange={e=>setMaxLen(Number(e.target.value))} min={1} style={{background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:'0.375rem',padding:'0.375rem 0.75rem',width:'100px'}} />
          </div>
          <div>
            <label style={{color:'#94a3b8',display:'block',marginBottom:'0.25rem'}}>Ellipsis:</label>
            <input type="text" value={ellipsis} onChange={e=>setEllipsis(e.target.value)} style={{background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:'0.375rem',padding:'0.375rem 0.75rem',width:'100px'}} />
          </div>
        </div>

        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Paste your text here..."
          style={{width:'100%',height:'180px',background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:'0.5rem',padding:'0.75rem',fontFamily:'monospace',fontSize:'0.9rem',resize:'vertical',boxSizing:'border-box'}}
        />
        <div style={{margin:'1rem 0',textAlign:'center'}}>
          <button onClick={convert} style={{background:'#0ea5e9',color:'white',border:'none',borderRadius:'0.5rem',padding:'0.625rem 2rem',fontSize:'1rem',cursor:'pointer',fontWeight:'600'}}>Convert</button>
        </div>
        {output && (
          <div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'0.5rem'}}>
              <label style={{color:'#94a3b8'}}>Result:</label>
              <button onClick={copyOutput} style={{background:copied?'#10b981':'#334155',color:'white',border:'none',borderRadius:'0.375rem',padding:'0.25rem 0.75rem',cursor:'pointer',fontSize:'0.875rem'}}>{copied?'Copied!':'Copy'}</button>
            </div>
            <textarea
              value={output}
              readOnly
              style={{width:'100%',height:'180px',background:'#1e293b',color:'#4ade80',border:'1px solid #334155',borderRadius:'0.5rem',padding:'0.75rem',fontFamily:'monospace',fontSize:'0.9rem',resize:'vertical',boxSizing:'border-box'}}
            />
          </div>
        )}
      </div>
    </div>
  );
}
