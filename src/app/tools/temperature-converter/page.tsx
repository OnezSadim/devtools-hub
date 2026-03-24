"use client";
import { useState } from "react";
export default function TemperatureConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("C");
  const units = ["C","F","K","R"];
  const names: Record<string,string> = {C:"Celsius",F:"Fahrenheit",K:"Kelvin",R:"Rankine"};
  const toCelsius = (v: number, u: string): number => {
    if(u==="C") return v;
    if(u==="F") return (v-32)*5/9;
    if(u==="K") return v-273.15;
    return (v-491.67)*5/9;
  };
  const fromCelsius = (c: number, u: string): number => {
    if(u==="C") return c;
    if(u==="F") return c*9/5+32;
    if(u==="K") return c+273.15;
    return (c+273.15)*9/5;
  };
  const n = parseFloat(val);
  const celsius = isNaN(n) ? null : toCelsius(n, from);
  return (
    <div style={{maxWidth:500,margin:"0 auto",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"1.8rem",marginBottom:"0.5rem"}}>Temperature Converter</h1>
      <p style={{color:"#aaa",marginBottom:"2rem"}}>Convert between Celsius, Fahrenheit, Kelvin, and Rankine.</p>
      <div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter temperature" style={{flex:1,padding:"0.75rem",background:"#1e1e1e",border:"1px solid #333",borderRadius:4,color:"#fff",fontSize:"1.1rem"}} />
        <select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.75rem",background:"#1e1e1e",border:"1px solid #333",borderRadius:4,color:"#fff"}}>
          {units.map(u=><option key={u} value={u}>{names[u]}</option>)}
        </select>
      </div>
      {celsius!==null && (
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"}}>
          {units.map(u=>(
            <div key={u} style={{padding:"1rem",background:"#1e1e1e",borderRadius:4,border:u===from?"1px solid #7c3aed":"1px solid #333"}}>
              <div style={{color:"#aaa",fontSize:"0.85rem"}}>{names[u]}</div>
              <div style={{fontSize:"1.5rem",marginTop:4}}>{fromCelsius(celsius,u).toFixed(2)}°{u}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}