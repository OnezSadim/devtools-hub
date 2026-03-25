"use client";
import { useState } from "react";
export default function Page() {
  const units = ['newton per meter', 'millinewton per meter', 'dyne per centimeter', 'pound force per foot', 'erg per square centimeter'];
  const factors = {'newton per meter': 1.0, 'millinewton per meter': 0.001, 'dyne per centimeter': 0.001, 'pound force per foot': 14.5939, 'erg per square centimeter': 0.001};
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
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Surface Tension Converter</h1>
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
