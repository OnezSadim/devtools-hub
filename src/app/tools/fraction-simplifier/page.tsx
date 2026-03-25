"use client";
import { useState } from "react";
function gcd(a:number,b:number):number { return b===0?a:gcd(b,a%b); }
export default function FractionSimplifier() {
  const [num, setNum] = useState("");
  const [den, setDen] = useState("");
  const n=parseInt(num)||0, d=parseInt(den)||0;
  const g = d!==0?gcd(Math.abs(n),Math.abs(d)):1;
  const sn=n/g, sd=d/g;
  const decimal = d!==0?(n/d).toFixed(6).replace(/\.?0+$/,""):"";
  return (<div style={{padding:24,fontFamily:"monospace",background:"#0a0a0a",minHeight:"100vh",color:"#e5e5e5"}}>
    <h1 style={{fontSize:28,marginBottom:8}}>Fraction Simplifier</h1>
    <p style={{color:"#888",marginBottom:20}}>Simplify any fraction to its lowest terms.</p>
    <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:20}}>
      <input type="number" value={num} onChange={e=>setNum(e.target.value)} placeholder="Numerator" style={{width:120,padding:12,background:"#111",color:"#e5e5e5",border:"1px solid #333",borderRadius:8,fontSize:20,textAlign:"center"}} />
      <span style={{fontSize:32}}>/</span>
      <input type="number" value={den} onChange={e=>setDen(e.target.value)} placeholder="Denominator" style={{width:120,padding:12,background:"#111",color:"#e5e5e5",border:"1px solid #333",borderRadius:8,fontSize:20,textAlign:"center"}} />
    </div>
    {d!==0&&<div style={{background:"#111",border:"1px solid #333",borderRadius:8,padding:20}}>
      <p>Simplified: <span style={{color:"#7c3aed",fontSize:24,fontWeight:"bold"}}>{sn}/{sd}</span>{sn===n&&sd===d?" (already simplified)":""}</p>
      <p style={{marginTop:8}}>GCD: <span style={{color:"#888"}}>{g}</span></p>
      <p style={{marginTop:4}}>Decimal: <span style={{color:"#888"}}>{decimal}</span></p>
    </div>}
  </div>);
}