"use client";
import { useState } from "react";

const units = ['kg/s', 'kg/min', 'kg/h', 'g/s', 'g/min', 'lb/s', 'lb/min', 'lb/h', 't/h'];
const factors = {'kg/s': 1.0, 'kg/min': 0.016666666666666666, 'kg/h': 0.0002777777777777778, 'g/s': 0.001, 'g/min': 1.6666666666666667e-05, 'lb/s': 0.453592, 'lb/min': 0.0075598666666666665, 'lb/h': 0.00012599777777777776, 't/h': 0.2777777777777778};

export default function Page() {
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
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Mass Flow Rate Converter</h1>
      <input type="number" value={val} onChange={e=>setVal(e.target.value)}
        style={{width:"100%",padding:"0.5rem",marginBottom:"0.5rem",fontSize:"1rem"}} placeholder="Enter value" />
      <div style={{display:"flex",gap:"0.5rem",marginBottom:"0.5rem"}}>
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:"0.5rem"}}>
          {units.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
        <span style={{alignSelf:"center"}}>&#8594;</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:"0.5rem"}}>
          {units.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      <div style={{padding:"1rem",background:"#f5f5f5",borderRadius:"4px",fontSize:"1.25rem"}}>
        {val ? convert() + " " + to : "Result will appear here"}
      </div>
    </main>
  );
}
