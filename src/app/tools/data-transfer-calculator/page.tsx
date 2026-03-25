"use client";
import { useState } from "react";
export default function DataTransferCalculator() {
  const [size, setSize] = useState("");
  const [fromUnit, setFromUnit] = useState("GB");
  const [speed, setSpeed] = useState("");
  const [speedUnit, setSpeedUnit] = useState("Mbps");
  const units: Record<string,number> = {B:1,KB:1024,MB:1024**2,GB:1024**3,TB:1024**4};
  const speedUnits: Record<string,number> = {"bps":1,"Kbps":1000,"Mbps":1000**2,"Gbps":1000**3};
  const bytes = (parseFloat(size)||0) * units[fromUnit];
  const bitsPerSec = (parseFloat(speed)||0) * speedUnits[speedUnit];
  const seconds = bitsPerSec > 0 ? (bytes * 8) / bitsPerSec : 0;
  const fmt = (s:number) => s < 60 ? s.toFixed(1)+"s" : s < 3600 ? (s/60).toFixed(1)+"m" : (s/3600).toFixed(2)+"h";
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{color:"#38bdf8",marginBottom:"0.5rem"}}>Data Transfer Calculator</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Calculate how long a file transfer will take.</p>
      <div style={{background:"#1e293b",padding:"1.5rem",borderRadius:"8px",maxWidth:"480px"}}>
        <div style={{marginBottom:"1rem"}}>
          <label style={{display:"block",marginBottom:"4px",color:"#94a3b8"}}>File Size</label>
          <div style={{display:"flex",gap:"8px"}}>
            <input value={size} onChange={e=>setSize(e.target.value)} placeholder="1" style={{flex:1,padding:"8px",background:"#0f172a",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9"}}/>
            <select value={fromUnit} onChange={e=>setFromUnit(e.target.value)} style={{padding:"8px",background:"#0f172a",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9"}}>
              {Object.keys(units).map(u=>(<option key={u}>{u}</option>))}
            </select>
          </div>
        </div>
        <div style={{marginBottom:"1.5rem"}}>
          <label style={{display:"block",marginBottom:"4px",color:"#94a3b8"}}>Transfer Speed</label>
          <div style={{display:"flex",gap:"8px"}}>
            <input value={speed} onChange={e=>setSpeed(e.target.value)} placeholder="100" style={{flex:1,padding:"8px",background:"#0f172a",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9"}}/>
            <select value={speedUnit} onChange={e=>setSpeedUnit(e.target.value)} style={{padding:"8px",background:"#0f172a",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9"}}>
              {Object.keys(speedUnits).map(u=>(<option key={u}>{u}</option>))}
            </select>
          </div>
        </div>
        {size && speed && seconds > 0 && (
          <div style={{background:"#0f172a",padding:"1rem",borderRadius:"6px",textAlign:"center"}}>
            <div style={{fontSize:"2rem",fontWeight:"bold",color:"#4ade80"}}>{fmt(seconds)}</div>
            <div style={{color:"#94a3b8",marginTop:"4px"}}>Transfer time</div>
          </div>
        )}
      </div>
    </main>
  );
}