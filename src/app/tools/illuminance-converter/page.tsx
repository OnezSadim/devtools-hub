"use client";
import { useState } from "react";
export default function IlluminanceConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("lux");
  const units: Record<string, [string, number]> = { lux: ["Lux (lx)", 1], footcandle: ["Foot-candle (fc)", 10.7639], phot: ["Phot (ph)", 10000], nox: ["Nox", 0.001], millilux: ["Millilux (mlx)", 0.001], kilolux: ["Kilolux (klx)", 1000] };
  const base = parseFloat(val) * units[from][1];
  return (<main style={{padding:"2rem",fontFamily:"sans-serif",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{fontSize:"1.8rem",marginBottom:"1rem"}}>Illuminance Converter</h1><div style={{display:"flex",gap:"1rem",marginBottom:"1.5rem",flexWrap:"wrap"}}><input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px",width:"180px"}} /><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}}>{Object.entries(units).map(([k,[label]])=>(<option key={k} value={k}>{label}</option>))}</select></div><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:"1rem"}}>{Object.entries(units).map(([k,[label,factor]])=>(<div key={k} style={{background:"#1e293b",borderRadius:"8px",padding:"1rem"}}><div style={{color:"#94a3b8",fontSize:"0.85rem"}}>{label}</div><div style={{fontSize:"1.3rem",fontWeight:"bold",color:"#38bdf8"}}>{val?(base/factor).toFixed(6):"—"}</div></div>))}</div></main>);
}
