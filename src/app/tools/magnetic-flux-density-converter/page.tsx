"use client";
import { useState } from "react";

const units = ["Tesla", "Gauss", "Millitesla", "Microtesla", "Weber/m²"];
const toBase = [1, 0.0001, 0.001, 1e-06, 1];

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(0);
  const num = parseFloat(val);
  const base = isNaN(num) ? null : num * toBase[from];

  return (
    <main style={{maxWidth:600,margin:"40px auto",padding:"0 16px",fontFamily:"sans-serif",color:"#e2e8f0",background:"#0f172a",minHeight:"100vh"}}>
      <h1 style={{fontSize:28,fontWeight:700,marginBottom:8}}>Magnetic Flux Density Converter</h1>
      <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"10px",borderRadius:6,border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0",fontSize:16,boxSizing:"border-box",marginBottom:12}} />
      <select value={from} onChange={e=>setFrom(Number(e.target.value))} style={{width:"100%",padding:"10px",borderRadius:6,border:"1px solid #334155",background:"#1e293b",color:"#e2e8f0",fontSize:16,marginBottom:20}}>
        {units.map((u,i)=><option key={i} value={i}>{u}</option>)}
      </select>
      {base!==null&&<div style={{display:"grid",gap:8}}>
        {units.map((u,i)=>(
          <div key={i} style={{background:"#1e293b",borderRadius:8,padding:"12px 16px",display:"flex",justifyContent:"space-between"}}>
            <span style={{color:"#94a3b8"}}>{u}</span>
            <span style={{fontWeight:600}}>{(base/toBase[i]).toPrecision(6)}</span>
          </div>
        ))}
      </div>}
    </main>
  );
}
