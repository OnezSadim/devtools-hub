"use client";
import { useState } from "react";
export default function ForceConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("newton");
  const units: Record<string, [string, number]> = { newton: ["Newton (N)", 1], kilonewton: ["Kilonewton (kN)", 1000], meganewton: ["Meganewton (MN)", 1e6], dyne: ["Dyne", 1e-5], lbf: ["Pound-force (lbf)", 4.44822], kgf: ["Kilogram-force (kgf)", 9.80665], pdl: ["Poundal (pdl)", 0.138255] };
  const base = parseFloat(val) * units[from][1];
  return (<main style={{padding:"2rem",fontFamily:"sans-serif",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{fontSize:"1.8rem",marginBottom:"1rem"}}>Force Converter</h1><div style={{display:"flex",gap:"1rem",marginBottom:"1.5rem",flexWrap:"wrap"}}><input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px",width:"180px"}} /><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}}>{Object.entries(units).map(([k,[label]])=>(<option key={k} value={k}>{label}</option>))}</select></div><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:"1rem"}}>{Object.entries(units).map(([k,[label,factor]])=>(<div key={k} style={{background:"#1e293b",borderRadius:"8px",padding:"1rem"}}><div style={{color:"#94a3b8",fontSize:"0.85rem"}}>{label}</div><div style={{fontSize:"1.3rem",fontWeight:"bold",color:"#38bdf8"}}>{val?(base/factor).toFixed(6):"—"}</div></div>))}</div></main>);
}
