"use client";
import { useState } from "react";
export default function PalindromeChecker() {
  const [text, setText] = useState('');
  const [ignoreCase, setIgnoreCase] = useState(true);
  const [ignoreSpaces, setIgnoreSpaces] = useState(true);
  const check = (t) => {
    let s = t;
    if (ignoreCase) s = s.toLowerCase();
    if (ignoreSpaces) s = s.replace(/[^a-z0-9]/gi,'');
    return s === s.split('').reverse().join('');
  };
  const isPalin = text.length > 0 && check(text);
  const examples = ['racecar','A man a plan a canal Panama','Was it a car or a cat I saw','Never odd or even','Madam Im Adam'];
  return (<div style={{padding:'2rem',fontFamily:'monospace',background:'#0f172a',minHeight:'100vh',color:'#e2e8f0'}}>
    <h1 style={{fontSize:'1.5rem',marginBottom:'1rem',color:'#7dd3fc'}}>Palindrome Checker</h1>
    <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Enter text to check..." style={{width:'100%',height:'100px',padding:'0.5rem',background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:'4px',fontFamily:'monospace',fontSize:'1rem',boxSizing:'border-box'}} />
    <div style={{display:'flex',gap:'1.5rem',margin:'1rem 0'}}>
      <label style={{cursor:'pointer'}}><input type="checkbox" checked={ignoreCase} onChange={e=>setIgnoreCase(e.target.checked)} style={{marginRight:'0.4rem'}} />Ignore case</label>
      <label style={{cursor:'pointer'}}><input type="checkbox" checked={ignoreSpaces} onChange={e=>setIgnoreSpaces(e.target.checked)} style={{marginRight:'0.4rem'}} />Ignore spaces/punctuation</label>
    </div>
    {text && <div style={{padding:'1.5rem',borderRadius:'8px',textAlign:'center',background:isPalin?'#14532d':'#450a0a',border:'2px solid '+(isPalin?'#16a34a':'#dc2626'),fontSize:'1.2rem',marginBottom:'1rem'}}>
      {isPalin ? '✅ Yes, it's a palindrome!' : '❌ Not a palindrome'}
    </div>}
    <div style={{color:'#94a3b8',marginTop:'1rem'}}><div style={{marginBottom:'0.5rem'}}>Try these examples:</div>
    {examples.map(e=><button key={e} onClick={()=>setText(e)} style={{display:'block',padding:'0.3rem 0.75rem',background:'#1e293b',color:'#7dd3fc',border:'1px solid #334155',borderRadius:'4px',cursor:'pointer',marginBottom:'0.4rem',textAlign:'left'}}>{e}</button>)}
    </div>
  </div>);
}
