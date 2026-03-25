"use client";
import { useState } from "react";
type Op = "+"|"-"|"*"|"/";
export default function HexCalculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [op, setOp] = useState<Op>("+");
  const [result, setResult] = useState<{hex:string,dec:number}|null>(null);
  const [error, setError] = useState("");
  const calc = () => {
    const na = parseInt(a, 16), nb = parseInt(b, 16);
    if (isNaN(na)||isNaN(nb)) { setError("Enter valid hex numbers (0-9, A-F)"); setResult(null); return; }
    setError("");
    let r=0;
    if(op==="+")r=na+nb; else if(op==="-")r=na-nb; else if(op==="*")r=na*nb; else if(op==="/"){ if(nb===0){setError("Division by zero");return;} r=Math.floor(na/nb); }
    setResult({hex:r>=0?r.toString(16).toUpperCase():"("+(-r).toString(16).toUpperCase()+" neg)",dec:r});
  };
  return (<div style={{fontFamily:"monospace",maxWidth:480,margin:"40px auto",padding:20,background:"#18181b",color:"#f4f4f5",borderRadius:12}}><h1 style={{fontSize:22,marginBottom:16}}>Hex Calculator</h1><input value={a} onChange={e=>setA(e.target.value.toUpperCase())} placeholder="Hex A (e.g. 1F4)" style={{width:"100%",padding:"8px 12px",background:"#27272a",color:"#f4f4f5",border:"1px solid #52525b",borderRadius:6,fontSize:15,boxSizing:"border-box",marginBottom:8}}/><select value={op} onChange={e=>setOp(e.target.value as Op)} style={{width:"100%",padding:"8px 12px",background:"#27272a",color:"#f4f4f5",border:"1px solid #52525b",borderRadius:6,fontSize:15,marginBottom:8}}><option value="+">+ (Add)</option><option value="-">- (Subtract)</option><option value="*">* (Multiply)</option><option value="/">/ (Divide)</option></select><input value={b} onChange={e=>setB(e.target.value.toUpperCase())} placeholder="Hex B (e.g. A3)" style={{width:"100%",padding:"8px 12px",background:"#27272a",color:"#f4f4f5",border:"1px solid #52525b",borderRadius:6,fontSize:15,boxSizing:"border-box",marginBottom:12}}/><button onClick={calc} style={{width:"100%",padding:"10px",background:"#2563eb",color:"#fff",border:"none",borderRadius:6,cursor:"pointer",fontSize:15}}>Calculate</button>{error&&<div style={{color:"#f87171",marginTop:10}}>{error}</div>}{result&&<div style={{marginTop:16,padding:"14px",background:"#27272a",borderRadius:8}}><div style={{color:"#a1a1aa",fontSize:13}}>Hexadecimal</div><div style={{fontSize:22,fontWeight:700}}>0x{result.hex}</div><div style={{color:"#a1a1aa",fontSize:13,marginTop:8}}>Decimal</div><div style={{fontSize:18}}>{result.dec}</div></div>}</div>);
}
