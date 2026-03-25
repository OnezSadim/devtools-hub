"use client";
import { useState } from "react";
type Op = "+"|"-"|"*"|"&"|"|"|"|"^";
export default function BinaryCalculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [op, setOp] = useState<Op>("+");
  const [result, setResult] = useState<{bin:string,dec:number}|null>(null);
  const [error, setError] = useState("");
  const calc = () => {
    const na = parseInt(a, 2), nb = parseInt(b, 2);
    if (isNaN(na)||isNaN(nb)||!/^[01]+$/.test(a)||!/^[01]+$/.test(b)) { setError("Enter valid binary numbers"); setResult(null); return; }
    setError("");
    let r=0;
    if(op==="+")r=na+nb; else if(op==="-")r=na-nb; else if(op==="*")r=na*nb; else if(op==="&")r=na&nb; else if(op==="|")r=na|nb; else if(op==="^")r=na^nb;
    setResult({bin:r>=0?r.toString(2):"("+(-r).toString(2)+" neg)",dec:r});
  };
  return (<div style={{fontFamily:"monospace",maxWidth:480,margin:"40px auto",padding:20,background:"#18181b",color:"#f4f4f5",borderRadius:12}}><h1 style={{fontSize:22,marginBottom:16}}>Binary Calculator</h1><input value={a} onChange={e=>setA(e.target.value)} placeholder="Binary A (e.g. 1010)" style={{width:"100%",padding:"8px 12px",background:"#27272a",color:"#f4f4f5",border:"1px solid #52525b",borderRadius:6,fontSize:15,boxSizing:"border-box",marginBottom:8}}/><select value={op} onChange={e=>setOp(e.target.value as Op)} style={{width:"100%",padding:"8px 12px",background:"#27272a",color:"#f4f4f5",border:"1px solid #52525b",borderRadius:6,fontSize:15,marginBottom:8}}><option value="+">+ (Add)</option><option value="-">- (Subtract)</option><option value="*">* (Multiply)</option><option value="&">&amp; (AND)</option><option value="|">| (OR)</option><option value="^">^ (XOR)</option></select><input value={b} onChange={e=>setB(e.target.value)} placeholder="Binary B (e.g. 0110)" style={{width:"100%",padding:"8px 12px",background:"#27272a",color:"#f4f4f5",border:"1px solid #52525b",borderRadius:6,fontSize:15,boxSizing:"border-box",marginBottom:12}}/><button onClick={calc} style={{width:"100%",padding:"10px",background:"#2563eb",color:"#fff",border:"none",borderRadius:6,cursor:"pointer",fontSize:15}}>Calculate</button>{error&&<div style={{color:"#f87171",marginTop:10}}>{error}</div>}{result&&<div style={{marginTop:16,padding:"14px",background:"#27272a",borderRadius:8}}><div style={{color:"#a1a1aa",fontSize:13}}>Binary</div><div style={{fontSize:22,fontWeight:700}}>{result.bin}</div><div style={{color:"#a1a1aa",fontSize:13,marginTop:8}}>Decimal</div><div style={{fontSize:18}}>{result.dec}</div></div>}</div>);
}
