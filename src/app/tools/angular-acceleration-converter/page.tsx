"use client";
import { useState } from "react";

const UNITS: string[] = ["rad/s²", "deg/s²", "rpm/s", "rps/s"];
const FACTORS: Record<string, number> = {"rad/s²": 1, "deg/s²": 0.0174533, "rpm/s": 0.10472, "rps/s": 6.28318};

export default function AngularAccelerationConverterPage() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  function convert() {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * FACTORS[from]) / FACTORS[to]).toPrecision(6);
  }
  return (
    <main style={{padding:"2rem",maxWidth:"480px",margin:"0 auto",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Angular Acceleration Converter</h1>
      <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{width:"100%",padding:"0.5rem",marginBottom:"0.5rem",background:"#1a1a1a",color:"#fff",border:"1px solid #444",borderRadius:"4px"}} />
      <select value={from} onChange={e=>setFrom(e.target.value)} style={{width:"100%",padding:"0.5rem",marginBottom:"0.5rem",background:"#1a1a1a",color:"#fff",border:"1px solid #444",borderRadius:"4px"}}>
        {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
      </select>
      <select value={to} onChange={e=>setTo(e.target.value)} style={{width:"100%",padding:"0.5rem",marginBottom:"0.5rem",background:"#1a1a1a",color:"#fff",border:"1px solid #444",borderRadius:"4px"}}>
        {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
      </select>
      <div style={{padding:"1rem",background:"#111",borderRadius:"4px",color:"#0f0"}}>
        {val ? convert() + " " + to : "Enter a value"}
      </div>
    </main>
  );
}
