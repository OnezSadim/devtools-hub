"use client";
import { useState } from "react";

const units: Record<string, number> = {
  "Becquerel (Bq)": 1,
  "Kilobecquerel (kBq)": 1000,
  "Megabecquerel (MBq)": 1000000.0,
  "Gigabecquerel (GBq)": 1000000000.0,
  "Terabecquerel (TBq)": 1000000000000.0,
  "Curie (Ci)": 37000000000.0,
  "Millicurie (mCi)": 37000000.0,
  "Microcurie (uCi)": 37000,
  "Rutherford (Rd)": 1000000.0,
  "Disintegrations/sec": 1,
};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("Becquerel (Bq)");
  const [to, setTo] = useState("Kilobecquerel (kBq)");
  const result = val !== "" && !isNaN(Number(val))
    ? (Number(val) * units[from] / units[to]).toPrecision(6)
    : "";
  return (
    <main style={{padding:"2rem",maxWidth:"480px",margin:"0 auto",fontFamily:"sans-serif"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Radioactivity Converter</h1>
      <input type="number" value={val} onChange={e=>setVal(e.target.value)}
        placeholder="Enter value"
        style={{width:"100%",padding:"0.5rem",marginBottom:"0.75rem",fontSize:"1rem",boxSizing:"border-box"}} />
      <div style={{display:"flex",gap:"0.5rem",marginBottom:"0.75rem"}}>
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:"0.5rem"}}>
          {Object.keys(units).map(u=><option key={u} value={u}>{u}</option>)}
        </select>
        <span style={{alignSelf:"center"}}>to</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:"0.5rem"}}>
          {Object.keys(units).map(u=><option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      {result !== "" && (
        <p style={{fontSize:"1.25rem",fontWeight:"bold"}}>{val} {from} = {result} {to}</p>
      )}
    </main>
  );
}
