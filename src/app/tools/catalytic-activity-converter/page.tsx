"use client";
import { useState } from "react";
const UNITS: Record<string, number> = {"katal": 1, "millimol/s": 0.001, "micromol/s": 1e-06, "nanomol/s": 1e-09, "enzyme unit": 1.6667e-08};
export default function Page() {
  const [val, setVal] = useState("1");
  const [from, setFrom] = useState("katal");
  const [to, setTo] = useState("millimol/s");
  const result = (parseFloat(val) * UNITS[from] / UNITS[to]) || 0;
  return (<div style={{padding:"2rem",fontFamily:"sans-serif",maxWidth:"600px",margin:"0 auto"}}><h1>Catalytic Activity Converter</h1><p>Convert between katal, millimol per second, micromol per second, enzyme unit and other catalytic activity units.</p><div style={{display:"flex",gap:"1rem",flexWrap:"wrap",margin:"1rem 0"}}><input type="number" value={val} onChange={e=>setVal(e.target.value)} style={{padding:"0.5rem",fontSize:"1.1rem",width:"150px"}}/><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem"}}>{Object.keys(UNITS).map(u=>(<option key={u}>{u}</option>))}</select><span style={{fontSize:"1.5rem"}}>→</span><select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem"}}>{Object.keys(UNITS).map(u=>(<option key={u}>{u}</option>))}</select></div><div style={{fontSize:"2rem",fontWeight:"bold",color:"#2563eb"}}>{result.toPrecision(6)} {to}</div></div>);
}