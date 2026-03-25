"use client";
import { useState } from "react";

const UNITS: string[] = ["point", "pica", "inch", "cm", "mm", "px (96dpi)", "em (16px)"];
const TO_BASE: Record<string, number> = {"point": 0.352778, "pica": 4.23333, "inch": 25.4, "cm": 10.0, "mm": 1.0, "px (96dpi)": 0.264583, "em (16px)": 4.23333};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return (n * TO_BASE[from] / TO_BASE[to]).toPrecision(8);
  };
  return (
    <main style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#f1f5f9"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Typography Unit Converter</h1>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",alignItems:"center",marginBottom:"1rem"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#f1f5f9",borderRadius:"4px",width:"150px"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#f1f5f9",borderRadius:"4px"}}>
          {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
        <span>to</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#f1f5f9",borderRadius:"4px"}}>
          {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      {val && <p style={{fontSize:"1.25rem",color:"#38bdf8"}}>{val} {from} = {convert()} {to}</p>}
    </main>
  );
}
