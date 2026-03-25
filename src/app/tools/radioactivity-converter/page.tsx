"use client";
import { useState } from "react";

const units = ['Becquerel (Bq)', 'Kilobecquerel (kBq)', 'Megabecquerel (MBq)', 'Gigabecquerel (GBq)', 'Terabecquerel (TBq)', 'Curie (Ci)', 'Millicurie (mCi)', 'Microcurie (uCi)', 'Rutherford (Rd)'];
const factors = {'Becquerel (Bq)': 1, 'Kilobecquerel (kBq)': 1000.0, 'Megabecquerel (MBq)': 1000000.0, 'Gigabecquerel (GBq)': 1000000000.0, 'Terabecquerel (TBq)': 1000000000000.0, 'Curie (Ci)': 37000000000.0, 'Millicurie (mCi)': 37000000.0, 'Microcurie (uCi)': 37000.0, 'Rutherford (Rd)': 1000000.0};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0]);
  const [to, setTo] = useState(units[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * factors[from]) / factors[to]).toPrecision(6);
  };
  return (
    <main style={{padding:"2rem",maxWidth:"480px",margin:"0 auto",fontFamily:"sans-serif"}}>
      <h1>Radioactivity Converter</h1>
      <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{width:"100%",padding:"0.5rem",marginBottom:"1rem"}} />
      <select value={from} onChange={e=>setFrom(e.target.value)} style={{width:"100%",padding:"0.5rem",marginBottom:"1rem"}}>
        {units.map(u=><option key={u}>{u}</option>)}
      </select>
      <select value={to} onChange={e=>setTo(e.target.value)} style={{width:"100%",padding:"0.5rem",marginBottom:"1rem"}}>
        {units.map(u=><option key={u}>{u}</option>)}
      </select>
      <div style={{fontSize:"1.5rem",fontWeight:"bold"}}>{convert() || "—"} {to}</div>
    </main>
  );
}
