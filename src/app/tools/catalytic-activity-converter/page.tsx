"use client";
import { useState } from "react";

const units = ['Katal (kat)', 'Millikatal (mkat)', 'Microkatal (ukat)', 'Nanokatal (nkat)', 'Enzyme Unit (U)', 'Milliunits (mU)', 'Microunits (uU)'];
const factors = {'Katal (kat)': 1, 'Millikatal (mkat)': 0.001, 'Microkatal (ukat)': 1e-06, 'Nanokatal (nkat)': 1e-09, 'Enzyme Unit (U)': 1.6666666666666667e-11, 'Milliunits (mU)': 1.6666666666666667e-14, 'Microunits (uU)': 1.6666666666666667e-17};

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
      <h1>Catalytic Activity Converter</h1>
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
