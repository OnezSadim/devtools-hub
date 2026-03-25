"use client";
import { useState } from "react";
function convert(val: number, from: string, to: string): number {
  let c: number;
  if (from === "C") c = val;
  else if (from === "F") c = (val - 32) * 5/9;
  else if (from === "K") c = val - 273.15;
  else c = (val - 491.67) * 5/9;
  if (to === "C") return c;
  if (to === "F") return c * 9/5 + 32;
  if (to === "K") return c + 273.15;
  return c * 9/5 + 491.67;
}
const units = ["C", "F", "K", "R"];
export default function TemperatureConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("C");
  const n = parseFloat(val);
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#111",minHeight:"100vh",color:"#eee"}}><h1>Temperature Converter</h1><input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:"0.5rem",marginRight:"0.5rem",background:"#222",color:"#eee",border:"1px solid #444"}} /><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#222",color:"#eee",border:"1px solid #444"}}>{units.map(u=><option key={u}>°{u}</option>)}</select><table style={{marginTop:"1rem",borderCollapse:"collapse",width:"100%"}}><tbody>{units.map(u=><tr key={u}><td style={{padding:"0.4rem 1rem",borderBottom:"1px solid #333"}}>°{u}</td><td style={{padding:"0.4rem 1rem",borderBottom:"1px solid #333"}}>{val?convert(n,from,u).toPrecision(6):"—"}</td></tr>)}</tbody></table></div>);
}
