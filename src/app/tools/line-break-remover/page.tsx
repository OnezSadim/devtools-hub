'use client'

import { useState } from 'react';

export default function ToolPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const [separator, setSeparator] = useState(' ');
  const convert = () => {
    setOutput(input.replace(/?
/g, separator));
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{minHeight:'100vh',background:'#0f172a',color:'#e2e8f0',padding:'2rem',fontFamily:'system-ui,sans-serif'}}>
      <div style={{maxWidth:'800px',margin:'0 auto'}}>
        <h1 style={{fontSize:'2rem',fontWeight:'bold',marginBottom:'0.5rem',color:'#38bdf8'}}>Line Break Remover</h1>
        <p style={{color:'#94a3b8',marginBottom:'2rem'}}>Remove line breaks and newlines from text to create single-line output.</p>

        <div style={{marginBottom:'1rem'}}>
          <label style={{color:'#94a3b8',marginRight:'0.5rem'}}>Replace with:</label>
          <input type="text" value={separator} onChange={e=>setSeparator(e.target.value)} placeholder="space" style={{background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:'0.375rem',padding:'0.375rem 0.75rem',width:'150px'}} />
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
