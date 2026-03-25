"use client";
import { useState } from "react";
export default function ROICalculator() {
  const [invest, setInvest] = useState("");
  const [gain, setGain] = useState("");
  const roi = invest && gain ? (((parseFloat(gain) - parseFloat(invest)) / parseFloat(invest)) * 100).toFixed(2) : null;
  return (
    <div style={{maxWidth:600,margin:"0 auto",padding:24,fontFamily:"monospace"}}>
      <h1 style={{fontSize:28,marginBottom:8}}>ROI Calculator</h1>
      <p style={{color:"#888",marginBottom:24}}>Calculate Return on Investment percentage.</p>
      <div style={{marginBottom:16}}>
        <label style={{display:"block",marginBottom:4}}>Initial Investment ($)</label>
        <input type="number" value={invest} onChange={e=>setInvest(e.target.value)} style={{width:"100%",padding:8,background:"#1a1a1a",border:"1px solid #333",color:"#fff",borderRadius:4}} />
      </div>
      <div style={{marginBottom:16}}>
        <label style={{display:"block",marginBottom:4}}>Final Value / Gain ($)</label>
        <input type="number" value={gain} onChange={e=>setGain(e.target.value)} style={{width:"100%",padding:8,background:"#1a1a1a",border:"1px solid #333",color:"#fff",borderRadius:4}} />
      </div>
      {roi !== null && (
        <div style={{padding:16,background:"#0a2a0a",border:"1px solid #0f5",borderRadius:4}}>
          <p style={{margin:0,fontSize:20}}>ROI: <strong style={{color:"#0f5"}}>{roi}%</strong></p>
          <p style={{margin:"8px 0 0",color:"#888",fontSize:14}}>Net: ${(parseFloat(gain)-parseFloat(invest)).toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
