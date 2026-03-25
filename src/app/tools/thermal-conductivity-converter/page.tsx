"use client";
import { useState } from "react";

const units = [{ value: '1', label: 'Watt per meter-kelvin (W/m·K)' }, { value: '0.01', label: 'Watt per centimeter-kelvin (W/cm·K)' }, { value: '1.73073', label: 'BTU per hour-foot-Fahrenheit' }, { value: '418.68', label: 'Calorie per second-cm-Celsius' }, { value: '0.1', label: 'Watt per meter-Celsius' }, { value: '0.577789', label: 'BTU·in/hr·ft²·°F' }];

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
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Thermal Conductivity Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:"1.5rem"}}>Convert between thermal conductivity units for heat transfer calculations.</p>
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
