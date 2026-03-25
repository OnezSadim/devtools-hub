"use client";
import { useState } from "react";

const UNITS = ["lumen", "candela steradian", "milliwatt (555nm)", "microlumen", "kilolumen"];
const TO_BASE = [1, 1, 683, 1e-06, 1000];

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(0);
  const num = parseFloat(val);
  return (
    <main style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Luminous Flux Converter</h1>
      <div style={{display:"flex",gap:"1rem",marginBottom:"1rem",flexWrap:"wrap"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px",flex:1}} />
        <select value={from} onChange={e=>setFrom(+e.target.value)} style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px"}}>
          {UNITS.map((u,i)=><option key={i} value={i}>{u}</option>)}
        </select>
      </div>
      <div style={{display:"grid",gap:"0.5rem"}}>
        {UNITS.map((u,i)=>{
          const result = isNaN(num) ? "" : (num * TO_BASE[from] / TO_BASE[i]).toPrecision(6);
          return <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"0.5rem",background:"#1e293b",borderRadius:"4px"}}><span>{u}</span><span style={{color:"#38bdf8"}}>{result}</span></div>;
        })}
      </div>
    </main>
  );
}
