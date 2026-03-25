"use client";
import { useState } from "react";

function kelvinToRGB(K) {
  K = Math.max(1000, Math.min(40000, K)) / 100;
  let r, g, b;
  if (K <= 66) {
    r = 255;
    g = Math.max(0, Math.min(255, 99.4708025861 * Math.log(K) - 161.1195681661));
  } else {
    r = Math.max(0, Math.min(255, 329.698727446 * Math.pow(K - 60, -0.1332047592)));
    g = Math.max(0, Math.min(255, 288.1221695283 * Math.pow(K - 60, -0.0755148492)));
  }
  b = K >= 66 ? 255 : K <= 19 ? 0 : Math.max(0, Math.min(255, 138.5177312231 * Math.log(K - 10) - 305.0447927307));
  return [Math.round(r), Math.round(g), Math.round(b)];
}

const presets = [
  { label: "Candle", k: 1850 },
  { label: "Incandescent", k: 2700 },
  { label: "Warm White LED", k: 3000 },
  { label: "Sunrise", k: 3500 },
  { label: "Neutral White", k: 4000 },
  { label: "Cool White", k: 5000 },
  { label: "Daylight", k: 6500 },
  { label: "Overcast Sky", k: 7000 },
  { label: "Clear Blue Sky", k: 10000 },
];

export default function ColorTemperatureConverter() {
  const [k, setK] = useState("6500");
  const kn = parseInt(k) || 6500;
  const [r, g, b] = kelvinToRGB(kn);
  const hex = "#" + [r,g,b].map(x=>x.toString(16).padStart(2,"0")).join("");

  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"2rem",marginBottom:"0.5rem"}}>Color Temperature Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Convert Kelvin to RGB color</p>
      <div style={{marginBottom:"1.5rem"}}>
        <label style={{display:"block",marginBottom:"0.5rem",color:"#94a3b8"}}>Color Temperature (K)</label>
        <input type="range" min="1000" max="12000" value={kn} onChange={e=>setK(e.target.value)} style={{width:"100%",marginBottom:"0.5rem"}} />
        <input type="number" value={k} onChange={e=>setK(e.target.value)} style={{padding:"0.75rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",color:"#e2e8f0",width:"150px"}} />
        <span style={{marginLeft:"0.5rem",color:"#94a3b8"}}>K</span>
      </div>
      <div style={{display:"flex",gap:"1rem",marginBottom:"1.5rem",flexWrap:"wrap"}}>
        <div style={{width:"200px",height:"100px",borderRadius:"12px",background:hex,border:"1px solid #334155"}}></div>
        <div style={{padding:"1rem",background:"#1e293b",borderRadius:"12px",flex:1}}>
          <div>RGB: rgb({r}, {g}, {b})</div>
          <div>HEX: {hex.toUpperCase()}</div>
          <div style={{color:"#94a3b8",fontSize:"0.9rem",marginTop:"0.5rem"}}>{kn < 3000 ? "Warm" : kn < 5000 ? "Neutral" : "Cool"} light</div>
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(140px,1fr))",gap:"0.5rem"}}>
        {presets.map(p=>(
          <button key={p.label} onClick={()=>setK(String(p.k))} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"6px",color:"#e2e8f0",cursor:"pointer",fontSize:"0.8rem"}}>
            {p.label}<br/><span style={{color:"#38bdf8"}}>{p.k}K</span>
          </button>
        ))}
      </div>
    </main>
  );
}
