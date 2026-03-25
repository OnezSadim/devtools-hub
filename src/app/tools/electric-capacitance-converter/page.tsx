"use client";
import { useState } from "react";
export default function Page() {
  const units = ['farad', 'millifarad', 'microfarad', 'nanofarad', 'picofarad', 'kilofarad'];
  const toBase = {'farad': 1, 'millifarad': 0.001, 'microfarad': 1e-06, 'nanofarad': 1e-09, 'picofarad': 1e-12, 'kilofarad': 1000.0};
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0]);
  const [to, setTo] = useState(units[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * toBase[from]) / toBase[to]).toPrecision(6);
  };
  return (
    <main style={{padding:"2rem",maxWidth:"480px",margin:"0 auto",fontFamily:"sans-serif"}}>
      <h1>Electric Capacitance Converter</h1>
      <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{width:"100%",padding:"0.5rem",marginBottom:"1rem",fontSize:"1rem"}} />
      <div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}>
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:"0.5rem"}}>
          {units.map(u=><option key={u}>{u}</option>)}
        </select>
        <span style={{alignSelf:"center"}}>→</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:"0.5rem"}}>
          {units.map(u=><option key={u}>{u}</option>)}
        </select>
      </div>
      <div style={{fontSize:"1.5rem",fontWeight:"bold",padding:"1rem",background:"#f5f5f5",borderRadius:"8px"}}>
        {convert() || "—"}
      </div>
    </main>
  );
}
