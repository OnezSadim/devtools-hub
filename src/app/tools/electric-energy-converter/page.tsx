"use client";
import { useState } from "react";

const UNITS: string[] = ["joule", "kilojoule", "watt-hour", "kilowatt-hour", "calorie", "BTU", "electronvolt"];
const TO_BASE: Record<string, number> = {"joule": 1, "kilojoule": 1000, "watt-hour": 3600, "kilowatt-hour": 3600000, "calorie": 4.184, "BTU": 1055.06, "electronvolt": 1.602e-19};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * TO_BASE[from]) / TO_BASE[to]).toPrecision(6);
  };
  return (
    <main style={{padding:"2rem",maxWidth:"480px",margin:"0 auto",fontFamily:"sans-serif"}}>
      <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Electric Energy Converter</h1>
      <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{width:"100%",padding:"0.5rem",marginBottom:"0.5rem",boxSizing:"border-box"}} />
      <div style={{display:"flex",gap:"0.5rem",marginBottom:"0.5rem"}}>
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:"0.5rem"}}>{UNITS.map(u=><option key={u}>{u}</option>)}</select>
        <span style={{alignSelf:"center"}}>to</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:"0.5rem"}}>{UNITS.map(u=><option key={u}>{u}</option>)}</select>
      </div>
      <div style={{background:"#f0f0f0",padding:"1rem",borderRadius:"4px",fontSize:"1.25rem"}}>
        {val ? convert() + " " + to : "Enter a value above"}
      </div>
    </main>
  );
}
