"use client";
import { useState } from "react";

const units = ['m2/s', 'cm2/s (St)', 'mm2/s (cSt)', 'ft2/s', 'in2/s'];
const factors = {'m2/s': 1, 'cm2/s (St)': 0.0001, 'mm2/s (cSt)': 1e-06, 'ft2/s': 0.0929, 'in2/s': 0.000645};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0]);
  const [to, setTo] = useState(units[1]);
  function convert() {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * factors[from]) / factors[to]).toPrecision(6);
  }
  return (
    <main style={{padding:"2rem",fontFamily:"monospace",background:"#0f0f0f",minHeight:"100vh",color:"#e0e0e0"}}>
      <h1 style={{color:"#7c3aed"}}>Kinematic Viscosity Converter</h1>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",marginTop:"1rem"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:"0.5rem",background:"#1a1a1a",color:"#e0e0e0",border:"1px solid #333",borderRadius:"4px"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1a1a1a",color:"#e0e0e0",border:"1px solid #333",borderRadius:"4px"}}>
          {units.map((u:string)=><option key={u}>{u}</option>)}
        </select>
        <span style={{alignSelf:"center"}}>to</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem",background:"#1a1a1a",color:"#e0e0e0",border:"1px solid #333",borderRadius:"4px"}}>
          {units.map((u:string)=><option key={u}>{u}</option>)}
        </select>
      </div>
      {val && <p style={{marginTop:"1.5rem",fontSize:"1.5rem"}}>{val} {from} = <strong style={{color:"#7c3aed"}}>{convert()}</strong> {to}</p>}
    </main>
  );
}
