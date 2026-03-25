"use client";
import { useState } from "react";
export default function Page() {
  const units = ['pascal second', 'poise', 'centipoise', 'millipascal second', 'pound per foot second'];
  const factors = {'pascal second': 1.0, 'poise': 0.1, 'centipoise': 0.001, 'millipascal second': 0.001, 'pound per foot second': 1.48816};
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0]);
  const [to, setTo] = useState(units[1]);
  function convert() {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * factors[from]) / factors[to]).toPrecision(6);
  }
  return (
    <main style={{padding:"2rem",maxWidth:"480px",margin:"0 auto",fontFamily:"sans-serif"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Dynamic Viscosity Converter</h1>
      <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{width:"100%",padding:"0.5rem",marginBottom:"0.5rem",boxSizing:"border-box"}} />
      <select value={from} onChange={e=>setFrom(e.target.value)} style={{width:"100%",padding:"0.5rem",marginBottom:"0.5rem"}}>
        {units.map(u=><option key={u}>{u}</option>)}
      </select>
      <select value={to} onChange={e=>setTo(e.target.value)} style={{width:"100%",padding:"0.5rem",marginBottom:"0.5rem"}}>
        {units.map(u=><option key={u}>{u}</option>)}
      </select>
      <div style={{padding:"1rem",background:"#f5f5f5",borderRadius:"4px"}}>
        <strong>Result: {convert()}</strong>
      </div>
    </main>
  );
}
