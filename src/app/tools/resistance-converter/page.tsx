"use client";
import { useState } from "react";

const UNITS = [
      { value: '1', label: 'Ohm (Ω)' },
      { value: '1e3', label: 'Kilohm (kΩ)' },
      { value: '1e6', label: 'Megaohm (MΩ)' },
      { value: '1e-3', label: 'Milliohm (mΩ)' },
      { value: '1e-6', label: 'Microohm (µΩ)' },
      { value: '1e9', label: 'Gigaohm (GΩ)' },
];

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0].value);
  const [to, setTo] = useState(UNITS[1].value);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    const base = n * parseFloat(from);
    return (base / parseFloat(to)).toPrecision(6);
  };
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"1.8rem",marginBottom:"0.5rem"}}>Resistance Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Convert between electrical resistance units: ohm, kilohm, megaohm, milliohm.</p>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",alignItems:"flex-end"}}>
        <div><label style={{display:"block",marginBottom:"0.25rem",color:"#94a3b8"}}>Value</label>
        <input value={val} onChange={e=>setVal(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",color:"#f1f5f9",border:"1px solid #334155",borderRadius:"4px",width:"160px"}} /></div>
        <div><label style={{display:"block",marginBottom:"0.25rem",color:"#94a3b8"}}>From</label>
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",color:"#f1f5f9",border:"1px solid #334155",borderRadius:"4px"}}>
          {UNITS.map(u=><option key={u.value} value={u.value}>{u.label}</option>)}
        </select></div>
        <div><label style={{display:"block",marginBottom:"0.25rem",color:"#94a3b8"}}>To</label>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",color:"#f1f5f9",border:"1px solid #334155",borderRadius:"4px"}}>
          {UNITS.map(u=><option key={u.value} value={u.value}>{u.label}</option>)}
        </select></div>
      </div>
      <div style={{marginTop:"2rem",padding:"1rem",background:"#1e293b",borderRadius:"8px",fontSize:"1.4rem"}}>
        Result: <strong>{convert()}</strong>
      </div>
    </main>
  );
}
