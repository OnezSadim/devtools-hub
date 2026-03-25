"use client";
import { useState } from "react";

const units: {value:string,label:string,factor:number}[] = [
        { value: 'lx', label: 'Lux (lx)', factor: 1.0 },
        { value: 'fc', label: 'Foot-candle (fc)', factor: 10.7639 },
        { value: 'ph', label: 'Phot (ph)', factor: 10000.0 },
        { value: 'nx', label: 'Nox (nx)', factor: 0.001 },
        { value: 'klx', label: 'Kilolux (klx)', factor: 1000.0 },
        { value: 'mlx', label: 'Millilux (mlx)', factor: 0.001 },
];

export default function IlluminanceConverterPage() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0].value);
  const [to, setTo] = useState(units[1].value);
  const [result, setResult] = useState<string | null>(null);

  function convert() {
    const n = parseFloat(val);
    if (isNaN(n)) { setResult("Invalid input"); return; }
    const fromU = units.find(u => u.value === from)!;
    const toU = units.find(u => u.value === to)!;
    const base = n * fromU.factor;
    const out = base / toU.factor;
    setResult(out.toPrecision(8).replace(/\.?0+$/, ""));
  }

  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",display:"flex",flexDirection:"column",alignItems:"center",padding:"40px 16px"}}>
      <h1 style={{fontSize:"2rem",fontWeight:700,marginBottom:8}}>Illuminance Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:32}}>Convert between lux, foot-candle, phot and other illuminance units.</p>
      <div style={{background:"#1e293b",borderRadius:12,padding:32,width:"100%",maxWidth:480}}>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)}
          placeholder="Enter value" style={{width:"100%",padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:"1rem",marginBottom:16,boxSizing:"border-box"}} />
        <div style={{display:"flex",gap:12,marginBottom:16}}>
          <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:"10px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9"}}>
            {units.map(u=><option key={u.value} value={u.value}>{u.label}</option>)}
          </select>
          <span style={{alignSelf:"center",color:"#94a3b8"}}>→</span>
          <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:"10px",borderRadius:8,border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9"}}>
            {units.map(u=><option key={u.value} value={u.value}>{u.label}</option>)}
          </select>
        </div>
        <button onClick={convert} style={{width:"100%",padding:"12px",borderRadius:8,background:"#6366f1",color:"#fff",fontWeight:600,fontSize:"1rem",border:"none",cursor:"pointer"}}>
          Convert
        </button>
        {result !== null && (
          <div style={{marginTop:20,padding:16,background:"#0f172a",borderRadius:8,textAlign:"center",fontSize:"1.25rem",fontWeight:600,color:"#a5b4fc"}}>
            {result} {units.find(u=>u.value===to)?.label}
          </div>
        )}
      </div>
    </main>
  );
}
