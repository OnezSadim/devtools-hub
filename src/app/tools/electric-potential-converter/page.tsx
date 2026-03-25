"use client";
import { useState } from "react";
const UNITS: string[] = ["Volt", "Millivolt", "Microvolt", "Kilovolt", "Megavolt", "Abvolt", "Statvolt"];
const TO_BASE: Record<string, number> = {"Volt": 1.0, "Millivolt": 0.001, "Microvolt": 1e-06, "Kilovolt": 1000.0, "Megavolt": 1000000.0, "Abvolt": 1e-08, "Statvolt": 299.792458};
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const convert = (to: string) => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * TO_BASE[from]) / TO_BASE[to]).toPrecision(6);
  };
  return (
    <main style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Electric Potential (Voltage) Converter</h1>
      <div style={{display:"flex",gap:"1rem",marginBottom:"1rem",flexWrap:"wrap"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}}>
          {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      <table style={{borderCollapse:"collapse",width:"100%"}}>
        <thead><tr><th style={{textAlign:"left",padding:"0.5rem",borderBottom:"1px solid #334155"}}>Unit</th><th style={{textAlign:"left",padding:"0.5rem",borderBottom:"1px solid #334155"}}>Result</th></tr></thead>
        <tbody>
          {UNITS.map(u=>(
            <tr key={u} style={{background:u===from?"#1e293b":"transparent"}}>
              <td style={{padding:"0.4rem 0.5rem"}}>{u}</td>
              <td style={{padding:"0.4rem 0.5rem"}}>{convert(u)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
