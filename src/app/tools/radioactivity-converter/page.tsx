"use client";
import { useState } from "react";

const units = ['Becquerel (Bq)', 'Curie (Ci)', 'Millicurie (mCi)', 'Microcurie (uCi)', 'Kilobecquerel (kBq)', 'Megabecquerel (MBq)'];
const factors = {'Becquerel (Bq)': 1.0, 'Curie (Ci)': 37000000000.0, 'Millicurie (mCi)': 37000000.0, 'Microcurie (uCi)': 37000.0, 'Kilobecquerel (kBq)': 1000.0, 'Megabecquerel (MBq)': 1000000.0};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0]);
  const [to, setTo] = useState(units[1]);
  function convert(v, f, t) {
    const n = parseFloat(v);
    if (isNaN(n)) return "";
    return ((n * factors[f]) / factors[t]).toPrecision(6);
  }
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",display:"flex",flexDirection:"column",alignItems:"center",padding:"2rem"}}>
      <h1 style={{fontSize:"1.8rem",marginBottom:"0.5rem"}}>Radioactivity Converter</h1>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",marginTop:"1rem",alignItems:"center"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:"0.5rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9",width:"140px"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9"}}>
          {units.map(u=><option key={u}>{u}</option>)}
        </select>
        <span style={{fontSize:"1.2rem"}}>→</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9"}}>
          {units.map(u=><option key={u}>{u}</option>)}
        </select>
      </div>
      {val && <p style={{marginTop:"1.5rem",fontSize:"1.4rem",color:"#38bdf8"}}>{val} {from} = {convert(val,from,to)} {to}</p>}
    </main>
  );
}
