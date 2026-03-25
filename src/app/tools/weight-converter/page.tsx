"use client";
import { useState } from "react";
export default function WeightConverter() {
  const [val, setVal] = useState("1");
  const [from, setFrom] = useState("kg");
  const units:{[k:string]:{label:string;toKg:number}} = {
    kg:{label:"Kilograms (kg)",toKg:1},
    g:{label:"Grams (g)",toKg:0.001},
    mg:{label:"Milligrams (mg)",toKg:0.000001},
    lb:{label:"Pounds (lb)",toKg:0.453592},
    oz:{label:"Ounces (oz)",toKg:0.0283495},
    t:{label:"Metric Ton (t)",toKg:1000},
    st:{label:"Stone (st)",toKg:6.35029},
  };
  const kg = (parseFloat(val)||0)*units[from].toKg;
  return (<div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}><h1 style={{fontSize:"1.8rem",marginBottom:"0.5rem"}}>Weight Converter</h1><p style={{color:"#94a3b8",marginBottom:"1.5rem"}}>Convert between weight and mass units</p><div style={{display:"flex",gap:"1rem",marginBottom:"1.5rem",flexWrap:"wrap"}}><input type="number" value={val} onChange={e=>setVal(e.target.value)} style={{padding:"0.6rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"6px",fontSize:"1rem",width:"150px"}} /><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.6rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"6px",fontSize:"1rem"}}>{Object.entries(units).map(([k,u])=><option key={k} value={k}>{u.label}</option>)}</select></div><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:"1rem"}}>{Object.entries(units).map(([k,u])=>(<div key={k} style={{background:"#1e293b",border:"1px solid "+(k===from?"#3b82f6":"#334155"),borderRadius:"10px",padding:"1.25rem"}}><div style={{color:"#94a3b8",fontSize:"0.85rem",marginBottom:"0.5rem"}}>{u.label}</div><div style={{fontSize:"1.4rem",fontWeight:"bold"}}>{(kg/u.toKg).toFixed(6).replace(/\.?0+$/,"")}</div></div>))}</div></div>);
}
