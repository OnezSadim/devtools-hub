"use client";
import { useState } from "react";
export default function CssUnitConverter() {
  const [value, setValue] = useState("16");
  const [fromUnit, setFromUnit] = useState("px");
  const [basePx, setBasePx] = useState("16");
  const base = parseFloat(basePx) || 16;
  const v = parseFloat(value) || 0;
  const toPx = () => { if(fromUnit==="px") return v; if(fromUnit==="rem"||fromUnit==="em") return v*base; if(fromUnit==="pt") return v*1.333; if(fromUnit==="vw"||fromUnit==="vh") return v*10; return v; };
  const px = toPx();
  const conversions = [{unit:"px",val:px.toFixed(3)},{unit:"rem",val:(px/base).toFixed(4)},{unit:"em",val:(px/base).toFixed(4)},{unit:"pt",val:(px/1.333).toFixed(3)},{unit:"%",val:(px/base*100).toFixed(2)}];
  return (
    <div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"1.8rem",fontWeight:"bold",marginBottom:"0.5rem",color:"#38bdf8"}}>CSS Unit Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Convert between CSS units: px, rem, em, pt, %</p>
      <div style={{display:"flex",gap:"1rem",marginBottom:"1.5rem",flexWrap:"wrap"}}>
        <div><label style={{display:"block",marginBottom:"0.3rem",color:"#94a3b8",fontSize:"0.85rem"}}>Value</label><input value={value} onChange={e=>setValue(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0",width:"120px"}} /></div>
        <div><label style={{display:"block",marginBottom:"0.3rem",color:"#94a3b8",fontSize:"0.85rem"}}>From unit</label><select value={fromUnit} onChange={e=>setFromUnit(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0"}}><option>px</option><option>rem</option><option>em</option><option>pt</option></select></div>
        <div><label style={{display:"block",marginBottom:"0.3rem",color:"#94a3b8",fontSize:"0.85rem"}}>Base (px)</label><input value={basePx} onChange={e=>setBasePx(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0",width:"80px"}} /></div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(150px,1fr))",gap:"1rem"}}>
        {conversions.map(c=>(<div key={c.unit} style={{background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",padding:"1rem",textAlign:"center"}}><div style={{color:"#94a3b8",fontSize:"0.85rem",marginBottom:"0.5rem"}}>{c.unit}</div><div style={{fontSize:"1.4rem",fontWeight:"bold",color:"#a78bfa"}}>{c.val}</div></div>))}
      </div>
    </div>
  );
}