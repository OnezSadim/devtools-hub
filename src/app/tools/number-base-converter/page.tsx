"use client";
import { useState } from "react";
export default function NumberBaseConverter() {
  const [value, setValue] = useState('255');
  const [fromBase, setFromBase] = useState(10);
  const parse = (v: string, base: number) => { try { const n = parseInt(v.trim(), base); return isNaN(n) ? null : n; } catch { return null; } };
  const n = parse(value, fromBase);
  const bases = [{base:2,label:'Binary (Base 2)',prefix:'0b'},{base:8,label:'Octal (Base 8)',prefix:'0o'},{base:10,label:'Decimal (Base 10)',prefix:''},{base:16,label:'Hexadecimal (Base 16)',prefix:'0x'}];
  return (
    <main style={{minHeight:'100vh',background:'#0f172a',color:'#f1f5f9',fontFamily:'monospace',padding:'2rem'}}>
      <h1 style={{fontSize:'2rem',fontWeight:'bold',color:'#38bdf8',marginBottom:'2rem'}}>Number Base Converter</h1>
      <div style={{maxWidth:'600px',margin:'0 auto'}}>
        <div style={{marginBottom:'1.5rem'}}>
          <label style={{display:'block',color:'#94a3b8',marginBottom:'0.5rem'}}>Input Base</label>
          <select value={fromBase} onChange={e=>setFromBase(parseInt(e.target.value))} style={{width:'100%',padding:'0.75rem',background:'#1e293b',border:'1px solid #334155',borderRadius:'6px',color:'#f1f5f9',fontFamily:'monospace',marginBottom:'0.75rem'}}>
            {bases.map(b=><option key={b.base} value={b.base}>{b.label}</option>)}
          </select>
          <input value={value} onChange={e=>setValue(e.target.value)} placeholder='Enter number...' style={{width:'100%',padding:'0.75rem',background:'#1e293b',border:'1px solid #334155',borderRadius:'6px',color:'#f1f5f9',fontFamily:'monospace',boxSizing:'border-box'}}/>
        </div>
        <div style={{display:'grid',gap:'1rem'}}>
          {bases.map(b => (
            <div key={b.base} style={{background:'#1e293b',padding:'1rem',borderRadius:'8px',border:b.base===fromBase?'1px solid #38bdf8':'1px solid #334155'}}>
              <div style={{color:'#94a3b8',fontSize:'0.75rem',marginBottom:'0.5rem'}}>{b.label}</div>
              <div style={{color:'#38bdf8',fontSize:'1.25rem',fontWeight:'bold',wordBreak:'break-all'}}>
                {n === null ? <span style={{color:'#f87171'}}>Invalid input</span> : (b.prefix + n.toString(b.base).toUpperCase())}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}