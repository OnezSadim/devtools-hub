"use client";
import { useState } from "react";
export default function FibonacciGenerator() {
  const [count, setCount] = useState(10);
  const fibs: bigint[] = [];
  let a=0n,b=1n;
  for(let i=0;i<Math.min(count,100);i++){fibs.push(a);[a,b]=[b,a+b];}
  return (<div style={{padding:24,fontFamily:"monospace",background:"#0a0a0a",minHeight:"100vh",color:"#e5e5e5"}}>
    <h1 style={{fontSize:28,marginBottom:8}}>Fibonacci Generator</h1>
    <p style={{color:"#888",marginBottom:20}}>Generate Fibonacci sequence up to N terms.</p>
    <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
      <label>Terms (1-100):</label>
      <input type="number" min={1} max={100} value={count} onChange={e=>setCount(Math.min(100,Math.max(1,parseInt(e.target.value)||1)))} style={{width:80,padding:8,background:"#111",color:"#e5e5e5",border:"1px solid #333",borderRadius:6,fontSize:16,textAlign:"center"}} />
    </div>
    <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
      {fibs.map((f,i)=><div key={i} style={{background:"#111",border:"1px solid #333",borderRadius:6,padding:"6px 12px",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <span style={{color:"#555",fontSize:11}}>F({i})</span>
        <span style={{color:"#7c3aed"}}>{f.toString()}</span>
      </div>)}
    </div>
  </div>);
}