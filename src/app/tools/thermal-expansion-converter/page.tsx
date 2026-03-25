"use client";
import { useState } from "react";
export default function ThermalExpansionConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("per_celsius");
  const [to, setTo] = useState("per_fahrenheit");
  const units = { per_celsius: 1, per_fahrenheit: 1.8, per_kelvin: 1 };
  const labels = { per_celsius: "1/°C", per_fahrenheit: "1/°F", per_kelvin: "1/K" };
  const convert = () => {
    const v = parseFloat(value);
    if (isNaN(v)) return "";
    return ((v * units[to]) / units[from]).toExponential(6);
  };
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}>
    <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Thermal Expansion Converter</h1>
    <input type="number" value={value} onChange={e=>setValue(e.target.value)} placeholder="Enter value" style={{padding:"0.5rem",marginRight:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px"}} />
    <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",marginRight:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px"}}>
      {Object.keys(units).map(u=><option key={u} value={u}>{labels[u]}</option>)}
    </select>
    <span style={{margin:"0 0.5rem"}}>to</span>
    <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px"}}>
      {Object.keys(units).map(u=><option key={u} value={u}>{labels[u]}</option>)}
    </select>
    {value && <div style={{marginTop:"1rem",padding:"1rem",background:"#1e293b",borderRadius:"8px"}}><strong>Result: {convert()} {labels[to]}</strong></div>}
  </div>);
}