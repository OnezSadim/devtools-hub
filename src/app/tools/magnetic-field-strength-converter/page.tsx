"use client";
import { useState } from "react";
export default function Page() {
  const units = ["A/m", "Oe", "mA/m", "kA/m"];
  const toBase = {"A/m": 1, "Oe": 79.5775, "mA/m": 0.001, "kA/m": 1000};
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0]);
  const [to, setTo] = useState(units[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * toBase[from]) / toBase[to]).toPrecision(6);
  };
  return (
    <main style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Magnetic Field Strength Converter</h1>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"1rem"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:"0.5rem",borderRadius:"4px",border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0",width:"160px"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",borderRadius:"4px",border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0"}}>
          {units.map(u=><option key={u}>{u}</option>)}
        </select>
        <span style={{lineHeight:"2.2rem"}}>to</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem",borderRadius:"4px",border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0"}}>
          {units.map(u=><option key={u}>{u}</option>)}
        </select>
      </div>
      <div style={{fontSize:"1.25rem",color:"#38bdf8"}}>{convert()}</div>
    </main>
  );
}
