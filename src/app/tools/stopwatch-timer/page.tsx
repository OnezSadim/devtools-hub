"use client";
import { useState, useRef, useEffect } from "react";
export default function StopwatchTimer() {
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [laps, setLaps] = useState<number[]>([]);
  const startRef = useRef<number>(0);
  const frameRef = useRef<number>(0);
  useEffect(() => {
    if (running) {
      startRef.current = Date.now() - elapsed;
      function tick() { setElapsed(Date.now() - startRef.current); frameRef.current = requestAnimationFrame(tick); }
      frameRef.current = requestAnimationFrame(tick);
    } else { cancelAnimationFrame(frameRef.current); }
    return () => cancelAnimationFrame(frameRef.current);
  }, [running]);
  function fmt(ms: number) {
    const h = Math.floor(ms/3600000);
    const m = Math.floor((ms%3600000)/60000);
    const s = Math.floor((ms%60000)/1000);
    const cs = Math.floor((ms%1000)/10);
    return `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}.${String(cs).padStart(2,"0")}`;
  }
  function reset() { setRunning(false); setElapsed(0); setLaps([]); }
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",padding:"2rem",fontFamily:"monospace",textAlign:"center"}}>
      <h1 style={{fontSize:"1.8rem",fontWeight:700,marginBottom:"0.5rem"}}>Stopwatch</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Precise time measurement with lap tracking</p>
      <div style={{fontSize:"4rem",fontWeight:700,letterSpacing:"0.1em",color:"#60a5fa",marginBottom:"2rem",fontVariantNumeric:"tabular-nums"}}>{fmt(elapsed)}</div>
      <div style={{display:"flex",gap:"1rem",justifyContent:"center",marginBottom:"2rem"}}>
        <button onClick={()=>setRunning(r=>!r)} style={{padding:"0.8rem 2rem",background:running?"#ef4444":"#22c55e",border:"none",borderRadius:"8px",color:"#fff",fontSize:"1.1rem",cursor:"pointer",fontWeight:600}}>{running?"Stop":"Start"}</button>
        <button onClick={()=>setLaps(l=>[...l,elapsed])} disabled={!running} style={{padding:"0.8rem 2rem",background:"#3b82f6",border:"none",borderRadius:"8px",color:"#fff",fontSize:"1.1rem",cursor:"pointer",opacity:running?1:0.4}}>Lap</button>
        <button onClick={reset} style={{padding:"0.8rem 2rem",background:"#475569",border:"none",borderRadius:"8px",color:"#fff",fontSize:"1.1rem",cursor:"pointer"}}>Reset</button>
      </div>
      {laps.length > 0 && (
        <div style={{maxWidth:"360px",margin:"0 auto",textAlign:"left"}}>
          <h3 style={{color:"#94a3b8",marginBottom:"0.5rem"}}>Laps</h3>
          {laps.map((l,i)=>(
            <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"0.5rem",background:i%2?"#1e293b":"transparent",borderRadius:"4px"}}>
              <span style={{color:"#64748b"}}>Lap {i+1}</span>
              <span>{fmt(l)}</span>
              {i>0&&<span style={{color:"#94a3b8",fontSize:"0.85rem"}}>+{fmt(l-laps[i-1])}</span>}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
