"use client";
import { useState } from "react";

const UNITS = ["becquerel", "curie", "rutherford", "disintegrations-per-second", "disintegrations-per-minute"];
const TO_BASE: Record<string, number> = {"becquerel": 1.0, "curie": 37000000000.0, "rutherford": 1000000.0, "disintegrations-per-second": 1.0, "disintegrations-per-minute": 0.016666667};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * TO_BASE[from]) / TO_BASE[to]).toPrecision(6);
  };
  return (
    <main style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Radioactivity Converter</h1>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"1rem"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}}>{UNITS.map(u=>`<option key={u}>{u}</option>`)}</select>
        <span style={{lineHeight:"2rem"}}>to</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}}>{UNITS.map(u=>`<option key={u}>{u}</option>`)}</select>
      </div>
      {val && <div style={{fontSize:"1.25rem",color:"#38bdf8"}}>{val} {from} = {convert()} {to}</div>}
    </main>
  );
}
