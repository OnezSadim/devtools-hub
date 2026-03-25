"use client";
import { useState } from "react";
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("1");
  const [to, setTo] = useState("0.001");
  const convert = () => { const r = parseFloat(val); if (isNaN(r)) return "—"; return ((r / parseFloat(from)) * parseFloat(to)).toFixed(6).replace(/\.?0+$/, ""); };
  return (<div style={{padding:"2rem",fontFamily:"sans-serif",maxWidth:"500px",margin:"0 auto"}}><h1>Electric Field Strength Converter</h1><p>Convert electric field strength: V/m, kV/m, MV/m, V/cm</p><input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"8px",fontSize:"1rem",width:"100%",marginBottom:"1rem",boxSizing:"border-box"}}/><div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"8px",fontSize:"1rem",flex:1}}><option value="1">V/m</option><option value="0.001">kV/m</option><option value="0.000001">MV/m</option><option value="0.01">V/cm</option><option value="1000">mV/m</option></select><span style={{alignSelf:"center"}}>→</span><select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"8px",fontSize:"1rem",flex:1}}><option value="1">V/m</option><option value="0.001">kV/m</option><option value="0.000001">MV/m</option><option value="0.01">V/cm</option><option value="1000">mV/m</option></select></div><div style={{fontSize:"1.5rem",fontWeight:"bold"}}>{convert()}</div></div>);
}