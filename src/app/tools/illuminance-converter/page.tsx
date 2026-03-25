"use client";
import { useState } from "react";
export default function IlluminanceConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("lux");
  const [to, setTo] = useState("foot-candle");
  const units = { lux: 1, "foot-candle": 0.092903, phot: 10000, nox: 0.001 };
  const convert = () => { const v = parseFloat(val); if (isNaN(v)) return ""; return ((v * units[from]) / units[to]).toFixed(6); };
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{color:"#38bdf8"}}>Illuminance Converter</h1><p style={{color:"#94a3b8"}}>Convert between lux, foot-candle, phot, nox</p><div style={{display:"flex",gap:"1rem",flexWrap:"wrap",marginTop:"1rem"}}><input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}} /><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}}>{Object.keys(units).map(u=><option key={u}>{u}</option>)}</select><span style={{alignSelf:"center"}}>→</span><select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}}>{Object.keys(units).map(u=><option key={u}>{u}</option>)}</select></div>{val && <p style={{marginTop:"1rem",fontSize:"1.5rem",color:"#38bdf8"}}>{val} {from} = {convert()} {to}</p>}</div>);
}