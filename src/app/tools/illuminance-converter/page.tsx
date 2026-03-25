"use client";
import { useState } from "react";
export default function IlluminanceConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("lux");
  const units: Record<string, number> = { lux: 1, "foot-candle": 10.7639, phot: 10000, nox: 0.001 };
  const convert = (v: string, f: string) => { const n = parseFloat(v); if (isNaN(n)) return {}; return Object.fromEntries(Object.entries(units).map(([k, r]) => [k, ((n * units[f]) / r).toFixed(6)])); };
  const results = convert(val, from);
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Illuminance Converter</h1><div style={{marginBottom:"1rem"}}><input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"0.5rem",marginRight:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}}/><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}}>{Object.keys(units).map(u=><option key={u} value={u}>{u}</option>)}</select></div><div>{Object.entries(results).map(([k,v])=><div key={k} style={{padding:"0.5rem",marginBottom:"0.5rem",background:"#1e293b",borderRadius:"4px"}}><strong>{k}:</strong> {v}</div>)}</div></div>);
}
