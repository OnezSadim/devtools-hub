"use client";
import { useState } from "react";
export default function CapacitanceConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("farad");
  const units = {farad:1,millifarad:0.001,microfarad:0.000001,nanofarad:1e-9,picofarad:1e-12,kilofarad:1000};
  const convert = (v,f) => Object.entries(units).map(([u,r]) => [u,(parseFloat(v)*units[f]/r).toFixed(6)]);
  return (<div style={{fontFamily:"monospace",padding:"2rem",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{color:"#38bdf8",marginBottom:"1rem"}}>Capacitance Converter</h1><input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px",marginRight:"0.5rem",width:"200px"}}/><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}}>{Object.keys(units).map(u=><option key={u} value={u}>{u}</option>)}</select>{val&&<div style={{marginTop:"1rem"}}>{convert(val,from).map(([u,r])=><div key={u} style={{padding:"0.5rem",borderBottom:"1px solid #1e293b"}}><span style={{color:"#94a3b8"}}>{u}:</span> {r}</div>)}</div>}</div>);
}
