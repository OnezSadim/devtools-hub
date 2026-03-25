"use client";
import { useState } from "react";
const units: Record<string, number> = { degree: 1, radian: 57.2958, gradian: 0.9, arcminute: 0.016667, arcsecond: 0.000278, turn: 360 };
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("degree");
  const keys = Object.keys(units);
  const base = parseFloat(val) * units[from];
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Angle Converter</h1><div style={{display:"flex",gap:"1rem",marginBottom:"1.5rem",flexWrap:"wrap"}}><input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px",flex:1}} /><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}}>{keys.map(k=><option key={k} value={k}>{k}</option>)}</select></div><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:"0.75rem"}}>{keys.map(k=><div key={k} style={{background:"#1e293b",padding:"0.75rem",borderRadius:"6px",border:"1px solid #334155"}}><div style={{color:"#94a3b8",fontSize:"0.75rem",textTransform:"uppercase"}}>{k}</div><div style={{fontSize:"1.1rem",fontWeight:"bold",marginTop:"0.25rem"}}>{val&&!isNaN(base)?(base/units[k]).toFixed(6):"—"}</div></div>)}</div></div>);
}
