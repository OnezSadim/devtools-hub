"use client";
import { useState } from "react";
export default function VolumeConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("liter");
  const toLiters: Record<string, number> = { liter: 1, milliliter: 0.001, cubic_meter: 1000, cubic_centimeter: 0.001, gallon_us: 3.78541, gallon_uk: 4.54609, quart: 0.946353, pint: 0.473176, cup: 0.236588, fluid_ounce: 0.0295735, tablespoon: 0.0147868, teaspoon: 0.00492892 };
  const units = Object.keys(toLiters);
  const liters = parseFloat(val) * (toLiters[from] || 1);
  return (
    <main style={{padding:"2rem",maxWidth:"600px",margin:"0 auto",fontFamily:"monospace"}}>
      <h1>Volume Converter</h1>
      <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"0.5rem",marginBottom:"1rem",background:"#1a1a1a",color:"#fff",border:"1px solid #333"}} />
      <select value={from} onChange={e=>setFrom(e.target.value)} style={{width:"100%",padding:"0.5rem",marginBottom:"1rem",background:"#1a1a1a",color:"#fff",border:"1px solid #333"}}>
        {units.map(u=><option key={u} value={u}>{u}</option>)}
      </select>
      {val && <div style={{background:"#1a1a1a",padding:"1rem",borderRadius:"4px"}}>{units.map(u=><div key={u} style={{padding:"0.25rem 0",borderBottom:"1px solid #222"}}><strong>{u}:</strong> {(liters/toLiters[u]).toFixed(6)}</div>)}</div>}
    </main>
  );
}
