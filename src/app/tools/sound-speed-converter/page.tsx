"use client";
import { useState } from "react";
export default function SoundSpeedConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("meter_per_second");
  const [to, setTo] = useState("knot");
  const units = { meter_per_second: 1, knot: 1.94384, kilometer_per_hour: 3.6, foot_per_second: 3.28084, mach: 0.00293255 };
  const labels = { meter_per_second: "m/s", knot: "kn", kilometer_per_hour: "km/h", foot_per_second: "ft/s", mach: "Mach" };
  const convert = () => {
    const v = parseFloat(value);
    if (isNaN(v)) return "";
    return ((v * units[to]) / units[from]).toPrecision(8);
  };
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}>
    <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Speed of Sound Converter</h1>
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