"use client";
import { useState } from "react";
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("Wb");
  const [to, setTo] = useState("Mx");
  const [res, setRes] = useState("");
  function convert() {
    const v = parseFloat(val);
    if (isNaN(v)) { setRes("Invalid"); return; }
    let base = 0;
    switch(from) {
        case "Wb": base = v * 1; break;
        case "Mx": base = v * 1e-8; break;
        case "mWb": base = v * 0.001; break;
        case "uWb": base = v * 1e-6; break;
        default: base = v;
    }
    let result = 0;
    switch(to) {
        case "Wb": result = base / 1; break;
        case "Mx": result = base / 1e-8; break;
        case "mWb": result = base / 0.001; break;
        case "uWb": result = base / 1e-6; break;
        default: result = base;
    }
    setRes(result.toPrecision(6));
  }
  return (
    <main style={{padding:"2rem",fontFamily:"sans-serif",maxWidth:"500px",margin:"0 auto"}}>
      <h1>Magnetic Flux Converter</h1>
      <p>Convert between weber, maxwell, milliweber, microweber</p>
      <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{width:"100%",padding:"0.5rem",marginBottom:"1rem"}} />
      <div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}>
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:"0.5rem"}}><option value="Wb">Wb</option><option value="Mx">Mx</option><option value="mWb">mWb</option><option value="uWb">uWb</option></select>
        <span style={{alignSelf:"center"}}>to</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:"0.5rem"}}><option value="Wb">Wb</option><option value="Mx">Mx</option><option value="mWb">mWb</option><option value="uWb">uWb</option></select>
      </div>
      <button onClick={convert} style={{padding:"0.5rem 1.5rem",background:"#2563eb",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer"}}>Convert</button>
      {res && <p style={{marginTop:"1rem",fontSize:"1.2rem"}}>Result: <strong>{res} {to}</strong></p>}
    </main>
  );
}
