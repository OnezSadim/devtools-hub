"use client";
import { useState } from "react";
export default function Page() {
  const [v, setV] = useState("");
  const [from, setFrom] = useState("lx");
  const [to, setTo] = useState("fc");
  function convert(v: number, from: string, to: string): number {
    let base = 0;
    switch(from) {
      case "lx": base = v / 1; break;
      case "fc": base = v / 0.092903; break;
      case "ph": base = v / 0.0001; break;
      case "klx": base = v / 0.001; break;
      case "mlx": base = v / 1000; break;
    }
    switch(to) {
      case "lx": return base * 1;
      case "fc": return base * 0.092903;
      case "ph": return base * 0.0001;
      case "klx": return base * 0.001;
      case "mlx": return base * 1000;
    }
    return 0;
  }
  const result = v ? convert(parseFloat(v), from, to) : null;
  return (<div style={{padding:"2rem",fontFamily:"sans-serif",maxWidth:"500px",margin:"0 auto"}}><h1>Illuminance Converter</h1><p>Convert between lux, foot-candle, phot</p><input type="number" value={v} onChange={e=>setV(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"0.5rem",marginBottom:"1rem"}}/><div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}><select value={from} onChange={e=>setFrom(e.target.value)}>          <option value="lx">lx</option>
          <option value="fc">fc</option>
          <option value="ph">ph</option>
          <option value="klx">klx</option>
          <option value="mlx">mlx</option></select><span>→</span><select value={to} onChange={e=>setTo(e.target.value)}>          <option value="lx">lx</option>
          <option value="fc">fc</option>
          <option value="ph">ph</option>
          <option value="klx">klx</option>
          <option value="mlx">mlx</option></select></div>{result!==null&&<div style={{fontSize:"1.5rem",fontWeight:"bold"}}>{result.toPrecision(6)} {to}</div>}</div>);
}
