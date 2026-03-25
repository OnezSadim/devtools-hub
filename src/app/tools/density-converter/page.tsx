"use client";
import { useState } from "react";
export default function DensityConverter() {
  const [val, setVal] = useState("1");
  const [from, setFrom] = useState("kgm3");
  const toKgm3: Record<string,number> = {kgm3:1,gcm3:1000,gml:1000,kgl:1,lbft3:16.0185,lbin3:27679.9,ozgal:7.48915,slugft3:515.379};
  const labels: Record<string,string> = {kgm3:"kg/m³",gcm3:"g/cm³",gml:"g/mL",kgl:"kg/L",lbft3:"lb/ft³",lbin3:"lb/in³",ozgal:"oz/gal",slugft3:"slug/ft³"};
  const base = parseFloat(val||"0") * (toKgm3[from]||1);
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{color:"#38bdf8"}}>Density Converter</h1><div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}><input type="number" value={val} onChange={e=>setVal(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px",width:"150px"}}/><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px"}}>{Object.keys(toKgm3).map(k=><option key={k} value={k}>{labels[k]}</option>)}</select></div><table style={{borderCollapse:"collapse",width:"100%"}}><thead><tr><th style={{textAlign:"left",padding:"0.5rem",borderBottom:"1px solid #334155"}}>Unit</th><th style={{textAlign:"left",padding:"0.5rem",borderBottom:"1px solid #334155"}}>Value</th></tr></thead><tbody>{Object.entries(toKgm3).map(([k,r])=><tr key={k} style={{background:k===from?"#1e293b":"transparent"}}><td style={{padding:"0.5rem"}}>{labels[k]}</td><td style={{padding:"0.5rem",color:"#38bdf8"}}>{isNaN(base/r)?"0":(base/r).toFixed(6)}</td></tr>)}</tbody></table></div>);
}
