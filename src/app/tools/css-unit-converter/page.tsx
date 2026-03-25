"use client";
import { useState } from "react";
export default function Page() {
  const [px, setPx] = useState("16");
  const base = 16;
  const n = parseFloat(px)||0;
  return (<div style={{padding:"2rem",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0",fontFamily:"monospace"}}>
    <h1 style={{fontSize:"1.8rem",marginBottom:"1rem"}}>CSS Unit Converter</h1>
    <p style={{color:"#94a3b8",marginBottom:"1rem"}}>Base font size: {base}px</p>
    <input value={px} onChange={e=>setPx(e.target.value)} placeholder="px value" style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"6px",width:"200px"}} />
    <div style={{marginTop:"1rem",background:"#1e293b",padding:"1rem",borderRadius:"8px"}}>
      <p>{n}px = {(n/base).toFixed(4)}rem</p>
      <p>{n}px = {(n/base).toFixed(4)}em</p>
      <p>{n}px = {(n*0.75).toFixed(4)}pt</p>
      <p>{n}px = {(n/96).toFixed(4)}in</p>
    </div>
  </div>);
}