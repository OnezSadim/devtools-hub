"use client";
import { useState } from "react";
export default function LengthConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("meter");
  const toMeters: Record<string, number> = { meter: 1, kilometer: 1000, centimeter: 0.01, millimeter: 0.001, mile: 1609.344, yard: 0.9144, foot: 0.3048, inch: 0.0254, nautical_mile: 1852 };
  const units = Object.keys(toMeters);
  const meters = parseFloat(val) * (toMeters[from] || 1);
  return (
    <main style={{padding:"2rem",maxWidth:"600px",margin:"0 auto",fontFamily:"monospace"}}>
      <h1>Length Converter</h1>
      <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"0.5rem",marginBottom:"1rem",background:"#1a1a1a",color:"#fff",border:"1px solid #333"}} />
      <select value={from} onChange={e=>setFrom(e.target.value)} style={{width:"100%",padding:"0.5rem",marginBottom:"1rem",background:"#1a1a1a",color:"#fff",border:"1px solid #333"}}>
        {units.map(u=><option key={u} value={u}>{u}</option>)}
      </select>
      {val && <div style={{background:"#1a1a1a",padding:"1rem",borderRadius:"4px"}}>{units.map(u=><div key={u} style={{padding:"0.25rem 0",borderBottom:"1px solid #222"}}><strong>{u}:</strong> {(meters/toMeters[u]).toFixed(6)}</div>)}</div>}
    </main>
  );
}
