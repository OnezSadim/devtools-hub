"use client";
import { useState } from "react";
const UNITS = ["candela/m2", "candela/ft2", "foot-lambert", "lambert", "stilb"];
const TO_BASE: Record<string, number> = {"candela/m2": 1, "candela/ft2": 10.7639, "foot-lambert": 3.42626, "lambert": 3183.1, "stilb": 10000};
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
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Luminance Converter</h1>
      <div style={{marginBottom:"1rem"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px",marginRight:"0.5rem",width:"160px"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px"}}>
          {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      <table style={{borderCollapse:"collapse",width:"100%",maxWidth:"480px"}}>
        <tbody>
          {UNITS.map(u=>(
            <tr key={u} style={{borderBottom:"1px solid #1e293b"}}>
              <td style={{padding:"0.4rem 0.8rem",color:"#94a3b8"}}>{u}</td>
              <td style={{padding:"0.4rem 0.8rem"}}>{convert(u) || "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
