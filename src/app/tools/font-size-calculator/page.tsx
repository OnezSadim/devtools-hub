"use client";
import { useState } from "react";
export default function FontSizeCalculator() {
  const [base, setBase] = useState("16");
  const [scale, setScale] = useState("1.25");
  const sizes = [];
  const b = parseFloat(base) || 16;
  const s = parseFloat(scale) || 1.25;
  for(let i = -2; i <= 6; i++) { sizes.push({step:i, px: (b * Math.pow(s,i)).toFixed(2), rem: (Math.pow(s,i)).toFixed(4)}); }
  return (
    <div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"1.8rem",fontWeight:"bold",marginBottom:"0.5rem",color:"#38bdf8"}}>Font Size Calculator</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Generate a type scale using modular scaling</p>
      <div style={{display:"flex",gap:"1rem",marginBottom:"1.5rem"}}>
        <div><label style={{display:"block",marginBottom:"0.3rem",color:"#94a3b8",fontSize:"0.85rem"}}>Base size (px)</label><input value={base} onChange={e=>setBase(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0",width:"120px"}} /></div>
        <div><label style={{display:"block",marginBottom:"0.3rem",color:"#94a3b8",fontSize:"0.85rem"}}>Scale ratio</label><select value={scale} onChange={e=>setScale(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0"}}><option value="1.067">Minor Second (1.067)</option><option value="1.125">Major Second (1.125)</option><option value="1.2">Minor Third (1.2)</option><option value="1.25">Major Third (1.25)</option><option value="1.333">Perfect Fourth (1.333)</option><option value="1.414">Augmented Fourth (1.414)</option><option value="1.5">Perfect Fifth (1.5)</option><option value="1.618">Golden Ratio (1.618)</option></select></div>
      </div>
      <div style={{background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",overflow:"hidden"}}>
        <table style={{width:"100%",borderCollapse:"collapse"}}>
          <thead><tr style={{background:"#0f172a"}}><th style={{padding:"0.75rem",textAlign:"left",color:"#94a3b8",fontSize:"0.85rem"}}>Step</th><th style={{padding:"0.75rem",textAlign:"left",color:"#94a3b8",fontSize:"0.85rem"}}>px</th><th style={{padding:"0.75rem",textAlign:"left",color:"#94a3b8",fontSize:"0.85rem"}}>rem</th><th style={{padding:"0.75rem",textAlign:"left",color:"#94a3b8",fontSize:"0.85rem"}}>Preview</th></tr></thead>
          <tbody>{sizes.map(sz=>(<tr key={sz.step} style={{borderTop:"1px solid #334155"}}><td style={{padding:"0.75rem",color:"#a78bfa"}}>{sz.step > 0 ? "+"+sz.step : sz.step}</td><td style={{padding:"0.75rem"}}>{sz.px}px</td><td style={{padding:"0.75rem"}}>{sz.rem}rem</td><td style={{padding:"0.75rem",fontSize:sz.px+"px",maxWidth:"200px",overflow:"hidden",whiteSpace:"nowrap"}}>The quick brown fox</td></tr>))}</tbody>
        </table>
      </div>
    </div>
  );
}