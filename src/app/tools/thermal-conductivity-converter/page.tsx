"use client";
import { useState } from "react";
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("1");
  const [to, setTo] = useState("0.001");
  const convert = () => { const r = parseFloat(val); if (isNaN(r)) return "—"; return ((r / parseFloat(from)) * parseFloat(to)).toFixed(6).replace(/\.?0+$/, ""); };
  return (<div style={{padding:"2rem",fontFamily:"sans-serif",maxWidth:"500px",margin:"0 auto"}}><h1>Thermal Conductivity Converter</h1><p>Convert thermal conductivity: W/m·K, BTU/h·ft·°F, cal/s·cm·°C</p><input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"8px",fontSize:"1rem",width:"100%",marginBottom:"1rem",boxSizing:"border-box"}}/><div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"8px",fontSize:"1rem",flex:1}}><option value="1">W/m·K</option><option value="0.001">kW/m·K</option><option value="0.5779">BTU/h·ft·°F</option><option value="0.002389">cal/s·cm·°C</option><option value="0.86">kcal/h·m·°C</option></select><span style={{alignSelf:"center"}}>→</span><select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"8px",fontSize:"1rem",flex:1}}><option value="1">W/m·K</option><option value="0.001">kW/m·K</option><option value="0.5779">BTU/h·ft·°F</option><option value="0.002389">cal/s·cm·°C</option><option value="0.86">kcal/h·m·°C</option></select></div><div style={{fontSize:"1.5rem",fontWeight:"bold"}}>{convert()}</div></div>);
}