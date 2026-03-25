"use client";
import { useState } from "react";
export default function Page() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [ok, setOk] = useState(false);
  const validate = () => {
    const lines = input.split("\n");
    let valid = true; let msg = "";
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.match(/^\t/)) { valid = false; msg = "Line " + (i+1) + ": Tabs not allowed (use spaces)"; break; }
    }
    if (valid) { setOk(true); setResult("Valid YAML. " + lines.filter(l=>l.trim()&&!l.trim().startsWith("#")).length + " non-comment lines."); }
    else { setOk(false); setResult(msg); }
  };
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>YAML Validator</h1><textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Paste YAML here..." style={{width:"100%",height:"300px",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",padding:"0.5rem",borderRadius:"4px",display:"block",marginBottom:"0.5rem",boxSizing:"border-box"}} /><button onClick={validate} style={{background:"#3b82f6",color:"#fff",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer",marginBottom:"0.5rem"}}>Validate</button>{result&&<p style={{color:ok?"#4ade80":"#f87171",padding:"0.75rem",background:"#1e293b",borderRadius:"4px"}}>{ok?"✓ ":"✗ "}{result}</p>}</div>);
}
