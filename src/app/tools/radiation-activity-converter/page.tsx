"use client";
import { useState } from "react";

const units = ["becquerel","curie","millicurie","microcurie","kilobecquerel","megabecquerel"];

const conversions = {"becquerel":1,"curie":3.7e10,"millicurie":3.7e7,"microcurie":37000,"kilobecquerel":1000,"megabecquerel":1000000};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0]);
  const [to, setTo] = useState(units[1]);
  function convert() {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    const base = n / conversions[from];
    return (base * conversions[to]).toPrecision(6);
  }
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"1.8rem",marginBottom:"1rem"}}>Radiation Activity Converter</h1>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"1rem"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:"0.5rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9",width:"150px"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9"}}>
          {units.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
        <span style={{lineHeight:"2.2rem"}}>to</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9"}}>
          {units.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      {val && <div style={{background:"#1e293b",padding:"1rem",borderRadius:"8px",fontSize:"1.2rem"}}>{val} {from} = <strong>{convert()}</strong> {to}</div>}
    </main>
  );
}
