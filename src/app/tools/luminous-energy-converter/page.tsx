"use client";
import { useState } from "react";
const UNITS = [
  { label: "Talbot (T)", factor: 1 },
  { label: "Lumen-second (lm*s)", factor: 1 },
  { label: "Lumen-hour (lm*h)", factor: 3600 },
  { label: "Lumen-minute (lm*min)", factor: 60 },
  { label: "Millitalbot (mT)", factor: 0.001 },
];
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(1);
  const convert = () => { const n = parseFloat(val); if (isNaN(n)) return ""; return ((n * UNITS[from].factor) / UNITS[to].factor).toPrecision(6); };
  return (
    <main style={{padding:"2rem",maxWidth:"600px",margin:"0 auto",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"0.5rem"}}>Luminous Energy Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:"1.5rem"}}>Convert between talbot, lumen-second, lumen-hour and other luminous energy units.</p>
      <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"0.75rem",borderRadius:"8px",border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0",fontSize:"1rem"}} />
        <div style={{display:"flex",gap:"1rem"}}>
          <select value={from} onChange={e=>setFrom(Number(e.target.value))} style={{flex:1,padding:"0.75rem",borderRadius:"8px",border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0"}}>
            {UNITS.map((u,i)=><option key={i} value={i}>{u.label}</option>)}
          </select>
          <span style={{alignSelf:"center",fontSize:"1.5rem"}}>&#8594;</span>
          <select value={to} onChange={e=>setTo(Number(e.target.value))} style={{flex:1,padding:"0.75rem",borderRadius:"8px",border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0"}}>
            {UNITS.map((u,i)=><option key={i} value={i}>{u.label}</option>)}
          </select>
        </div>
        {val && <div style={{padding:"1rem",background:"#1e293b",borderRadius:"8px",fontSize:"1.25rem",textAlign:"center"}}>{convert()} {UNITS[to].label}</div>}
      </div>
    </main>
  );
}