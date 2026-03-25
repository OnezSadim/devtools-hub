"use client";
import { useState } from "react";

export default function PixelEmConverter() {
  const [px, setPx] = useState("");
  const [em, setEm] = useState("");
  const [rem, setRem] = useState("");
  const [base, setBase] = useState("16");
  const basePx = parseFloat(base) || 16;

  const handlePx = (v) => {
    setPx(v);
    const n = parseFloat(v);
    if (!isNaN(n)) { setEm((n / basePx).toFixed(4)); setRem((n / 16).toFixed(4)); }
    else { setEm(""); setRem(""); }
  };
  const handleEm = (v) => {
    setEm(v);
    const n = parseFloat(v);
    if (!isNaN(n)) { setPx((n * basePx).toFixed(2)); setRem((n * basePx / 16).toFixed(4)); }
    else { setPx(""); setRem(""); }
  };
  const handleRem = (v) => {
    setRem(v);
    const n = parseFloat(v);
    if (!isNaN(n)) { setPx((n * 16).toFixed(2)); setEm((n * 16 / basePx).toFixed(4)); }
    else { setPx(""); setEm(""); }
  };

  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"2rem",marginBottom:"0.5rem"}}>px / em / rem Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:"1rem"}}>Convert between pixel, em, and rem units</p>
      <div style={{marginBottom:"1.5rem"}}>
        <label style={{color:"#94a3b8",fontSize:"0.85rem"}}>Base font size (px): </label>
        <input type="number" value={base} onChange={e=>setBase(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"6px",color:"#e2e8f0",width:"80px",marginLeft:"0.5rem"}} />
      </div>
      {[{label:"Pixels (px)",val:px,set:handlePx},{label:"Em (em)",val:em,set:handleEm},{label:"Rem (rem)",val:rem,set:handleRem}].map(({label,val,set})=>(
        <div key={label} style={{marginBottom:"1rem"}}>
          <label style={{display:"block",color:"#94a3b8",marginBottom:"0.25rem"}}>{label}</label>
          <input type="number" value={val} onChange={e=>set(e.target.value)} placeholder={"0"} style={{padding:"0.75rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",color:"#38bdf8",fontSize:"1.1rem",width:"200px"}} />
        </div>
      ))}
    </main>
  );
}
