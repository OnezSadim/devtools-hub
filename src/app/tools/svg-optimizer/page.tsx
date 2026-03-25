"use client";
import { useState } from "react";
export default function Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const optimize = () => {
    let r = input.trim();
    r = r.replace(/<!--[\s\S]*?-->/g, "");
    r = r.replace(/\s+/g, " ");
    r = r.replace(/> </g, "><");
    r = r.replace(/ xmlns:xlink="[^"]*"/g, "");
    setOutput(r.trim());
  };
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>SVG Optimizer</h1><textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Paste SVG here..." style={{width:"100%",height:"200px",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",padding:"0.5rem",borderRadius:"4px",display:"block",marginBottom:"0.5rem",boxSizing:"border-box"}} /><button onClick={optimize} style={{background:"#3b82f6",color:"#fff",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer",marginBottom:"0.5rem"}}>Optimize</button>{output&&<><textarea value={output} readOnly style={{width:"100%",height:"200px",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",padding:"0.5rem",borderRadius:"4px",display:"block",marginBottom:"0.5rem",boxSizing:"border-box"}} /><p style={{color:"#94a3b8"}}>Saved {input.length-output.length} chars</p></>}</div>);
}
