"use client";
import { useState } from "react";
function isPrime(n:number):boolean { if(n<2) return false; if(n<4) return true; if(n%2===0||n%3===0) return false; for(let i=5;i*i<=n;i+=6) if(n%i===0||n%(i+2)===0) return false; return true; }
function getFactors(n:number):number[] { const f:number[]=[]; for(let i=1;i<=Math.sqrt(n);i++) if(n%i===0){f.push(i);if(i!==n/i)f.push(n/i);} return f.sort((a,b)=>a-b); }
export default function PrimeChecker() {
  const [val, setVal] = useState("");
  const n = parseInt(val)||0;
  const prime = n>0 && isPrime(n);
  const factors = n>0 ? getFactors(n) : [];
  return (<div style={{padding:24,fontFamily:"monospace",background:"#0a0a0a",minHeight:"100vh",color:"#e5e5e5"}}>
    <h1 style={{fontSize:28,marginBottom:8}}>Prime Number Checker</h1>
    <p style={{color:"#888",marginBottom:20}}>Check if a number is prime and see its factors.</p>
    <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter a number..." style={{width:"100%",padding:12,background:"#111",color:"#e5e5e5",border:"1px solid #333",borderRadius:8,fontSize:16,boxSizing:"border-box"}} />
    {n>0&&<div style={{marginTop:20}}>
      <div style={{textAlign:"center",padding:24,background:"#111",border:'1px solid '+(prime?"#22c55e":"#ef4444"),borderRadius:8,marginBottom:16}}>
        <div style={{fontSize:64}}>{prime?"✓":"✗"}</div>
        <div style={{fontSize:20,color:prime?"#22c55e":"#ef4444"}}>{n} is {prime?"":"NOT "}a prime number</div>
      </div>
      <div style={{background:"#111",border:"1px solid #333",borderRadius:8,padding:16}}>
        <strong>Factors of {n}:</strong>
        <div style={{display:"flex",flexWrap:"wrap",gap:8,marginTop:8}}>
          {factors.map(f=><span key={f} style={{background:"#1a1a2e",border:"1px solid #7c3aed",borderRadius:4,padding:"4px 10px"}}>{f}</span>)}
        </div>
      </div>
    </div>}
  </div>);
}