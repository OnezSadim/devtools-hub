"use client";
import { useState } from "react";
export default function AsciiTable() {
  const [filter, setFilter] = useState('');
  const [view, setView] = useState<'printable'|'control'|'all'>('printable');
  const chars = Array.from({length:128}, (_,i) => ({
    dec: i, hex: i.toString(16).toUpperCase().padStart(2,'0'),
    oct: i.toString(8).padStart(3,'0'), bin: i.toString(2).padStart(7,'0'),
    char: i < 32 ? ['NUL','SOH','STX','ETX','EOT','ENQ','ACK','BEL','BS','HT','LF','VT','FF','CR','SO','SI','DLE','DC1','DC2','DC3','DC4','NAK','SYN','ETB','CAN','EM','SUB','ESC','FS','GS','RS','US'][i] : i===127?'DEL':String.fromCharCode(i),
    isPrintable: i >= 32 && i < 127,
  }));
  const filtered = chars.filter(c => {
    if (view === 'printable' && !c.isPrintable) return false;
    if (view === 'control' && c.isPrintable) return false;
    if (!filter) return true;
    return c.char.includes(filter) || c.dec.toString().includes(filter) || ('0x'+c.hex).includes(filter.toLowerCase()) || c.hex.toLowerCase().includes(filter.toLowerCase());
  });
  return (
    <main style={{minHeight:'100vh',background:'#0f172a',color:'#f1f5f9',fontFamily:'monospace',padding:'2rem'}}>
      <h1 style={{fontSize:'2rem',fontWeight:'bold',color:'#38bdf8',marginBottom:'1rem'}}>ASCII Table</h1>
      <div style={{display:'flex',gap:'1rem',marginBottom:'1.5rem',flexWrap:'wrap'}}>
        <input value={filter} onChange={e=>setFilter(e.target.value)} placeholder='Filter...' style={{padding:'0.5rem 1rem',background:'#1e293b',border:'1px solid #334155',borderRadius:'6px',color:'#f1f5f9',fontFamily:'monospace'}}/>
        {(['printable','control','all'] as const).map(v=><button key={v} onClick={()=>setView(v)} style={{padding:'0.5rem 1rem',borderRadius:'6px',border:'none',background:view===v?'#38bdf8':'#1e293b',color:view===v?'#0f172a':'#94a3b8',cursor:'pointer',fontFamily:'monospace',textTransform:'capitalize'}}>{v}</button>)}
      </div>
      <div style={{overflowX:'auto'}}>
        <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.875rem'}}>
          <thead><tr style={{color:'#94a3b8',borderBottom:'1px solid #334155'}}>{['Dec','Hex','Oct','Bin','Char'].map(h=><th key={h} style={{padding:'0.5rem 0.75rem',textAlign:'left'}}>{h}</th>)}</tr></thead>
          <tbody>{filtered.map(c=><tr key={c.dec} style={{borderBottom:'1px solid #1e293b'}} onMouseEnter={e=>(e.currentTarget.style.background='#1e293b')} onMouseLeave={e=>(e.currentTarget.style.background='transparent')}><td style={{padding:'0.4rem 0.75rem',color:'#f1f5f9'}}>{c.dec}</td><td style={{padding:'0.4rem 0.75rem',color:'#fbbf24'}}>0x{c.hex}</td><td style={{padding:'0.4rem 0.75rem',color:'#94a3b8'}}>{c.oct}</td><td style={{padding:'0.4rem 0.75rem',color:'#64748b'}}>{c.bin}</td><td style={{padding:'0.4rem 0.75rem',color:c.isPrintable?'#38bdf8':'#f87171',fontWeight:'bold'}}>{c.char}</td></tr>)}</tbody>
        </table>
      </div>
    </main>
  );
}