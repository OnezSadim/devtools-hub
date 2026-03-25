"use client";
import { useState } from "react";
export default function Page() {
  const [v, setV] = useState("");
  const [from, setFrom] = useState("Hz");
  const [to, setTo] = useState("kHz");
  function convert(v: number, from: string, to: string): number {
    let base = 0;
    switch(from) {
      case "Hz": base = v / 1; break;
      case "kHz": base = v / 0.001; break;
      case "MHz": base = v / 1e-6; break;
      case "GHz": base = v / 1e-9; break;
      case "rpm": base = v / 60; break;
    }
    switch(to) {
      case "Hz": return base * 1;
      case "kHz": return base * 0.001;
      case "MHz": return base * 1e-6;
      case "GHz": return base * 1e-9;
      case "rpm": return base * 60;
    }
    return 0;
  }
  const result = v ? convert(parseFloat(v), from, to) : null;
  return (<div style={{padding:"2rem",fontFamily:"sans-serif",maxWidth:"500px",margin:"0 auto"}}><h1>Frequency Converter</h1><p>Convert between Hz, kHz, MHz, GHz, rpm</p><input type="number" value={v} onChange={e=>setV(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"0.5rem",marginBottom:"1rem"}}/><div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}><select value={from} onChange={e=>setFrom(e.target.value)}>          <option value="Hz">Hz</option>
          <option value="kHz">kHz</option>
          <option value="MHz">MHz</option>
          <option value="GHz">GHz</option>
          <option value="rpm">rpm</option></select><span>→</span><select value={to} onChange={e=>setTo(e.target.value)}>          <option value="Hz">Hz</option>
          <option value="kHz">kHz</option>
          <option value="MHz">MHz</option>
          <option value="GHz">GHz</option>
          <option value="rpm">rpm</option></select></div>{result!==null&&<div style={{fontSize:"1.5rem",fontWeight:"bold"}}>{result.toPrecision(6)} {to}</div>}</div>);
}
