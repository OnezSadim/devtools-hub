"use client";
import { useState } from "react";
export default function Page() {
  const [w, setW] = useState("");
  const [h, setH] = useState("");
  const gcd = (a,b) => b===0?a:gcd(b,a%b);
  const ratio = w&&h ? (()=>{const g=gcd(parseInt(w),parseInt(h));return `${parseInt(w)/g}:${parseInt(h)/g}`;})() : "";
  return (<div style={{padding:"2rem",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0",fontFamily:"monospace"}}>
    <h1 style={{fontSize:"1.8rem",marginBottom:"1rem"}}>Aspect Ratio Calculator</h1>
    <div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}>
      <input value={w} onChange={e=>setW(e.target.value)} placeholder="Width" style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"6px",flex:1}} />
      <input value={h} onChange={e=>setH(e.target.value)} placeholder="Height" style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"6px",flex:1}} />
    </div>
    {ratio && <div style={{padding:"1rem",background:"#1e293b",borderRadius:"8px",fontSize:"1.5rem"}}>Ratio: {ratio}</div>}
  </div>);
}