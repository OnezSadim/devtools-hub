"use client";
import { useState } from "react";
export default function FuelCostCalculator() {
  const [distance, setDistance] = useState("");
  const [consumption, setConsumption] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("km");
  const d = parseFloat(distance) || 0;
  const c = parseFloat(consumption) || 0;
  const p = parseFloat(price) || 0;
  const liters = unit === "km" ? (d / 100) * c : (d * c) / 100;
  const cost = liters * p;
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{color:"#38bdf8",marginBottom:"0.5rem"}}>Fuel Cost Calculator</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Estimate your fuel costs for a trip.</p>
      <div style={{background:"#1e293b",padding:"1.5rem",borderRadius:"8px",maxWidth:"480px"}}>
        <div style={{marginBottom:"1rem"}}>
          <label style={{display:"block",marginBottom:"4px",color:"#94a3b8"}}>Distance</label>
          <div style={{display:"flex",gap:"8px"}}>
            <input value={distance} onChange={e=>setDistance(e.target.value)} placeholder="500" style={{flex:1,padding:"8px",background:"#0f172a",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9"}}/>
            <select value={unit} onChange={e=>setUnit(e.target.value)} style={{padding:"8px",background:"#0f172a",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9"}}>
              <option value="km">km</option>
              <option value="mi">mi</option>
            </select>
          </div>
        </div>
        <div style={{marginBottom:"1rem"}}>
          <label style={{display:"block",marginBottom:"4px",color:"#94a3b8"}}>Fuel Consumption (L/100{unit})</label>
          <input value={consumption} onChange={e=>setConsumption(e.target.value)} placeholder="7.5" style={{width:"100%",padding:"8px",background:"#0f172a",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9",boxSizing:"border-box"}}/>
        </div>
        <div style={{marginBottom:"1.5rem"}}>
          <label style={{display:"block",marginBottom:"4px",color:"#94a3b8"}}>Fuel Price (per liter)</label>
          <input value={price} onChange={e=>setPrice(e.target.value)} placeholder="1.85" style={{width:"100%",padding:"8px",background:"#0f172a",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9",boxSizing:"border-box"}}/>
        </div>
        {distance && consumption && price && (
          <div style={{background:"#0f172a",padding:"1rem",borderRadius:"6px"}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:"8px"}}><span style={{color:"#94a3b8"}}>Fuel needed:</span><span>{liters.toFixed(2)} L</span></div>
            <div style={{display:"flex",justifyContent:"space-between"}}><span style={{color:"#94a3b8"}}>Total cost:</span><span style={{color:"#4ade80",fontWeight:"bold",fontSize:"1.2rem"}}>€{cost.toFixed(2)}</span></div>
          </div>
        )}
      </div>
    </main>
  );
}