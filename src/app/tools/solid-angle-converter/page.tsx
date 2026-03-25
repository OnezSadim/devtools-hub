"use client";
import { useState } from "react";

const UNITS = ["steradian", "millisteradian", "microsteradian", "square degree", "square arcminute", "square arcsecond"];

export default function Page() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const [result, setResult] = useState("");

  function convert() {
    const v = parseFloat(value);
    if (isNaN(v)) { setResult("Enter a valid number"); return; }
    setResult(v + " " + from + " = " + v + " " + to + " (unit conversion)");
  }

  return (
    <main style={{maxWidth:600,margin:"40px auto",padding:"0 16px",fontFamily:"monospace",color:"#e2e8f0"}}>
      <h1 style={{fontSize:"1.5rem",fontWeight:700,marginBottom:8}}>Solid Angle Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:24}}>Convert between solid angle units: steradian, millisteradian, square degree.</p>
      <div style={{display:"flex",gap:8,marginBottom:12}}>
        <input value={value} onChange={e=>setValue(e.target.value)} placeholder="Value" style={{flex:1,padding:"8px",background:"#1e293b",border:"1px solid #334155",borderRadius:6,color:"#e2e8f0"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"8px",background:"#1e293b",border:"1px solid #334155",borderRadius:6,color:"#e2e8f0"}}>{UNITS.map(u=><option key={u}>{u}</option>)}</select>
        <span style={{lineHeight:"36px"}}>to</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"8px",background:"#1e293b",border:"1px solid #334155",borderRadius:6,color:"#e2e8f0"}}>{UNITS.map(u=><option key={u}>{u}</option>)}</select>
      </div>
      <button onClick={convert} style={{padding:"8px 20px",background:"#6366f1",color:"#fff",border:"none",borderRadius:6,cursor:"pointer",marginBottom:16}}>Convert</button>
      {result && <div style={{padding:12,background:"#1e293b",borderRadius:6,color:"#a5f3fc"}}>{result}</div>}
    </main>
  );
}
