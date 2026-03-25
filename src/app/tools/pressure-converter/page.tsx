"use client";
import { useState } from "react";
export default function PressureConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("pascal");
  const toPa: Record<string, number> = { pascal: 1, kilopascal: 1000, megapascal: 1e6, bar: 100000, millibar: 100, atmosphere: 101325, psi: 6894.757, torr: 133.322, mmhg: 133.322 };
  const units = Object.keys(toPa);
  const pa = parseFloat(val) * (toPa[from] || 1);
  return (
    <main style={{padding:"2rem",maxWidth:"600px",margin:"0 auto",fontFamily:"monospace"}}>
      <h1>Pressure Converter</h1>
      <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"0.5rem",marginBottom:"1rem",background:"#1a1a1a",color:"#fff",border:"1px solid #333"}} />
      <select value={from} onChange={e=>setFrom(e.target.value)} style={{width:"100%",padding:"0.5rem",marginBottom:"1rem",background:"#1a1a1a",color:"#fff",border:"1px solid #333"}}>
        {units.map(u=><option key={u} value={u}>{u}</option>)}
      </select>
      {val && <div style={{background:"#1a1a1a",padding:"1rem",borderRadius:"4px"}}>{units.map(u=><div key={u} style={{padding:"0.25rem 0",borderBottom:"1px solid #222"}}><strong>{u}:</strong> {(pa/toPa[u]).toFixed(6)}</div>)}</div>}
    </main>
  );
}
