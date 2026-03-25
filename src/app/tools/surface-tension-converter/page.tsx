"use client";
import { useState } from "react";
export default function Page() {
  const units = [("N/m", 1), ("mN/m", 0.001), ("dyn/cm", 0.001), ("lbf/ft", 14.5939), ("lbf/in", 175.127)];
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0][0]);
  const convert = (to) => { const v = parseFloat(val); if (isNaN(v)) return ""; const f = units.find(u=>u[0]===from)[1]; const t = units.find(u=>u[0]===to)[1]; return (v*f/t).toPrecision(6); };
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Surface Tension Converter</h1><p style={{color:"#94a3b8",marginBottom:"1.5rem"}}>Convert between newton per meter, dyne per centimeter, pound-force per foot, and more surface tension units.</p><div style={{display:"flex",gap:"1rem",marginBottom:"1rem",flexWrap:"wrap"}}><input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"0.375rem",flex:1,minWidth:"120px"}}/><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"0.375rem"}}>{units.map(u=>(<option key={u[0]} value={u[0]}>{u[0]}</option>))}</select></div><div style={{display:"grid",gap:"0.5rem"}}>{units.filter(u=>u[0]!==from).map(u=>(<div key={u[0]} style={{background:"#1e293b",padding:"0.75rem",borderRadius:"0.375rem",display:"flex",justifyContent:"space-between"}}><span style={{color:"#94a3b8"}}>{u[0]}</span><span style={{color:"#38bdf8",fontWeight:"bold"}}>{convert(u[0])||"—"}</span></div>))}</div></div>);
}
