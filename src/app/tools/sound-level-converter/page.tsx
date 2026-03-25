"use client";
import { useState } from "react";
export default function SoundLevelConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("decibel");
  const toDb: Record<string, (v: number) => number> = { decibel: v => v, bel: v => v * 10, neper: v => v * 8.68589 };
  const fromDb: Record<string, (v: number) => number> = { decibel: v => v, bel: v => v / 10, neper: v => v / 8.68589 };
  const convert = (v: string, f: string) => { const n = parseFloat(v); if (isNaN(n)) return {}; const db = toDb[f](n); return Object.fromEntries(Object.keys(toDb).map(k => [k, fromDb[k](db).toFixed(6)])); };
  const results = convert(val, from);
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Sound Level Converter</h1><div style={{marginBottom:"1rem"}}><input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"0.5rem",marginRight:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}}/><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}}>{Object.keys(toDb).map(u=><option key={u} value={u}>{u}</option>)}</select></div><div>{Object.entries(results).map(([k,v])=><div key={k} style={{padding:"0.5rem",marginBottom:"0.5rem",background:"#1e293b",borderRadius:"4px"}}><strong>{k}:</strong> {v}</div>)}</div></div>);
}
