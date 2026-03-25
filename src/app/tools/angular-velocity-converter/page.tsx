"use client";
import { useState } from "react";

const UNITS = ["Radian/second", "Degree/second", "Revolution/minute (RPM)", "Revolution/second", "Radian/minute", "Degree/minute"];
const TO_BASE = [1, 0.017453292519943, 0.10471975511966, 6.2831853071796, 0.016666666666667, 0.00029088820866572];

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(0);
  const num = parseFloat(val);
  const base = isNaN(num) ? null : num * TO_BASE[from];

  return (
    <main style={{padding:"2rem",maxWidth:"600px",margin:"0 auto",fontFamily:"sans-serif",color:"#e2e8f0",background:"#0f172a",minHeight:"100vh"}}>
      <h1 style={{fontSize:"1.5rem",fontWeight:700,marginBottom:"1rem"}}>Angular Velocity Converter</h1>
      <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"0.5rem",marginBottom:"1rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px"}} />
      <select value={from} onChange={e=>setFrom(Number(e.target.value))} style={{width:"100%",padding:"0.5rem",marginBottom:"1.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px"}}>
        {UNITS.map((u,i)=><option key={i} value={i}>{u}</option>)}
      </select>
      {base !== null && (
        <table style={{width:"100%",borderCollapse:"collapse"}}>
          <thead><tr><th style={{textAlign:"left",padding:"0.5rem",borderBottom:"1px solid #334155"}}>Unit</th><th style={{textAlign:"right",padding:"0.5rem",borderBottom:"1px solid #334155"}}>Value</th></tr></thead>
          <tbody>{UNITS.map((u,i)=><tr key={i} style={{background:i===from?"#1e293b":"transparent"}}><td style={{padding:"0.5rem"}}>{u}</td><td style={{textAlign:"right",padding:"0.5rem"}}>{(base/TO_BASE[i]).toPrecision(6)}</td></tr>)}</tbody>
        </table>
      )}
    </main>
  );
}
