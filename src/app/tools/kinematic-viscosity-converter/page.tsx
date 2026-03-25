"use client";
import { useState } from "react";
const UNITS: Record<string, number> = {"m²/s": 1, "cm²/s (stokes)": 0.0001, "mm²/s (centistokes)": 1e-06, "ft²/s": 0.0929, "in²/s": 0.000645};
export default function Page() {
  const [val, setVal] = useState("1");
  const [from, setFrom] = useState("m²/s");
  const [to, setTo] = useState("cm²/s (stokes)");
  const result = (parseFloat(val) * UNITS[from] / UNITS[to]) || 0;
  return (<div style={{padding:"2rem",fontFamily:"sans-serif",maxWidth:"600px",margin:"0 auto"}}><h1>Kinematic Viscosity Converter</h1><p>Convert between square meter per second, stokes, centistokes and other kinematic viscosity units.</p><div style={{display:"flex",gap:"1rem",flexWrap:"wrap",margin:"1rem 0"}}><input type="number" value={val} onChange={e=>setVal(e.target.value)} style={{padding:"0.5rem",fontSize:"1.1rem",width:"150px"}}/><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem"}}>{Object.keys(UNITS).map(u=>(<option key={u}>{u}</option>))}</select><span style={{fontSize:"1.5rem"}}>→</span><select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem"}}>{Object.keys(UNITS).map(u=>(<option key={u}>{u}</option>))}</select></div><div style={{fontSize:"2rem",fontWeight:"bold",color:"#2563eb"}}>{result.toPrecision(6)} {to}</div></div>);
}