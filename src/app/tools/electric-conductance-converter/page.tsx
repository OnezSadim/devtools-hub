"use client";
import { useState } from "react";

const units = ["Siemens (S)", "Millisiemens (mS)", "Microsiemens (μS)", "Kilosiemens (kS)", "Megasiemens (MS)"];
const toBase = [1, 0.001, 1e-06, 1000.0, 1000000.0];

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(0);
  const num = parseFloat(val);
  return (
    <main style={{padding:"2rem",maxWidth:"600px",margin:"0 auto",fontFamily:"sans-serif",background:"#0f172a",minHeight:"100vh",color:"#f1f5f9"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Electric Conductance Converter</h1>
      <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"0.5rem",marginBottom:"1rem",background:"#1e293b",color:"#f1f5f9",border:"1px solid #334155",borderRadius:"4px"}} />
      <select value={from} onChange={e=>setFrom(Number(e.target.value))} style={{width:"100%",padding:"0.5rem",marginBottom:"1.5rem",background:"#1e293b",color:"#f1f5f9",border:"1px solid #334155",borderRadius:"4px"}}>
        {units.map((u,i)=><option key={i} value={i}>{u}</option>)}
      </select>
      {!isNaN(num) && val !== "" && (
        <table style={{width:"100%",borderCollapse:"collapse"}}>
          <thead><tr><th style={{textAlign:"left",padding:"0.5rem",borderBottom:"1px solid #334155"}}>Unit</th><th style={{textAlign:"right",padding:"0.5rem",borderBottom:"1px solid #334155"}}>Value</th></tr></thead>
          <tbody>
            {units.map((u,i)=>(
              <tr key={i} style={{background:i===from?"#1e3a5f":"transparent"}}>
                <td style={{padding:"0.5rem",borderBottom:"1px solid #1e293b"}}>{u}</td>
                <td style={{padding:"0.5rem",textAlign:"right",borderBottom:"1px solid #1e293b"}}>{(num * toBase[from] / toBase[i]).toPrecision(6)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
