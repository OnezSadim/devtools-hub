"use client";
import { useState } from "react";
export default function Page() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const pct = a && b ? ((parseFloat(a)/parseFloat(b))*100).toFixed(2) + "%" : "";
  const ofB = a && b ? (parseFloat(b)*parseFloat(a)/100).toFixed(2) : "";
  return (<div style={{padding:"2rem",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0",fontFamily:"monospace"}}>
    <h1 style={{fontSize:"1.8rem",marginBottom:"1rem"}}>Percentage Calculator</h1>
    <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"1rem"}}>
      <input value={a} onChange={e=>setA(e.target.value)} placeholder="Value A" style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"6px",flex:1}} />
      <input value={b} onChange={e=>setB(e.target.value)} placeholder="Value B" style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"6px",flex:1}} />
    </div>
    <div style={{background:"#1e293b",padding:"1rem",borderRadius:"8px"}}>
      <p>A is {pct || "?"} of B</p>
      <p>{a||"?"}% of B = {ofB || "?"}</p>
    </div>
  </div>);
}