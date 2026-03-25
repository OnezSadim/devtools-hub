"use client";
import { useState } from "react";

const UNITS: [string, string, number][] = [['SI', 'SI (dimensionless)', 1.0], ['CGS', 'CGS (emu/cm³)', 12.5663706], ['mSI', 'milli-SI', 0.001]];

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0][0]);
  const [to, setTo] = useState(UNITS[1][0]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    const f = UNITS.find(u => u[0] === from);
    const t = UNITS.find(u => u[0] === to);
    if (!f || !t) return "";
    return ((n * f[2]) / t[2]).toPrecision(6);
  };
  return (
    <div style={{maxWidth:600,margin:"40px auto",padding:"0 16px",fontFamily:"sans-serif",color:"#e2e8f0",background:"#0f172a",minHeight:"100vh"}}>
      <h1 style={{fontSize:28,fontWeight:700,marginBottom:8}}>Magnetic Susceptibility Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:24}}>Convert magnetic susceptibility between SI and CGS-Gaussian unit systems.</p>
      <div style={{display:"flex",gap:12,flexWrap:"wrap",marginBottom:16}}>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{flex:1,minWidth:120,padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0",fontSize:16}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,minWidth:140,padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0",fontSize:15}}>
          {UNITS.map(u=><option key={u[0]} value={u[0]}>{u[1]}</option>)}
        </select>
        <span style={{padding:"10px 4px",color:"#94a3b8",fontSize:18}}>to</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,minWidth:140,padding:"10px 14px",borderRadius:8,border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0",fontSize:15}}>
          {UNITS.map(u=><option key={u[0]} value={u[0]}>{u[1]}</option>)}
        </select>
      </div>
      {val && <div style={{padding:"16px 20px",background:"#1e293b",borderRadius:10,fontSize:20,fontWeight:600}}>{val} {UNITS.find(u=>u[0]===from)?.[1]} = {convert()} {UNITS.find(u=>u[0]===to)?.[1]}</div>}
    </div>
  );
}
