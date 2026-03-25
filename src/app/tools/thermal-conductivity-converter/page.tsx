"use client";
import { useState } from "react";
const UNITS = ["W/(m*K)", "BTU/(h*ft*F)", "cal/(s*cm*C)", "kcal/(h*m*C)"];
const TO_BASE: Record<string, number> = {"W/(m*K)": 1.0, "BTU/(h*ft*F)": 1.73073, "cal/(s*cm*C)": 418.4, "kcal/(h*m*C)": 1.163};
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
      <h1 style={{fontSize:"1.8rem",marginBottom:"1rem"}}>Thermal Conductivity Converter</h1>
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
