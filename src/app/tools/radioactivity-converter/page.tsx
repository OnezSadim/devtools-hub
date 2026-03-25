"use client";
import { useState } from "react";

const UNITS = ["becquerel", "curie", "rutherford", "millicurie", "microcurie", "gigabecquerel", "megabecquerel"];
const TO_BASE = {"becquerel": 1, "curie": 37000000000.0, "rutherford": 1000000.0, "millicurie": 37000000.0, "microcurie": 37000.0, "gigabecquerel": 1000000000.0, "megabecquerel": 1000000.0};

export default function RadioactivityConverterPage() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const result = val && !isNaN(Number(val)) ? (Number(val) * TO_BASE[from] / TO_BASE[to]).toFixed(8).replace(/\.?0+$/, "") : "";
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem"}}>
      <h1 style={{fontSize:"2rem",fontWeight:700,marginBottom:"0.5rem"}}>Radioactivity Converter</h1>
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
