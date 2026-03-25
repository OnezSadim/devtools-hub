"use client";
import { useState } from "react";
export default function ForceConverter() {
  const [val, setVal] = useState("1");
  const [from, setFrom] = useState("newton");
  const toN: Record<string,number> = {newton:1,kilonewton:1000,dyne:0.00001,lbf:4.44822,kgf:9.80665,poundal:0.138255};
  const labels: Record<string,string> = {newton:"Newton (N)",kilonewton:"Kilonewton (kN)",dyne:"Dyne",lbf:"Pound-force (lbf)",kgf:"Kilogram-force (kgf)",poundal:"Poundal"};
  const base = parseFloat(val||"0") * (toN[from]||1);
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{color:"#38bdf8"}}>Force Converter</h1><div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}><input type="number" value={val} onChange={e=>setVal(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px",width:"150px"}}/><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px"}}>{Object.keys(toN).map(k=><option key={k} value={k}>{labels[k]}</option>)}</select></div><table style={{borderCollapse:"collapse",width:"100%"}}><thead><tr><th style={{textAlign:"left",padding:"0.5rem",borderBottom:"1px solid #334155"}}>Unit</th><th style={{textAlign:"left",padding:"0.5rem",borderBottom:"1px solid #334155"}}>Value</th></tr></thead><tbody>{Object.entries(toN).map(([k,r])=><tr key={k} style={{background:k===from?"#1e293b":"transparent"}}><td style={{padding:"0.5rem"}}>{labels[k]}</td><td style={{padding:"0.5rem",color:"#38bdf8"}}>{isNaN(base/r)?"0":(base/r).toFixed(8)}</td></tr>)}</tbody></table></div>);
}
