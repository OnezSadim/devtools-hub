"use client";
import { useState } from "react";

const units = ['tesla', 'millitesla', 'microtesla', 'nanotesla', 'gauss', 'maxwell/cm2', 'weber/m2'];
const factors = {'tesla': 1.0, 'millitesla': 0.001, 'microtesla': 1e-06, 'nanotesla': 1e-09, 'gauss': 0.0001, 'maxwell/cm2': 0.0001, 'weber/m2': 1.0};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0]);
  const [to, setTo] = useState(units[1]);
  function convert(v, f, t) {
    const n = parseFloat(v);
    if (isNaN(n)) return "";
    return ((n * factors[f]) / factors[t]).toPrecision(6);
  }
  return (
    <div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",fontFamily:"monospace",padding:"2rem"}}>
      <h1 style={{fontSize:"1.8rem",marginBottom:"0.5rem"}}>Magnetic Flux Density Converter</h1>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap",marginTop:"1.5rem"}}>
        <div>
          <label style={{display:"block",marginBottom:"0.25rem"}}>From</label>
          <select value={from} onChange={e=>setFrom(e.target.value)} style={{background:"#1e293b",color:"#e2e8f0",padding:"0.5rem",borderRadius:"4px",border:"1px solid #334155"}}>
            {units.map(u=><option key={u} value={u}>{u}</option>)}
          </select>
        </div>
        <div>
          <label style={{display:"block",marginBottom:"0.25rem"}}>To</label>
          <select value={to} onChange={e=>setTo(e.target.value)} style={{background:"#1e293b",color:"#e2e8f0",padding:"0.5rem",borderRadius:"4px",border:"1px solid #334155"}}>
            {units.map(u=><option key={u} value={u}>{u}</option>)}
          </select>
        </div>
      </div>
      <div style={{marginTop:"1rem"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{background:"#1e293b",color:"#e2e8f0",padding:"0.5rem",borderRadius:"4px",border:"1px solid #334155",width:"200px"}} />
      </div>
      {val && <div style={{marginTop:"1rem",fontSize:"1.4rem",color:"#38bdf8"}}>{convert(val,from,to)} {to}</div>}
    </div>
  );
}
