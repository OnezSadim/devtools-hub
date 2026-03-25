"use client";
import { useState } from "react";
export default function JsMinifier() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const minify = () => {
    const r = input.replace(/\/\/[^\n]*/g,"").replace(/\/\*[\s\S]*?\*\//g,"").replace(/\s+/g," ").replace(/ ?([=+\-*/{},;:()\[\]]) ?/g,"$1").trim();
    setOutput(r);
  };
  const s = {bg:{background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px",padding:"0.5rem",width:"100%",display:"block",boxSizing:"border-box" as const}};
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}>
    <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>JavaScript Minifier</h1>
    <p style={{color:"#94a3b8",marginBottom:"0.5rem"}}>Basic minification: removes comments and extra whitespace.</p>
    <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Paste JavaScript..." style={{...s.bg,height:"200px",marginBottom:"0.5rem"}} />
    <button onClick={minify} style={{background:"#3b82f6",color:"white",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer",marginBottom:"0.5rem"}}>Minify JS</button>
    {output&&<><p>Output ({output.length} chars, saved {input.length-output.length}):</p><textarea value={output} readOnly style={{...s.bg,height:"150px",marginBottom:"0.5rem"}} /><button onClick={()=>navigator.clipboard.writeText(output)} style={{background:"#10b981",color:"white",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer"}}>Copy</button></>}
  </div>);
}
