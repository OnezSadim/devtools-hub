"use client";
import { useState } from "react";

const UNITS: string[] = ["teaspoon", "tablespoon", "fl oz", "cup", "pint", "quart", "gallon", "mL", "L"];
const FACTORS: Record<string, number> = {"teaspoon": 4.92892, "tablespoon": 14.7868, "fl oz": 29.5735, "cup": 236.588, "pint": 473.176, "quart": 946.353, "gallon": 3785.41, "mL": 1.0, "L": 1000.0};

export default function CookingVolumeConverterPage() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0]);
  const [to, setTo] = useState(UNITS[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * FACTORS[from]) / FACTORS[to]).toPrecision(6);
  };
  return (
    <main style={{padding:"2rem",maxWidth:"480px",margin:"0 auto",fontFamily:"monospace"}}>
      <h1 style={{marginBottom:"1rem"}}>Cooking Volume Converter</h1>
      <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{width:"100%",padding:"0.5rem",marginBottom:"0.5rem",background:"#111",color:"#fff",border:"1px solid #333"}} />
      <div style={{display:"flex",gap:"0.5rem",marginBottom:"0.5rem"}}>
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{flex:1,padding:"0.5rem",background:"#111",color:"#fff",border:"1px solid #333"}}>
          {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
        <span style={{alignSelf:"center"}}>to</span>
        <select value={to} onChange={e=>setTo(e.target.value)} style={{flex:1,padding:"0.5rem",background:"#111",color:"#fff",border:"1px solid #333"}}>
          {UNITS.map(u=><option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      <div style={{padding:"1rem",background:"#111",border:"1px solid #333",fontSize:"1.25rem"}}>{convert() || "Enter a value"}</div>
    </main>
  );
}
