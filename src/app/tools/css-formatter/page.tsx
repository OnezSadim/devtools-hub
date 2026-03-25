"use client";
import { useState } from "react";
export default function CssFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const format = () => {
    try {
      let r = input.replace(/\s*{\s*/g," {\n  ").replace(/;\s*/g,";\n  ").replace(/\s*}\s*/g,"\n}\n").replace(/  }/g,"}").replace(/\n\s*\n/g,"\n");
      setOutput(r.trim());
    } catch(e) { setOutput("Error formatting CSS"); }
  };
  const minify = () => {
    const r = input.replace(/\/\*[\s\S]*?\*\//g,"").replace(/\s+/g," ").replace(/ ?([{}:;,]) ?/g,"$1").trim();
    setOutput(r);
  };
  const s = {bg:{background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px",padding:"0.5rem",width:"100%",display:"block",boxSizing:"border-box" as const}};
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}>
    <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>CSS Formatter</h1>
    <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Paste CSS..." style={{...s.bg,height:"200px",marginBottom:"0.5rem"}} />
    <div style={{display:"flex",gap:"0.5rem",marginBottom:"0.5rem"}}>
      <button onClick={format} style={{background:"#3b82f6",color:"white",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer"}}>Format</button>
      <button onClick={minify} style={{background:"#8b5cf6",color:"white",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer"}}>Minify</button>
    </div>
    {output&&<><textarea value={output} readOnly style={{...s.bg,height:"200px",marginBottom:"0.5rem"}} /><button onClick={()=>navigator.clipboard.writeText(output)} style={{background:"#10b981",color:"white",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer"}}>Copy</button></>}
  </div>);
}
