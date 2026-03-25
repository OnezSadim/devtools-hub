"use client";
import { useState } from "react";
export default function AnimationTimingGenerator() {
  const [duration, setDuration] = useState("1");
  const [easing, setEasing] = useState("ease");
  const [delay, setDelay] = useState("0");
  const [iterations, setIterations] = useState("1");
  const [fill, setFill] = useState("none");
  const css = `animation: my-animation ${duration}s ${easing} ${delay}s ${iterations} ${fill};`;
  return (
    <div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"1.8rem",fontWeight:"bold",marginBottom:"0.5rem",color:"#38bdf8"}}>Animation Timing Generator</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Generate CSS animation timing properties</p>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",maxWidth:"600px",marginBottom:"1.5rem"}}>
        <div><label style={{display:"block",marginBottom:"0.3rem",color:"#94a3b8",fontSize:"0.85rem"}}>Duration (s)</label><input value={duration} onChange={e=>setDuration(e.target.value)} style={{width:"100%",padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0"}} /></div>
        <div><label style={{display:"block",marginBottom:"0.3rem",color:"#94a3b8",fontSize:"0.85rem"}}>Delay (s)</label><input value={delay} onChange={e=>setDelay(e.target.value)} style={{width:"100%",padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0"}} /></div>
        <div><label style={{display:"block",marginBottom:"0.3rem",color:"#94a3b8",fontSize:"0.85rem"}}>Easing</label><select value={easing} onChange={e=>setEasing(e.target.value)} style={{width:"100%",padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0"}}><option>ease</option><option>ease-in</option><option>ease-out</option><option>ease-in-out</option><option>linear</option><option>cubic-bezier(0.4,0,0.2,1)</option></select></div>
        <div><label style={{display:"block",marginBottom:"0.3rem",color:"#94a3b8",fontSize:"0.85rem"}}>Iterations</label><input value={iterations} onChange={e=>setIterations(e.target.value)} style={{width:"100%",padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0"}} /></div>
        <div><label style={{display:"block",marginBottom:"0.3rem",color:"#94a3b8",fontSize:"0.85rem"}}>Fill Mode</label><select value={fill} onChange={e=>setFill(e.target.value)} style={{width:"100%",padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0"}}><option>none</option><option>forwards</option><option>backwards</option><option>both</option></select></div>
      </div>
      <div style={{background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",padding:"1rem"}}>
        <div style={{color:"#94a3b8",fontSize:"0.85rem",marginBottom:"0.5rem"}}>Generated CSS</div>
        <code style={{color:"#a78bfa"}}>{css}</code>
        <button onClick={()=>navigator.clipboard.writeText(css)} style={{display:"block",marginTop:"1rem",padding:"0.5rem 1rem",background:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"}}>Copy</button>
      </div>
    </div>
  );
}