'use client';
import { useState } from 'react';
export default function Page() {
  const units = ['S','mS','uS','nS','kS','MS'];
  const toBase = {'S':1,'mS':1e-3,'uS':1e-6,'nS':1e-9,'kS':1e3,'MS':1e6};
  const [v,setV] = useState('1');
  const [f,setF] = useState('S');
  const base = parseFloat(v)||0;
  return (<div style={{padding:'2rem',fontFamily:'monospace',background:'#0f172a',minHeight:'100vh',color:'#e2e8f0'}}><h1 style={{fontSize:'1.5rem',marginBottom:'1rem'}}>Electric Conductance Converter</h1><input value={v} onChange={e=>setV(e.target.value)} style={{padding:'0.5rem',marginRight:'0.5rem',background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:'4px'}} /><select value={f} onChange={e=>setF(e.target.value)} style={{padding:'0.5rem',background:'#1e293b',color:'#e2e8f0',border:'1px solid #334155',borderRadius:'4px'}}>{units.map(u=>(<option key={u}>{u}</option>))}</select><table style={{marginTop:'1rem',borderCollapse:'collapse',width:'100%'}}><thead><tr><th style={{textAlign:'left',padding:'0.5rem',borderBottom:'1px solid #334155'}}>Unit</th><th style={{textAlign:'left',padding:'0.5rem',borderBottom:'1px solid #334155'}}>Value</th></tr></thead><tbody>{units.map(u=>(<tr key={u}><td style={{padding:'0.5rem',borderBottom:'1px solid #1e293b'}}>{u}</td><td style={{padding:'0.5rem',borderBottom:'1px solid #1e293b'}}>{((base*toBase[f])/toBase[u]).toFixed(6)}</td></tr>))}</tbody></table></div>);
}