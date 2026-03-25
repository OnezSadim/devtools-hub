"use client";
import { useState } from "react";

const units: Record<string, number> = {
  "Kilogram sq meter (kg*m2)": 1,
  "Kilogram sq cm (kg*cm2)": 0.0001,
  "Kilogram sq mm (kg*mm2)": 1e-06,
  "Gram sq cm (g*cm2)": 1e-07,
  "Gram sq mm (g*mm2)": 1e-09,
  "Pound sq foot (lb*ft2)": 0.0421401,
  "Pound sq inch (lb*in2)": 0.00029264,
  "Ounce sq inch (oz*in2)": 1.829e-05,
  "Slug sq foot (slug*ft2)": 1.35582,
};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("Kilogram sq meter (kg*m2)");
  const [to, setTo] = useState("Kilogram sq cm (kg*cm2)");
  const result = val !== "" && !isNaN(Number(val))
    ? (Number(val) * units[from] / units[to]).toPrecision(6)
    : "";
  return (
    <main style={{padding:"2rem",maxWidth:"480px",margin:"0 auto",fontFamily:"sans-serif"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Moment of Inertia Converter</h1>
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
