"use client";
import { useState } from "react";
const UNITS = ["m3/s", "L/s", "L/min", "L/h", "mL/s", "ft3/s", "ft3/min", "gal/min", "gal/h"];
const TO_BASE: Record<string, number> = {"m3/s": 1.0, "L/s": 0.001, "L/min": 1.66667e-05, "L/h": 2.77778e-07, "mL/s": 1e-06, "ft3/s": 0.0283168, "ft3/min": 0.000471947, "gal/min": 6.30902e-05, "gal/h": 1.0515e-06};
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  function convert() {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * TO_BASE[from]) / TO_BASE[to]).toPrecision(6);
  }
  return (
    <main style={{padding:"2rem",maxWidth:"600px",margin:"0 auto",fontFamily:"sans-serif"}}>
      <h1 style={{fontSize:"1.8rem",marginBottom:"1rem"}}>Flow Rate Converter</h1>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"1rem"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:"0.5rem",fontSize:"1rem",flex:1}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",fontSize:"1rem"}}>
          {UNITS.map(u=><option key={u}>{u}</option>)}
        </select>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem",fontSize:"1rem"}}>
          {UNITS.map(u=><option key={u}>{u}</option>)}
        </select>
      </div>
      <div style={{fontSize:"1.4rem",fontWeight:"bold"}}>Result: {convert()}</div>
    </main>
  );
}
