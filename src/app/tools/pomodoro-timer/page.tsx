"use client";
import { useState, useEffect, useRef } from "react";
export default function PomodoroTimer() {
  const [mode, setMode] = useState<'work'|'short'|'long'>('work');
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [sessions, setSessions] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout|null>(null);
  const durations = { work: 25, short: 5, long: 15 };
  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds(s => {
          if (s === 0) {
            setMinutes(m => {
              if (m === 0) {
                setRunning(false);
                if (mode === 'work') setSessions(n => n + 1);
                return durations[mode];
              }
              return m - 1;
            });
            return 59;
          }
          return s - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [running, mode]);
  const switchMode = (m: 'work'|'short'|'long') => {
    setMode(m); setRunning(false); setMinutes(durations[m]); setSeconds(0);
  };
  const reset = () => { setRunning(false); setMinutes(durations[mode]); setSeconds(0); };
  const pct = ((durations[mode]*60 - (minutes*60+seconds))/(durations[mode]*60))*100;
  return (
    <main style={{minHeight:'100vh',background:'#0f172a',color:'#f1f5f9',fontFamily:'monospace',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'2rem'}}>
      <h1 style={{fontSize:'2rem',fontWeight:'bold',color:'#38bdf8'}}>Pomodoro Timer</h1>
      <div style={{display:'flex',gap:'0.5rem'}}>
        {(['work','short','long'] as const).map(m => (
          <button key={m} onClick={()=>switchMode(m)} style={{padding:'0.5rem 1rem',borderRadius:'6px',border:'none',background:mode===m?'#38bdf8':'#1e293b',color:mode===m?'#0f172a':'#94a3b8',cursor:'pointer',fontFamily:'monospace',fontWeight:'bold'}}>{m==='work'?'Work':m==='short'?'Short Break':'Long Break'}</button>
        ))}
      </div>
      <div style={{position:'relative',width:'200px',height:'200px'}}>
        <svg width='200' height='200' style={{transform:'rotate(-90deg)'}}>
          <circle cx='100' cy='100' r='90' fill='none' stroke='#1e293b' strokeWidth='10'/>
          <circle cx='100' cy='100' r='90' fill='none' stroke='#38bdf8' strokeWidth='10' strokeDasharray={`${2*Math.PI*90}`} strokeDashoffset={`${2*Math.PI*90*(1-pct/100)}`} style={{transition:'stroke-dashoffset 1s linear'}}/>
        </svg>
        <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',textAlign:'center'}}>
          <div style={{fontSize:'2.5rem',fontWeight:'bold'}}>{String(minutes).padStart(2,'0')}:{String(seconds).padStart(2,'0')}</div>
          <div style={{fontSize:'0.75rem',color:'#94a3b8',textTransform:'uppercase'}}>{mode}</div>
        </div>
      </div>
      <div style={{display:'flex',gap:'1rem'}}>
        <button onClick={()=>setRunning(r=>!r)} style={{padding:'0.75rem 2rem',borderRadius:'8px',border:'none',background:'#38bdf8',color:'#0f172a',cursor:'pointer',fontFamily:'monospace',fontWeight:'bold',fontSize:'1rem'}}>{running?'Pause':'Start'}</button>
        <button onClick={reset} style={{padding:'0.75rem 1rem',borderRadius:'8px',border:'none',background:'#1e293b',color:'#94a3b8',cursor:'pointer',fontFamily:'monospace'}}>Reset</button>
      </div>
      <div style={{color:'#64748b',fontSize:'0.875rem'}}>Sessions completed: <span style={{color:'#38bdf8',fontWeight:'bold'}}>{sessions}</span></div>
    </main>
  );
}