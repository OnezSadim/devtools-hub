"use client";
import { useState } from "react";

const units = ['Gray (Gy)', 'Milligray (mGy)', 'Microgray (uGy)', 'Rad (rad)', 'Millirad (mrad)', 'Centigray (cGy)', 'Kilogray (kGy)', 'Joule/kilogram (J/kg)'];
const factors = {'Gray (Gy)': 1, 'Milligray (mGy)': 0.001, 'Microgray (uGy)': 1e-06, 'Rad (rad)': 0.01, 'Millirad (mrad)': 1e-05, 'Centigray (cGy)': 0.01, 'Kilogray (kGy)': 1000.0, 'Joule/kilogram (J/kg)': 1};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0]);
  const [to, setTo] = useState(units[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * factors[from]) / factors[to]).toPrecision(6);
  };
  return (
    <main style={{padding:"2rem",maxWidth:"480px",margin:"0 auto",fontFamily:"sans-serif"}}>
      <h1>Absorbed Dose Converter</h1>
      <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{width:"100%",padding:"0.5rem",marginBottom:"1rem"}} />
      <select value={from} onChange={e=>setFrom(e.target.value)} style={{width:"100%",padding:"0.5rem",marginBottom:"1rem"}}>
        {units.map(u=><option key={u}>{u}</option>)}
      </select>
      <select value={to} onChange={e=>setTo(e.target.value)} style={{width:"100%",padding:"0.5rem",marginBottom:"1rem"}}>
        {units.map(u=><option key={u}>{u}</option>)}
      </select>
      <div style={{fontSize:"1.5rem",fontWeight:"bold"}}>{convert() || "—"} {to}</div>
    </main>
  );
}
