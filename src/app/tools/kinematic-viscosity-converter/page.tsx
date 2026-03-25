"use client";
import { useState } from "react";

const UNITS: string[] = ["m2/s", "cm2/s", "mm2/s", "cSt", "ft2/s", "in2/s"];
const FACTORS: Record<string, number> = {"m2/s": 1.0, "cm2/s": 0.0001, "mm2/s": 1e-06, "cSt": 1e-06, "ft2/s": 0.092903, "in2/s": 0.00064516};

export default function KinematicViscosityConverterPage() {
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
      <h1 style={{marginBottom:"1rem"}}>Kinematic Viscosity Converter</h1>
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
