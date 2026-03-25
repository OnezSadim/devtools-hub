"use client";
import React, { useState } from "react";
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("C");
  const [to, setTo] = useState("mC");
  const units = {"C":1,"mC":1000,"uC":1000000,"nC":1e9,"pC":1e12};
  const convert = () => { const v = parseFloat(val); if (isNaN(v)) return "?"; return ((v / units[from]) * units[to]).toPrecision(6); };
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#f1f5f9"}}><h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Electric Charge Converter</h1><p style={{color:"#94a3b8",marginBottom:"1.5rem"}}>Convert between coulomb, millicoulomb, microcoulomb, nanocoulomb</p><div style={{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"}}><input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#f1f5f9",borderRadius:"0.25rem",width:"120px"}} /><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#f1f5f9",borderRadius:"0.25rem"}}><option value="C">C</option><option value="mC">mC</option><option value="uC">uC</option><option value="nC">nC</option><option value="pC">pC</option></select><span>→</span><select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#f1f5f9",borderRadius:"0.25rem"}}><option value="C">C</option><option value="mC">mC</option><option value="uC">uC</option><option value="nC">nC</option><option value="pC">pC</option></select><span style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"0.25rem",minWidth:"120px"}}>{convert()}</span></div></div>);
}
