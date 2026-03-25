"use client";
import { useState } from "react";
export default function LineHeightCalculator() {
  const [fontSize, setFontSize] = useState("16");
  const [ratio, setRatio] = useState("1.5");
  const [text, setText] = useState("The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
  const lh = (parseFloat(fontSize)||16) * (parseFloat(ratio)||1.5);
  const css = `font-size: ${fontSize}px;
line-height: ${ratio}; /* ${lh.toFixed(1)}px */`;
  const recommended = [{label:"Body text",val:"1.5"},{label:"Headings",val:"1.2"},{label:"UI/compact",val:"1.3"},{label:"Loose",val:"1.8"}];
  return (
    <div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"1.8rem",fontWeight:"bold",marginBottom:"0.5rem",color:"#38bdf8"}}>Line Height Calculator</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Preview and calculate optimal line height for your text</p>
      <div style={{display:"flex",gap:"1rem",marginBottom:"1rem",flexWrap:"wrap"}}>
        <div><label style={{display:"block",marginBottom:"0.3rem",color:"#94a3b8",fontSize:"0.85rem"}}>Font size (px)</label><input value={fontSize} onChange={e=>setFontSize(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0",width:"100px"}} /></div>
        <div><label style={{display:"block",marginBottom:"0.3rem",color:"#94a3b8",fontSize:"0.85rem"}}>Line height ratio: {ratio}</label><input type="range" min="1" max="3" step="0.05" value={ratio} onChange={e=>setRatio(e.target.value)} style={{marginTop:"0.5rem"}} /></div>
      </div>
      <div style={{display:"flex",gap:"0.5rem",marginBottom:"1.5rem"}}>{recommended.map(r=>(<button key={r.label} onClick={()=>setRatio(r.val)} style={{padding:"0.4rem 0.8rem",background:ratio===r.val?"#3b82f6":"#1e293b",color:"white",border:"1px solid #334155",borderRadius:"4px",cursor:"pointer",fontSize:"0.8rem"}}>{r.label} ({r.val})</button>))}</div>
      <div style={{background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",padding:"1.5rem",marginBottom:"1.5rem"}}><p style={{fontSize:fontSize+"px",lineHeight:ratio,margin:0,color:"#e2e8f0"}}>{text}</p></div>
      <div style={{background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",padding:"1rem"}}><div style={{color:"#94a3b8",fontSize:"0.85rem",marginBottom:"0.5rem"}}>Computed: {lh.toFixed(1)}px</div><pre style={{color:"#a78bfa",margin:0}}>{css}</pre><button onClick={()=>navigator.clipboard.writeText(css)} style={{marginTop:"0.75rem",padding:"0.5rem 1rem",background:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"}}>Copy</button></div>
    </div>
  );
}