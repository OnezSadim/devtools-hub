"use client";
import{useState}from"react";
export default function Page(){
const[val,setVal]=useState("");
const[from,setFrom]=useState("1");
const[to,setTo]=useState("1");
const units=[['Cup (US)',1],['Cup (metric)',0.845351],['Tablespoon (US)',0.0625],['Teaspoon (US)',0.020833],['Fluid ounce (US)',0.125],['Pint (US)',2],['Quart (US)',4],['Milliliter (mL)',0.00422675],['Liter (L)',4.22675],];
function convert(){const v=parseFloat(val);if(isNaN(v))return"";const base=v*parseFloat(from);return(base/parseFloat(to)).toFixed(6).replace(/\.?0+$/,"");}
const opts=units.map(([n,f])=><option key={n} value={f}>{n}</option>);
return(<div style={{padding:"2rem",fontFamily:"sans-serif",maxWidth:"500px",margin:"0 auto"}}><h1>Cooking Measurement Converter</h1><p>Convert between cups, tablespoons, teaspoons, milliliters and other cooking units</p><input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"0.5rem",marginBottom:"1rem"}}/><select value={from} onChange={e=>setFrom(e.target.value)} style={{width:"100%",padding:"0.5rem",marginBottom:"0.5rem"}}>{opts}</select><div style={{textAlign:"center",margin:"0.5rem"}}>&#8595;</div><select value={to} onChange={e=>setTo(e.target.value)} style={{width:"100%",padding:"0.5rem",marginBottom:"1rem"}}>{opts}</select><div style={{fontSize:"1.5rem",fontWeight:"bold",padding:"1rem",background:"#f0f0f0",borderRadius:"8px"}}><span>{convert()||"—"}</span></div></div>);}
