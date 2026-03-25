"use client";
import { useState } from "react";

const UNITS: string[] = ["becquerel", "curie", "rutherford", "disintegrations/second"];
const TO_BASE: Record<string, number> = {"becquerel": 1, "curie": 37000000000.0, "rutherford": 1000000.0, "disintegrations/second": 1};

export default function RadioactivityConverterPage() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * TO_BASE[from]) / TO_BASE[to]).toPrecision(6);
  };
  return (
    <main style={{maxWidth:480,margin:"40px auto",padding:"0 16px",fontFamily:"sans-serif",color:"#e2e8f0"}}>
      <h1 style={{fontSize:"1.6rem",marginBottom:8}}>Radioactivity Converter</h1>
      <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value"
        style={{width:"100%",padding:"10px",marginBottom:12,background:"#1e293b",border:"1px solid #334155",borderRadius:6,color:"#e2e8f0",fontSize:"1rem"}} />
      <div style={{display:"flex",gap:8,marginBottom:16}}>
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:"8px",background:"#1e293b",border:"1px solid #334155",borderRadius:6,color:"#e2e8f0"}}>
          {UNITS.map(u=><option key={u}>{u}</option>)}
        </select>
        <span style={{lineHeight:"36px"}}>to</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:"8px",background:"#1e293b",border:"1px solid #334155",borderRadius:6,color:"#e2e8f0"}}>
          {UNITS.map(u=><option key={u}>{u}</option>)}
        </select>
      </div>
      <div style={{padding:"16px",background:"#1e293b",borderRadius:8,fontSize:"1.2rem",minHeight:48}}>
        {val ? <><strong>{convert()}</strong> {to}</> : <span style={{color:"#64748b"}}>Result appears here</span>}
      </div>
    </main>
  );
}
