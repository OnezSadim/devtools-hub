"use client";
import { useState } from "react";
export default function SqlFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const keywords = ["SELECT","FROM","WHERE","JOIN","LEFT JOIN","RIGHT JOIN","INNER JOIN","ON","AND","OR","ORDER BY","GROUP BY","HAVING","LIMIT","INSERT INTO","VALUES","UPDATE","SET","DELETE FROM","CREATE TABLE","ALTER TABLE","DROP TABLE","UNION","WITH"];
  const format = () => {
    let r = input.trim();
    keywords.forEach(k => { r = r.replace(new RegExp(`\\b${k}\\b`,"gi"), `\n${k}`); });
    r = r.replace(/,\s*/g,",\n  ").replace(/\n\s*\n/g,"\n").trim();
    setOutput(r);
  };
  const s = {bg:{background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px",padding:"0.5rem",width:"100%",display:"block",boxSizing:"border-box" as const}};
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}>
    <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>SQL Formatter</h1>
    <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Paste SQL query..." style={{...s.bg,height:"200px",marginBottom:"0.5rem"}} />
    <button onClick={format} style={{background:"#3b82f6",color:"white",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer",marginBottom:"0.5rem"}}>Format SQL</button>
    {output&&<><textarea value={output} readOnly style={{...s.bg,height:"200px",marginBottom:"0.5rem"}} /><button onClick={()=>navigator.clipboard.writeText(output)} style={{background:"#10b981",color:"white",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer"}}>Copy</button></>}
  </div>);
}
