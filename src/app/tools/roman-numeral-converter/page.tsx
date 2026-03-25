"use client";
import { useState } from "react";
function toRoman(n: number): string {
  if (n < 1 || n > 3999) return 'Out of range (1-3999)';
  const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const syms = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let result = '';
  for (let i=0;i<vals.length;i++) { while(n>=vals[i]) { result+=syms[i]; n-=vals[i]; } }
  return result;
}
function fromRoman(s: string): number {
  const map: Record<string,number> = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
  let result = 0;
  for (let i=0;i<s.length;i++) {
    const cur = map[s[i].toUpperCase()];
    const next = map[s[i+1]?.toUpperCase()];
    if (!cur) return NaN;
    if (next && next > cur) result -= cur; else result += cur;
  }
  return result;
}
export default function RomanNumeralConverter() {
  const [arabic, setArabic] = useState('2024');
  const [roman, setRoman] = useState('MMXXIV');
  return (
    <main style={{minHeight:'100vh',background:'#0f172a',color:'#f1f5f9',fontFamily:'monospace',padding:'2rem'}}>
      <h1 style={{fontSize:'2rem',fontWeight:'bold',color:'#38bdf8',marginBottom:'2rem'}}>Roman Numeral Converter</h1>
      <div style={{maxWidth:'600px',margin:'0 auto',display:'grid',gap:'2rem'}}>
        <div style={{background:'#1e293b',padding:'1.5rem',borderRadius:'8px'}}>
          <h2 style={{color:'#94a3b8',marginBottom:'1rem',fontSize:'1rem'}}>Arabic → Roman</h2>
          <div style={{display:'flex',gap:'1rem',alignItems:'center'}}>
            <input type='number' value={arabic} onChange={e=>setArabic(e.target.value)} min='1' max='3999' style={{flex:1,padding:'0.75rem',background:'#0f172a',border:'1px solid #334155',borderRadius:'6px',color:'#f1f5f9',fontFamily:'monospace',fontSize:'1rem'}}/>
            <div style={{color:'#38bdf8',fontWeight:'bold',fontSize:'2rem',minWidth:'120px'}}>{arabic && !isNaN(parseInt(arabic)) ? toRoman(parseInt(arabic)) : '—'}</div>
          </div>
        </div>
        <div style={{background:'#1e293b',padding:'1.5rem',borderRadius:'8px'}}>
          <h2 style={{color:'#94a3b8',marginBottom:'1rem',fontSize:'1rem'}}>Roman → Arabic</h2>
          <div style={{display:'flex',gap:'1rem',alignItems:'center'}}>
            <input value={roman} onChange={e=>setRoman(e.target.value.toUpperCase())} placeholder='e.g. MMXXIV' style={{flex:1,padding:'0.75rem',background:'#0f172a',border:'1px solid #334155',borderRadius:'6px',color:'#f1f5f9',fontFamily:'monospace',fontSize:'1rem',textTransform:'uppercase'}}/>
            <div style={{color:'#38bdf8',fontWeight:'bold',fontSize:'2rem',minWidth:'80px'}}>{roman ? (isNaN(fromRoman(roman)) ? 'Invalid' : fromRoman(roman)) : '—'}</div>
          </div>
        </div>
        <div style={{background:'#1e293b',padding:'1.5rem',borderRadius:'8px'}}>
          <h2 style={{color:'#94a3b8',marginBottom:'1rem',fontSize:'1rem'}}>Reference Table</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'0.5rem',fontSize:'0.875rem'}}>
            {[[1,'I'],[4,'IV'],[5,'V'],[9,'IX'],[10,'X'],[40,'XL'],[50,'L'],[90,'XC'],[100,'C'],[400,'CD'],[500,'D'],[900,'CM'],[1000,'M']].map(([a,r])=>(
              <div key={String(a)} style={{background:'#0f172a',padding:'0.5rem',borderRadius:'4px',textAlign:'center'}}><span style={{color:'#38bdf8'}}>{r}</span> = {a}</div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}