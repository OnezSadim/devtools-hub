"use client";
import { useState } from "react";
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("C");
  const [to, setTo] = useState("mC");
  const [res, setRes] = useState("");
  function convert() {
    const v = parseFloat(val);
    if (isNaN(v)) { setRes("Invalid"); return; }
    let base = 0;
    switch(from) {
        case "C": base = v * 1; break;
        case "mC": base = v * 0.001; break;
        case "uC": base = v * 1e-6; break;
        case "Ah": base = v * 3600; break;
        default: base = v;
    }
    let result = 0;
    switch(to) {
        case "C": result = base / 1; break;
        case "mC": result = base / 0.001; break;
        case "uC": result = base / 1e-6; break;
        case "Ah": result = base / 3600; break;
        default: result = base;
    }
    setRes(result.toPrecision(6));
  }
  return (
    <main style={{padding:"2rem",fontFamily:"sans-serif",maxWidth:"500px",margin:"0 auto"}}>
      <h1>Electric Charge Converter</h1>
      <p>Convert between coulomb, millicoulomb, microcoulomb, ampere-hour</p>
      <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{width:"100%",padding:"0.5rem",marginBottom:"1rem"}} />
      <div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}>
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:"0.5rem"}}><option value="C">C</option><option value="mC">mC</option><option value="uC">uC</option><option value="Ah">Ah</option></select>
        <span style={{alignSelf:"center"}}>to</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:"0.5rem"}}><option value="C">C</option><option value="mC">mC</option><option value="uC">uC</option><option value="Ah">Ah</option></select>
      </div>
      <button onClick={convert} style={{padding:"0.5rem 1.5rem",background:"#2563eb",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer"}}>Convert</button>
      {res && <p style={{marginTop:"1rem",fontSize:"1.2rem"}}>Result: <strong>{res} {to}</strong></p>}
    </main>
  );
}
