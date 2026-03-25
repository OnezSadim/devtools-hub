"use client";
import { useState } from "react";

const UNITS = [
  "Pa*s",
  "mPa*s (cP)",
  "Poise (P)",
  "cPoise (cP)",
  "lb/(ft*s)",
  "kgf*s/m2",
];

const FACTORS: Record<string, number> = {
  "Pa*s": 1,
  "mPa*s (cP)": 0.001,
  "Poise (P)": 0.1,
  "cPoise (cP)": 0.001,
  "lb/(ft*s)": 1.48816,
  "kgf*s/m2": 9.80665,
};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const convert = (v: string, f: string, t: string) => {
    const n = parseFloat(v);
    if (isNaN(n)) return "";
    return ((n * FACTORS[f]) / FACTORS[t]).toPrecision(6);
  };
  return (
    <main style={{maxWidth:520,margin:"40px auto",padding:"0 16px",fontFamily:"sans-serif",color:"#e2e8f0"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:8}}>Dynamic Viscosity Converter</h1>
      <div style={{background:"#1e293b",borderRadius:8,padding:24}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:8,marginBottom:12,background:"#0f172a",border:"1px solid #334155",borderRadius:4,color:"#e2e8f0",boxSizing:"border-box"}} />
        <div style={{display:"flex",gap:8,marginBottom:12}}>
          <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:8,background:"#0f172a",border:"1px solid #334155",borderRadius:4,color:"#e2e8f0"}}>
            {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
          </select>
          <span style={{padding:"8px 4px",color:"#94a3b8"}}>to</span>
          <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:8,background:"#0f172a",border:"1px solid #334155",borderRadius:4,color:"#e2e8f0"}}>
            {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
          </select>
        </div>
        {val && <div style={{background:"#0f172a",borderRadius:4,padding:12,fontSize:"1.2rem",textAlign:"center",color:"#38bdf8"}}>{convert(val,from,to)} {to}</div>}
      </div>
    </main>
  );
}
