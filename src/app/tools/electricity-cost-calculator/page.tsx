"use client";
import { useState } from "react";
export default function ElectricityCostCalculator() {
  const [watts, setWatts] = useState("");
  const [hours, setHours] = useState("");
  const [rate, setRate] = useState("0.30");
  const w = parseFloat(watts) || 0;
  const h = parseFloat(hours) || 0;
  const r = parseFloat(rate) || 0;
  const daily = (w / 1000) * h * r;
  const monthly = daily * 30;
  const yearly = daily * 365;
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{color:"#38bdf8",marginBottom:"0.5rem"}}>Electricity Cost Calculator</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Calculate the cost of running electrical appliances.</p>
      <div style={{background:"#1e293b",padding:"1.5rem",borderRadius:"8px",maxWidth:"480px"}}>
        <div style={{marginBottom:"1rem"}}><label style={{display:"block",marginBottom:"4px",color:"#94a3b8"}}>Power (Watts)</label><input value={watts} onChange={e=>setWatts(e.target.value)} placeholder="1500" style={{width:"100%",padding:"8px",background:"#0f172a",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9",boxSizing:"border-box"}}/></div>
        <div style={{marginBottom:"1rem"}}><label style={{display:"block",marginBottom:"4px",color:"#94a3b8"}}>Hours per Day</label><input value={hours} onChange={e=>setHours(e.target.value)} placeholder="4" style={{width:"100%",padding:"8px",background:"#0f172a",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9",boxSizing:"border-box"}}/></div>
        <div style={{marginBottom:"1.5rem"}}><label style={{display:"block",marginBottom:"4px",color:"#94a3b8"}}>Electricity Rate (€/kWh)</label><input value={rate} onChange={e=>setRate(e.target.value)} placeholder="0.30" style={{width:"100%",padding:"8px",background:"#0f172a",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9",boxSizing:"border-box"}}/></div>
        {watts && hours && (
          <div style={{background:"#0f172a",padding:"1rem",borderRadius:"6px"}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:"8px"}}><span style={{color:"#94a3b8"}}>Daily:</span><span>€{daily.toFixed(3)}</span></div>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:"8px"}}><span style={{color:"#94a3b8"}}>Monthly:</span><span style={{color:"#fbbf24"}}>€{monthly.toFixed(2)}</span></div>
            <div style={{display:"flex",justifyContent:"space-between"}}><span style={{color:"#94a3b8"}}>Yearly:</span><span style={{color:"#4ade80",fontWeight:"bold"}}>€{yearly.toFixed(2)}</span></div>
          </div>
        )}
      </div>
    </main>
  );
}