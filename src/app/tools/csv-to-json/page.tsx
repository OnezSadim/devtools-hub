"use client";
import { useState } from "react";
export default function Page() {
  const [csv, setCsv] = useState("");
  const [json, setJson] = useState("");
  const convert = () => {
    const lines = csv.trim().split("\n");
    if (lines.length < 2) { setJson("Need header + data rows"); return; }
    const headers = lines[0].split(",").map(h=>h.trim());
    const rows = lines.slice(1).map(l => {
      const vals = l.split(",");
      return Object.fromEntries(headers.map((h,i) => [h, vals[i]?.trim()||""]))
    });
    setJson(JSON.stringify(rows, null, 2));
  };
  return (<div style={{padding:"2rem",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0",fontFamily:"monospace"}}>
    <h1 style={{fontSize:"1.8rem",marginBottom:"1rem"}}>CSV to JSON</h1>
    <textarea value={csv} onChange={e=>setCsv(e.target.value)} placeholder="Paste CSV here..." style={{width:"100%",height:"150px",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"8px",padding:"0.75rem"}} />
    <button onClick={convert} style={{margin:"0.75rem 0",padding:"0.5rem 1.5rem",background:"#3b82f6",color:"white",border:"none",borderRadius:"6px",cursor:"pointer"}}>Convert</button>
    {json && <pre style={{padding:"1rem",background:"#1e293b",borderRadius:"8px",overflow:"auto",maxHeight:"300px"}}>{json}</pre>}
  </div>);
}