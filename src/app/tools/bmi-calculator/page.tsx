"use client";
import { useState } from "react";
export default function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState("metric");
  let bmi = 0;
  if (unit === "metric") {
    const h = parseFloat(height) / 100;
    bmi = h > 0 ? parseFloat(weight) / (h * h) : 0;
  } else {
    bmi = parseFloat(height) > 0 ? (703 * parseFloat(weight)) / (parseFloat(height) * parseFloat(height)) : 0;
  }
  const category = bmi === 0 ? "" : bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal weight" : bmi < 30 ? "Overweight" : "Obese";
  const color = bmi === 0 ? "#94a3b8" : bmi < 18.5 ? "#60a5fa" : bmi < 25 ? "#4ade80" : bmi < 30 ? "#fbbf24" : "#f87171";
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{color:"#38bdf8",marginBottom:"0.5rem"}}>BMI Calculator</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Calculate your Body Mass Index.</p>
      <div style={{background:"#1e293b",padding:"1.5rem",borderRadius:"8px",maxWidth:"480px"}}>
        <div style={{marginBottom:"1rem"}}>
          <label style={{display:"block",marginBottom:"4px",color:"#94a3b8"}}>Unit System</label>
          <select value={unit} onChange={e=>setUnit(e.target.value)} style={{width:"100%",padding:"8px",background:"#0f172a",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9"}}>
            <option value="metric">Metric (kg, cm)</option>
            <option value="imperial">Imperial (lbs, in)</option>
          </select>
        </div>
        <div style={{marginBottom:"1rem"}}>
          <label style={{display:"block",marginBottom:"4px",color:"#94a3b8"}}>Weight ({unit==="metric"?"kg":"lbs"})</label>
          <input value={weight} onChange={e=>setWeight(e.target.value)} placeholder={unit==="metric"?"70":"154"} style={{width:"100%",padding:"8px",background:"#0f172a",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9",boxSizing:"border-box"}}/>
        </div>
        <div style={{marginBottom:"1.5rem"}}>
          <label style={{display:"block",marginBottom:"4px",color:"#94a3b8"}}>Height ({unit==="metric"?"cm":"inches"})</label>
          <input value={height} onChange={e=>setHeight(e.target.value)} placeholder={unit==="metric"?"175":"69"} style={{width:"100%",padding:"8px",background:"#0f172a",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9",boxSizing:"border-box"}}/>
        </div>
        {bmi > 0 && (
          <div style={{textAlign:"center",background:"#0f172a",padding:"1.5rem",borderRadius:"6px"}}>
            <div style={{fontSize:"3rem",fontWeight:"bold",color}}>{bmi.toFixed(1)}</div>
            <div style={{color,marginTop:"0.5rem",fontSize:"1.1rem"}}>{category}</div>
          </div>
        )}
      </div>
    </main>
  );
}