"use client";
import { useState } from "react";

const units = ['coulomb', 'millicoulomb', 'microcoulomb', 'nanocoulomb', 'picocoulomb', 'ampere-hour', 'milliampere-hour', 'faraday'];
const factors = {'coulomb': 1, 'millicoulomb': 0.001, 'microcoulomb': 1e-06, 'nanocoulomb': 1e-09, 'picocoulomb': 1e-12, 'ampere-hour': 3600, 'milliampere-hour': 3.6, 'faraday': 96485.3};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0]);
  const [to, setTo] = useState(units[1]);
  function convert(v, f, t) {
    const n = parseFloat(v);
    if (isNaN(n)) return "";
    return ((n * factors[f]) / factors[t]).toPrecision(6);
  }
  return (
    <main style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Electric Charge Converter</h1>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px"}}>
          {units.map(u=><option key={u}>{u}</option>)}
        </select>
        <span style={{alignSelf:"center"}}>→</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px"}}>
          {units.map(u=><option key={u}>{u}</option>)}
        </select>
      </div>
      {val && <p style={{marginTop:"1rem",fontSize:"1.25rem"}}>{val} {from} = <strong>{convert(val,from,to)}</strong> {to}</p>}
    </main>
  );
}
