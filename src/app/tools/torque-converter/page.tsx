"use client";
import { useState } from "react";
export default function TorqueConverter() {
  const [val, setVal] = useState("1");
  const [from, setFrom] = useState("nm");
  const toNm: Record<string,number> = {nm:1,knm:1000,kgm:9.80665,kgcm:0.0980665,lbft:1.35582,lbin:0.112985,ozin:0.00706155};
  const labels: Record<string,string> = {nm:"Newton-meter (N·m)",knm:"Kilonewton-meter",kgm:"kgf·m",kgcm:"kgf·cm",lbft:"lbf·ft",lbin:"lbf·in",ozin:"ozf·in"};
  const base = parseFloat(val||"0") * (toNm[from]||1);
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{color:"#38bdf8"}}>Torque Converter</h1><div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}><input type="number" value={val} onChange={e=>setVal(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px",width:"150px"}}/><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px"}}>{Object.keys(toNm).map(k=><option key={k} value={k}>{labels[k]}</option>)}</select></div><table style={{borderCollapse:"collapse",width:"100%"}}><thead><tr><th style={{textAlign:"left",padding:"0.5rem",borderBottom:"1px solid #334155"}}>Unit</th><th style={{textAlign:"left",padding:"0.5rem",borderBottom:"1px solid #334155"}}>Value</th></tr></thead><tbody>{Object.entries(toNm).map(([k,r])=><tr key={k} style={{background:k===from?"#1e293b":"transparent"}}><td style={{padding:"0.5rem"}}>{labels[k]}</td><td style={{padding:"0.5rem",color:"#38bdf8"}}>{isNaN(base/r)?"0":(base/r).toFixed(6)}</td></tr>)}</tbody></table></div>);
}
