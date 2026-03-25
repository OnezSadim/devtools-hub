"use client";
import { useState } from "react";
export default function Page() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const convert = () => {
    try {
      const bins = input.trim().split(/\s+/);
      const out = bins.map(b => parseInt(b, 2).toString()).join(" ");
      setResult(out);
    } catch { setResult("Invalid binary"); }
  };
  return (<div style={{padding:"2rem",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0",fontFamily:"monospace"}}>
    <h1 style={{fontSize:"1.8rem",marginBottom:"1rem"}}>Binary to Decimal</h1>
    <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter binary numbers (space separated)" style={{width:"100%",height:"100px",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"8px",padding:"0.75rem",fontSize:"1rem"}} />
    <button onClick={convert} style={{marginTop:"0.75rem",padding:"0.5rem 1.5rem",background:"#3b82f6",color:"white",border:"none",borderRadius:"6px",cursor:"pointer"}}>Convert</button>
    {result && <pre style={{marginTop:"1rem",padding:"1rem",background:"#1e293b",borderRadius:"8px"}}>{result}</pre>}
  </div>);
}