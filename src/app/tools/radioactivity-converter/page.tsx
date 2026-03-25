"use client";
import { useState } from "react";

const UNITS: string[] = ["becquerel", "kilobecquerel", "megabecquerel", "curie", "millicurie", "microcurie", "rutherford"];
const TO_BASE: Record<string, number> = {"becquerel": 1, "kilobecquerel": 1000.0, "megabecquerel": 1000000.0, "curie": 37000000000.0, "millicurie": 37000000.0, "microcurie": 37000.0, "rutherford": 1000000.0};

export default function RadioactivityConverterPage() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * TO_BASE[from]) / TO_BASE[to]).toPrecision(6);
  };
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:"monospace",padding:"2rem"}}>
      <h1 style={{fontSize:"2rem",marginBottom:"1.5rem"}}>Radioactivity Converter</h1>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",justifyContent:"center",marginBottom:"1rem"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:"0.5rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0",fontSize:"1rem",width:"160px"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0"}}>
          {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
        <span style={{alignSelf:"center"}}>to</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0"}}>
          {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      <div style={{fontSize:"1.5rem",padding:"1rem",background:"#1e293b",borderRadius:"8px",minWidth:"260px",textAlign:"center"}}>{convert() || "—"} {to}</div>
    </main>
  );
}
