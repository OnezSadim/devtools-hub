"use client";
import { useState } from "react";

const UNITS: string[] = ["bps", "Kbps", "Mbps", "Gbps", "Tbps", "KBps", "MBps", "GBps"];
const FACTORS: Record<string, number> = {"bps": 1.0, "Kbps": 1000.0, "Mbps": 1000000.0, "Gbps": 1000000000.0, "Tbps": 1000000000000.0, "KBps": 8000.0, "MBps": 8000000.0, "GBps": 8000000000.0};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const result = val !== "" && !isNaN(Number(val)) ? (Number(val) * FACTORS[from] / FACTORS[to]).toPrecision(6) : "";
  return (
    <main style={{padding:"2rem",fontFamily:"sans-serif",background:"#0f172a",minHeight:"100vh",color:"#f1f5f9"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Data Transfer Rate Converter</h1>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",alignItems:"center"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:"0.5rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9",width:"140px"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9"}}>
          {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
        <span>to</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9"}}>
          {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      {result && <p style={{marginTop:"1.5rem",fontSize:"1.25rem",color:"#38bdf8"}}>= {result} {to}</p>}
    </main>
  );
}
