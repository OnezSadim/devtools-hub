"use client";
import { useState } from "react";

const units = ['N/m', 'mN/m', 'dyn/cm', 'lbf/ft', 'lbf/in'];
const factors = {'N/m': 1, 'mN/m': 0.001, 'dyn/cm': 0.001, 'lbf/ft': 14.5939, 'lbf/in': 175.127};

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
      <h1 style={{color:"#7c3aed"}}>Surface Tension Converter</h1>
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
