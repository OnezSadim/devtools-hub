"use client";
import { useState } from "react";
export default function Page() {
  const [json, setJson] = useState('[{"name":"Alice","age":30},{"name":"Bob","age":25}]');
  const [csv, setCsv] = useState("");
  const [err, setErr] = useState("");
  const convert = () => {
    try {
      const data = JSON.parse(json);
      if (!Array.isArray(data) || !data.length) { setErr("Input must be a non-empty JSON array"); return; }
      const keys = Object.keys(data[0]);
      const rows = [keys.join(","), ...data.map(row => keys.map(k => JSON.stringify(row[k]??"")||'""').join(","))];
      setCsv(rows.join("
")); setErr("");
    } catch(e) { setErr("Invalid JSON: " + e.message); }
  };
  const download = () => { const b = new Blob([csv],{type:"text/csv"}); const a = document.createElement("a"); a.href=URL.createObjectURL(b); a.download="data.csv"; a.click(); };
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{color:"#38bdf8",marginBottom:"1rem"}}>JSON to CSV Converter</h1><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"}}><div><h3 style={{color:"#94a3b8"}}>JSON Array</h3><textarea value={json} onChange={e=>setJson(e.target.value)} style={{width:"100%",height:"250px",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",padding:"0.75rem",fontFamily:"monospace",borderRadius:"4px"}}/><button onClick={convert} style={{marginTop:"0.5rem",padding:"0.5rem 1rem",background:"#0ea5e9",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer"}}>Convert</button></div><div><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><h3 style={{color:"#94a3b8"}}>CSV Output</h3>{csv&&<button onClick={download} style={{padding:"0.25rem 0.75rem",background:"#10b981",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"0.75rem"}}>Download</button>}</div><pre style={{background:"#1e293b",padding:"0.75rem",borderRadius:"4px",height:"250px",overflow:"auto",whiteSpace:"pre-wrap",color:"#a3e635"}}>{csv||"CSV output will appear here"}</pre></div></div>{err&&<p style={{color:"#f87171",marginTop:"1rem"}}>{err}</p>}</div>);
}