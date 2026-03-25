"use client";
import { useState } from "react";

const UNITS: string[] = ["kg·m²", "kg·cm²", "g·cm²", "lb·ft²", "lb·in²", "oz·in²", "slug·ft²"];
const TO_BASE: Record<string, number> = {"kg·m²": 1.0, "kg·cm²": 0.0001, "g·cm²": 1e-07, "lb·ft²": 0.04214, "lb·in²": 0.00029264, "oz·in²": 1.8288e-05, "slug·ft²": 1.35581};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const result = val !== "" && !isNaN(Number(val))
    ? ((Number(val) * TO_BASE[from]) / TO_BASE[to]).toPrecision(6)
    : "";
  return (
    <main style={{padding:"2rem",fontFamily:"sans-serif",background:"#0f172a",minHeight:"100vh",color:"#f1f5f9"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Moment of Inertia Converter</h1>
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
