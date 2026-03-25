"use client";
import { useState } from "react";
const UNITS = [{name: "Volt (V)", factor: 1}, {name: "Millivolt (mV)", factor: 0.001}, {name: "Microvolt (uV)", factor: 1e-06}, {name: "Kilovolt (kV)", factor: 1000.0}, {name: "Megavolt (MV)", factor: 1000000.0}, {name: "Abvolt", factor: 1e-08}, {name: "Statvolt", factor: 299.792}, ];
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(0);
  const base = parseFloat(val) * UNITS[from].factor;
  return (
    <main style={{padding:"2rem",maxWidth:"600px",margin:"0 auto",fontFamily:"sans-serif",background:"#0f172a",minHeight:"100vh",color:"#f1f5f9"}}>
      <h1 style={{fontSize:"1.5rem",fontWeight:700,marginBottom:"1rem"}}>Electric Potential Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:"1.5rem"}}>Convert between electric potential and voltage units.</p>
      <div style={{marginBottom:"1rem"}}>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9",marginBottom:"0.5rem"}} />
        <select value={from} onChange={e=>setFrom(Number(e.target.value))} style={{width:"100%",padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9"}}>
          {UNITS.map((u,i)=><option key={i} value={i}>{u.name}</option>)}
        </select>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"0.5rem"}}>
        {UNITS.map((u,i)=>(
          <div key={i} style={{background:"#1e293b",padding:"0.75rem",borderRadius:"6px",display:"flex",justifyContent:"space-between"}}>
            <span style={{color:"#94a3b8"}}>{u.name}</span>
            <span style={{fontWeight:600}}>{val ? (base/u.factor).toPrecision(6) : "-"}</span>
          </div>
        ))}
      </div>
    </main>
  );
}