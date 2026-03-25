"use client";
import { useState } from "react";

const units = [
  { label: "Decibel (dB)", toDb: (v) => v, fromDb: (v) => v },
  { label: "Bel (B)", toDb: (v) => v * 10, fromDb: (v) => v / 10 },
  { label: "Neper (Np)", toDb: (v) => v * 8.685889638, fromDb: (v) => v / 8.685889638 },
];

export default function SoundConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(0);
  const num = parseFloat(val);
  const db = isNaN(num) ? null : units[from].toDb(num);
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"2rem",marginBottom:"0.5rem"}}>Sound Level Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Convert between dB, Bel, and Neper</p>
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
              {db !== null ? u.fromDb(db).toFixed(6) : "—"}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
