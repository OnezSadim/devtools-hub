"use client";
import { useState } from "react";

const UNITS: string[] = ["W/(m·K)", "BTU/(h·ft·°F)", "cal/(s·cm·°C)", "kcal/(h·m·°C)", "W/(cm·K)"];
const TO_BASE: Record<string, number> = {"W/(m·K)": 1, "BTU/(h·ft·°F)": 1.73073, "cal/(s·cm·°C)": 418.4, "kcal/(h·m·°C)": 1.163, "W/(cm·K)": 100};

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
      <h1 style={{marginBottom:"1.5rem"}}>Thermal Conductivity Converter</h1>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",alignItems:"flex-end"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}}>
          {UNITS.map(u=><option key={u}>{u}</option>)}
        </select>
        <span>to</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}}>
          {UNITS.map(u=><option key={u}>{u}</option>)}
        </select>
      </div>
      {val && <p style={{marginTop:"1.5rem",fontSize:"1.5rem"}}>{val} {from} = <strong>{convert()}</strong> {to}</p>}
    </main>
  );
}
