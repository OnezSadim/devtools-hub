"use client";
import { useState } from "react";
export default function SurfaceTensionConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("newton_per_meter");
  const [to, setTo] = useState("dyne_per_cm");
  const units = { newton_per_meter: 1, dyne_per_cm: 1000, millinewton_per_meter: 1000, pound_force_per_foot: 0.0685218 };
  const labels = { newton_per_meter: "N/m", dyne_per_cm: "dyn/cm", millinewton_per_meter: "mN/m", pound_force_per_foot: "lbf/ft" };
  const convert = () => {
    const v = parseFloat(value);
    if (isNaN(v)) return "";
    return ((v * units[to]) / units[from]).toPrecision(8);
  };
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}>
    <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Surface Tension Converter</h1>
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