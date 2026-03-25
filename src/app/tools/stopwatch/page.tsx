"use client";
import { useState, useEffect, useRef } from "react";
export default function Stopwatch() {
  const [ms, setMs] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);
  const ref = useRef<NodeJS.Timeout|null>(null);
  const startRef = useRef<number>(0);
  const baseRef = useRef<number>(0);
  useEffect(() => {
    if (running) {
      startRef.current = Date.now();
      ref.current = setInterval(() => setMs(baseRef.current + Date.now() - startRef.current), 10);
    } else {
      if (ref.current) clearInterval(ref.current);
      baseRef.current = ms;
    }
    return () => { if (ref.current) clearInterval(ref.current); };
  }, [running]);
  const fmt = (t: number) => {
    const h = Math.floor(t/3600000); const m = Math.floor((t%3600000)/60000);
    const s = Math.floor((t%60000)/1000); const cs = Math.floor((t%1000)/10);
    return (h>0?String(h).padStart(2,'0')+':':'') + String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0') + '.' + String(cs).padStart(2,'0');
  };
  const reset = () => { setRunning(false); setMs(0); baseRef.current=0; setLaps([]); };
  const lap = () => setLaps(l => [...l, ms]);
  return (
    <main style={{minHeight:'100vh',background:'#0f172a',color:'#f1f5f9',fontFamily:'monospace',display:'flex',flexDirection:'column',alignItems:'center',padding:'2rem',gap:'2rem'}}>
      <h1 style={{fontSize:'2rem',fontWeight:'bold',color:'#38bdf8'}}>Stopwatch</h1>
      <div style={{fontSize:'4rem',fontWeight:'bold',letterSpacing:'0.05em',color:'#f1f5f9',fontVariantNumeric:'tabular-nums'}}>{fmt(ms)}</div>
      <div style={{display:'flex',gap:'1rem'}}>
        <button onClick={()=>setRunning(r=>!r)} style={{padding:'0.75rem 2rem',borderRadius:'8px',border:'none',background:running?'#f59e0b':'#38bdf8',color:'#0f172a',cursor:'pointer',fontFamily:'monospace',fontWeight:'bold',fontSize:'1rem'}}>{running?'Pause':'Start'}</button>
        {running && <button onClick={lap} style={{padding:'0.75rem 1rem',borderRadius:'8px',border:'none',background:'#1e293b',color:'#94a3b8',cursor:'pointer',fontFamily:'monospace'}}>Lap</button>}
        {!running && ms>0 && <button onClick={reset} style={{padding:'0.75rem 1rem',borderRadius:'8px',border:'none',background:'#1e293b',color:'#94a3b8',cursor:'pointer',fontFamily:'monospace'}}>Reset</button>}
      </div>
      {laps.length > 0 && (
        <div style={{width:'100%',maxWidth:'400px'}}>
          <h2 style={{color:'#94a3b8',fontSize:'1rem',marginBottom:'0.5rem'}}>Laps</h2>
          <div style={{display:'grid',gap:'0.5rem',maxHeight:'300px',overflowY:'auto'}}>
            {[...laps].reverse().map((lap,i) => (
              <div key={i} style={{display:'flex',justifyContent:'space-between',background:'#1e293b',padding:'0.5rem 1rem',borderRadius:'6px'}}>
                <span style={{color:'#64748b'}}>Lap {laps.length-i}</span>
                <span style={{color:'#38bdf8'}}>{fmt(lap)}</span>
                {i>0 && <span style={{color:'#94a3b8'}}>+{fmt(lap-laps[laps.length-i-1])}</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}