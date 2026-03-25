"use client";
import { useState } from "react";
const UNITS: Record<string, number> = {"gray": 1, "milligray": 0.001, "microgray": 1e-06, "centigray": 0.01, "kilogray": 1000, "rad": 0.01, "millirad": 1e-05};
export default function Page() {
  const [val, setVal] = useState("1");
  const [from, setFrom] = useState("gray");
  const [to, setTo] = useState("milligray");
  const result = (parseFloat(val) * UNITS[from] / UNITS[to]) || 0;
  return (<div style={{padding:"2rem",fontFamily:"sans-serif",maxWidth:"600px",margin:"0 auto"}}><h1>Absorbed Dose Converter</h1><p>Convert between gray, rad, milligray, microgray, centigray, kilogray and other absorbed dose units.</p><div style={{display:"flex",gap:"1rem",flexWrap:"wrap",margin:"1rem 0"}}><input type="number" value={val} onChange={e=>setVal(e.target.value)} style={{padding:"0.5rem",fontSize:"1.1rem",width:"150px"}}/><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem"}}>{Object.keys(UNITS).map(u=>(<option key={u}>{u}</option>))}</select><span style={{fontSize:"1.5rem"}}>→</span><select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem"}}>{Object.keys(UNITS).map(u=>(<option key={u}>{u}</option>))}</select></div><div style={{fontSize:"2rem",fontWeight:"bold",color:"#2563eb"}}>{result.toPrecision(6)} {to}</div></div>);
}