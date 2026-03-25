"use client";
import { useState } from "react";
export default function AnagramChecker() {
  const [word1, setWord1] = useState('');
  const [word2, setWord2] = useState('');
  const sortLetters = (s) => s.toLowerCase().replace(/[^a-z]/g,'').split('').sort().join('');
  const isAnagram = word1 && word2 && sortLetters(word1) === sortLetters(word2);
  const letterFreq = (s) => {
    const freq = {};
    s.toLowerCase().replace(/[^a-z]/g,'').split('').forEach(c=>{ freq[c]=(freq[c]||0)+1; });
    return freq;
  };
  const pairs = [['listen','silent'],['astronomer','moon starer'],['school master','the classroom'],['debit card','bad credit']];
  return (<div style={{padding:'2rem',fontFamily:'monospace',background:'#0f172a',minHeight:'100vh',color:'#e2e8f0'}}>
    <h1 style={{fontSize:'1.5rem',marginBottom:'1rem',color:'#7dd3fc'}}>Anagram Checker</h1>
    <div style={{display:'grid',gridTemplateColumns:'1fr auto 1fr',gap:'1rem',alignItems:'center',marginBottom:'1rem'}}>
      <input value={word1} onChange={e=>setWord1(e.target.value)} placeholder="First word/phrase" style={{padding:'0.75rem',background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:'4px',fontFamily:'monospace',fontSize:'1rem'}} />
      <span style={{textAlign:'center',color:'#94a3b8'}}>vs</span>
      <input value={word2} onChange={e=>setWord2(e.target.value)} placeholder="Second word/phrase" style={{padding:'0.75rem',background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:'4px',fontFamily:'monospace',fontSize:'1rem'}} />
    </div>
    {word1 && word2 && <div style={{padding:'1.5rem',borderRadius:'8px',textAlign:'center',background:isAnagram?'#14532d':'#450a0a',border:'2px solid '+(isAnagram?'#16a34a':'#dc2626'),fontSize:'1.2rem',marginBottom:'1rem'}}>
      {isAnagram ? '✅ They are anagrams!' : '❌ Not anagrams'}
    </div>}
    <div style={{color:'#94a3b8',marginTop:'1rem'}}><div style={{marginBottom:'0.5rem'}}>Famous anagram pairs:</div>
    {pairs.map(([a,b])=><button key={a} onClick={()=>{setWord1(a);setWord2(b);}} style={{display:'block',padding:'0.3rem 0.75rem',background:'#1e293b',color:'#7dd3fc',border:'1px solid #334155',borderRadius:'4px',cursor:'pointer',marginBottom:'0.4rem'}}>{a} ↔ {b}</button>)}
    </div>
  </div>);
}
