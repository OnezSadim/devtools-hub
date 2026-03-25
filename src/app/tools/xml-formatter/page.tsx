"use client";
import { useState } from "react";
export default function Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [err, setErr] = useState("");
  const format = () => {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(input, "text/xml");
      const pe = doc.querySelector("parsererror");
      if (pe) { setErr("Parse error: " + pe.textContent); setOutput(""); return; }
      let indent = 0;
      const lines = input.replace(/></g, ">\n<").split("\n");
      const result = lines.map(line => {
        const t = line.trim();
        if (!t) return "";
        if (t.match(/^<\//)) indent = Math.max(0, indent - 1);
        const out = "  ".repeat(indent) + t;
        if (t.match(/^<[^/?!][^>]*>/) && !t.match(/<\//) && !t.match(/\/>$/)) indent++;
        return out;
      }).filter(Boolean).join("\n");
      setOutput(result); setErr("");
    } catch(e) { setErr(String(e)); }
  };
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>XML Formatter</h1><textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Paste XML here..." style={{width:"100%",height:"200px",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",padding:"0.5rem",borderRadius:"4px",display:"block",marginBottom:"0.5rem",boxSizing:"border-box"}} /><button onClick={format} style={{background:"#3b82f6",color:"#fff",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer",marginBottom:"0.5rem"}}>Format XML</button>{err&&<p style={{color:"#f87171"}}>{err}</p>}{output&&<textarea value={output} readOnly style={{width:"100%",height:"300px",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",padding:"0.5rem",borderRadius:"4px",display:"block",boxSizing:"border-box"}} />}</div>);
}
