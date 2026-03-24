"use client";
import { useState } from "react";
export default function MathExpressionEvaluator() {
  const [expr, setExpr] = useState("");
  const [history, setHistory] = useState<{expr:string,result:string}[]>([]);
  const [error, setError] = useState("");
  const evaluate = () => {
    try {
      setError("");
      const sanitized = expr.replace(/[^0-9+\-*/().\s%^eE,sincotaqrlgbpih]/g,"");
      const mathExpr = expr
        .replace(/\^/g,"**")
        .replace(/sqrt\(/g,"Math.sqrt(")
        .replace(/abs\(/g,"Math.abs(")
        .replace(/ceil\(/g,"Math.ceil(")
        .replace(/floor\(/g,"Math.floor(")
        .replace(/round\(/g,"Math.round(")
        .replace(/log\(/g,"Math.log10(")
        .replace(/ln\(/g,"Math.log(")
        .replace(/sin\(/g,"Math.sin(")
        .replace(/cos\(/g,"Math.cos(")
        .replace(/tan\(/g,"Math.tan(")
        .replace(/pi/g,"Math.PI")
        .replace(/e(?![0-9])/g,"Math.E")
        .replace(/%/g,"/100");
      const result = Function(`"use strict"; return (${mathExpr})`)();
      const res = typeof result === "number" ? result.toString() : "Error";
      setHistory(h=>[{expr,result:res},...h.slice(0,9)]);
      setExpr(res);
    } catch(e) { setError("Invalid expression"); }
  };
  const buttons = ["7","8","9","/","4","5","6","*","1","2","3","-","0",".","(","+","CE","C","←","="];
  return (
    <div style={{maxWidth:500,margin:"0 auto",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"1.8rem",marginBottom:"0.5rem"}}>Math Expression Evaluator</h1>
      <p style={{color:"#aaa",marginBottom:"1rem"}}>Evaluate math expressions with functions like sqrt, sin, cos, log.</p>
      <input value={expr} onChange={e=>setExpr(e.target.value)} onKeyDown={e=>e.key==="Enter"&&evaluate()} placeholder="e.g. sqrt(16) + 2^3" style={{width:"100%",padding:"1rem",background:"#1e1e1e",border:`1px solid ${error?"#ef4444":"#333"}`,borderRadius:4,color:"#fff",fontSize:"1.2rem",boxSizing:"border-box",marginBottom:"0.5rem"}} />
      {error && <div style={{color:"#ef4444",marginBottom:"0.5rem"}}>{error}</div>}
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"0.5rem",marginBottom:"1.5rem"}}>
        {buttons.map(b=>(
          <button key={b} onClick={()=>{
            if(b==="=") evaluate();
            else if(b==="C") setExpr("");
            else if(b==="CE") setHistory([]);
            else if(b==="←") setExpr(e=>e.slice(0,-1));
            else setExpr(e=>e+b);
          }} style={{padding:"0.75rem",background:b==="="?"#7c3aed":"#1e1e1e",border:"1px solid #333",borderRadius:4,color:"#fff",cursor:"pointer",fontSize:"1rem"}}>{b}</button>
        ))}
      </div>
      <div style={{display:"flex",gap:"0.5rem",flexWrap:"wrap",marginBottom:"1rem"}}>
        {["sqrt(","^","sin(","cos(","tan(","log(","ln(","pi","abs("].map(f=>(
          <button key={f} onClick={()=>setExpr(e=>e+f)} style={{padding:"0.3rem 0.6rem",background:"#1e1e1e",border:"1px solid #7c3aed",borderRadius:4,color:"#7c3aed",cursor:"pointer",fontSize:"0.85rem"}}>{f}</button>
        ))}
      </div>
      {history.length>0 && (
        <div style={{background:"#1e1e1e",borderRadius:4,border:"1px solid #333",padding:"0.75rem"}}>
          <div style={{color:"#aaa",marginBottom:"0.5rem",fontSize:"0.85rem"}}>History:</div>
          {history.map((h,i)=>(
            <div key={i} style={{cursor:"pointer",padding:"0.25rem 0",borderBottom:"1px solid #2a2a2a"}} onClick={()=>setExpr(h.result)}>
              <span style={{color:"#aaa"}}>{h.expr}</span><span style={{color:"#7c3aed"}}> = {h.result}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}