"use client";
import { useState } from "react";
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("lx");
  const [to, setTo] = useState("fc");
  const [res, setRes] = useState("");
  function convert() {
    const v = parseFloat(val);
    if (isNaN(v)) { setRes("Invalid"); return; }
    let base = 0;
    switch(from) {
        case "lx": base = v * 1; break;
        case "fc": base = v * 10.7639; break;
        case "ph": base = v * 10000; break;
        case "nx": base = v * 0.001; break;
        default: base = v;
    }
    let result = 0;
    switch(to) {
        case "lx": result = base / 1; break;
        case "fc": result = base / 10.7639; break;
        case "ph": result = base / 10000; break;
        case "nx": result = base / 0.001; break;
        default: result = base;
    }
    setRes(result.toPrecision(6));
  }
  return (
    <main style={{padding:"2rem",fontFamily:"sans-serif",maxWidth:"500px",margin:"0 auto"}}>
      <h1>Illuminance Converter</h1>
      <p>Convert between lux, footcandle, phot, nox</p>
      <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{width:"100%",padding:"0.5rem",marginBottom:"1rem"}} />
      <div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}>
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:"0.5rem"}}><option value="lx">lx</option><option value="fc">fc</option><option value="ph">ph</option><option value="nx">nx</option></select>
        <span style={{alignSelf:"center"}}>to</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:"0.5rem"}}><option value="lx">lx</option><option value="fc">fc</option><option value="ph">ph</option><option value="nx">nx</option></select>
      </div>
      <button onClick={convert} style={{padding:"0.5rem 1.5rem",background:"#2563eb",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer"}}>Convert</button>
      {res && <p style={{marginTop:"1rem",fontSize:"1.2rem"}}>Result: <strong>{res} {to}</strong></p>}
    </main>
  );
}
