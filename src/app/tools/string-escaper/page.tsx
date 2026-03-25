"use client";
import { useState } from "react";
export default function StringEscaper() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("escape");
  const process = (s: string, m: string) => {
    if (m==="escape") return s.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r");
    return s.replace(/\\n/g,"\n").replace(/\\t/g,"\t").replace(/\\r/g,"\r").replace(/\\\\/, "\\").replace(/\\"/, '"');
  };
  return (<div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
    <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>String Escaper</h1>
    <div style={{display:"flex",gap:"0.5rem",marginBottom:"1rem"}}>
      {["escape","unescape"].map(m=>(<button key={m} onClick={()=>setMode(m)} style={{padding:"0.4rem 0.8rem",background:mode===m?"#6366f1":"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0",cursor:"pointer"}}>{m}</button>))}
    </div>
    <textarea value={input} onChange={e=>setInput(e.target.value)} rows={6} placeholder="Input string..." style={{width:"100%",padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0",marginBottom:"1rem",boxSizing:"border-box",resize:"vertical"}} />
    <textarea readOnly value={process(input,mode)} rows={6} style={{width:"100%",padding:"0.5rem",background:"#0f172a",border:"1px solid #334155",borderRadius:"4px",color:"#a3e635",boxSizing:"border-box",resize:"vertical"}} />
  </div>);
}