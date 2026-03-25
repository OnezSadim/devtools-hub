"use client";
import { useState } from "react";
export default function MediaQueryGenerator() {
  const [breakpoint, setBreakpoint] = useState("768");
  const [type, setType] = useState("min-width");
  const [unit, setUnit] = useState("px");
  const [content, setContent] = useState(".container {
  width: 100%;
}");
  const query = `@media (${type}: ${breakpoint}${unit}) {
  ${content.split("
").join("
  ")}
}`;
  const presets = [{label:"Mobile",val:"480"},{label:"Tablet",val:"768"},{label:"Desktop",val:"1024"},{label:"Wide",val:"1280"},{label:"4K",val:"2560"}];
  return (
    <div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"1.8rem",fontWeight:"bold",marginBottom:"0.5rem",color:"#38bdf8"}}>Media Query Generator</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Generate CSS media queries for responsive design</p>
      <div style={{display:"flex",gap:"0.5rem",marginBottom:"1rem",flexWrap:"wrap"}}>
        {presets.map(p=>(<button key={p.label} onClick={()=>setBreakpoint(p.val)} style={{padding:"0.4rem 0.8rem",background:breakpoint===p.val?"#3b82f6":"#1e293b",color:"white",border:"1px solid #334155",borderRadius:"4px",cursor:"pointer",fontSize:"0.85rem"}}>{p.label} ({p.val}px)</button>))}
      </div>
      <div style={{display:"flex",gap:"1rem",marginBottom:"1rem",flexWrap:"wrap"}}>
        <div><label style={{display:"block",marginBottom:"0.3rem",color:"#94a3b8",fontSize:"0.85rem"}}>Type</label><select value={type} onChange={e=>setType(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0"}}><option value="min-width">min-width</option><option value="max-width">max-width</option><option value="min-height">min-height</option><option value="max-height">max-height</option></select></div>
        <div><label style={{display:"block",marginBottom:"0.3rem",color:"#94a3b8",fontSize:"0.85rem"}}>Value</label><input value={breakpoint} onChange={e=>setBreakpoint(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0",width:"100px"}} /></div>
        <div><label style={{display:"block",marginBottom:"0.3rem",color:"#94a3b8",fontSize:"0.85rem"}}>Unit</label><select value={unit} onChange={e=>setUnit(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0"}}><option>px</option><option>em</option><option>rem</option></select></div>
      </div>
      <textarea value={content} onChange={e=>setContent(e.target.value)} rows={4} style={{width:"100%",padding:"0.75rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0",fontFamily:"monospace",marginBottom:"1rem",boxSizing:"border-box"}} />
      <div style={{background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",padding:"1rem"}}>
        <div style={{color:"#94a3b8",fontSize:"0.85rem",marginBottom:"0.5rem"}}>Output</div>
        <pre style={{color:"#a78bfa",margin:0,whiteSpace:"pre-wrap"}}>{query}</pre>
        <button onClick={()=>navigator.clipboard.writeText(query)} style={{marginTop:"1rem",padding:"0.5rem 1rem",background:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"}}>Copy</button>
      </div>
    </div>
  );
}