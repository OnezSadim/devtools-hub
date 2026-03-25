"use client";
import { useState } from "react";
export default function Page() {
  const units: Record<string, number> = {"Gy": 1, "mGy": 0.001, "uGy": 1e-06, "cGy": 0.01, "rad": 0.01, "mrad": 1e-05, "J/kg": 1, "erg/g": 0.0001, };
  const [from, setFrom] = useState("Gy");
  const [to, setTo] = useState("mGy");
  const [val, setVal] = useState("");
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * units[from]) / units[to]).toPrecision(6);
  };
  const opts = Object.keys(units).map(u => <option key={u} value={u}>{u}</option>);
  return (
    <main style={{maxWidth:600,margin:"40px auto",padding:"0 16px",fontFamily:"sans-serif",color:"#e2e8f0",background:"#0f172a",minHeight:"100vh"}}>
      <h1 style={{fontSize:"1.8rem",fontWeight:700,marginBottom:8}}>Absorbed Dose Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:24}}>Convert between grays, rads, milligrays, and more.</p>
      <div style={{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center",marginBottom:16}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{flex:1,minWidth:120,padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0",fontSize:"1rem"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0"}}>
          {opts}
        </select>
        <span style={{color:"#64748b"}}>to</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0"}}>
          {opts}
        </select>
      </div>
      <div style={{padding:"20px 24px",borderRadius:12,background:"#1e293b",border:"1px solid #334155",fontSize:"1.4rem",fontWeight:600,color:"#38bdf8",minHeight:64}}>
        {val ? convert() + " " + to : <span style={{color:"#475569"}}>Result appears here</span>}
      </div>
    </main>
  );
}
