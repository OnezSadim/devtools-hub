"use client";
import { useState } from "react";
export default function Page() {
  const [json, setJson] = useState("");
  const [csv, setCsv] = useState("");
  const convert = () => {
    try {
      const arr = JSON.parse(json);
      if (!Array.isArray(arr)) { setCsv("Input must be a JSON array"); return; }
      const headers = Object.keys(arr[0]);
      const rows = arr.map(r => headers.map(h => String(r[h]??"")));
      setCsv([headers, ...rows].map(r=>r.join(",")).join("\n"));
    } catch { setCsv("Invalid JSON"); }
  };
  return (<div style={{padding:"2rem",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0",fontFamily:"monospace"}}>
    <h1 style={{fontSize:"1.8rem",marginBottom:"1rem"}}>JSON to CSV</h1>
    <textarea value={json} onChange={e=>setJson(e.target.value)} placeholder='[{"name":"Alice","age":30}]' style={{width:"100%",height:"150px",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"8px",padding:"0.75rem"}} />
    <button onClick={convert} style={{margin:"0.75rem 0",padding:"0.5rem 1.5rem",background:"#3b82f6",color:"white",border:"none",borderRadius:"6px",cursor:"pointer"}}>Convert</button>
    {csv && <pre style={{padding:"1rem",background:"#1e293b",borderRadius:"8px",overflow:"auto",maxHeight:"300px"}}>{csv}</pre>}
  </div>);
}