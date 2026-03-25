"use client";
import { useState } from "react";
const units=[{k:"wb",l:"Weber",r:1},{k:"mx",l:"Maxwell",r:1e-8},{k:"mwb",l:"Milliweber",r:0.001},{k:"uwb",l:"Microweber",r:1e-6}];
export default function MagneticFluxConverter() {
 const [v,setV]=useState("");
 const [from,setFrom]=useState(units[0].k);
 const [to,setTo]=useState(units[1].k);
 function convert(){
 const n=parseFloat(v);
 if(isNaN(n))return "—";
 const base=n*(units.find(u=>u.k===from)?.r??1);
 const res=base/(units.find(u=>u.k===to)?.r??1);
 return res.toPrecision(6);
 }
  return (<div style={{padding:"2rem",maxWidth:"500px",margin:"0 auto",fontFamily:"sans-serif"}}><h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Magnetic Flux Converter</h1><p style={{color:"#888",marginBottom:"1.5rem"}}>Convert between weber, maxwell, volt-second and other units.</p><input value={v} onChange={e=>setV(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"0.5rem",marginBottom:"0.75rem",boxSizing:"border-box"}} /><select value={from} onChange={e=>setFrom(e.target.value)} style={{width:"100%",padding:"0.5rem",marginBottom:"0.75rem"}}>{units.map(u=><option key={u.k} value={u.k}>{u.l}</option>)}</select><select value={to} onChange={e=>setTo(e.target.value)} style={{width:"100%",padding:"0.5rem",marginBottom:"1rem"}}>{units.map(u=><option key={u.k} value={u.k}>{u.l}</option>)}</select><div style={{background:"#1a1a1a",padding:"1rem",borderRadius:"8px",color:"#4ade80",fontSize:"1.25rem"}}>{convert()}</div></div>);
}
