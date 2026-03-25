"use client";
import { useState } from "react";

const UNITS = ["cd/m²", "cd/cm²", "cd/ft²", "fL", "L", "nit"];
const TO_BASE: Record<string, number> = {"cd/m²": 1, "cd/cm²": 10000, "cd/ft²": 10.764, "fL": 3.426, "L": 3183.1, "nit": 1};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * TO_BASE[from]) / TO_BASE[to]).toPrecision(6);
  };
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem"}}>
      <h1 style={{fontSize:"1.8rem",fontWeight:700,marginBottom:"1.5rem"}}>Luminance Converter</h1>
      <div style={{background:"#1e293b",borderRadius:"1rem",padding:"2rem",width:"100%",maxWidth:"480px",display:"flex",flexDirection:"column",gap:"1rem"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:"1rem"}} />
        <div style={{display:"flex",gap:"1rem"}}>
          <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9"}}>{UNITS.map(u=><option key={u} value={u}>{u}</option>)}</select>
          <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9"}}>{UNITS.map(u=><option key={u} value={u}>{u}</option>)}</select>
        </div>
        <div style={{textAlign:"center",fontSize:"1.5rem",fontWeight:700,color:"#38bdf8",padding:"1rem",background:"#0f172a",borderRadius:"0.5rem"}}>{convert() || "—"}</div>
      </div>
    </main>
  );
}
