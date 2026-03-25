"use client";
import { useState } from "react";

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("m/s²");
  const [to, setTo] = useState("ft/s²");
  const units = ["m/s²", "ft/s²", "g", "Gal", "km/h/s"];
  const factors: Record<string, number> = {"m/s²": 1, "ft/s²": 0.3048, "g": 9.80665, "Gal": 0.01, "km/h/s": 0.27778};
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * factors[from]) / factors[to]).toPrecision(6);
  };
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",display:"flex",flexDirection:"column",alignItems:"center",padding:"2rem"}}>
      <h1 style={{fontSize:"2rem",fontWeight:700,marginBottom:"0.5rem"}}>Acceleration Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Convert between acceleration units including m/s², ft/s², g-force, and more.</p>
      <div style={{background:"#1e293b",borderRadius:"1rem",padding:"2rem",width:"100%",maxWidth:"500px"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:"1.1rem",marginBottom:"1rem"}} />
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginBottom:"1rem"}}>
          <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9"}}>{units.map(u=><option key={u} value={u}>{u}</option>)}</select>
          <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9"}}>{units.map(u=><option key={u} value={u}>{u}</option>)}</select>
        </div>
        {val && <div style={{background:"#0f172a",borderRadius:"0.5rem",padding:"1rem",textAlign:"center",fontSize:"1.5rem",fontWeight:700,color:"#38bdf8"}}>{convert()}</div>}
      </div>
    </main>
  );
}
