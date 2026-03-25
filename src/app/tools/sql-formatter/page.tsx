"use client";
import { useState } from "react";
export default function Page() {
  const [sql, setSql] = useState("");
  const [fmt, setFmt] = useState("");
  const format = () => {
    const keywords = ["SELECT","FROM","WHERE","JOIN","LEFT","RIGHT","INNER","OUTER","ON","AND","OR","ORDER BY","GROUP BY","HAVING","LIMIT","INSERT","UPDATE","DELETE","CREATE","DROP","ALTER","SET"];
    let out = sql.replace(/\s+/g," ").trim();
    keywords.forEach(k => { out = out.replace(new RegExp("\\b" + k + "\\b","gi"), "\n" + k); });
    setFmt(out.trim());
  };
  return (<div style={{padding:"2rem",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0",fontFamily:"monospace"}}>
    <h1 style={{fontSize:"1.8rem",marginBottom:"1rem"}}>SQL Formatter</h1>
    <textarea value={sql} onChange={e=>setSql(e.target.value)} placeholder="SELECT * FROM users WHERE id = 1" style={{width:"100%",height:"120px",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"8px",padding:"0.75rem"}} />
    <button onClick={format} style={{margin:"0.75rem 0",padding:"0.5rem 1.5rem",background:"#3b82f6",color:"white",border:"none",borderRadius:"6px",cursor:"pointer"}}>Format</button>
    {fmt && <pre style={{padding:"1rem",background:"#1e293b",borderRadius:"8px",overflow:"auto",maxHeight:"300px"}}>{fmt}</pre>}
  </div>);
}