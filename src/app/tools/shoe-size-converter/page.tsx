"use client";
import { useState } from "react";

const units = ["US Men", "US Women", "UK", "EU", "CM"];
const toBase: Record<string, number> = {"US Men": 1, "US Women": 1.5, "UK": 0.5, "EU": 33.5, "CM": 25.4};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0]);
  const [to, setTo] = useState(units[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * toBase[from]) / toBase[to]).toPrecision(6);
  };
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem"}}>
      <div style={{background:"#1e293b",borderRadius:"1rem",padding:"2rem",width:"100%",maxWidth:"480px"}}>
        <h1 style={{fontSize:"1.5rem",fontWeight:700,marginBottom:"0.5rem"}}>Shoe Size Converter</h1>
        <p style={{color:"#94a3b8",marginBottom:"1.5rem",fontSize:"0.9rem"}}>Convert shoe sizes between US, UK, EU and centimeter sizing systems.</p>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",marginBottom:"1rem",boxSizing:"border-box"}} />
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginBottom:"1rem"}}>
          <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9"}}>
            {units.map(u=><option key={u} value={u}>{u}</option>)}
          </select>
          <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9"}}>
            {units.map(u=><option key={u} value={u}>{u}</option>)}
          </select>
        </div>
        <div style={{background:"#0f172a",borderRadius:"0.5rem",padding:"1rem",textAlign:"center",fontSize:"1.25rem",fontWeight:600,color:"#38bdf8",minHeight:"3rem"}}>
          {val ? convert() + " " + to : "Result appears here"}
        </div>
      </div>
    </main>
  );
}
