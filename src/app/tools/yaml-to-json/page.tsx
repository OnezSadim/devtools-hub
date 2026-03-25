"use client";
import { useState } from "react";
export default function Page() {
  const [yaml, setYaml] = useState("");
  const [json, setJson] = useState("");
  const convert = () => {
    try {
      const lines = yaml.split("\n");
      const obj = {};
      for (const line of lines) {
        const m = line.match(/^(\s*)(\w+):\s*(.*)/);
        if (m) obj[m[2]] = m[3].trim();
      }
      setJson(JSON.stringify(obj, null, 2));
    } catch { setJson("Parse error"); }
  };
  return (<div style={{padding:"2rem",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0",fontFamily:"monospace"}}>
    <h1 style={{fontSize:"1.8rem",marginBottom:"1rem"}}>YAML to JSON</h1>
    <p style={{color:"#94a3b8",marginBottom:"0.5rem"}}>Simple flat YAML converter</p>
    <textarea value={yaml} onChange={e=>setYaml(e.target.value)} placeholder="name: Alice
age: 30" style={{width:"100%",height:"150px",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"8px",padding:"0.75rem"}} />
    <button onClick={convert} style={{margin:"0.75rem 0",padding:"0.5rem 1.5rem",background:"#3b82f6",color:"white",border:"none",borderRadius:"6px",cursor:"pointer"}}>Convert</button>
    {json && <pre style={{padding:"1rem",background:"#1e293b",borderRadius:"8px",overflow:"auto",maxHeight:"300px"}}>{json}</pre>}
  </div>);
}