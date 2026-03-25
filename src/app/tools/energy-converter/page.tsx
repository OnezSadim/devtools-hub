"use client";
import { useState } from "react";
export default function EnergyConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("joule");
  const toJ: Record<string, number> = { joule: 1, kilojoule: 1000, megajoule: 1e6, calorie: 4.184, kilocalorie: 4184, watt_hour: 3600, kilowatt_hour: 3600000, electron_volt: 1.602e-19, btu: 1055.06, foot_pound: 1.35582 };
  const units = Object.keys(toJ);
  const joules = parseFloat(val) * (toJ[from] || 1);
  return (
    <main style={{padding:"2rem",maxWidth:"600px",margin:"0 auto",fontFamily:"monospace"}}>
      <h1>Energy Converter</h1>
      <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"0.5rem",marginBottom:"1rem",background:"#1a1a1a",color:"#fff",border:"1px solid #333"}} />
      <select value={from} onChange={e=>setFrom(e.target.value)} style={{width:"100%",padding:"0.5rem",marginBottom:"1rem",background:"#1a1a1a",color:"#fff",border:"1px solid #333"}}>
        {units.map(u=><option key={u} value={u}>{u}</option>)}
      </select>
      {val && <div style={{background:"#1a1a1a",padding:"1rem",borderRadius:"4px"}}>{units.map(u=><div key={u} style={{padding:"0.25rem 0",borderBottom:"1px solid #222"}}><strong>{u}:</strong> {(joules/toJ[u]).toExponential(4)}</div>)}</div>}
    </main>
  );
}
