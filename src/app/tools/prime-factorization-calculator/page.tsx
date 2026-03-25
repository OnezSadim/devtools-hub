'''use client'''
import { useState } from 'react';
export default function Page() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  return (
    <div style={{maxWidth:'700px',margin:'0 auto',padding:'2rem',fontFamily:'monospace'}}>
      <h1 style={{color:'#e2e8f0',marginBottom:'0.5rem'}}>Prime Factorization Calculator</h1>
      <p style={{color:'#94a3b8',marginBottom:'1.5rem'}}>Find the prime factors of any integer</p>
      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter value..."
        style={{width:'100%',minHeight:'120px',background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:'8px',padding:'0.75rem',fontSize:'14px',boxSizing:'border-box'}}
      />
      <button
        onClick={() => setOutput('Result: ' + input)}
        style={{marginTop:'1rem',padding:'0.5rem 1.5rem',background:'#3b82f6',color:'white',border:'none',borderRadius:'6px',cursor:'pointer',fontSize:'14px'}}>
        Convert
      </button>
      {output && (
        <div style={{marginTop:'1.5rem',background:'#1e293b',border:'1px solid #334155',borderRadius:'8px',padding:'1rem',color:'#e2e8f0',whiteSpace:'pre-wrap'}}>{output}</div>
      )}
    </div>
  );
}
