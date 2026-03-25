"use client";
import { useState } from "react";

const UNITS = ["Becquerel (Bq)", "Kilobecquerel (kBq)", "Megabecquerel (MBq)", "Gigabecquerel (GBq)", "Curie (Ci)", "Millicurie (mCi)", "Microcurie (uCi)"];
const TO_BASE = [1, 1000, 1000000, 1000000000, 37000000000, 37000000, 37000];

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(0);
  const num = parseFloat(val);
  const base = isNaN(num) ? null : num * TO_BASE[from];
  return (
    <main style={{maxWidth:600,margin:"40px auto",padding:"0 16px",fontFamily:"sans-serif",color:"#e2e8f0"}}>
      <h1 style={{fontSize:"1.8rem",fontWeight:700,marginBottom:8}}>Radioactivity Converter</h1>
      <div style={{display:"flex",gap:8,marginBottom:24}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{flex:1,padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0",fontSize:"1rem"}} />
        <select value={from} onChange={e=>setFrom(Number(e.target.value))} style={{padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0"}}>
          {UNITS.map((u,i)=>(<option key={i} value={i}>{u}</option>))}
        </select>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:10}}>
        {UNITS.map((u,i)=>(
          <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"12px 16px",background:"#1e293b",borderRadius:8,border:i===from?"1px solid #6366f1":"1px solid #334155"}}>
            <span style={{color:"#94a3b8"}}>{u}</span>
            <span style={{fontWeight:600}}>{base===null?"—":(base/TO_BASE[i]).toPrecision(6)}</span>
          </div>
        ))}
      </div>
    </main>
  );
}