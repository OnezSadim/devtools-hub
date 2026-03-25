"use client";
import { useState } from "react";

const units: string[] = ["km/L", "L/100km", "mpg (US)", "mpg (UK)", "miles/L"];
const toBase: Record<string, number> = {"km/L": 1, "L/100km": 10.0, "mpg (US)": 0.425144, "mpg (UK)": 0.354006, "miles/L": 0.621371};

export default function FuelConsumptionConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0]);
  const [to, setTo] = useState(units[1]);
  const result = val !== "" && !isNaN(Number(val)) ? (Number(val) * toBase[from] / toBase[to]).toFixed(6).replace(/\.?0+$/, "") : "";

  return (
    <main style={{padding:"2rem",maxWidth:"600px",margin:"0 auto",fontFamily:"sans-serif",background:"#0f172a",minHeight:"100vh",color:"#f1f5f9"}}>
      <h1 style={{fontSize:"1.8rem",marginBottom:"0.5rem"}}>Fuel Consumption Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:"1.5rem"}}>Convert between fuel consumption units instantly.</p>
      <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"0.75rem",borderRadius:"8px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9",fontSize:"1rem"}} />
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"}}>
          <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.75rem",borderRadius:"8px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9",fontSize:"1rem"}}>
            {units.map(u=><option key={u} value={u}>{u}</option>)}
          </select>
          <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.75rem",borderRadius:"8px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9",fontSize:"1rem"}}>
            {units.map(u=><option key={u} value={u}>{u}</option>)}
          </select>
        </div>
        {result !== "" && (
          <div style={{padding:"1rem",borderRadius:"8px",background:"#1e293b",border:"1px solid #22d3ee",textAlign:"center"}}>
            <span style={{fontSize:"1.5rem",fontWeight:"bold",color:"#22d3ee"}}>{result} {to}</span>
          </div>
        )}
      </div>
    </main>
  );
}
