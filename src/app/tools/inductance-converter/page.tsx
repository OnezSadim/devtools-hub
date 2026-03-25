"use client";
import { useState } from "react";

const UNITS = [{name: "Henry", factor: 1}, {name: "Millihenry", factor: 0.001}, {name: "Microhenry", factor: 1e-06}, {name: "Nanohenry", factor: 1e-09}, {name: "Picohenry", factor: 1e-12}];

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0].name);
  const [to, setTo] = useState(UNITS[1].name);
  const fromF = UNITS.find(u => u.name === from)?.factor ?? 1;
  const toF = UNITS.find(u => u.name === to)?.factor ?? 1;
  const result = val === "" ? "" : ((parseFloat(val) * fromF) / toF).toPrecision(8);
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:"sans-serif",padding:"2rem"}}>
      <h1 style={{fontSize:"2rem",fontWeight:700,marginBottom:"0.5rem"}}>Inductance Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Convert between inductance units: Henry, Millihenry, Microhenry, and more.</p>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",justifyContent:"center",marginBottom:"1rem"}}>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9",fontSize:"1rem",width:"160px"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9",fontSize:"1rem"}}>
          {UNITS.map(u=><option key={u.name} value={u.name}>{u.name}</option>)}
        </select>
        <span style={{alignSelf:"center",fontSize:"1.5rem"}}>→</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9",fontSize:"1rem"}}>
          {UNITS.map(u=><option key={u.name} value={u.name}>{u.name}</option>)}
        </select>
      </div>
      {result !== "" && <div style={{fontSize:"1.5rem",fontWeight:700,color:"#38bdf8",marginTop:"1rem"}}>{result} {to}</div>}
    </main>
  );
}
