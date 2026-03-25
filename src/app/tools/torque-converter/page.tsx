"use client";
import { useState } from "react";

const units: Record<string, number> = {
  "Newton-meter (N*m)": 1,
  "Newton-centimeter (N*cm)": 0.01,
  "Kilonewton-meter (kN*m)": 1000,
  "Millinewton-meter (mN*m)": 0.001,
  "Pound-foot (lbf*ft)": 1.35582,
  "Pound-inch (lbf*in)": 0.112985,
  "Ounce-foot (ozf*ft)": 0.0847866,
  "Ounce-inch (ozf*in)": 0.00706155,
  "Dyne-centimeter (dyn*cm)": 1e-07,
  "Kilogram-force meter (kgf*m)": 9.80665,
};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("Newton-meter (N*m)");
  const [to, setTo] = useState("Newton-centimeter (N*cm)");
  const result = val !== "" && !isNaN(Number(val))
    ? (Number(val) * units[from] / units[to]).toPrecision(6)
    : "";
  return (
    <main style={{padding:"2rem",maxWidth:"480px",margin:"0 auto",fontFamily:"sans-serif"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Torque Converter</h1>
      <input type="number" value={val} onChange={e=>setVal(e.target.value)}
        placeholder="Enter value"
        style={{width:"100%",padding:"0.5rem",marginBottom:"0.75rem",fontSize:"1rem",boxSizing:"border-box"}} />
      <div style={{display:"flex",gap:"0.5rem",marginBottom:"0.75rem"}}>
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:"0.5rem"}}>
          {Object.keys(units).map(u=><option key={u} value={u}>{u}</option>)}
        </select>
        <span style={{alignSelf:"center"}}>to</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:"0.5rem"}}>
          {Object.keys(units).map(u=><option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      {result !== "" && (
        <p style={{fontSize:"1.25rem",fontWeight:"bold"}}>{val} {from} = {result} {to}</p>
      )}
    </main>
  );
}
