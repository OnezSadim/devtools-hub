"use client";
import { useState } from "react";

const UNITS: string[] = ["lux", "foot-candle", "phot", "nox", "kilolux", "megalux"];
const TO_BASE: Record<string, number> = {"lux": 1, "foot-candle": 10.7639, "phot": 10000, "nox": 0.001, "kilolux": 1000, "megalux": 1000000};

export default function IlluminanceConverterPage() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * TO_BASE[from]) / TO_BASE[to]).toPrecision(6);
  };
  return (
    <main style={{padding:"2rem",maxWidth:"480px",margin:"0 auto",fontFamily:"sans-serif"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Illuminance Converter</h1>
      <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{width:"100%",padding:"0.5rem",marginBottom:"0.5rem",boxSizing:"border-box"}} />
      <select value={from} onChange={e=>setFrom(e.target.value)} style={{width:"100%",padding:"0.5rem",marginBottom:"0.5rem"}}>
        {UNITS.map(u=><option key={u}>{u}</option>)}
      </select>
      <select value={to} onChange={e=>setTo(e.target.value)} style={{width:"100%",padding:"0.5rem",marginBottom:"1rem"}}>
        {UNITS.map(u=><option key={u}>{u}</option>)}
      </select>
      <div style={{fontSize:"1.25rem",fontWeight:"bold"}}>Result: {convert()}</div>
    </main>
  );
}
