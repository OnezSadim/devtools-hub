"use client";
import { useState } from "react";
const units: Record<string, number> = { "mpg (US)": 1, "mpg (UK)": 1.20095, "km/L": 0.425144, "L/100km": 235.215 };
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("mpg (US)");
  const keys = Object.keys(units);
  const base = parseFloat(val);
  function convert(to: string) {
    if (!val || isNaN(base)) return "—";
    if (from === "L/100km" && to !== "L/100km") return (units["L/100km"] / base / units[to] * units["mpg (US)"]).toFixed(4);
    if (from !== "L/100km" && to === "L/100km") return (units["L/100km"] / (base * units[from])).toFixed(4);
    return (base * units[from] / units[to]).toFixed(4);
  }
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Fuel Economy Converter</h1><div style={{display:"flex",gap:"1rem",marginBottom:"1.5rem",flexWrap:"wrap"}}><input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px",flex:1}} /><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}}>{keys.map(k=><option key={k} value={k}>{k}</option>)}</select></div><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:"0.75rem"}}>{keys.map(k=><div key={k} style={{background:"#1e293b",padding:"0.75rem",borderRadius:"6px",border:"1px solid #334155"}}><div style={{color:"#94a3b8",fontSize:"0.75rem"}}>{k}</div><div style={{fontSize:"1.1rem",fontWeight:"bold",marginTop:"0.25rem"}}>{convert(k)}</div></div>)}</div></div>);
}
