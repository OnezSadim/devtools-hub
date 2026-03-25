"use client";
import { useState } from "react";

const UNITS = ["Steradian", "Millisteradian", "Square degree", "Square arcminute", "Square arcsecond", "Spat"];
const TO_BASE = [1, 0.001, 0.000304617, 8.46e-08, 2.35e-11, 12.5664];

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(0);
  const num = parseFloat(val);
  const base = isNaN(num) ? null : num * TO_BASE[from];
  return (
    <main style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Solid Angle Converter</h1>
      <div style={{display:"flex",gap:"1rem",marginBottom:"1.5rem",flexWrap:"wrap"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px",width:"160px"}} />
        <select value={from} onChange={e=>setFrom(Number(e.target.value))} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}}>
          {UNITS.map((u,i)=><option key={i} value={i}>{u}</option>)}
        </select>
      </div>
      <div style={{display:"grid",gap:"0.5rem"}}>
        {UNITS.map((u,i)=>(
          <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"0.75rem",background:"#1e293b",borderRadius:"6px",border:"1px solid #334155"}}>
            <span style={{color:"#94a3b8"}}>{u}</span>
            <span style={{fontWeight:"bold"}}>{base===null?"—":(base/TO_BASE[i]).toPrecision(6)}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
