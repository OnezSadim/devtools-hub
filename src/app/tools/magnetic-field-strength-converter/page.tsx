"use client";
import { useState } from "react";

const UNITS: string[] = ["Tesla", "Millitesla", "Microtesla", "Gauss", "Nanotesla"];
const TO_BASE: Record<string, number> = {"Tesla": 1, "Millitesla": 0.001, "Microtesla": 1e-06, "Gauss": 0.0001, "Nanotesla": 1e-09};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * TO_BASE[from]) / TO_BASE[to]).toPrecision(8);
  };
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:"monospace",padding:"2rem"}}>
      <h1 style={{fontSize:"1.8rem",marginBottom:"1.5rem"}}>Magnetic Field Strength Converter</h1>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",justifyContent:"center",marginBottom:"1rem"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:"0.5rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9",fontSize:"1rem",width:"150px"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9"}}>
          {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
        <span style={{lineHeight:"2.2rem"}}>→</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9"}}>
          {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      <div style={{fontSize:"1.4rem",color:"#38bdf8",marginTop:"0.5rem"}}>{convert() || "—"} {to}</div>
    </main>
  );
}
