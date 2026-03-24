"use client";
import { useState } from "react";
export default function TextCaseConverter() {
  const [input, setInput] = useState("");
  const conversions = [
    { label: "UPPERCASE", fn: (s: string) => s.toUpperCase() },
    { label: "lowercase", fn: (s: string) => s.toLowerCase() },
    { label: "Title Case", fn: (s: string) => s.replace(/\w\S*/g, t => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()) },
    { label: "camelCase", fn: (s: string) => s.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_,c) => c.toUpperCase()) },
    { label: "PascalCase", fn: (s: string) => s.replace(/[^a-zA-Z0-9]+(.)/g, (_,c) => c.toUpperCase()).replace(/^./, c => c.toUpperCase()) },
    { label: "snake_case", fn: (s: string) => s.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_|_$/g, "") },
    { label: "kebab-case", fn: (s: string) => s.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "") },
    { label: "CONSTANT_CASE", fn: (s: string) => s.toUpperCase().replace(/[^A-Z0-9]+/g, "_").replace(/^_|_$/g, "") },
  ];
  return (
    <div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"2rem",fontWeight:700,marginBottom:"0.5rem"}}>Text Case Converter</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Convert text between camelCase, snake_case, kebab-case, PascalCase and more.</p>
      <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter your text here..." rows={4} style={{width:"100%",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:8,padding:"0.75rem",fontSize:"1rem",marginBottom:"1.5rem",resize:"vertical",boxSizing:"border-box"}} />
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"1rem"}}>
        {conversions.map(({label,fn})=>(
          <div key={label} style={{background:"#1e293b",borderRadius:8,padding:"1rem"}}>
            <div style={{color:"#64748b",fontSize:"0.75rem",marginBottom:"0.5rem"}}>{label}</div>
            <div style={{color:"#38bdf8",wordBreak:"break-all",marginBottom:"0.5rem",minHeight:"1.5rem"}}>{input ? fn(input) : ""}</div>
            <button onClick={()=>navigator.clipboard.writeText(input?fn(input):"")} style={{background:"#334155",color:"#e2e8f0",border:"none",borderRadius:4,padding:"0.25rem 0.75rem",cursor:"pointer",fontSize:"0.75rem"}}>Copy</button>
          </div>
        ))}
      </div>
    </div>
  );
}