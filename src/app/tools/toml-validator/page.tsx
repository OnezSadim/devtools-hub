"use client";
import { useState } from "react";
export default function Page() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [ok, setOk] = useState(false);
  const validate = () => {
    const lines = input.split("\n");
    let valid = true; let msg = ""; let sections = 0; let keys = 0;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line || line.startsWith("#")) continue;
      if (line.startsWith("[")) { if (!line.endsWith("]")) { valid = false; msg = "Line " + (i+1) + ": Unclosed section [ ]"; break; } sections++; continue; }
      const eq = line.indexOf("=");
      if (eq < 1) { valid = false; msg = "Line " + (i+1) + ": Expected key = value"; break; }
      keys++;
    }
    if (valid) { setOk(true); setResult("Valid TOML. " + sections + " sections, " + keys + " keys."); }
    else { setOk(false); setResult(msg); }
  };
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>TOML Validator</h1><textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="[section]\nkey = value" style={{width:"100%",height:"300px",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",padding:"0.5rem",borderRadius:"4px",display:"block",marginBottom:"0.5rem",boxSizing:"border-box"}} /><button onClick={validate} style={{background:"#3b82f6",color:"#fff",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer",marginBottom:"0.5rem"}}>Validate</button>{result&&<p style={{color:ok?"#4ade80":"#f87171",padding:"0.75rem",background:"#1e293b",borderRadius:"4px"}}>{ok?"✓ ":"✗ "}{result}</p>}</div>);
}
