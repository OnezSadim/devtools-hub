"use client";
import { useState } from "react";
export default function DataSizeConverter() {
  const [val, setVal] = useState("");
  const [unit, setUnit] = useState("MB");
  const units = [{n:"Bit",v:1},{n:"Byte",v:8},{n:"KB",v:8*1024},{n:"MB",v:8*1024**2},{n:"GB",v:8*1024**3},{n:"TB",v:8*1024**4},{n:"KiB",v:8*1024},{n:"MiB",v:8*1024**2},{n:"GiB",v:8*1024**3},{n:"TiB",v:8*1024**4}];
  const bits = parseFloat(val) * (units.find(u=>u.n===unit)?.v || 1);
  return (
    <div style={{maxWidth:600,margin:"0 auto",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"1.8rem",marginBottom:"0.5rem"}}>Data Size Converter</h1>
      <p style={{color:"#aaa",marginBottom:"2rem"}}>Convert between bits, bytes, KB, MB, GB, TB and more.</p>
      <div style={{display:"flex",gap:"1rem",marginBottom:"2rem"}}>
        <input value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{flex:1,padding:"0.75rem",background:"#1e1e1e",border:"1px solid #333",borderRadius:4,color:"#fff",fontSize:"1.1rem"}} />
        <select value={unit} onChange={e=>setUnit(e.target.value)} style={{padding:"0.75rem",background:"#1e1e1e",border:"1px solid #333",borderRadius:4,color:"#fff"}}>
          {units.map(u=><option key={u.n}>{u.n}</option>)}
        </select>
      </div>
      {!isNaN(bits) && val && (
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem"}}>
          {units.map(u=>(
            <div key={u.n} style={{padding:"0.75rem",background:"#1e1e1e",borderRadius:4,border:u.n===unit?"1px solid #7c3aed":"1px solid #333",display:"flex",justifyContent:"space-between"}}>
              <span style={{color:"#aaa"}}>{u.n}</span>
              <span>{(bits/u.v).toPrecision(6)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}