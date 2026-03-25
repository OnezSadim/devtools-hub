"use client";
import { useState } from "react";

const units = [{name: 'steradian (sr)', factor: 1}, {name: 'square degree', factor: 0.000304617}, {name: 'square arcminute', factor: 8.46e-08}, {name: 'square arcsecond', factor: 2.35e-11}, {name: 'hemisphere', factor: 6.28318}, {name: 'full sphere', factor: 12.56637}, {name: 'millisteradian', factor: 0.001}, {name: 'microsteradian', factor: 1e-06}];

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(0);
  const base2 = parseFloat(val) * units[from].factor;
  return (
    <main style={{maxWidth:600,margin:"40px auto",padding:"0 16px",fontFamily:"sans-serif",color:"#e2e8f0",background:"#0f172a",borderRadius:12,boxShadow:"0 4px 32px #0008"}}>
      <h1 style={{fontSize:28,fontWeight:700,marginBottom:8}}>Solid Angle Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:24}}>Convert between solid angle units: steradian, square degree, hemisphere and more.</p>
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
