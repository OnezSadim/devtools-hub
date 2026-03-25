"use client";
import { useState } from "react";
export default function SleepCalculator() {
  const [mode, setMode] = useState("bedtime");
  const [time, setTime] = useState("");
  const cycles = [1,2,3,4,5,6];
  const calcTimes = () => {
    if (!time) return [];
    const [h,m] = time.split(":").map(Number);
    const baseMin = h*60+m;
    return cycles.map(c => {
      const sleepMin = c * 90 + 14;
      let t = mode === "bedtime" ? baseMin - sleepMin : baseMin + sleepMin;
      t = ((t % 1440) + 1440) % 1440;
      const hh = Math.floor(t/60).toString().padStart(2,"0");
      const mm = (t%60).toString().padStart(2,"0");
      return {cycles:c, hours:(c*1.5).toFixed(1), time:`${hh}:${mm}`};
    });
  };
  const results = calcTimes();
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{color:"#38bdf8",marginBottom:"0.5rem"}}>Sleep Calculator</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Calculate optimal sleep/wake times based on 90-min sleep cycles.</p>
      <div style={{background:"#1e293b",padding:"1.5rem",borderRadius:"8px",maxWidth:"480px"}}>
        <div style={{marginBottom:"1rem"}}>
          <label style={{display:"block",marginBottom:"4px",color:"#94a3b8"}}>Mode</label>
          <select value={mode} onChange={e=>setMode(e.target.value)} style={{width:"100%",padding:"8px",background:"#0f172a",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9"}}>
            <option value="bedtime">I want to wake up at...</option>
            <option value="waketime">I want to go to bed at...</option>
          </select>
        </div>
        <div style={{marginBottom:"1.5rem"}}>
          <label style={{display:"block",marginBottom:"4px",color:"#94a3b8"}}>{mode==="bedtime"?"Wake-up Time":"Bedtime"}</label>
          <input type="time" value={time} onChange={e=>setTime(e.target.value)} style={{width:"100%",padding:"8px",background:"#0f172a",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9",boxSizing:"border-box"}}/>
        </div>
        {results.length > 0 && (
          <div>
            <p style={{color:"#94a3b8",marginBottom:"8px",fontSize:"0.9rem"}}>{mode==="bedtime"?"Go to bed at:":"Wake up at:"}</p>
            {results.map(r => (
              <div key={r.cycles} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 12px",background:"#0f172a",borderRadius:"4px",marginBottom:"6px"}}>
                <span style={{color:"#94a3b8"}}>{r.cycles} cycles ({r.hours}h)</span>
                <span style={{color:r.cycles>=5?"#4ade80":r.cycles>=4?"#fbbf24":"#94a3b8",fontWeight:r.cycles>=5?"bold":"normal",fontSize:"1.1rem"}}>{r.time}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}