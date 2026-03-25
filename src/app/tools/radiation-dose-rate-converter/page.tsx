"use client";
import { useState } from "react";

const UNITS = ["Gray/second (Gy/s)", "Gray/minute (Gy/min)", "Gray/hour (Gy/h)", "Rad/second (rad/s)", "Millisievert/hour (mSv/h)", "Microsievert/hour (uSv/h)"];
const TO_BASE: Record<string, number> = {"Gray/second (Gy/s)": 1, "Gray/minute (Gy/min)": 0.016666666666666666, "Gray/hour (Gy/h)": 0.0002777777777777778, "Rad/second (rad/s)": 0.01, "Millisievert/hour (mSv/h)": 2.7777777777777776e-07, "Microsievert/hour (uSv/h)": 2.7777777777777777e-10};

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
      <h1 style={{fontSize:"2rem",fontWeight:700,marginBottom:"0.5rem"}}>Radiation Dose Rate Converter</h1>
      <div style={{background:"#1e293b",borderRadius:"1rem",padding:"2rem",width:"100%",maxWidth:"480px",display:"flex",flexDirection:"column",gap:"1rem"}}>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9",fontSize:"1rem"}} />
        <div style={{display:"flex",gap:"1rem"}}>
          <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9"}}>
            {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
          </select>
          <span style={{alignSelf:"center",fontSize:"1.5rem"}}>→</span>
          <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid #334155",background:"#0f172a",color:"#f1f5f9"}}>
            {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
          </select>
        </div>
        <div style={{textAlign:"center",fontSize:"1.5rem",fontWeight:600,color:"#38bdf8",minHeight:"2rem"}}>{val ? convert() + " " + to : ""}</div>
      </div>
    </main>
  );
}
