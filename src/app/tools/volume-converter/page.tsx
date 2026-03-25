"use client";
import { useState } from "react";
const units: Record<string, number> = { mL: 1, L: 1000, m3: 1e6, floz: 29.5735, cup: 236.588, pint: 473.176, quart: 946.353, gallon: 3785.41, tsp: 4.92892, tbsp: 14.7868 };
export default function VolumeConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("L");
  const base = parseFloat(val) * (units[from] || 1);
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#111",minHeight:"100vh",color:"#eee"}}><h1>Volume Converter</h1><input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:"0.5rem",marginRight:"0.5rem",background:"#222",color:"#eee",border:"1px solid #444"}} /><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#222",color:"#eee",border:"1px solid #444"}}>{Object.keys(units).map(u=><option key={u}>{u}</option>)}</select><table style={{marginTop:"1rem",borderCollapse:"collapse",width:"100%"}}><tbody>{Object.entries(units).map(([u,f])=><tr key={u}><td style={{padding:"0.4rem 1rem",borderBottom:"1px solid #333"}}>{u}</td><td style={{padding:"0.4rem 1rem",borderBottom:"1px solid #333"}}>{val?(base/f).toPrecision(6):"—"}</td></tr>)}</tbody></table></div>);
}
