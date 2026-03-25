"use client";
import { useState } from "react";
export default function SpeedConverter() {
  const [val, setVal] = useState("100");
  const [from, setFrom] = useState("kmh");
  const units:{[k:string]:{label:string;toMs:number}} = {
    ms:{label:"m/s",toMs:1},
    kmh:{label:"km/h",toMs:1/3.6},
    mph:{label:"mph",toMs:0.44704},
    knot:{label:"knots",toMs:0.514444},
    fps:{label:"ft/s",toMs:0.3048},
    mach:{label:"Mach",toMs:343},
  };
  const ms = (parseFloat(val)||0)*units[from].toMs;
  return (<div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}><h1 style={{fontSize:"1.8rem",marginBottom:"0.5rem"}}>Speed Converter</h1><p style={{color:"#94a3b8",marginBottom:"1.5rem"}}>Convert between speed units</p><div style={{display:"flex",gap:"1rem",marginBottom:"1.5rem",flexWrap:"wrap"}}><input type="number" value={val} onChange={e=>setVal(e.target.value)} style={{padding:"0.6rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"6px",fontSize:"1rem",width:"150px"}} /><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.6rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"6px",fontSize:"1rem"}}>{Object.entries(units).map(([k,u])=><option key={k} value={k}>{u.label}</option>)}</select></div><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:"1rem"}}>{Object.entries(units).map(([k,u])=>(<div key={k} style={{background:"#1e293b",border:"1px solid "+(k===from?"#3b82f6":"#334155"),borderRadius:"10px",padding:"1.25rem"}}><div style={{color:"#94a3b8",fontSize:"0.85rem",marginBottom:"0.5rem"}}>{u.label}</div><div style={{fontSize:"1.4rem",fontWeight:"bold"}}>{(ms/u.toMs).toFixed(4)}</div></div>))}</div></div>);
}
