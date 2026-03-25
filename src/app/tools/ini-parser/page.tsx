"use client";
import { useState } from "react";
export default function Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const parse = () => {
    const lines = input.split("\n");
    const result: Record<string, Record<string, string>> = {};
    let section = "global";
    result[section] = {};
    for (const line of lines) {
      const t = line.trim();
      if (!t || t.startsWith(";") || t.startsWith("#")) continue;
      if (t.startsWith("[") && t.endsWith("]")) { section = t.slice(1,-1).trim(); result[section] = {}; continue; }
      const eq = t.indexOf("=");
      if (eq > 0) { const k = t.slice(0,eq).trim(); const v = t.slice(eq+1).trim().replace(/^["']|["']$/g,""); result[section][k] = v; }
    }
    setOutput(JSON.stringify(result, null, 2));
  };
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>INI Parser</h1><p style={{color:"#94a3b8",marginBottom:"1rem"}}>Parse INI config files and convert to JSON</p><textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="[section]\nkey=value" style={{width:"100%",height:"220px",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",padding:"0.5rem",borderRadius:"4px",display:"block",marginBottom:"0.5rem",boxSizing:"border-box"}} /><button onClick={parse} style={{background:"#3b82f6",color:"#fff",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer",marginBottom:"0.5rem"}}>Parse</button>{output&&<textarea value={output} readOnly style={{width:"100%",height:"220px",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",padding:"0.5rem",borderRadius:"4px",display:"block",boxSizing:"border-box"}} />}</div>);
}
