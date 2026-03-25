"use client";
import { useState } from "react";

const UNITS: string[] = ["siemens", "millisiemens", "microsiemens", "nanosiemens", "absiemens", "statsiemens", "mho", "millimho", "micromho"];
const TO_BASE: Record<string, number> = {"siemens": 1, "millisiemens": 0.001, "microsiemens": 1e-06, "nanosiemens": 1e-09, "absiemens": 1000000000.0, "statsiemens": 1.11265e-12, "mho": 1, "millimho": 0.001, "micromho": 1e-06};

export default function ElectricConductanceConverterPage() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * TO_BASE[from]) / TO_BASE[to]).toPrecision(6);
  };
  return (
    <main style={{padding:"2rem",maxWidth:"600px",margin:"0 auto",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Electric Conductance Converter</h1>
      <div style={{display:"flex",gap:"0.5rem",marginBottom:"1rem",flexWrap:"wrap"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{flex:1,padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}}>
          {UNITS.map(u=><option key={u}>{u}</option>)}
        </select>
      </div>
      <div style={{display:"flex",gap:"0.5rem",alignItems:"center",marginBottom:"1rem",flexWrap:"wrap"}}>
        <span style={{color:"#94a3b8"}}>To:</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}}>
          {UNITS.map(u=><option key={u}>{u}</option>)}
        </select>
      </div>
      {val && <div style={{padding:"1rem",background:"#1e293b",borderRadius:"8px",fontSize:"1.25rem"}}>{convert()} {to}</div>}
    </main>
  );
}
