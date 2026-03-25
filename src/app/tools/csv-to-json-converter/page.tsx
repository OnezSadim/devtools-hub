"use client";
import { useState } from "react";
export default function CsvToJsonConverter() {
  const [input, setInput] = useState("name,age,city\nAlice,30,NYC\nBob,25,LA");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const convert = () => {
    try {
      const lines = input.trim().split("\n").filter(l => l.trim());
      if (lines.length < 2) { setError("Need at least a header row and one data row."); return; }
      const headers = lines[0].split(",").map(h => h.trim());
      const rows = lines.slice(1).map(line => { const vals = line.split(",").map(v => v.trim()); const obj: Record<string,string|number> = {}; headers.forEach((h,i) => { const v = vals[i] || ""; obj[h] = isNaN(Number(v)) || v === "" ? v : Number(v); }); return obj; });
      setOutput(JSON.stringify(rows, null, 2));
      setError("");
    } catch (e: unknown) { setError("Parse error: " + (e instanceof Error ? e.message : String(e))); }
  };
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f0f0f",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>CSV to JSON Converter</h1><p style={{color:"#94a3b8",marginBottom:"1.5rem"}}>Convert CSV data to JSON format.</p><textarea value={input} onChange={e=>setInput(e.target.value)} rows={8} style={{width:"100%",background:"#1e293b",border:"1px solid #334155",borderRadius:"6px",color:"#e2e8f0",padding:"0.75rem",fontFamily:"monospace",marginBottom:"1rem",boxSizing:"border-box"}} /><button onClick={convert} style={{padding:"0.75rem 1.5rem",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"6px",cursor:"pointer",marginBottom:"1rem"}}>Convert to JSON</button>{error && <div style={{color:"#f87171",marginBottom:"1rem"}}>{error}</div>}{output && <textarea value={output} readOnly rows={10} style={{width:"100%",background:"#1e293b",border:"1px solid #334155",borderRadius:"6px",color:"#a3e635",padding:"0.75rem",fontFamily:"monospace",boxSizing:"border-box"}} />}</div>);
}
