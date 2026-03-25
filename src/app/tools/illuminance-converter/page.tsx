"use client";
import { useState } from "react";

const units = [
  { name: "Lux (lx)", factor: 1 },
  { name: "Foot-candle (fc)", factor: 10.7639 },
  { name: "Phot (ph)", factor: 10000 },
  { name: "Nox", factor: 0.001 },
  { name: "Millilux (mlx)", factor: 0.001 },
  { name: "Kilolux (klx)", factor: 1000 },
];

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(1);
  const result = val !== "" && !isNaN(Number(val))
    ? (Number(val) * units[from].factor / units[to].factor).toPrecision(6)
    : "";
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"monospace"}}>
      <div style={{background:"#1e293b",borderRadius:12,padding:32,width:360}}>
        <h1 style={{fontSize:20,fontWeight:700,marginBottom:24,color:"#38bdf8"}}>Illuminance Converter</h1>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"8px 12px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",marginBottom:16,boxSizing:"border-box"}} />
        <div style={{display:"flex",gap:8,marginBottom:16}}>
          <select value={from} onChange={e=>setFrom(Number(e.target.value))} style={{flex:1,padding:"8px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9"}}>
            {units.map((u,i)=><option key={i} value={i}>{u.name}</option>)}
          </select>
          <span style={{padding:"8px 4px",color:"#94a3b8"}}>to</span>
          <select value={to} onChange={e=>setTo(Number(e.target.value))} style={{flex:1,padding:"8px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9"}}>
            {units.map((u,i)=><option key={i} value={i}>{u.name}</option>)}
          </select>
        </div>
        {result && <div style={{background:"#0f172a",borderRadius:8,padding:"12px 16px",fontSize:18,fontWeight:700,color:"#4ade80",textAlign:"center"}}>{result} {units[to].name}</div>}
      </div>
    </main>
  );
}
