"use client";
import { useState } from "react";

const units = ['J/(kg*K)', 'kJ/(kg*K)', 'cal/(g*C)', 'kcal/(kg*C)', 'BTU/(lb*F)', 'J/(g*K)'];
const factors = {'J/(kg*K)': 1.0, 'kJ/(kg*K)': 1000.0, 'cal/(g*C)': 4184.0, 'kcal/(kg*C)': 4184.0, 'BTU/(lb*F)': 4186.8, 'J/(g*K)': 1000.0};

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
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Specific Heat Capacity Converter</h1>
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
