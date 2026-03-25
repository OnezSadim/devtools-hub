"use client";
import { useState, useEffect, useRef } from "react";
export default function CountdownTimer() {
  const [h, setH] = useState('0');
  const [m, setM] = useState('5');
  const [s, setS] = useState('0');
  const [remaining, setRemaining] = useState<number|null>(null);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const ref = useRef<NodeJS.Timeout|null>(null);
  const total = parseInt(h||'0')*3600 + parseInt(m||'0')*60 + parseInt(s||'0');
  useEffect(() => {
    if (running && remaining !== null) {
      ref.current = setInterval(() => {
        setRemaining(r => {
          if (r === null || r <= 0) { setRunning(false); setDone(true); return 0; }
          return r - 1;
        });
      }, 1000);
    } else { if (ref.current) clearInterval(ref.current); }
    return () => { if (ref.current) clearInterval(ref.current); };
  }, [running]);
  const start = () => { setDone(false); setRemaining(total); setRunning(true); };
  const pause = () => setRunning(false);
  const resume = () => { setDone(false); setRunning(true); };
  const reset = () => { setRunning(false); setRemaining(null); setDone(false); };
  const disp = remaining !== null ? remaining : total;
  const dh = Math.floor(disp/3600); const dm = Math.floor((disp%3600)/60); const ds = disp%60;
  return (
    <main style={{minHeight:'100vh',background:'#0f172a',color:'#f1f5f9',fontFamily:'monospace',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'2rem'}}>
      <h1 style={{fontSize:'2rem',fontWeight:'bold',color:'#38bdf8'}}>Countdown Timer</h1>
      {done && <div style={{padding:'1rem 2rem',background:'#166534',borderRadius:'8px',color:'#86efac',fontWeight:'bold',fontSize:'1.25rem'}}>Time is up!</div>}
      <div style={{fontSize:'4rem',fontWeight:'bold',color:done?'#86efac':remaining===null?'#64748b':'#f1f5f9',letterSpacing:'0.1em'}}>{String(dh).padStart(2,'0')}:{String(dm).padStart(2,'0')}:{String(ds).padStart(2,'0')}</div>
      {remaining === null && (
        <div style={{display:'flex',gap:'1rem',alignItems:'center'}}>
          {(['h','m','s'] as const).map((unit,i) => (
            <div key={unit} style={{textAlign:'center'}}>
              <label style={{display:'block',color:'#94a3b8',fontSize:'0.75rem',marginBottom:'0.25rem'}}>{unit.toUpperCase()}</label>
              <input type='number' min='0' value={[h,m,s][i]} onChange={e=>[setH,setM,setS][i](e.target.value)} style={{width:'70px',padding:'0.5rem',background:'#1e293b',border:'1px solid #334155',borderRadius:'6px',color:'#f1f5f9',fontFamily:'monospace',fontSize:'1.25rem',textAlign:'center'}}/>
            </div>
          ))}
        </div>
      )}
      <div style={{display:'flex',gap:'1rem'}}>
        {remaining === null ? <button onClick={start} disabled={total===0} style={{padding:'0.75rem 2rem',borderRadius:'8px',border:'none',background:'#38bdf8',color:'#0f172a',cursor:total===0?'not-allowed':'pointer',fontFamily:'monospace',fontWeight:'bold',fontSize:'1rem',opacity:total===0?0.5:1}}>Start</button> : running ? <button onClick={pause} style={{padding:'0.75rem 2rem',borderRadius:'8px',border:'none',background:'#f59e0b',color:'#0f172a',cursor:'pointer',fontFamily:'monospace',fontWeight:'bold',fontSize:'1rem'}}>Pause</button> : <button onClick={resume} style={{padding:'0.75rem 2rem',borderRadius:'8px',border:'none',background:'#38bdf8',color:'#0f172a',cursor:'pointer',fontFamily:'monospace',fontWeight:'bold',fontSize:'1rem'}}>Resume</button>}
        {remaining !== null && <button onClick={reset} style={{padding:'0.75rem 1rem',borderRadius:'8px',border:'none',background:'#1e293b',color:'#94a3b8',cursor:'pointer',fontFamily:'monospace'}}>Reset</button>}
      </div>
    </main>
  );
}