"use client";
import { useState } from "react";

const units: string[] = ["cd/m2", "nit", "stilb", "apostilb", "lambert", "foot-lambert"];
const factors: Record<string, number> = {"cd/m2": 1, "nit": 1, "stilb": 10000, "apostilb": 0.31831, "lambert": 3183.099, "foot-lambert": 3.42626};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0]);
  const [to, setTo] = useState(units[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * factors[from]) / factors[to]).toPrecision(6);
  };
  return (
    <main style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Luminance Converter</h1>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"1rem"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px"}}>
          {units.map((u: string) => <option key={u} value={u}>{u}</option>)}
        </select>
        <span style={{alignSelf:"center"}}>to</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px"}}>
          {units.map((u: string) => <option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      <div style={{fontSize:"1.25rem",padding:"1rem",background:"#1e293b",borderRadius:"8px"}}>
        {val ? convert() + " " + to : "Enter a value above"}
      </div>
    </main>
  );
}
