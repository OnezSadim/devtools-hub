"use client";
import { useState } from "react";

const units = ["candela", "millicandela", "kilocandela", "hefnerkerze", "carcel", "bougie-decimale"];
const toBase = {"candela": 1, "millicandela": 0.001, "kilocandela": 1000, "hefnerkerze": 0.9, "carcel": 9.74, "bougie-decimale": 1.0};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0]);
  const [to, setTo] = useState(units[1]);
  function convert() {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * toBase[from]) / toBase[to]).toPrecision(6);
  }
  return (
    <main style={{padding:"2rem",maxWidth:"480px",margin:"0 auto",fontFamily:"sans-serif"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Luminous Intensity Converter</h1>
      <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{width:"100%",padding:"0.5rem",marginBottom:"0.5rem",boxSizing:"border-box"}} />
      <select value={from} onChange={e=>setFrom(e.target.value)} style={{width:"100%",padding:"0.5rem",marginBottom:"0.5rem"}}>
        {units.map(u=><option key={u}>{u}</option>)}
      </select>
      <select value={to} onChange={e=>setTo(e.target.value)} style={{width:"100%",padding:"0.5rem",marginBottom:"1rem"}}>
        {units.map(u=><option key={u}>{u}</option>)}
      </select>
      <div style={{fontSize:"1.25rem",fontWeight:"bold"}}>Result: {convert()}</div>
    </main>
  );
}
