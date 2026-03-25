"use client";
import{useState}from"react";
export default function Page(){
const[val,setVal]=useState("");
const[from,setFrom]=useState("1");
const[to,setTo]=useState("1");
const units=[['Coulomb/kilogram (C/kg)',1],['Millicoulomb/kilogram (mC/kg)',0.001],['Microcoulomb/kilogram (μC/kg)',1e-06],['Roentgen (R)',0.000258],['Milliroentgen (mR)',2.58e-07],['Microroentgen (μR)',2.58e-10],['Parker (P)',0.000258],['Rep',0.00933],];
function convert(){const v=parseFloat(val);if(isNaN(v))return"";const base=v*parseFloat(from);return(base/parseFloat(to)).toFixed(6).replace(/\.?0+$/,"");}
const opts=units.map(([n,f])=><option key={n} value={f}>{n}</option>);
return(<div style={{padding:"2rem",fontFamily:"sans-serif",maxWidth:"500px",margin:"0 auto"}}><h1>Radiation Exposure Converter</h1><p>Convert between coulomb per kilogram, roentgen and other radiation exposure units</p><input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"0.5rem",marginBottom:"1rem"}}/><select value={from} onChange={e=>setFrom(e.target.value)} style={{width:"100%",padding:"0.5rem",marginBottom:"0.5rem"}}>{opts}</select><div style={{textAlign:"center",margin:"0.5rem"}}>&#8595;</div><select value={to} onChange={e=>setTo(e.target.value)} style={{width:"100%",padding:"0.5rem",marginBottom:"1rem"}}>{opts}</select><div style={{fontSize:"1.5rem",fontWeight:"bold",padding:"1rem",background:"#f0f0f0",borderRadius:"8px"}}><span>{convert()||"—"}</span></div></div>);}
