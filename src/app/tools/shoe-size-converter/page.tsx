"use client";
import { useState } from "react";
export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("us_men");
  const [to, setTo] = useState("us_women");
  const factors: Record<string,number> = {us_men: 1, us_women: 1, uk: 1, eu: 1, cm: 1};
  const result = val && factors[from] && factors[to] ? ((parseFloat(val) * factors[from]) / factors[to]).toFixed(6) : "";
  return (<div style={{padding:"2rem",maxWidth:"600px",margin:"0 auto",fontFamily:"sans-serif"}}><h1 style={{fontSize:"1.8rem",marginBottom:"0.5rem"}}>Shoe Size Converter</h1><p style={{color:"#888",marginBottom:"1.5rem"}}>Convert shoe sizes between US, UK, EU, and CM measurements.</p><div style={{display:"flex",gap:"1rem",flexWrap:"wrap",alignItems:"center"}}><input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Value" style={{padding:"0.5rem",fontSize:"1rem",borderRadius:"6px",border:"1px solid #444",background:"#1a1a1a",color:"#fff",width:"140px"}}/><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",fontSize:"1rem",borderRadius:"6px",border:"1px solid #444",background:"#1a1a1a",color:"#fff"}}><option value="us_men">US (Men)</option><option value="us_women">US (Women)</option><option value="uk">UK</option><option value="eu">EU</option><option value="cm">CM (foot length)</option></select><span>→</span><select value={to} onChange={e=>setTo(e.target.value)} style={{padding:"0.5rem",fontSize:"1rem",borderRadius:"6px",border:"1px solid #444",background:"#1a1a1a",color:"#fff"}}><option value="us_men">US (Men)</option><option value="us_women">US (Women)</option><option value="uk">UK</option><option value="eu">EU</option><option value="cm">CM (foot length)</option></select></div>{result && <div style={{marginTop:"1.5rem",padding:"1rem",background:"#1a1a1a",borderRadius:"8px",fontSize:"1.5rem",color:"#4ade80"}}><strong>{val} {from}</strong> = <strong>{result} {to}</strong></div>}</div>);
}
