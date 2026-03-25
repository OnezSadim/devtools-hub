"use client";
import { useState } from "react";

const units = ['becquerel', 'kilobecquerel', 'megabecquerel', 'gigabecquerel', 'curie', 'millicurie', 'microcurie', 'rutherford'];
const factors = {'becquerel': 1, 'kilobecquerel': 1000.0, 'megabecquerel': 1000000.0, 'gigabecquerel': 1000000000.0, 'curie': 37000000000.0, 'millicurie': 37000000.0, 'microcurie': 37000.0, 'rutherford': 1000000.0};

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
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Radioactivity Converter</h1>
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
