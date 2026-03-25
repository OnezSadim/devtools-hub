"use client";
import { useState } from "react";

const UNITS: string[] = ["C/m3", "C/cm3", "C/mm3", "mC/m3", "uC/m3"];
const TO_BASE: number[] = [1, 1000000.0, 1000000000.0, 0.001, 1e-06];

export default function VolumeChargeDensityConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(1);
  const result = val !== "" && !isNaN(Number(val)) ? (Number(val) * TO_BASE[from] / TO_BASE[to]).toPrecision(6) : "";
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",fontFamily:"monospace",padding:"2rem"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1.5rem"}}>Volume Charge Density Converter</h1>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"1rem"}}>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:"0.5rem",background:"#1e293b",color:"#f1f5f9",border:"1px solid #334155",borderRadius:"4px",width:"160px"}} />
        <select value={from} onChange={e=>setFrom(Number(e.target.value))} style={{padding:"0.5rem",background:"#1e293b",color:"#f1f5f9",border:"1px solid #334155",borderRadius:"4px"}}>
          {UNITS.map((u,i)=><option key={i} value={i}>{u}</option>)}
        </select>
        <span style={{lineHeight:"2.2rem"}}>to</span>
        <select value={to} onChange={e=>setTo(Number(e.target.value))} style={{padding:"0.5rem",background:"#1e293b",color:"#f1f5f9",border:"1px solid #334155",borderRadius:"4px"}}>
          {UNITS.map((u,i)=><option key={i} value={i}>{u}</option>)}
        </select>
      </div>
      {result && <div style={{fontSize:"1.25rem",color:"#38bdf8"}}>= {result} {UNITS[to]}</div>}
    </main>
  );
}
