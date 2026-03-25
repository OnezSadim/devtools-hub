"use client";
import { useState, useEffect, useRef } from "react";
export default function Page() {
  const [mins, setMins] = useState("5");
  const [left, setLeft] = useState(null);
  const [running, setRunning] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (running && left > 0) { ref.current = setTimeout(() => setLeft(l => l-1), 1000); }
    else if (left === 0) setRunning(false);
    return () => clearTimeout(ref.current);
  }, [running, left]);
  const start = () => { setLeft(parseInt(mins)*60); setRunning(true); };
  const stop = () => setRunning(false);
  const reset = () => { setRunning(false); setLeft(null); };
  const fmt = s => s==null ? "--:--" : `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;
  return (<div style={{padding:"2rem",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0",fontFamily:"monospace",textAlign:"center"}}>
    <h1 style={{fontSize:"1.8rem",marginBottom:"1rem"}}>Countdown Timer</h1>
    <input value={mins} onChange={e=>setMins(e.target.value)} placeholder="Minutes" style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"6px",width:"100px",marginBottom:"1rem"}} />
    <div style={{fontSize:"4rem",margin:"1rem"}}>{fmt(left)}</div>
    <div style={{display:"flex",gap:"1rem",justifyContent:"center"}}>
      <button onClick={start} style={{padding:"0.5rem 1.5rem",background:"#22c55e",color:"white",border:"none",borderRadius:"6px",cursor:"pointer"}}>Start</button>
      <button onClick={stop} style={{padding:"0.5rem 1.5rem",background:"#f59e0b",color:"white",border:"none",borderRadius:"6px",cursor:"pointer"}}>Pause</button>
      <button onClick={reset} style={{padding:"0.5rem 1.5rem",background:"#ef4444",color:"white",border:"none",borderRadius:"6px",cursor:"pointer"}}>Reset</button>
    </div>
  </div>);
}