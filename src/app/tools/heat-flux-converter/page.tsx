"use client";
import { useState } from "react";

const units = [{ value: '1', label: 'Watt per square meter (W/m²)' }, { value: '0.001', label: 'Kilowatt per square meter (kW/m²)' }, { value: '0.316998', label: 'BTU per hour-square foot' }, { value: '4.18681', label: 'Calorie per second-square centimeter' }, { value: '1', label: 'Joule per second-square meter' }, { value: '1000', label: 'Milliwatt per square meter' }];

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0].value);
  const [to, setTo] = useState(units[1].value);
  const convert = () => {
    const n = parseFloat(val); if (isNaN(n)) return "";
    return (n * (parseFloat(from) / parseFloat(to))).toPrecision(6);
  };
  return (
    <main style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}>>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Heat Flux Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:"1.5rem"}}>Convert between heat flux density units used in thermodynamics and engineering.</p>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",marginBottom:"1rem"}}>>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px",flex:1}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}}>{units.map(u=><option key={u.value} value={u.value}>{u.label}</option>)}</select>
        <span style={{alignSelf:"center"}}>to</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",borderRadius:"4px"}}>{units.map(u=><option key={u.value} value={u.value}>{u.label}</option>)}</select>
      </div>
      {val && <div style={{padding:"1rem",background:"#1e293b",borderRadius:"8px",fontSize:"1.25rem"}}>Result: <strong>{convert()}</strong> {units.find(u=>u.value===to)?.label}</div>}
    </main>
  );
}
