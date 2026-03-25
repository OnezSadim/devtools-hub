"use client";
import { useState } from "react";
const UNITS = ["Pa*s", "P (Poise)", "cP (centipoise)", "lb/(ft*s)", "lb/(ft*h)"];
const TO_BASE: Record<string, number> = {"Pa*s": 1.0, "P (Poise)": 0.1, "cP (centipoise)": 0.001, "lb/(ft*s)": 1.4882, "lb/(ft*h)": 0.0004134};
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const convert = (to: string) => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * TO_BASE[from]) / TO_BASE[to]).toPrecision(6);
  };
  return (
    <main style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Dynamic Viscosity Converter</h1>
      <div style={{display:"flex",gap:"1rem",marginBottom:"1rem",flexWrap:"wrap"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px"}}>
          {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      <table style={{width:"100%",borderCollapse:"collapse"}}>
        <thead><tr><th style={{textAlign:"left",padding:"0.5rem",borderBottom:"1px solid #334155"}}>Unit</th><th style={{textAlign:"right",padding:"0.5rem",borderBottom:"1px solid #334155"}}>Value</th></tr></thead>
        <tbody>
          {UNITS.map(u=><tr key={u} style={{background:u===from?"#1e293b":"transparent"}}><td style={{padding:"0.5rem"}}>{u}</td><td style={{textAlign:"right",padding:"0.5rem"}}>{convert(u)}</td></tr>)}
        </tbody>
      </table>
    </main>
  );
}
