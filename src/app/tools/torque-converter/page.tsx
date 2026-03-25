"use client";
import { useState } from "react";
const UNITS = ["N·m", "kN·m", "N·cm", "kgf·m", "kgf·cm", "lbf·ft", "lbf·in", "ozf·in"];
const TO_BASE: Record<string, number> = {"N·m": 1.0, "kN·m": 1000.0, "N·cm": 0.01, "kgf·m": 9.80665, "kgf·cm": 0.0980665, "lbf·ft": 1.3558179483, "lbf·in": 0.11298482933, "ozf·in": 0.0070615509};
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const convert = (to: string) => {
    const n = parseFloat(val);
    if (isNaN(n)) return "-";
    return ((n * TO_BASE[from]) / TO_BASE[to]).toPrecision(6);
  };
  return (
    <main style={{maxWidth:600,margin:"40px auto",padding:"0 16px",fontFamily:"sans-serif",color:"#e2e8f0",background:"#0f172a",minHeight:"100vh"}}>
      <h1 style={{fontSize:28,fontWeight:700,marginBottom:8}}>Torque Converter</h1>
      <div style={{display:"flex",gap:8,marginBottom:24,flexWrap:"wrap"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{flex:1,minWidth:120,padding:"8px 12px",borderRadius:6,border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0",fontSize:16}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"8px 12px",borderRadius:6,border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0",fontSize:16}}>
          {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:8}}>
        {UNITS.map(u=>(
          <div key={u} style={{display:"flex",justifyContent:"space-between",padding:"10px 14px",background:"#1e293b",borderRadius:6,border:u===from?"1px solid #6366f1":"1px solid #334155"}}>
            <span style={{color:"#94a3b8"}}>{u}</span>
            <span style={{fontWeight:600}}>{convert(u)}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
