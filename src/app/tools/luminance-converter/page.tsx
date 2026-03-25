"use client";
import { useState } from "react";

const UNITS = ["candela/m2", "nit", "stilb", "apostilb", "lambert", "foot-lambert", "candela/ft2"];
const TO_BASE = {"candela/m2": 1, "nit": 1, "stilb": 10000, "apostilb": 0.31831, "lambert": 3183.1, "foot-lambert": 3.42626, "candela/ft2": 10.7639};

export default function LuminanceConverterPage() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const result = val && !isNaN(Number(val)) ? (Number(val) * TO_BASE[from] / TO_BASE[to]).toFixed(8).replace(/\.?0+$/, "") : "";
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem"}}>
      <h1 style={{fontSize:"2rem",fontWeight:700,marginBottom:"0.5rem"}}>Luminance Converter</h1>
      <div style={{background:"#1e293b",borderRadius:"1rem",padding:"2rem",width:"100%",maxWidth:"480px"}}>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:"1.1rem",marginBottom:"1rem",boxSizing:"border-box"}} />
        <div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}>
          <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9"}}>
            {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
          </select>
          <span style={{alignSelf:"center",fontSize:"1.5rem"}}>&#8594;</span>
          <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9"}}>
            {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
          </select>
        </div>
        {result && <div style={{textAlign:"center",fontSize:"1.5rem",fontWeight:700,color:"#38bdf8"}}>{val} {from} = {result} {to}</div>}
      </div>
    </main>
  );
}
