"use client";
import { useState } from "react";
export default function AreaConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("square_meter");
  const toSqM: Record<string, number> = { square_meter: 1, square_kilometer: 1e6, square_centimeter: 0.0001, square_millimeter: 1e-6, square_mile: 2589988.11, square_yard: 0.836127, square_foot: 0.092903, square_inch: 0.00064516, hectare: 10000, acre: 4046.856 };
  const units = Object.keys(toSqM);
  const sqm = parseFloat(val) * (toSqM[from] || 1);
  return (
    <main style={{padding:"2rem",maxWidth:"600px",margin:"0 auto",fontFamily:"monospace"}}>
      <h1>Area Converter</h1>
      <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"0.5rem",marginBottom:"1rem",background:"#1a1a1a",color:"#fff",border:"1px solid #333"}} />
      <select value={from} onChange={e=>setFrom(e.target.value)} style={{width:"100%",padding:"0.5rem",marginBottom:"1rem",background:"#1a1a1a",color:"#fff",border:"1px solid #333"}}>
        {units.map(u=><option key={u} value={u}>{u}</option>)}
      </select>
      {val && <div style={{background:"#1a1a1a",padding:"1rem",borderRadius:"4px"}}>{units.map(u=><div key={u} style={{padding:"0.25rem 0",borderBottom:"1px solid #222"}}><strong>{u}:</strong> {(sqm/toSqM[u]).toFixed(8)}</div>)}</div>}
    </main>
  );
}
