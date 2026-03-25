"use client";
import { useState } from "react";
export default function Page() {
  const units = {"1":"steradian","0.000304617":"square degree","8.46159e-08":"square arcminute","2.35044e-11":"square arcsecond","12.5664":"spat"};
  const [val,setVal]=useState("");
  const [from,setFrom]=useState("1");
  const [to,setTo]=useState("0.000304617");
  const convert=()=>{const n=parseFloat(val);if(isNaN(n))return "";return (n*parseFloat(from)/parseFloat(to)).toPrecision(6);};
  return (
    <div style={{padding:"2rem",fontFamily:"sans-serif",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}>
      <h1 style={{fontSize:"1.8rem",marginBottom:"0.5rem"}}>Solid Angle Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:"1.5rem"}}>Convert between steradian, square degree, and other solid angle units.</p>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",alignItems:"flex-end"}}>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"0.6rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0",fontSize:"1rem",width:"160px"}}/>
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.6rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0"}}><option value="1">steradian (sr)</option><option value="0.000304617">square degree (deg²)</option><option value="8.46159e-08">square arcminute (arcmin²)</option><option value="2.35044e-11">square arcsecond (arcsec²)</option><option value="12.5664">spat (sp)</option></select>
        <span style={{fontSize:"1.2rem"}}>→</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.6rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0"}}><option value="1">steradian (sr)</option><option value="0.000304617">square degree (deg²)</option><option value="8.46159e-08">square arcminute (arcmin²)</option><option value="2.35044e-11">square arcsecond (arcsec²)</option><option value="12.5664">spat (sp)</option></select>
      </div>
      {val&&<div style={{marginTop:"1.5rem",padding:"1rem",background:"#1e293b",borderRadius:"8px",fontSize:"1.2rem"}}>
        {val} = <strong>{convert()}</strong>
      </div>}
    </div>
  );
}
