"use client";
import { useState } from "react";

const units = [
  { label: "Ampere (A)", factor: 1 },
  { label: "Milliampere (mA)", factor: 0.001 },
  { label: "Microampere (µA)", factor: 1e-6 },
  { label: "Nanoampere (nA)", factor: 1e-9 },
  { label: "Kiloampere (kA)", factor: 1000 },
  { label: "Megaampere (MA)", factor: 1e6 },
  { label: "Abampere (abA)", factor: 10 },
  { label: "Statampere (statA)", factor: 3.335641e-10 },
];

export default function CurrentConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(0);
  const num = parseFloat(val);
  const base = isNaN(num) ? null : num * units[from].factor;
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"2rem",marginBottom:"0.5rem"}}>Electric Current Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Convert between current units</p>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"1.5rem"}}>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"0.75rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",color:"#e2e8f0",fontSize:"1rem",width:"200px"}} />
        <select value={from} onChange={e=>setFrom(Number(e.target.value))} style={{padding:"0.75rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",color:"#e2e8f0"}}>
          {units.map((u,i)=><option key={i} value={i}>{u.label}</option>)}
        </select>
      </div>
      <div style={{display:"grid",gap:"0.75rem"}}>
        {units.map((u,i)=>(
          <div key={i} style={{padding:"1rem",background:"#1e293b",borderRadius:"8px",border:"1px solid #334155"}}>
            <span style={{color:"#94a3b8",fontSize:"0.85rem"}}>{u.label}</span>
            <div style={{fontSize:"1.25rem",fontWeight:"bold",color:"#38bdf8"}}>
              {base !== null ? (base / u.factor).toExponential(4) : "—"}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
