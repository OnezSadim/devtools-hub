"use client";
import { useState } from "react";

const UNITS = ["Pascal-second", "Millipascal-second", "Micropascal-second", "Poise", "Centipoise", "lb/(ft*s)"];
const TO_BASE: Record<string, number> = {"Pascal-second": 1, "Millipascal-second": 0.001, "Micropascal-second": 1e-06, "Poise": 0.1, "Centipoise": 0.001, "lb/(ft*s)": 1.48816};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  function convert() {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * TO_BASE[from]) / TO_BASE[to]).toPrecision(6);
  }
  return (
    <main style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#f1f5f9"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Dynamic Viscosity Converter</h1>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",alignItems:"center"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:"0.5rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9",width:"150px"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9"}}>
          {UNITS.map(u=><option key={u}>{u}</option>)}
        </select>
        <span>=</span>
        <span style={{fontSize:"1.2rem",color:"#38bdf8",minWidth:"120px"}}>{convert()}</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9"}}>
          {UNITS.map(u=><option key={u}>{u}</option>)}
        </select>
      </div>
    </main>
  );
}
