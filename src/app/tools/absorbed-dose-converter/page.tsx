"use client";
import { useState } from "react";

const units: Record<string, number> = {
  "Gray (Gy)": 1,
  "Milligray (mGy)": 0.001,
  "Microgray (uGy)": 1e-06,
  "Centigray (cGy)": 0.01,
  "Kilogray (kGy)": 1000,
  "Rad": 0.01,
  "Millirad": 1e-05,
  "Joule/kilogram (J/kg)": 1,
  "Erg/gram (erg/g)": 0.0001,
};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("Gray (Gy)");
  const [to, setTo] = useState("Milligray (mGy)");
  const result = val !== "" && !isNaN(Number(val))
    ? (Number(val) * units[from] / units[to]).toPrecision(6)
    : "";
  return (
    <main style={{padding:"2rem",maxWidth:"480px",margin:"0 auto",fontFamily:"sans-serif"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Absorbed Dose Converter</h1>
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
