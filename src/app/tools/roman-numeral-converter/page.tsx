"use client";
import { useState } from "react";
const VALS: [number,string][] = [[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];
function toRoman(n: number): string { if (n<1||n>3999) return "Out of range (1-3999)"; let r=""; for (const [v,s] of VALS) { while (n>=v) { r+=s; n-=v; } } return r; }
function fromRoman(s: string): number { const m: Record<string,number>={I:1,V:5,X:10,L:50,C:100,D:500,M:1000}; let n=0; for (let i=0;i<s.length;i++) { const cur=m[s[i]]||0; const next=m[s[i+1]]||0; if (cur<next) n-=cur; else n+=cur; } return n; }
export default function RomanNumeralConverter() {
  const [num, setNum] = useState("");
  const [roman, setRoman] = useState("");
  const [mode, setMode] = useState<"toRoman"|"fromRoman">("toRoman");
  function convert() { if (mode==="toRoman") setRoman(toRoman(parseInt(num))); else setRoman(String(fromRoman(num.toUpperCase()))); }
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Roman Numeral Converter</h1><div style={{marginBottom:"1rem"}}><button onClick={()=>setMode("toRoman")} style={{padding:"0.5rem 1rem",background:mode==="toRoman"?"#3b82f6":"#1e293b",color:"#fff",border:"1px solid #334155",borderRadius:"4px 0 0 4px",cursor:"pointer"}}>Number → Roman</button><button onClick={()=>setMode("fromRoman")} style={{padding:"0.5rem 1rem",background:mode==="fromRoman"?"#3b82f6":"#1e293b",color:"#fff",border:"1px solid #334155",borderRadius:"0 4px 4px 0",cursor:"pointer"}}>Roman → Number</button></div><div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}><input value={num} onChange={e=>setNum(e.target.value)} placeholder={mode==="toRoman"?"Enter number (1-3999)":"Enter roman numeral"} style={{flex:1,padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px"}} /><button onClick={convert} style={{padding:"0.5rem 1rem",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer"}}>Convert</button></div>{roman&&<div style={{background:"#1e293b",padding:"1.5rem",borderRadius:"4px",fontSize:"2rem",textAlign:"center"}}>{roman}</div>}</div>);
}
