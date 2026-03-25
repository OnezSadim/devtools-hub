"use client";
import { useState } from "react";

const units = ['Steradian (sr)', 'Millisteradian (msr)', 'Square degree', 'Square arcminute', 'Square arcsecond', 'Hemisphere', 'Full sphere'];
const factors = {'Steradian (sr)': 1, 'Millisteradian (msr)': 0.001, 'Square degree': 0.00030461741978670797, 'Square arcminute': 8.461594994075223e-08, 'Square arcsecond': 2.3504430539097837e-11, 'Hemisphere': 6.28318530717958, 'Full sphere': 12.56637061435916};

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
      <h1>Solid Angle Converter</h1>
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
