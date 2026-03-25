"use client";
import { useState } from "react";
export default function TemperatureConverter() {
  const [val, setVal] = useState("100");
  const [from, setFrom] = useState("celsius");
  const units = ["celsius","fahrenheit","kelvin","rankine"];
  const toC = (v:number, u:string):number => {
    if(u==="celsius") return v;
    if(u==="fahrenheit") return (v-32)*5/9;
    if(u==="kelvin") return v-273.15;
    return (v-491.67)*5/9;
  };
  const fromC = (c:number, u:string):number => {
    if(u==="celsius") return c;
    if(u==="fahrenheit") return c*9/5+32;
    if(u==="kelvin") return c+273.15;
    return c*9/5+491.67;
  };
  const celsius = toC(parseFloat(val)||0, from);
  return (<div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}><h1 style={{fontSize:"1.8rem",marginBottom:"0.5rem"}}>Temperature Converter</h1><p style={{color:"#94a3b8",marginBottom:"1.5rem"}}>Convert between Celsius, Fahrenheit, Kelvin, and Rankine</p><div style={{display:"flex",gap:"1rem",marginBottom:"1.5rem",flexWrap:"wrap"}}><input type="number" value={val} onChange={e=>setVal(e.target.value)} style={{padding:"0.6rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"6px",fontSize:"1rem",width:"150px"}} /><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.6rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"6px",fontSize:"1rem"}}>{units.map(u=><option key={u} value={u}>{u.charAt(0).toUpperCase()+u.slice(1)}</option>)}</select></div><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:"1rem"}}>{units.map(u=>(<div key={u} style={{background:"#1e293b",border:"1px solid "+(u===from?"#3b82f6":"#334155"),borderRadius:"10px",padding:"1.25rem"}}><div style={{color:"#94a3b8",fontSize:"0.85rem",marginBottom:"0.5rem"}}>{u.charAt(0).toUpperCase()+u.slice(1)}</div><div style={{fontSize:"1.5rem",fontWeight:"bold"}}>{isNaN(parseFloat(val))?"—":fromC(celsius,u).toFixed(4)}</div></div>))}</div></div>);
}
