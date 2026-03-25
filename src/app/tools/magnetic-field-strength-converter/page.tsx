"use client";
import { useState } from "react";
export default function Page() {
  const units = ["Ampere/meter (A/m)", "Oersted (Oe)", "Ampere/centimeter (A/cm)", "Ampere/inch (A/in)"];
  const toBase = [1, 79.5775, 100, 39.3701];
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(1);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * toBase[from]) / toBase[to]).toPrecision(6);
  };
  return (
    <main style={{maxWidth:600,margin:"40px auto",padding:"0 16px",fontFamily:"monospace",color:"#e2e8f0",background:"#0f172a",borderRadius:12,boxShadow:"0 4px 32px #0008"}}>
      <h1 style={{fontSize:"1.5rem",padding:"24px 0 8px"}}>Magnetic Field Strength Converter</h1>
      <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:12}}>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{flex:1,minWidth:100,padding:8,borderRadius:6,border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0"}} />
        <select value={from} onChange={e=>setFrom(Number(e.target.value))} style={{flex:1,minWidth:120,padding:8,borderRadius:6,border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0"}}>
          {units.map((u,i)=><option key={i} value={i}>{u}</option>)}
        </select>
        <span style={{alignSelf:"center"}}>to</span>
        <select value={to} onChange={e=>setTo(Number(e.target.value))} style={{flex:1,minWidth:120,padding:8,borderRadius:6,border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0"}}>
          {units.map((u,i)=><option key={i} value={i}>{u}</option>)}
        </select>
      </div>
      <div style={{background:"#1e293b",borderRadius:8,padding:16,fontSize:"1.2rem"}}>
        {val ? <>{val} {units[from]} = <strong>{convert()}</strong> {units[to]}</> : <span style={{color:"#64748b"}}>Enter a value above</span>}
      </div>
    </main>
  );
}