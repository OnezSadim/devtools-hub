"use client";
import { useState } from "react";

const units = [
  { label: "Meter (m)", factor: 1 },
  { label: "Kilometer (km)", factor: 1e3 },
  { label: "Mile (mi)", factor: 1609.344 },
  { label: "Astronomical Unit (AU)", factor: 1.495978707e11 },
  { label: "Light-year (ly)", factor: 9.4607304725808e15 },
  { label: "Parsec (pc)", factor: 3.085677581e16 },
  { label: "Kiloparsec (kpc)", factor: 3.085677581e19 },
  { label: "Megaparsec (Mpc)", factor: 3.085677581e22 },
  { label: "Light-minute", factor: 1.798754748e10 },
  { label: "Light-hour", factor: 1.0792528488e12 },
];

export default function AstronomicalDistanceConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(3);
  const num = parseFloat(val);
  const base = isNaN(num) ? null : num * units[from].factor;
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"2rem",marginBottom:"0.5rem"}}>Astronomical Distance Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Convert AU, light-years, parsecs, and more</p>
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
            <div style={{fontSize:"1.1rem",fontWeight:"bold",color:"#38bdf8"}}>
              {base !== null ? (base / u.factor).toExponential(6) : "—"}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
