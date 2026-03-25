"use client";
import { useState } from "react";
export default function ElectricalResistanceConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("ohm");
  const units = {ohm:1,milliohm:0.001,kiloohm:1000,megaohm:1e6,microohm:1e-6,nanoohm:1e-9,abohm:1e-9,statohm:8.98755e11};
  const convert = (v,f) => { const base = parseFloat(v)*units[f]; return Object.entries(units).map(([u,r])=>({u,v:(base/r).toPrecision(6)})); };
  const results = val ? convert(val,from) : [];
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Electrical Resistance Converter</h1><div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}><input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px",flex:1}}/><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}}>{Object.keys(units).map(u=><option key={u} value={u}>{u}</option>)}</select></div>{results.map(r=><div key={r.u} style={{padding:"0.5rem",borderBottom:"1px solid #1e293b"}}><span style={{color:"#94a3b8"}}>{r.u}: </span><strong>{r.v}</strong></div>)}</div>);
}