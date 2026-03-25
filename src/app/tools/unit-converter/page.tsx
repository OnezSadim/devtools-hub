"use client";
import { useState } from "react";
const categories: Record<string, {units: string[], convert: (v:number, from:string, to:string)=>number}> = {
  Length: { units: ['mm','cm','m','km','in','ft','yd','mi'], convert: (v,f,t) => { const toM: Record<string,number> = {mm:0.001,cm:0.01,m:1,km:1000,in:0.0254,ft:0.3048,yd:0.9144,mi:1609.344}; return v * toM[f] / toM[t]; } },
  Weight: { units: ['mg','g','kg','t','oz','lb','st'], convert: (v,f,t) => { const toG: Record<string,number> = {mg:0.001,g:1,kg:1000,t:1e6,oz:28.3495,lb:453.592,st:6350.29}; return v * toG[f] / toG[t]; } },
  Temperature: { units: ['°C','°F','K'], convert: (v,f,t) => { let c=v; if(f==='°F') c=(v-32)*5/9; else if(f==='K') c=v-273.15; if(t==='°C') return c; if(t==='°F') return c*9/5+32; return c+273.15; } },
  Speed: { units: ['m/s','km/h','mph','knot'], convert: (v,f,t) => { const toMs: Record<string,number> = {'m/s':1,'km/h':1/3.6,'mph':0.44704,'knot':0.514444}; return v * toMs[f] / toMs[t]; } },
};
export default function UnitConverter() {
  const [cat, setCat] = useState('Length');
  const [from, setFrom] = useState('m');
  const [to, setTo] = useState('ft');
  const [val, setVal] = useState('1');
  const { units, convert } = categories[cat];
  const result = isNaN(parseFloat(val)) ? '' : convert(parseFloat(val), from, to).toFixed(6).replace(/\.?0+$/, '');
  const switchCat = (c: string) => { setCat(c); setFrom(categories[c].units[0]); setTo(categories[c].units[1]); };
  return (
    <main style={{minHeight:'100vh',background:'#0f172a',color:'#f1f5f9',fontFamily:'monospace',padding:'2rem'}}>
      <h1 style={{fontSize:'2rem',fontWeight:'bold',color:'#38bdf8',marginBottom:'2rem'}}>Unit Converter</h1>
      <div style={{maxWidth:'600px',margin:'0 auto'}}>
        <div style={{display:'flex',flexWrap:'wrap',gap:'0.5rem',marginBottom:'1.5rem'}}>
          {Object.keys(categories).map(c => <button key={c} onClick={()=>switchCat(c)} style={{padding:'0.5rem 1rem',borderRadius:'6px',border:'none',background:cat===c?'#38bdf8':'#1e293b',color:cat===c?'#0f172a':'#94a3b8',cursor:'pointer',fontFamily:'monospace',fontWeight:'bold'}}>{c}</button>)}
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr auto 1fr',gap:'1rem',alignItems:'center',marginBottom:'1.5rem'}}>
          <div><label style={{display:'block',color:'#94a3b8',marginBottom:'0.5rem',fontSize:'0.875rem'}}>From</label><select value={from} onChange={e=>{setFrom(e.target.value)}} style={{width:'100%',padding:'0.75rem',background:'#1e293b',border:'1px solid #334155',borderRadius:'6px',color:'#f1f5f9',fontFamily:'monospace'}}>{units.map(u=><option key={u} value={u}>{u}</option>)}</select></div>
          <div style={{color:'#38bdf8',fontWeight:'bold',fontSize:'1.5rem',marginTop:'1.5rem'}}>→</div>
          <div><label style={{display:'block',color:'#94a3b8',marginBottom:'0.5rem',fontSize:'0.875rem'}}>To</label><select value={to} onChange={e=>setTo(e.target.value)} style={{width:'100%',padding:'0.75rem',background:'#1e293b',border:'1px solid #334155',borderRadius:'6px',color:'#f1f5f9',fontFamily:'monospace'}}>{units.map(u=><option key={u} value={u}>{u}</option>)}</select></div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
          <div><label style={{display:'block',color:'#94a3b8',marginBottom:'0.5rem',fontSize:'0.875rem'}}>Value</label><input value={val} onChange={e=>setVal(e.target.value)} style={{width:'100%',padding:'0.75rem',background:'#1e293b',border:'1px solid #334155',borderRadius:'6px',color:'#f1f5f9',fontFamily:'monospace',boxSizing:'border-box'}} placeholder='Enter value'/></div>
          <div><label style={{display:'block',color:'#94a3b8',marginBottom:'0.5rem',fontSize:'0.875rem'}}>Result</label><div style={{padding:'0.75rem',background:'#0f172a',border:'1px solid #38bdf8',borderRadius:'6px',color:'#38bdf8',fontWeight:'bold',minHeight:'3rem'}}>{result || '—'}</div></div>
        </div>
      </div>
    </main>
  );
}