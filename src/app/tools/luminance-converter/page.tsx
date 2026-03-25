"use client";
import { useState } from "react";

const UNITS = ["cd/m2", "nit", "stilb", "apostilb", "lambert", "foot-lambert", "cd/ft2", "cd/in2"];
const TO_BASE = {"cd/m2": 1, "nit": 1, "stilb": 10000, "apostilb": 0.31831, "lambert": 3183.1, "foot-lambert": 3.4263, "cd/ft2": 10.764, "cd/in2": 1550.0};

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
    <main style={{padding:"2rem",fontFamily:"monospace",background:"#0f0f0f",minHeight:"100vh",color:"#e5e5e5"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Luminance Converter</h1>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"1rem"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"0.5rem",background:"#1a1a1a",border:"1px solid #333",color:"#e5e5e5",borderRadius:"4px",flex:"1"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1a1a1a",border:"1px solid #333",color:"#e5e5e5",borderRadius:"4px"}}>
          {UNITS.map(u=><option key={u}>{u}</option>)}
        </select>
        <span style={{padding:"0.5rem"}}>to</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem",background:"#1a1a1a",border:"1px solid #333",color:"#e5e5e5",borderRadius:"4px"}}>
          {UNITS.map(u=><option key={u}>{u}</option>)}
        </select>
      </div>
      <div style={{fontSize:"1.25rem",padding:"1rem",background:"#1a1a1a",borderRadius:"4px",border:"1px solid #333"}}>
        {val ? convert() + " " + to : "Result will appear here"}
      </div>
    </main>
  );
}
