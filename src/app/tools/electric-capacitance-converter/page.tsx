"use client";
import { useState } from "react";

const UNITS = ["Farad (F)", "Millifarad (mF)", "Microfarad (uF)", "Nanofarad (nF)", "Picofarad (pF)", "Femtofarad (fF)"];
const TO_BASE = [1, 0.001, 1e-06, 1e-09, 1e-12, 1e-15];

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(1);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * TO_BASE[from]) / TO_BASE[to]).toPrecision(6);
  };
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Electric Capacitance Converter</h1>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"1rem"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:"0.5rem",background:"#1e293b",color:"#f1f5f9",border:"1px solid #334155",borderRadius:"4px",width:"150px"}} />
        <select value={from} onChange={e=>setFrom(Number(e.target.value))} style={{padding:"0.5rem",background:"#1e293b",color:"#f1f5f9",border:"1px solid #334155",borderRadius:"4px"}}>
          {UNITS.map((u,i)=><option key={i} value={i}>{u}</option>)}
        </select>
        <span style={{alignSelf:"center"}}>to</span>
        <select value={to} onChange={e=>setTo(Number(e.target.value))} style={{padding:"0.5rem",background:"#1e293b",color:"#f1f5f9",border:"1px solid #334155",borderRadius:"4px"}}>
          {UNITS.map((u,i)=><option key={i} value={i}>{u}</option>)}
        </select>
      </div>
      {val && <div style={{fontSize:"1.25rem",color:"#38bdf8"}}>Result: {convert()} {UNITS[to]}</div>}
    </main>
  );
}
