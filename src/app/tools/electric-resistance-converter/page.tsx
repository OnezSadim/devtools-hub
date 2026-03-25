"use client";
import { useState } from "react";
export default function Page() {
  const units = ["ohm", "milliohm", "microohm", "kilohm", "megaohm"];
  const toBase = {"ohm": 1, "milliohm": 0.001, "microohm": 1e-06, "kilohm": 1000, "megaohm": 1000000};
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0]);
  const convert = (u) => {
    const n = parseFloat(val);
    if (isNaN(n)) return "-";
    return ((n * toBase[from]) / toBase[u]).toPrecision(6);
  };
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"1.8rem",marginBottom:"0.5rem"}}>Electric Resistance Converter</h1>
      <div style={{display:"flex",gap:"1rem",marginBottom:"1.5rem",flexWrap:"wrap"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"0.5rem",background:"#1e293b",color:"#f1f5f9",border:"1px solid #334155",borderRadius:"4px",fontSize:"1rem",width:"180px"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",color:"#f1f5f9",border:"1px solid #334155",borderRadius:"4px",fontSize:"1rem"}}>
          {units.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      <table style={{width:"100%",borderCollapse:"collapse"}}>
        <thead><tr><th style={{textAlign:"left",padding:"0.5rem",borderBottom:"1px solid #334155"}}>Unit</th><th style={{textAlign:"left",padding:"0.5rem",borderBottom:"1px solid #334155"}}>Value</th></tr></thead>
        <tbody>{units.map(u=><tr key={u}><td style={{padding:"0.5rem",borderBottom:"1px solid #1e293b"}}>{u}</td><td style={{padding:"0.5rem",borderBottom:"1px solid #1e293b",color:"#38bdf8"}}>{convert(u)}</td></tr>)}</tbody>
      </table>
    </main>
  );
}
