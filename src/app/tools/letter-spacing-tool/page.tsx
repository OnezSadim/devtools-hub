"use client";
import { useState } from "react";
export default function LetterSpacingTool() {
  const [text, setText] = useState("Hello World");
  const [spacing, setSpacing] = useState("0");
  const [size, setSize] = useState("32");
  const [weight, setWeight] = useState("normal");
  const [transform, setTransform] = useState("none");
  return (
    <div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"1.8rem",fontWeight:"bold",marginBottom:"0.5rem",color:"#38bdf8"}}>Letter Spacing Tool</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Preview and generate letter-spacing CSS</p>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",maxWidth:"600px",marginBottom:"1.5rem"}}>
        <div style={{gridColumn:"1/-1"}}><label style={{display:"block",marginBottom:"0.3rem",color:"#94a3b8",fontSize:"0.85rem"}}>Text</label><input value={text} onChange={e=>setText(e.target.value)} style={{width:"100%",padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0",boxSizing:"border-box"}} /></div>
        <div><label style={{display:"block",marginBottom:"0.3rem",color:"#94a3b8",fontSize:"0.85rem"}}>Letter Spacing (em): {spacing}</label><input type="range" min="-0.1" max="1" step="0.01" value={spacing} onChange={e=>setSpacing(e.target.value)} style={{width:"100%"}} /></div>
        <div><label style={{display:"block",marginBottom:"0.3rem",color:"#94a3b8",fontSize:"0.85rem"}}>Font Size (px): {size}</label><input type="range" min="12" max="96" step="1" value={size} onChange={e=>setSize(e.target.value)} style={{width:"100%"}} /></div>
        <div><label style={{display:"block",marginBottom:"0.3rem",color:"#94a3b8",fontSize:"0.85rem"}}>Weight</label><select value={weight} onChange={e=>setWeight(e.target.value)} style={{width:"100%",padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0"}}><option value="normal">Normal</option><option value="bold">Bold</option><option value="300">Light</option><option value="900">Black</option></select></div>
        <div><label style={{display:"block",marginBottom:"0.3rem",color:"#94a3b8",fontSize:"0.85rem"}}>Transform</label><select value={transform} onChange={e=>setTransform(e.target.value)} style={{width:"100%",padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0"}}><option value="none">None</option><option value="uppercase">Uppercase</option><option value="lowercase">Lowercase</option><option value="capitalize">Capitalize</option></select></div>
      </div>
      <div style={{background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",padding:"2rem",marginBottom:"1.5rem",textAlign:"center"}}><span style={{letterSpacing:spacing+"em",fontSize:size+"px",fontWeight:weight,textTransform:transform}}>{text}</span></div>
      <div style={{background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",padding:"1rem"}}><code style={{color:"#a78bfa"}}>{`letter-spacing: ${spacing}em; font-size: ${size}px; font-weight: ${weight}; text-transform: ${transform};`}</code><button onClick={()=>navigator.clipboard.writeText(`letter-spacing: ${spacing}em; font-size: ${size}px;`)} style={{display:"block",marginTop:"0.75rem",padding:"0.5rem 1rem",background:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"}}>Copy</button></div>
    </div>
  );
}