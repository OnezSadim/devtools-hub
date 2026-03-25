"use client";
import { useState } from "react";
const UNITS = [{"key": "bps", "label": "bps", "factor": 1}, {"key": "Kbps", "label": "Kbps", "factor": 1000.0}, {"key": "Mbps", "label": "Mbps", "factor": 1000000.0}, {"key": "Gbps", "label": "Gbps", "factor": 1000000000.0}, {"key": "Tbps", "label": "Tbps", "factor": 1000000000000.0}, {"key": "KBps", "label": "KB/s", "factor": 8000.0}, {"key": "MBps", "label": "MB/s", "factor": 8000000.0}, {"key": "GBps", "label": "GB/s", "factor": 8000000000.0}];
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0].key);
  const [to, setTo] = useState(UNITS[1].key);
  const fromU = UNITS.find(u => u.key === from);
  const toU = UNITS.find(u => u.key === to);
  const result = fromU && toU && val !== "" ? ((parseFloat(val) * fromU.factor) / toU.factor).toPrecision(6) : "";
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"1.5rem",fontWeight:700,marginBottom:".5rem"}}>Data Transfer Rate Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:"1.5rem"}}>Convert between data transfer rate units like bps, Kbps, Mbps, Gbps.</p>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"1rem"}}>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:".5rem",background:"#1e293b",border:"1px solid #334155",color:"#f1f5f9",borderRadius:"6px",width:"140px"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:".5rem",background:"#1e293b",border:"1px solid #334155",color:"#f1f5f9",borderRadius:"6px"}}>
          {UNITS.map(u=><option key={u.key} value={u.key}>{u.label}</option>)}
        </select>
        <span style={{lineHeight:"2rem"}}>to</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:".5rem",background:"#1e293b",border:"1px solid #334155",color:"#f1f5f9",borderRadius:"6px"}}>
          {UNITS.map(u=><option key={u.key} value={u.key}>{u.label}</option>)}
        </select>
      </div>
      {result !== "" && <div style={{fontSize:"1.25rem",background:"#1e293b",padding:"1rem",borderRadius:"8px",border:"1px solid #22d3ee"}}>{val} {fromU?.label} = <strong>{result}</strong> {toU?.label}</div>}
    </main>
  );
}
