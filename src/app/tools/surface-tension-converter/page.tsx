"use client";
import { useState } from "react";

const units = ["N/m", "mN/m", "dyn/cm", "lbf/ft", "lbf/in"];
const toBase = [1, 0.001, 0.001, 14.5939, 175.127];

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(0);
  const results = units.map((u, i) => {
    const base = parseFloat(val) * toBase[from];
    return { unit: u, value: isNaN(base) ? "" : (base / toBase[i]).toPrecision(6) };
  });
  return (
    <main style={{maxWidth:600,margin:"40px auto",padding:"0 16px",fontFamily:"sans-serif"}}>
      <h1 style={{fontSize:28,fontWeight:700,marginBottom:8}}>Surface Tension Converter</h1>
      <div style={{display:"flex",gap:8,marginBottom:24}}>
        <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{flex:1,padding:"10px 12px",borderRadius:6,border:"1px solid #ccc",fontSize:16}} />
        <select value={from} onChange={e=>setFrom(Number(e.target.value))} style={{padding:"10px 12px",borderRadius:6,border:"1px solid #ccc",fontSize:16}}>
          {units.map((u,i)=><option key={i} value={i}>{u}</option>)}
        </select>
      </div>
      <div style={{display:"grid",gap:8}}>
        {results.map((r,i)=>(
          <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"12px 16px",background:"#f9f9f9",borderRadius:6}}>
            <span style={{color:"#555"}}>{r.unit}</span>
            <strong>{r.value || "—"}</strong>
          </div>
        ))}
      </div>
    </main>
  );
}
