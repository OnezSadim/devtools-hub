"use client";
import { useState } from "react";
export default function RomanNumeralConverter() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("toRoman");
  const [result, setResult] = useState("");
  const toRoman = (n: number): string => {
    if(n<1||n>3999) return "Out of range (1-3999)";
    const vals=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const syms=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let r=""; vals.forEach((v,i)=>{ while(n>=v){r+=syms[i];n-=v;} }); return r;
  };
  const fromRoman = (s: string): number => {
    const m: Record<string,number>={I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
    let r=0; for(let i=0;i<s.length;i++){ const c=m[s[i]],n=m[s[i+1]]; if(n>c)r-=c; else r+=c; } return r;
  };
  const convert = () => {
    if(mode==="toRoman") { const n=parseInt(input); setResult(isNaN(n)?"Invalid":toRoman(n)); }
    else { const r=fromRoman(input.toUpperCase()); setResult(r>0?r.toString():"Invalid"); }
  };
  return (
    <div style={{maxWidth:500,margin:"0 auto",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"1.8rem",marginBottom:"0.5rem"}}>Roman Numeral Converter</h1>
      <p style={{color:"#aaa",marginBottom:"2rem"}}>Convert between Arabic and Roman numerals.</p>
      <div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}>
        <button onClick={()=>setMode("toRoman")} style={{flex:1,padding:"0.5rem",background:mode==="toRoman"?"#7c3aed":"#1e1e1e",color:"#fff",border:"1px solid #333",borderRadius:4,cursor:"pointer"}}>Number → Roman</button>
        <button onClick={()=>setMode("fromRoman")} style={{flex:1,padding:"0.5rem",background:mode==="fromRoman"?"#7c3aed":"#1e1e1e",color:"#fff",border:"1px solid #333",borderRadius:4,cursor:"pointer"}}>Roman → Number</button>
      </div>
      <input value={input} onChange={e=>setInput(e.target.value)} placeholder={mode==="toRoman"?"Enter number (1-3999)":"Enter Roman numeral"} style={{width:"100%",padding:"0.75rem",background:"#1e1e1e",border:"1px solid #333",borderRadius:4,color:"#fff",boxSizing:"border-box",marginBottom:"1rem",fontSize:"1.1rem"}} />
      <button onClick={convert} style={{width:"100%",padding:"0.75rem",background:"#7c3aed",color:"#fff",border:"none",borderRadius:4,cursor:"pointer",fontSize:"1rem",marginBottom:"1rem"}}>Convert</button>
      {result && <div style={{padding:"1.5rem",background:"#1e1e1e",borderRadius:4,border:"1px solid #333",textAlign:"center",fontSize:"2rem"}}>{result}</div>}
    </div>
  );
}