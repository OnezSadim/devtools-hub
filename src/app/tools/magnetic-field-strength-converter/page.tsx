"use client";
import { useState } from "react";
export default function Page() {
  const [v, setV] = useState("");
  const [from, setFrom] = useState("A/m");
  const [to, setTo] = useState("Oe");
  function convert(v: number, from: string, to: string): number {
    let base = 0;
    switch(from) {
      case "A/m": base = v / 1; break;
      case "Oe": base = v / 0.0125664; break;
      case "kA/m": base = v / 0.001; break;
      case "mA/m": base = v / 1000; break;
      case "µA/m": base = v / 1e6; break;
    }
    switch(to) {
      case "A/m": return base * 1;
      case "Oe": return base * 0.0125664;
      case "kA/m": return base * 0.001;
      case "mA/m": return base * 1000;
      case "µA/m": return base * 1e6;
    }
    return 0;
  }
  const result = v ? convert(parseFloat(v), from, to) : null;
  return (<div style={{padding:"2rem",fontFamily:"sans-serif",maxWidth:"500px",margin:"0 auto"}}><h1>Magnetic Field Strength Converter</h1><p>Convert between ampere/meter, oersted</p><input type="number" value={v} onChange={e=>setV(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"0.5rem",marginBottom:"1rem"}}/><div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}><select value={from} onChange={e=>setFrom(e.target.value)}>          <option value="A/m">A/m</option>
          <option value="Oe">Oe</option>
          <option value="kA/m">kA/m</option>
          <option value="mA/m">mA/m</option>
          <option value="µA/m">µA/m</option></select><span>→</span><select value={to} onChange={e=>setTo(e.target.value)}>          <option value="A/m">A/m</option>
          <option value="Oe">Oe</option>
          <option value="kA/m">kA/m</option>
          <option value="mA/m">mA/m</option>
          <option value="µA/m">µA/m</option></select></div>{result!==null&&<div style={{fontSize:"1.5rem",fontWeight:"bold"}}>{result.toPrecision(6)} {to}</div>}</div>);
}
