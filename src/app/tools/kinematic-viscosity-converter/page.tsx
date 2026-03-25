"use client";
import { useState } from "react";

const UNITS = ["m2/s", "cm2/s (stokes)", "mm2/s (centistokes)", "ft2/s"];
const TO_BASE: Record<string, number> = {"m2/s": 1, "cm2/s (stokes)": 0.0001, "mm2/s (centistokes)": 1e-06, "ft2/s": 0.092903};

export default function KinematicViscosityConverterPage() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const result = value && !isNaN(Number(value)) ? (Number(value) * TO_BASE[from] / TO_BASE[to]).toPrecision(6) : "";
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:"sans-serif",padding:"2rem"}}>
      <h1 style={{fontSize:"2rem",fontWeight:700,marginBottom:"0.5rem"}}>Kinematic Viscosity Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Convert between kinematic viscosity units</p>
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
