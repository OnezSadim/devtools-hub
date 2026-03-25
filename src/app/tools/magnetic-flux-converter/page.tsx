"use client";
import { useState } from "react";
export default function Page() {
  const [v, setV] = useState("");
  const [from, setFrom] = useState("Wb");
  const [to, setTo] = useState("Mx");
  function convert(v: number, from: string, to: string): number {
    let base = 0;
    switch(from) {
      case "Wb": base = v / 1; break;
      case "Mx": base = v / 1e8; break;
      case "T·m²": base = v / 1; break;
      case "mWb": base = v / 1000; break;
      case "µWb": base = v / 1e6; break;
    }
    switch(to) {
      case "Wb": return base * 1;
      case "Mx": return base * 1e8;
      case "T·m²": return base * 1;
      case "mWb": return base * 1000;
      case "µWb": return base * 1e6;
    }
    return 0;
  }
  const result = v ? convert(parseFloat(v), from, to) : null;
  return (<div style={{padding:"2rem",fontFamily:"sans-serif",maxWidth:"500px",margin:"0 auto"}}><h1>Magnetic Flux Converter</h1><p>Convert between weber, maxwell, tesla·m²</p><input type="number" value={v} onChange={e=>setV(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"0.5rem",marginBottom:"1rem"}}/><div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}><select value={from} onChange={e=>setFrom(e.target.value)}>          <option value="Wb">Wb</option>
          <option value="Mx">Mx</option>
          <option value="T·m²">T·m²</option>
          <option value="mWb">mWb</option>
          <option value="µWb">µWb</option></select><span>→</span><select value={to} onChange={e=>setTo(e.target.value)}>          <option value="Wb">Wb</option>
          <option value="Mx">Mx</option>
          <option value="T·m²">T·m²</option>
          <option value="mWb">mWb</option>
          <option value="µWb">µWb</option></select></div>{result!==null&&<div style={{fontSize:"1.5rem",fontWeight:"bold"}}>{result.toPrecision(6)} {to}</div>}</div>);
}
