"use client";
import { useState } from "react";
export default function BinaryToText() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"bin2txt"|"txt2bin">("bin2txt");
  const convert = () => {
    try {
      if (mode === "bin2txt") {
        const bytes = input.trim().split(/\s+/);
        setOutput(bytes.map(b => String.fromCharCode(parseInt(b, 2))).join(""));
      } else {
        setOutput(input.split("").map(c => c.charCodeAt(0).toString(2).padStart(8,"0")).join(" "));
      }
    } catch { setOutput("Invalid input"); }
  };
  return (<div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}><h1 style={{fontSize:"1.8rem",marginBottom:"0.5rem"}}>Binary ↔ Text Converter</h1><p style={{color:"#94a3b8",marginBottom:"1.5rem"}}>Convert between binary and text</p><div style={{marginBottom:"1rem"}}><button onClick={()=>setMode("bin2txt")} style={{padding:"0.5rem 1rem",marginRight:"0.5rem",background:mode==="bin2txt"?"#3b82f6":"#1e293b",color:"white",border:"none",borderRadius:"6px",cursor:"pointer"}}>Binary → Text</button><button onClick={()=>setMode("txt2bin")} style={{padding:"0.5rem 1rem",background:mode==="txt2bin"?"#3b82f6":"#1e293b",color:"white",border:"none",borderRadius:"6px",cursor:"pointer"}}>Text → Binary</button></div><textarea value={input} onChange={e=>setInput(e.target.value)} placeholder={mode==="bin2txt"?"Enter binary (e.g. 01001000 01101001)":"Enter text"} style={{width:"100%",height:"120px",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"8px",padding:"0.75rem",fontSize:"0.9rem",resize:"vertical",boxSizing:"border-box"}} /><br/><button onClick={convert} style={{margin:"1rem 0",padding:"0.6rem 1.5rem",background:"#3b82f6",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"1rem"}}>Convert</button>{output&&<div style={{background:"#1e293b",border:"1px solid #334155",borderRadius:"8px",padding:"1rem",wordBreak:"break-all"}}>{output}</div>}</div>);
}
