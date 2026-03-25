"use client";
import { useState } from "react";
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("1");
  const [to, setTo] = useState("1000");
  const convert = () => { const r = parseFloat(val); if (isNaN(r)) return "—"; return ((r / parseFloat(from)) * parseFloat(to)).toFixed(6).replace(/\.?0+$/, ""); };
  return (<div style={{padding:"2rem",fontFamily:"sans-serif",maxWidth:"500px",margin:"0 auto"}}><h1>Magnetic Flux Density Converter</h1><p>Convert between Tesla, Gauss, mT, and more</p><input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"8px",fontSize:"1rem",width:"100%",marginBottom:"1rem",boxSizing:"border-box"}}/><div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"8px",fontSize:"1rem",flex:1}}><option value="1">T</option><option value="1000">mT</option><option value="1000000">μT</option><option value="10000">G</option><option value="10">kG</option></select><span style={{alignSelf:"center"}}>→</span><select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"8px",fontSize:"1rem",flex:1}}><option value="1">T</option><option value="1000">mT</option><option value="1000000">μT</option><option value="10000">G</option><option value="10">kG</option></select></div><div style={{fontSize:"1.5rem",fontWeight:"bold"}}>{convert()}</div></div>);
}