"use client";
import { useState } from "react";
export default function Page() {
  const units = ['ampere-turn', 'milliampere-turn', 'kiloampere-turn', 'gilbert'];
  const toBase = {'ampere-turn': 1, 'milliampere-turn': 0.001, 'kiloampere-turn': 1000.0, 'gilbert': 0.795775};
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
      <h1>Magnetomotive Force Converter</h1>
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
