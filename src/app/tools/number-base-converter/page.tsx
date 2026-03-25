"use client";
import { useState } from "react";
export default function NumberBaseConverter() {
  const [input, setInput] = useState("");
  const [fromBase, setFromBase] = useState(10);
  const bases = [2,8,10,16];
  const labels: Record<number,string> = {2:"Binary",8:"Octal",10:"Decimal",16:"Hex"};
  function convert(toBase: number) {
    try { return parseInt(input, fromBase).toString(toBase).toUpperCase(); } catch { return "Invalid"; }
  }
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Number Base Converter</h1><div style={{marginBottom:"1rem"}}><label style={{display:"block",marginBottom:"0.5rem"}}>From Base</label><select value={fromBase} onChange={e=>setFromBase(Number(e.target.value))} style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px",marginRight:"1rem"}}>{bases.map(b=><option key={b} value={b}>{labels[b]} (Base {b})</option>)}</select><input value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter number" style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px",width:"200px"}} /></div><div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"1rem"}}>{bases.map(b=><div key={b} style={{background:"#1e293b",padding:"1rem",borderRadius:"4px"}}><div style={{color:"#64748b",marginBottom:"0.5rem"}}>{labels[b]} (Base {b})</div><div style={{fontSize:"1.2rem"}}>{input?convert(b):"—"}</div></div>)}</div></div>);
}
