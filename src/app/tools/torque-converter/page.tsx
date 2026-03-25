"use client";
import { useState } from "react";

const UNITS: string[] = ["N·m", "kN·m", "lbf·ft", "lbf·in", "kgf·m", "ozf·in", "dyn·cm"];
const TO_BASE: Record<string, number> = {"N·m": 1.0, "kN·m": 1000.0, "lbf·ft": 1.355818, "lbf·in": 0.112985, "kgf·m": 9.80665, "ozf·in": 0.007062, "dyn·cm": 1e-07};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const result = val !== "" && !isNaN(Number(val))
    ? ((Number(val) * TO_BASE[from]) / TO_BASE[to]).toPrecision(6)
    : "";
  return (
    <main style={{padding:"2rem",fontFamily:"sans-serif",background:"#0f172a",minHeight:"100vh",color:"#f1f5f9"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Torque Converter</h1>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",alignItems:"center"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:"0.5rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9",width:"140px"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9"}}>
          {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
        <span>→</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9"}}>
          {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      {result && <p style={{marginTop:"1.5rem",fontSize:"1.25rem"}}>= <strong>{result} {to}</strong></p>}
    </main>
  );
}
