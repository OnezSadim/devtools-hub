"use client";
import { useState } from "react";
export default function JsonToCsv() {
  const [input, setInput] = useState('[{"name":"Alice","age":30},{"name":"Bob","age":25}]');
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const convert = () => {
    try {
      const data = JSON.parse(input);
      if (!Array.isArray(data) || data.length === 0) { setError("Input must be a non-empty JSON array."); setOutput(""); return; }
      const headers = Object.keys(data[0]);
      const rows = data.map((row: Record<string,unknown>) => headers.map(h => { const v = row[h]; const s = v === null || v === undefined ? "" : String(v); return s.includes(",") || s.includes('"') || s.includes("\n") ? '"' + s.replace(/"/g, '""') + '"' : s; }).join(","));
      setOutput([headers.join(","), ...rows].join("\n"));
      setError("");
    } catch (e: unknown) { setError("Invalid JSON: " + (e instanceof Error ? e.message : String(e))); setOutput(""); }
  };
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f0f0f",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>JSON to CSV Converter</h1><p style={{color:"#94a3b8",marginBottom:"1.5rem"}}>Convert JSON arrays to CSV format.</p><textarea value={input} onChange={e=>setInput(e.target.value)} rows={8} style={{width:"100%",background:"#1e293b",border:"1px solid #334155",borderRadius:"6px",color:"#e2e8f0",padding:"0.75rem",fontFamily:"monospace",marginBottom:"1rem",boxSizing:"border-box"}} /><button onClick={convert} style={{padding:"0.75rem 1.5rem",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",marginBottom:"1rem"}}>Convert to CSV</button>{error && <div style={{color:"#f87171",marginBottom:"1rem"}}>{error}</div>}{output && <textarea value={output} readOnly rows={8} style={{width:"100%",background:"#1e293b",border:"1px solid #334155",borderRadius:"6px",color:"#a3e635",padding:"0.75rem",fontFamily:"monospace",boxSizing:"border-box"}} />}</div>);
}
