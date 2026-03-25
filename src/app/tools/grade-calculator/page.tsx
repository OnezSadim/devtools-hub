"use client";
import { useState } from "react";
export default function GradeCalculator() {
  const [assignments, setAssignments] = useState([{name:"",score:"",max:"",weight:""}]);
  const add = () => setAssignments([...assignments,{name:"",score:"",max:"",weight:""}]);
  const update = (i:number, f:string, v:string) => { const a=[...assignments]; (a[i] as any)[f]=v; setAssignments(a); };
  let totalWeight = 0, weightedScore = 0;
  assignments.forEach(a => {
    const s = parseFloat(a.score), m = parseFloat(a.max), w = parseFloat(a.weight);
    if (!isNaN(s) && !isNaN(m) && m > 0 && !isNaN(w)) {
      weightedScore += (s/m)*100*w; totalWeight += w;
    }
  });
  const avg = totalWeight > 0 ? weightedScore / totalWeight : 0;
  const letter = avg >= 90 ? "A" : avg >= 80 ? "B" : avg >= 70 ? "C" : avg >= 60 ? "D" : "F";
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{color:"#38bdf8",marginBottom:"0.5rem"}}>Grade Calculator</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Calculate your weighted grade average.</p>
      <div style={{maxWidth:"640px"}}>
        <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:"8px",marginBottom:"8px"}}>
          <span style={{color:"#94a3b8",fontSize:"0.85rem"}}>Assignment</span>
          <span style={{color:"#94a3b8",fontSize:"0.85rem"}}>Score</span>
          <span style={{color:"#94a3b8",fontSize:"0.85rem"}}>Max</span>
          <span style={{color:"#94a3b8",fontSize:"0.85rem"}}>Weight%</span>
        </div>
        {assignments.map((a,i) => (
          <div key={i} style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:"8px",marginBottom:"8px"}}>
            {["name","score","max","weight"].map(f => (
              <input key={f} value={(a as any)[f]} onChange={e=>update(i,f,e.target.value)} placeholder={f==="name"?"Assignment":`${f}`} style={{padding:"6px",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9",width:"100%",boxSizing:"border-box"}}/>
            ))}
          </div>
        ))}
        <button onClick={add} style={{padding:"8px 16px",background:"#334155",border:"none",borderRadius:"4px",color:"#f1f5f9",cursor:"pointer",marginBottom:"1.5rem"}}>+ Add</button>
        {totalWeight > 0 && (
          <div style={{background:"#1e293b",padding:"1.5rem",borderRadius:"8px",textAlign:"center"}}>
            <div style={{fontSize:"3rem",fontWeight:"bold",color:avg>=90?"#4ade80":avg>=70?"#fbbf24":"#f87171"}}>{avg.toFixed(1)}%</div>
            <div style={{color:"#94a3b8"}}>Letter Grade: <span style={{color:"#38bdf8",fontWeight:"bold"}}>{letter}</span></div>
          </div>
        )}
      </div>
    </main>
  );
}