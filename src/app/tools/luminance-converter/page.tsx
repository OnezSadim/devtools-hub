"use client";
import { useState } from "react";

const UNITS = ["candela/m2", "stilb", "nit", "apostilb", "lambert", "foot-lambert"];
const TO_BASE: Record<string, number> = {"candela/m2": 1, "stilb": 10000, "nit": 1, "apostilb": 0.31831, "lambert": 3183.1, "foot-lambert": 3.42626};

export default function LuminanceConverterPage() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const result = value && !isNaN(Number(value)) ? (Number(value) * TO_BASE[from] / TO_BASE[to]).toPrecision(6) : "";
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:"sans-serif",padding:"2rem"}}>
      <h1 style={{fontSize:"2rem",fontWeight:700,marginBottom:"0.5rem"}}>Luminance Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Convert between luminance units</p>
      <div style={{background:"#1e293b",borderRadius:"1rem",padding:"2rem",width:"100%",maxWidth:"480px",display:"flex",flexDirection:"column",gap:"1rem"}}>
        <input type="number" placeholder="Enter value" value={value} onChange={e=>setValue(e.target.value)} style={{padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:"1.1rem"}} />
        <div style={{display:"flex",gap:"1rem"}}>
          <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9"}}>{UNITS.map(u=><option key={u} value={u}>{u}</option>)}</select>
          <span style={{alignSelf:"center",color:"#64748b"}}>to</span>
          <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9"}}>{UNITS.map(u=><option key={u} value={u}>{u}</option>)}</select>
        </div>
        {result && <div style={{textAlign:"center",fontSize:"1.5rem",fontWeight:700,color:"#38bdf8",padding:"1rem",background:"#0f172a",borderRadius:"0.5rem"}}>{value} {from} = {result} {to}</div>}
      </div>
    </main>
  );
}
