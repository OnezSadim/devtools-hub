"use client";
import { useState } from "react";

const units: string[] = ["volt", "millivolt", "microvolt", "kilovolt", "megavolt", "abvolt", "statvolt"];
const toBase: Record<string, number> = {"volt": 1, "millivolt": 0.001, "microvolt": 1e-06, "kilovolt": 1000.0, "megavolt": 1000000.0, "abvolt": 1e-08, "statvolt": 299.792};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0]);
  const [to, setTo] = useState(units[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * toBase[from]) / toBase[to]).toPrecision(6);
  };
  return (
    <main style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Electric Potential (Voltage) Converter</h1>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",alignItems:"center"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px",width:"140px"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}}>
          {units.map(u=><option key={u}>{u}</option>)}
        </select>
        <span>=</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}}>
          {units.map(u=><option key={u}>{u}</option>)}
        </select>
        <span style={{color:"#38bdf8",fontSize:"1.2rem"}}>{convert()}</span>
      </div>
    </main>
  );
}
