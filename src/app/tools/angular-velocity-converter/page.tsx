"use client";
import { useState } from "react";
export default function Page() {
  const [v, setV] = useState("");
  const [from, setFrom] = useState("rad/s");
  const [to, setTo] = useState("rpm");
  function convert(v: number, from: string, to: string): number {
    let base = 0;
    switch(from) {
      case "rad/s": base = v / 1; break;
      case "rpm": base = v / 9.5493; break;
      case "deg/s": base = v / 57.2958; break;
      case "rev/s": base = v / 0.15915; break;
      case "mrad/s": base = v / 1000; break;
    }
    switch(to) {
      case "rad/s": return base * 1;
      case "rpm": return base * 9.5493;
      case "deg/s": return base * 57.2958;
      case "rev/s": return base * 0.15915;
      case "mrad/s": return base * 1000;
    }
    return 0;
  }
  const result = v ? convert(parseFloat(v), from, to) : null;
  return (<div style={{padding:"2rem",fontFamily:"sans-serif",maxWidth:"500px",margin:"0 auto"}}><h1>Angular Velocity Converter</h1><p>Convert between rad/s, rpm, deg/s</p><input type="number" value={v} onChange={e=>setV(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"0.5rem",marginBottom:"1rem"}}/><div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}><select value={from} onChange={e=>setFrom(e.target.value)}>          <option value="rad/s">rad/s</option>
          <option value="rpm">rpm</option>
          <option value="deg/s">deg/s</option>
          <option value="rev/s">rev/s</option>
          <option value="mrad/s">mrad/s</option></select><span>→</span><select value={to} onChange={e=>setTo(e.target.value)}>          <option value="rad/s">rad/s</option>
          <option value="rpm">rpm</option>
          <option value="deg/s">deg/s</option>
          <option value="rev/s">rev/s</option>
          <option value="mrad/s">mrad/s</option></select></div>{result!==null&&<div style={{fontSize:"1.5rem",fontWeight:"bold"}}>{result.toPrecision(6)} {to}</div>}</div>);
}
