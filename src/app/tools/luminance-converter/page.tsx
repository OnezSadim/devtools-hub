"use client";
import { useState } from "react";
export default function Page() {
  const units = {"1":"nit (cd/m²)","3.42626":"foot-lambert","3183.1":"lambert","0.001":"millinit","0.31831":"apostilb"};
  const [val,setVal]=useState("");
  const [from,setFrom]=useState("1");
  const [to,setTo]=useState("3.42626");
  const convert=()=>{const n=parseFloat(val);if(isNaN(n))return "";return (n*parseFloat(from)/parseFloat(to)).toPrecision(6);};
  return (
    <div style={{padding:"2rem",fontFamily:"sans-serif",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}>
      <h1 style={{fontSize:"1.8rem",marginBottom:"0.5rem"}}>Luminance Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:"1.5rem"}}>Convert between nit, candela per square meter, foot-lambert, and other luminance units.</p>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",alignItems:"flex-end"}}>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"0.6rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0",fontSize:"1rem",width:"160px"}}/>
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.6rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0"}}><option value="1">nit (cd/m²) (cd/m²)</option><option value="3.42626">foot-lambert (fL)</option><option value="3183.1">lambert (L)</option><option value="0.001">millinit (mcd/m²)</option><option value="0.31831">apostilb (asb)</option></select>
        <span style={{fontSize:"1.2rem"}}>→</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.6rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0"}}><option value="1">nit (cd/m²) (cd/m²)</option><option value="3.42626">foot-lambert (fL)</option><option value="3183.1">lambert (L)</option><option value="0.001">millinit (mcd/m²)</option><option value="0.31831">apostilb (asb)</option></select>
      </div>
      {val&&<div style={{marginTop:"1.5rem",padding:"1rem",background:"#1e293b",borderRadius:"8px",fontSize:"1.2rem"}}>
        {val} = <strong>{convert()}</strong>
      </div>}
    </div>
  );
}
