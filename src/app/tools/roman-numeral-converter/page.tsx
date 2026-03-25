"use client";
import { useState } from "react";
export default function RomanNumeralConverter() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");
  const toRoman = (n: number) => {
    const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const syms = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let r = "";
    for (let i=0;i<vals.length;i++) { while(n>=vals[i]) { r+=syms[i]; n-=vals[i]; } }
    return r;
  };
  const fromRoman = (s: string) => {
    const m: Record<string,number> = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
    let r=0;
    for(let i=0;i<s.length;i++) { const c=m[s[i]],n2=m[s[i+1]]; r+=n2&&n2>c?-c:c; }
    return r;
  };
  const convert = () => {
    const n = parseInt(num);
    if (!isNaN(n) && n > 0 && n <= 3999) setResult(toRoman(n));
    else { const r = fromRoman(num.toUpperCase()); setResult(isNaN(r)||r===0?"Invalid":String(r)); }
  };
  return (<div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
    <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Roman Numeral Converter</h1>
    <input value={num} onChange={e=>setNum(e.target.value)} placeholder="Enter number or Roman numeral" style={{width:"100%",padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0",marginBottom:"0.5rem",boxSizing:"border-box"}} />
    <button onClick={convert} style={{padding:"0.5rem 1rem",background:"#6366f1",border:"none",borderRadius:"4px",color:"#fff",cursor:"pointer",marginBottom:"1rem"}}>Convert</button>
    {result && <div style={{background:"#1e293b",padding:"1rem",borderRadius:"4px",fontSize:"1.5rem"}}>{result}</div>}
  </div>);
}