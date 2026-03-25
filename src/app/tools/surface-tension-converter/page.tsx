"use client";
import { useState } from "react";

const units = [{ value: '1', label: 'Newton per meter (N/m)' }, { value: '0.001', label: 'Millinewton per meter (mN/m)' }, { value: '0.001', label: 'Dyne per centimeter (dyn/cm)' }, { value: '1', label: 'Joule per square meter (J/m²)' }, { value: '0.00571015', label: 'Pound-force per foot (lbf/ft)' }, { value: '4.44822', label: 'Pound-force per inch (lbf/in)' }];

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
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Surface Tension Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:"1.5rem"}}>Convert between surface tension units including Newton per meter and dyne per centimeter.</p>
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
