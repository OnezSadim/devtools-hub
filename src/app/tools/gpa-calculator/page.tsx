"use client";
import { useState } from "react";
export default function GpaCalculator() {
  const [courses, setCourses] = useState([{name:"",grade:"",credits:""}]);
  const addCourse = () => setCourses([...courses,{name:"",grade:"",credits:""}]);
  const update = (i:number, field:string, val:string) => {
    const c = [...courses]; (c[i] as any)[field] = val; setCourses(c);
  };
  const gradeMap: Record<string,number> = {"A+":4.0,"A":4.0,"A-":3.7,"B+":3.3,"B":3.0,"B-":2.7,"C+":2.3,"C":2.0,"C-":1.7,"D+":1.3,"D":1.0,"F":0};
  let totalPoints = 0, totalCredits = 0;
  courses.forEach(c => {
    const pts = gradeMap[c.grade];
    const cr = parseFloat(c.credits);
    if (pts !== undefined && cr > 0) { totalPoints += pts * cr; totalCredits += cr; }
  });
  const gpa = totalCredits > 0 ? totalPoints / totalCredits : 0;
  return (
    <main style={{minHeight:"100vh",background:"#0f172a",color:"#f1f5f9",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{color:"#38bdf8",marginBottom:"0.5rem"}}>GPA Calculator</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Calculate your Grade Point Average.</p>
      <div style={{maxWidth:"600px"}}>
        {courses.map((c,i) => (
          <div key={i} style={{display:"flex",gap:"8px",marginBottom:"8px"}}>
            <input value={c.name} onChange={e=>update(i,"name",e.target.value)} placeholder="Course name" style={{flex:2,padding:"8px",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9"}}/>
            <select value={c.grade} onChange={e=>update(i,"grade",e.target.value)} style={{flex:1,padding:"8px",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9"}}>
              <option value="">Grade</option>
              {["A+","A","A-","B+","B","B-","C+","C","C-","D+","D","F"].map(g=>(<option key={g} value={g}>{g}</option>))}
            </select>
            <input value={c.credits} onChange={e=>update(i,"credits",e.target.value)} placeholder="Credits" style={{width:"80px",padding:"8px",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#f1f5f9"}}/>
          </div>
        ))}
        <button onClick={addCourse} style={{padding:"8px 16px",background:"#334155",border:"none",borderRadius:"4px",color:"#f1f5f9",cursor:"pointer",marginBottom:"1.5rem"}}>+ Add Course</button>
        {totalCredits > 0 && (
          <div style={{background:"#1e293b",padding:"1.5rem",borderRadius:"8px",textAlign:"center"}}>
            <div style={{fontSize:"3rem",fontWeight:"bold",color:gpa>=3.5?"#4ade80":gpa>=2.5?"#fbbf24":"#f87171"}}>{gpa.toFixed(2)}</div>
            <div style={{color:"#94a3b8"}}>GPA ({totalCredits} credits)</div>
          </div>
        )}
      </div>
    </main>
  );
}