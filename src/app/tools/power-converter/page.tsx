"use client";
import { useState } from "react";
export default function Page() {
  const units: Record<string, number> = {"W": 1, "kW": 1000, "MW": 1000000.0, "GW": 1000000000.0, "mW": 0.001, "hp": 745.7, "BTU/hr": 0.29307, "kcal/hr": 1.163, };
  const [from, setFrom] = useState("W");
  const [to, setTo] = useState("kW");
  const [val, setVal] = useState("");
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * units[from]) / units[to]).toPrecision(6);
  };
  const opts = Object.keys(units).map(u => <option key={u} value={u}>{u}</option>);
  return (
    <main style={{maxWidth:600,margin:"40px auto",padding:"0 16px",fontFamily:"sans-serif",color:"#e2e8f0",background:"#0f172a",minHeight:"100vh"}}>
      <h1 style={{fontSize:"1.8rem",fontWeight:700,marginBottom:8}}>Power Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:24}}>Convert between watts, kilowatts, horsepower, BTU/hr, and more.</p>
      <div style={{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center",marginBottom:16}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{flex:1,minWidth:120,padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0",fontSize:"1rem"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0"}}>
          {opts}
        </select>
        <span style={{color:"#64748b"}}>to</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0"}}>
          {opts}
        </select>
      </div>
      <div style={{padding:"20px 24px",borderRadius:12,background:"#1e293b",border:"1px solid #334155",fontSize:"1.4rem",fontWeight:600,color:"#38bdf8",minHeight:64}}>
        {val ? convert() + " " + to : <span style={{color:"#475569"}}>Result appears here</span>}
      </div>
    </main>
  );
}
