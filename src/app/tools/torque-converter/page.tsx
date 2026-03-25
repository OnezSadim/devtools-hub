"use client";
import { useState } from "react";
const UNITS: string[] = ["N·m", "kN·m", "lbf·ft", "lbf·in", "kgf·m", "ozf·in", "dyn·cm"];
const TO_BASE: Record<string, number> = {"N·m": 1, "kN·m": 1000, "lbf·ft": 1.35582, "lbf·in": 0.112985, "kgf·m": 9.80665, "ozf·in": 0.00706155, "dyn·cm": 1e-07};
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  function convert() {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * TO_BASE[from]) / TO_BASE[to]).toPrecision(6);
  }
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem"}}>
      <h1 style={{fontSize:"2rem",fontWeight:700,marginBottom:"1.5rem"}}>Torque Converter</h1>
      <div style={{background:"#1e293b",borderRadius:"1rem",padding:"2rem",width:"100%",maxWidth:"480px"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:".75rem",borderRadius:".5rem",border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:"1rem",marginBottom:"1rem",boxSizing:"border-box"}} />
        <div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}>
          <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:".75rem",borderRadius:".5rem",border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9"}}>
            {UNITS.map(u=><option key={u}>{u}</option>)}
          </select>
          <span style={{alignSelf:"center",fontSize:"1.5rem"}}>&#8594;</span>
          <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:".75rem",borderRadius:".5rem",border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9"}}>
            {UNITS.map(u=><option key={u}>{u}</option>)}
          </select>
        </div>
        <div style={{background:"#0f172a",borderRadius:".5rem",padding:"1rem",textAlign:"center",fontSize:"1.25rem",fontWeight:600,color:"#38bdf8"}}>{convert() || "—"}</div>
      </div>
    </main>
  );
}
