"use client";
import { useState } from "react";

const UNITS = ["Candela/m2 (cd/m2)", "Nit (nt)", "Stilb (sb)", "Apostilb (asb)", "Lambert (L)", "Foot-lambert (fL)", "Millilambert (mL)"];
const FACTORS = [1, 1, 10000, 0.31831, 3183.1, 3.4263, 3.1831];

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(0);
  const num = parseFloat(val);
  return (
    <main style={{padding:"2rem",maxWidth:"600px",margin:"0 auto",fontFamily:"sans-serif",background:"#0f172a",minHeight:"100vh",color:"#f1f5f9"}}>
      <h1 style={{fontSize:"1.5rem",fontWeight:700,marginBottom:"1rem"}}>Luminance Converter</h1>
      <div style={{marginBottom:"1rem"}}>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"0.5rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9",fontSize:"1rem",marginBottom:"0.5rem"}} />
        <select value={from} onChange={e=>setFrom(Number(e.target.value))} style={{width:"100%",padding:"0.5rem",borderRadius:"6px",border:"1px solid #334155",background:"#1e293b",color:"#f1f5f9",fontSize:"1rem"}}>
          {UNITS.map((u,i)=>(<option key={i} value={i}>{u}</option>))}
        </select>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"0.5rem"}}>
        {UNITS.map((u,i)=>{
          const result = isNaN(num) ? "" : ((num * FACTORS[from]) / FACTORS[i]).toPrecision(6);
          return (<div key={i} style={{background:"#1e293b",borderRadius:"8px",padding:"0.75rem 1rem",display:"flex",justifyContent:"space-between"}}><span style={{color:"#94a3b8"}}>{u}</span><span style={{fontWeight:600}}>{result}</span></div>);
        })}
      </div>
    </main>
  );
}
