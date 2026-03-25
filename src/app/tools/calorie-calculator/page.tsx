"use client";
import { useState } from "react";
export default function CalorieCalculator() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("1.55");
  const w = parseFloat(weight) || 0;
  const h = parseFloat(height) || 0;
  const a = parseFloat(age) || 0;
  let bmr = 0;
  if (gender === "male") bmr = 10 * w + 6.25 * h - 5 * a + 5;
  else bmr = 10 * w + 6.25 * h - 5 * a - 161;
  const tdee = bmr * parseFloat(activity);
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{color:"#38bdf8",marginBottom:"0.5rem"}}>Calorie Calculator</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Calculate your daily calorie needs (TDEE).</p>
      <div style={{background:"#1e293b",padding:"1.5rem",borderRadius:"8px",maxWidth:"480px"}}>
        {[["Age",age,setAge,"25"],["Weight (kg)",weight,setWeight,"70"],["Height (cm)",height,setHeight,"175"]].map(([label,val,setter,ph])=>(
          <div key={String(label)} style={{marginBottom:"1rem"}}>
            <label style={{display:"block",marginBottom:"4px",color:"#94a3b8"}}>{String(label)}</label>
            <input value={String(val)} onChange={e=>(setter as (v:string)=>void)(e.target.value)} placeholder={String(ph)} style={{width:"100%",padding:"8px",background:"#0f172a",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9",boxSizing:"border-box"}}/>
          </div>
        ))}
        <div style={{marginBottom:"1rem"}}>
          <label style={{display:"block",marginBottom:"4px",color:"#94a3b8"}}>Gender</label>
          <select value={gender} onChange={e=>setGender(e.target.value)} style={{width:"100%",padding:"8px",background:"#0f172a",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9"}}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div style={{marginBottom:"1.5rem"}}>
          <label style={{display:"block",marginBottom:"4px",color:"#94a3b8"}}>Activity Level</label>
          <select value={activity} onChange={e=>setActivity(e.target.value)} style={{width:"100%",padding:"8px",background:"#0f172a",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9"}}>
            <option value="1.2">Sedentary</option>
            <option value="1.375">Lightly active</option>
            <option value="1.55">Moderately active</option>
            <option value="1.725">Very active</option>
            <option value="1.9">Extra active</option>
          </select>
        </div>
        {tdee > 0 && (
          <div style={{background:"#0f172a",padding:"1rem",borderRadius:"6px"}}>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:"8px"}}><span style={{color:"#94a3b8"}}>BMR:</span><span>{Math.round(bmr)} kcal</span></div>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:"8px"}}><span style={{color:"#94a3b8"}}>TDEE (maintain):</span><span style={{color:"#4ade80",fontWeight:"bold"}}>{Math.round(tdee)} kcal</span></div>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:"8px"}}><span style={{color:"#94a3b8"}}>Lose weight:</span><span style={{color:"#60a5fa"}}>{Math.round(tdee-500)} kcal</span></div>
            <div style={{display:"flex",justifyContent:"space-between"}}><span style={{color:"#94a3b8"}}>Gain weight:</span><span style={{color:"#fbbf24"}}>{Math.round(tdee+500)} kcal</span></div>
          </div>
        )}
      </div>
    </main>
  );
}