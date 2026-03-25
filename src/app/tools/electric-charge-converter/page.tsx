"use client";
import { useState } from "react";

const units = ["C", "mC", "uC", "nC", "pC", "kC", "MC", "Ah", "mAh"];
const toBase: Record<string, number> = {"C": 1, "mC": 0.001, "uC": 1e-06, "nC": 1e-09, "pC": 1e-12, "kC": 1000.0, "MC": 1000000.0, "Ah": 3600, "mAh": 3.6};

export default function ElectricChargeConverterPage() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0]);
  const [to, setTo] = useState(units[1]);
  const convert = (v: string) => {
    const n = parseFloat(v);
    if (isNaN(n)) return "";
    return ((n * toBase[from]) / toBase[to]).toPrecision(6);
  };
  return (
    <main style={{padding:"2rem",maxWidth:"600px",margin:"0 auto",fontFamily:"sans-serif"}}>
      <h1 style={{fontSize:"1.8rem",marginBottom:"1rem"}}>Electric Charge Converter</h1>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"1rem"}}>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{flex:1,padding:"0.5rem",fontSize:"1rem",borderRadius:"4px",border:"1px solid #ccc"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",fontSize:"1rem",borderRadius:"4px",border:"1px solid #ccc"}}>
          {units.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"1rem"}}>
        <input type="text" readOnly value={convert(val)} placeholder="Result" style={{flex:1,padding:"0.5rem",fontSize:"1rem",borderRadius:"4px",border:"1px solid #ccc",background:"#f5f5f5"}} />
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem",fontSize:"1rem",borderRadius:"4px",border:"1px solid #ccc"}}>
          {units.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      <p style={{color:"#666",fontSize:"0.9rem"}}>Convert between electric charge units instantly.</p>
    </main>
  );
}
