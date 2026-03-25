"use client";
import { useState } from "react";

const UNITS = ["Weber (Wb)", "Milliweber (mWb)", "Microweber (uWb)", "Maxwell (Mx)", "Kiloweber (kWb)", "Tesla square meter (T·m²)", "Volt second (V·s)", "Nanoweber (nWb)"];
const TO_BASE: Record<string, number> = {"Weber (Wb)": 1, "Milliweber (mWb)": 0.001, "Microweber (uWb)": 1e-06, "Maxwell (Mx)": 1e-08, "Kiloweber (kWb)": 1000.0, "Tesla square meter (T·m²)": 1, "Volt second (V·s)": 1, "Nanoweber (nWb)": 1e-09};

export default function MagneticFluxConverterPage() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const convert = (to: string) => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * TO_BASE[from]) / TO_BASE[to]).toPrecision(6);
  };
  return (
    <main style={{padding:"2rem",maxWidth:"600px",margin:"0 auto",fontFamily:"sans-serif"}}>
      <h1 style={{fontSize:"1.8rem",marginBottom:"0.5rem"}}>Magnetic Flux Converter</h1>
      <p style={{color:"#888",marginBottom:"1.5rem"}}>Convert between magnetic flux units instantly.</p>
      <div style={{display:"flex",gap:"1rem",marginBottom:"1.5rem",flexWrap:"wrap"}}>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{flex:1,minWidth:"150px",padding:"0.75rem",borderRadius:"8px",border:"1px solid #333",background:"#1a1a1a",color:"#fff",fontSize:"1rem"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.75rem",borderRadius:"8px",border:"1px solid #333",background:"#1a1a1a",color:"#fff",fontSize:"1rem"}}>
          {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      <div style={{display:"grid",gap:"0.75rem"}}>
        {UNITS.map(u=>(
          <div key={u} style={{background:"#1a1a1a",border:"1px solid #2a2a2a",borderRadius:"8px",padding:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <span style={{color:"#aaa"}}>{u}</span>
            <span style={{color:"#fff",fontWeight:600,fontSize:"1.1rem"}}>{convert(u) || "—"}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
