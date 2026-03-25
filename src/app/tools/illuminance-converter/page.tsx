"use client";
import { useState } from "react";

const units = [{name: 'lux (lm/m²)', factor: 1}, {name: 'footcandle (lm/ft²)', factor: 10.7639}, {name: 'phot (lm/cm²)', factor: 10000}, {name: 'nox', factor: 0.001}, {name: 'millilux', factor: 0.001}, {name: 'kilolux', factor: 1000}, {name: 'lumen/m²', factor: 1}, {name: 'lumen/cm²', factor: 10000}];

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(0);
  const base2 = parseFloat(val) * units[from].factor;
  return (
    <main style={{maxWidth:600,margin:"40px auto",padding:"0 16px",fontFamily:"sans-serif",color:"#e2e8f0",background:"#0f172a",borderRadius:12,boxShadow:"0 4px 32px #0008"}}>
      <h1 style={{fontSize:28,fontWeight:700,marginBottom:8}}>Illuminance Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:24}}>Convert between illuminance units: lux, footcandle, phot, nox and more.</p>
      <div style={{display:"flex",gap:12,marginBottom:24,flexWrap:"wrap"}}>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{flex:1,minWidth:120,padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0",fontSize:16}} />
        <select value={from} onChange={e=>setFrom(Number(e.target.value))} style={{padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0",fontSize:16}}>
          {units.map((u,i)=><option key={i} value={i}>{u.name}</option>)}
        </select>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
        {units.map((u,i)=>(
          <div key={i} style={{background:"#1e293b",borderRadius:8,padding:"14px 16px",border:i===from?"1px solid #3b82f6":"1px solid #334155"}}>
            <div style={{color:"#94a3b8",fontSize:12,marginBottom:4}}>{u.name}</div>
            <div style={{fontSize:18,fontWeight:600}}>{val ? (base2/u.factor).toPrecision(6) : "-"}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
