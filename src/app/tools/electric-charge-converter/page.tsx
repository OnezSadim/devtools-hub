"use client";
import { useState } from "react";

const UNITS = ["coulomb", "millicoulomb", "microcoulomb", "nanocoulomb", "picocoulomb", "ampere-hour", "milliampere-hour", "faraday", "statcoulomb"];
const TO_BASE: Record<string, number> = {"coulomb": 1, "millicoulomb": 0.001, "microcoulomb": 1e-06, "nanocoulomb": 1e-09, "picocoulomb": 1e-12, "ampere-hour": 3600, "milliampere-hour": 3.6, "faraday": 96485.3, "statcoulomb": 3.33564e-10};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * TO_BASE[from]) / TO_BASE[to]).toPrecision(6);
  };
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem"}}>
      <h1 style={{fontSize:"2rem",fontWeight:700,marginBottom:"1.5rem"}}>Electric Charge Converter</h1>
      <div style={{display:"flex",flexDirection:"column",gap:"1rem",width:"100%",maxWidth:"400px"}}>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"0.75rem",borderRadius:"8px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9",fontSize:"1rem"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.75rem",borderRadius:"8px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9"}}>
          {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.75rem",borderRadius:"8px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9"}}>
          {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
        <div style={{padding:"1rem",borderRadius:"8px",background:"#1e293b",textAlign:"center",fontSize:"1.25rem",fontWeight:600}}>{convert() || "—"} {to}</div>
      </div>
    </main>
  );
}
