"use client";
import { useState } from "react";
const UNITS: string[] = ["mL", "L", "tsp", "tbsp", "fl oz", "cup", "pint", "quart", "gallon"];
const TO_BASE: Record<string, number> = {"mL": 1, "L": 1000, "tsp": 4.92892, "tbsp": 14.7868, "fl oz": 29.5735, "cup": 236.588, "pint": 473.176, "quart": 946.353, "gallon": 3785.41};
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
      <h1 style={{fontSize:"2rem",fontWeight:700,marginBottom:"1.5rem"}}>Cooking Volume Converter</h1>
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
