"use client";
import { useState } from "react";

const units = ['weber', 'milliweber', 'microweber', 'volt-second', 'maxwell', 'kiloline', 'line'];
const factors = {'weber': 1, 'milliweber': 0.001, 'microweber': 1e-06, 'volt-second': 1, 'maxwell': 1e-08, 'kiloline': 1e-05, 'line': 1e-08};

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
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Magnetic Flux Converter</h1>
      <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:"0.5rem",marginRight:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px"}} />
      <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",marginRight:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px"}}>
        {units.map(u=><option key={u} value={u}>{u}</option>)}
      </select>
      <span style={{marginRight:"0.5rem"}}>to</span>
      <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px"}}>
        {units.map(u=><option key={u} value={u}>{u}</option>)}
      </select>
      <div style={{marginTop:"1rem",fontSize:"1.25rem"}}>Result: <strong>{convert()}</strong> {to}</div>
    </main>
  );
}
