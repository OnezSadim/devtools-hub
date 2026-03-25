"use client";
import { useState } from "react";

const presets = [
  { label: "720p", w: 1280, h: 720 },
  { label: "1080p (FHD)", w: 1920, h: 1080 },
  { label: "1440p (QHD)", w: 2560, h: 1440 },
  { label: "4K (UHD)", w: 3840, h: 2160 },
  { label: "iPhone 15", w: 2556, h: 1179 },
  { label: "MacBook Pro 14", w: 3024, h: 1964 },
];

export default function ScreenResolutionCalculator() {
  const [w, setW] = useState("1920");
  const [h, setH] = useState("1080");
  const [diag, setDiag] = useState("24");

  const wn = parseInt(w) || 0;
  const hn = parseInt(h) || 0;
  const dn = parseFloat(diag) || 0;
  const totalPx = wn * hn;
  const diagPx = Math.sqrt(wn*wn + hn*hn);
  const ppi = dn ? diagPx / dn : null;
  const ppicm = ppi ? ppi / 2.54 : null;

  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"2rem",marginBottom:"0.5rem"}}>Screen Resolution Calculator</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Calculate PPI, total pixels, and more</p>
      <div style={{display:"grid",gap:"1rem",marginBottom:"1.5rem"}}>
        <div style={{display:"flex",gap:"1rem",flexWrap:"wrap"}}>
          <div><label style={{display:"block",marginBottom:"0.25rem",color:"#94a3b8",fontSize:"0.85rem"}}>Width (px)</label><input type="number" value={w} onChange={e=>setW(e.target.value)} style={{padding:"0.75rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",color:"#e2e8f0",width:"120px"}} /></div>
          <div><label style={{display:"block",marginBottom:"0.25rem",color:"#94a3b8",fontSize:"0.85rem"}}>Height (px)</label><input type="number" value={h} onChange={e=>setH(e.target.value)} style={{padding:"0.75rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",color:"#e2e8f0",width:"120px"}} /></div>
          <div><label style={{display:"block",marginBottom:"0.25rem",color:"#94a3b8",fontSize:"0.85rem"}}>Diagonal (inches)</label><input type="number" value={diag} onChange={e=>setDiag(e.target.value)} style={{padding:"0.75rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",color:"#e2e8f0",width:"120px"}} /></div>
        </div>
      </div>
      <div style={{display:"grid",gap:"0.75rem",marginBottom:"1.5rem"}}>
        {[{l:"Total Pixels",v:totalPx ? totalPx.toLocaleString() : "—"},{l:"Diagonal Pixels",v:diagPx ? Math.round(diagPx).toLocaleString() : "—"},{l:"PPI (pixels per inch)",v:ppi ? ppi.toFixed(1) : "—"},{l:"PPC (pixels per cm)",v:ppicm ? ppicm.toFixed(1) : "—"}].map(({l,v})=>(
          <div key={l} style={{padding:"1rem",background:"#1e293b",borderRadius:"8px",border:"1px solid #334155"}}>
            <span style={{color:"#94a3b8",fontSize:"0.85rem"}}>{l}</span>
            <div style={{fontSize:"1.5rem",fontWeight:"bold",color:"#38bdf8"}}>{v}</div>
          </div>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(150px,1fr))",gap:"0.5rem"}}>
        {presets.map(p=>(
          <button key={p.label} onClick={()=>{setW(String(p.w));setH(String(p.h));}} style={{padding:"0.75rem",background:"#0f172a",border:"1px solid #334155",borderRadius:"8px",color:"#e2e8f0",cursor:"pointer",fontSize:"0.8rem"}}>{p.label}</button>
        ))}
      </div>
    </main>
  );
}
