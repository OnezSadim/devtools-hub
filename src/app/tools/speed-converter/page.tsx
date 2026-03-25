"use client";
import { useState } from "react";
export default function SpeedConverter() {
  const [val, setVal] = useState("1");
  const [from, setFrom] = useState("kmh");
  const toMS: Record<string,number> = {kmh:0.277778,mph:0.44704,ms:1,knots:0.514444,fps:0.3048};
  const labels: Record<string,string> = {kmh:"km/h",mph:"mph",ms:"m/s",knots:"knots",fps:"ft/s"};
  const base = parseFloat(val||"0") * (toMS[from]||1);
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{color:"#38bdf8"}}>Speed Converter</h1><div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}><input type="number" value={val} onChange={e=>setVal(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px",width:"150px"}}/><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px"}}>{Object.keys(toMS).map(k=><option key={k} value={k}>{labels[k]}</option>)}</select></div><table style={{borderCollapse:"collapse",width:"100%"}}><thead><tr><th style={{textAlign:"left",padding:"0.5rem",borderBottom:"1px solid #334155"}}>Unit</th><th style={{textAlign:"left",padding:"0.5rem",borderBottom:"1px solid #334155"}}>Value</th></tr></thead><tbody>{Object.entries(toMS).map(([k,r])=><tr key={k} style={{background:k===from?"#1e293b":"transparent"}}><td style={{padding:"0.5rem"}}>{labels[k]}</td><td style={{padding:"0.5rem",color:"#38bdf8"}}>{isNaN(base/r)?"0":(base/r).toFixed(6)}</td></tr>)}</tbody></table></div>);
}
