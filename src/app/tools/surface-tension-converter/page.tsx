"use client";
import { useState } from "react";
const UNITS: string[] = ["N/m", "mN/m", "dyn/cm", "lbf/ft", "lbf/in"];
const TO_BASE: Record<string, number> = {"N/m": 1, "mN/m": 0.001, "dyn/cm": 0.001, "lbf/ft": 14.5939, "lbf/in": 175.127};
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
    <main style={{padding:"2rem",maxWidth:"500px",margin:"0 auto",fontFamily:"sans-serif"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Surface Tension Converter</h1>
      <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{width:"100%",padding:"0.5rem",marginBottom:"0.5rem",boxSizing:"border-box"}} />
      <div style={{display:"flex",gap:"0.5rem",marginBottom:"0.5rem"}}>
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:"0.5rem"}}>{UNITS.map(u=><option key={u}>{u}</option>)}</select>
        <span style={{padding:"0.5rem"}}>→</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:"0.5rem"}}>{UNITS.map(u=><option key={u}>{u}</option>)}</select>
      </div>
      <div style={{padding:"1rem",background:"#f5f5f5",borderRadius:"4px"}}>Result: <strong>{convert()}</strong></div>
    </main>
  );
}
