"use client";
import { useState } from "react";
export default function CssSpecificityCalculator() {
  const [selector, setSelector] = useState("div.container > p.text");
  const calculate = (sel) => {
    let a = 0, b = 0, c = 0;
    const s = sel.replace(/::[a-z-]+/gi, "");
    a += (s.match(/#[a-z][a-z0-9-_]*/gi)||[]).length;
    const noIds = s.replace(/#[a-z][a-z0-9-_]*/gi, "");
    b += (noIds.match(/\.[a-z][a-z0-9-_]*/gi)||[]).length;
    b += (noIds.match(/\[[^\]]+\]/gi)||[]).length;
    b += (noIds.match(/:[a-z][a-z0-9-]+(?!:)/gi)||[]).length;
    const noClasses = noIds.replace(/\.[a-z][a-z0-9-_]*/gi,"").replace(/\[[^\]]+\]/gi,"").replace(/:[a-z][a-z0-9-]+/gi,"");
    c += (noClasses.match(/[a-z][a-z0-9-]*/gi)||[]).length;
    return {a,b,c,score:a*100+b*10+c};
  };
  const result = calculate(selector);
  return (
    <div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"1.8rem",fontWeight:"bold",marginBottom:"0.5rem",color:"#38bdf8"}}>CSS Specificity Calculator</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Calculate the specificity of CSS selectors</p>
      <input value={selector} onChange={e=>setSelector(e.target.value)} placeholder="Enter CSS selector..." style={{width:"100%",padding:"0.75rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",color:"#e2e8f0",marginBottom:"1.5rem",boxSizing:"border-box",fontSize:"1rem"}} />
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1rem",marginBottom:"1.5rem"}}>
        {[{label:"IDs (a)",val:result.a,color:"#f87171"},{label:"Classes/Attrs (b)",val:result.b,color:"#fbbf24"},{label:"Elements (c)",val:result.c,color:"#34d399"}].map(item=>(<div key={item.label} style={{background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",padding:"1.5rem",textAlign:"center"}}><div style={{fontSize:"2.5rem",fontWeight:"bold",color:item.color}}>{item.val}</div><div style={{color:"#94a3b8",marginTop:"0.5rem",fontSize:"0.85rem"}}>{item.label}</div></div>))}
      </div>
      <div style={{background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",padding:"1.5rem",textAlign:"center"}}>
        <div style={{color:"#94a3b8",fontSize:"0.85rem",marginBottom:"0.5rem"}}>Specificity Score</div>
        <div style={{fontSize:"3rem",fontWeight:"bold",color:"#a78bfa"}}>{result.a},{result.b},{result.c}</div>
        <div style={{color:"#64748b",marginTop:"0.5rem"}}>Numeric: {result.score}</div>
      </div>
      <div style={{marginTop:"1.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",padding:"1rem"}}><div style={{color:"#94a3b8",fontSize:"0.85rem",marginBottom:"0.5rem"}}>Reference</div><div style={{fontSize:"0.85rem",color:"#64748b"}}><div>Inline styles: 1,0,0,0 | IDs: 0,1,0,0 | Classes/attributes/pseudo-classes: 0,0,1,0 | Elements/pseudo-elements: 0,0,0,1</div></div></div>
    </div>
  );
}