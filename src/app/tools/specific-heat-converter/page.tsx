"use client";
import { useState } from "react";

const UNITS: string[] = ["J/kg*K", "kJ/kg*K", "cal/g*C", "BTU/lb*F", "kcal/kg*C"];
const TO_BASE: Record<string, number> = {"J/kg*K": 1, "kJ/kg*K": 1000, "cal/g*C": 4186.8, "BTU/lb*F": 4186.8, "kcal/kg*C": 4186.8};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const result = val !== "" && !isNaN(Number(val))
    ? (Number(val) * TO_BASE[from] / TO_BASE[to]).toPrecision(6)
    : "";
  return (
    <main style={{maxWidth:520,margin:"40px auto",padding:"0 16px",fontFamily:"sans-serif",color:"#e2e8f0"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:8}}>Specific Heat Converter</h1>
      <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value"
        style={{width:"100%",padding:"8px",marginBottom:8,background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:4}} />
      <div style={{display:"flex",gap:8,marginBottom:8}}>
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:"8px",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:4}}>
          {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
        <span style={{lineHeight:"36px"}}>→</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:"8px",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:4}}>
          {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      {result && <div style={{padding:"12px",background:"#0f172a",borderRadius:4,fontSize:"1.2rem"}}>{result} {to}</div>}
    </main>
  );
}
