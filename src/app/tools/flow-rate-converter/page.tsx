"use client";
import { useState } from "react";

const units = ["m3/s", "L/s", "L/min", "mL/s", "gal/min", "ft3/s", "ft3/min"];
const toBase = {"m3/s": 1, "L/s": 0.001, "L/min": 1.66667e-05, "mL/s": 1e-06, "gal/min": 6.30902e-05, "ft3/s": 0.0283168, "ft3/min": 0.000471947};

export default function FlowRateConverterPage() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0]);
  const [to, setTo] = useState(units[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * toBase[from]) / toBase[to]).toPrecision(6);
  };
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:"monospace",padding:"2rem"}}>
      <h1 style={{fontSize:"2rem",marginBottom:"1rem"}}>Flow Rate Converter</h1>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",justifyContent:"center"}}>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:"0.5rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9",fontSize:"1rem"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9"}}>
          {units.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
        <span style={{lineHeight:"2.2rem"}}>to</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9"}}>
          {units.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      {val && <p style={{marginTop:"1.5rem",fontSize:"1.5rem"}}>{val} {from} = <strong>{convert()}</strong> {to}</p>}
    </main>
  );
}
