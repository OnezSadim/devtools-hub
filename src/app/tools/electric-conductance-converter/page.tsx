"use client";
import { useState } from "react";

const UNITS: string[] = ["siemens", "millisiemens", "microsiemens", "mho", "millimho", "micromho", "abmho", "statmho"];
const TO_BASE: Record<string, number> = {"siemens": 1, "millisiemens": 0.001, "microsiemens": 1e-06, "mho": 1, "millimho": 0.001, "micromho": 1e-06, "abmho": 1000000000.0, "statmho": 1.11265e-12};

export default function ElectricConductanceConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * TO_BASE[from]) / TO_BASE[to]).toPrecision(8);
  };
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem"}}>
      <div style={{background:"#1e293b",borderRadius:"1rem",padding:"2rem",width:"100%",maxWidth:"480px"}}>
        <h1 style={{fontSize:"1.5rem",fontWeight:700,marginBottom:"1.5rem",textAlign:"center"}}>Electric Conductance Converter</h1>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:".75rem",borderRadius:".5rem",border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",marginBottom:"1rem",boxSizing:"border-box"}} />
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginBottom:"1rem"}}>
          <div>
            <label style={{fontSize:".875rem",color:"#94a3b8",display:"block",marginBottom:".25rem"}}>From</label>
            <select value={from} onChange={e=>setFrom(e.target.value)} style={{width:"100%",padding:".75rem",borderRadius:".5rem",border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9"}}>
              {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
            </select>
          </div>
          <div>
            <label style={{fontSize:".875rem",color:"#94a3b8",display:"block",marginBottom:".25rem"}}>To</label>
            <select value={to} onChange={e=>setTo(e.target.value)} style={{width:"100%",padding:".75rem",borderRadius:".5rem",border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9"}}>
              {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
            </select>
          </div>
        </div>
        {val && <div style={{background:"#0f172a",borderRadius:".5rem",padding:"1rem",textAlign:"center",fontSize:"1.25rem",fontWeight:600,color:"#38bdf8"}}>{convert()} {to}</div>}
      </div>
    </main>
  );
}
