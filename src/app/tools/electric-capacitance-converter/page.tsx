"use client";
import { useState } from "react";

const UNITS: string[] = ["Farad", "Millifarad", "Microfarad", "Nanofarad", "Picofarad", "Femtofarad", "Abfarad", "Statfarad"];
const TO_BASE: Record<string, number> = {"Farad": 1, "Millifarad": 0.001, "Microfarad": 1e-06, "Nanofarad": 1e-09, "Picofarad": 1e-12, "Femtofarad": 1e-15, "Abfarad": 1000000000.0, "Statfarad": 1.11265e-12};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const result = val !== "" && !isNaN(Number(val))
    ? (Number(val) * TO_BASE[from] / TO_BASE[to]).toPrecision(6)
    : "";
  return (
    <main style={{maxWidth:520,margin:"40px auto",padding:"0 16px",fontFamily:"sans-serif",color:"#f1f5f9"}}>
      <h1 style={{fontSize:"1.6rem",marginBottom:8}}>Electric Capacitance Converter</h1>
      <div style={{display:"flex",gap:8,marginBottom:12}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value"
          style={{flex:1,padding:"8px",borderRadius:6,border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)}
          style={{padding:"8px",borderRadius:6,border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9"}}>
          {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      <div style={{display:"flex",gap:8,marginBottom:16}}>
        <input value={result} readOnly placeholder="Result"
          style={{flex:1,padding:"8px",borderRadius:6,border:"1px solid #334155",background:"#0f172a",color:"#38bdf8"}} />
        <select value={to} onChange={e=>setTo(e.target.value)}
          style={{padding:"8px",borderRadius:6,border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9"}}>
          {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
      </div>
    </main>
  );
}
