"use client";
import { useState } from "react";
export default function Page() {
  const [md, setMd] = useState("# Hello

This is **bold** and *italic* text.

- Item 1
- Item 2

[Link](https://example.com)");
  const convert = (text) => {
    return text
      .replace(/^### (.+)$/gm, "<h3>$1</h3>")
      .replace(/^## (.+)$/gm, "<h2>$1</h2>")
      .replace(/^# (.+)$/gm, "<h1>$1</h1>")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/`(.+?)`/g, "<code>$1</code>")
      .replace(/^- (.+)$/gm, "<li>$1</li>")
      .replace(/\[(.+?)\]\((.+?)\)/g, "<a href='$2'>$1</a>")
      .replace(/

/g, "</p><p>")
      .replace(/^(?!<)/gm, "<p>")
      .replace(/(?<!>)$/gm, "</p>");
  };
  const html = convert(md);
  const copy = () => navigator.clipboard.writeText(html);
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{color:"#38bdf8",marginBottom:"1rem"}}>Markdown to HTML</h1><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"}}><div><h3 style={{color:"#94a3b8"}}>Markdown</h3><textarea value={md} onChange={e=>setMd(e.target.value)} style={{width:"100%",height:"300px",background:"#1e293b",border:"1px solid #334155",color:"#e2e8f0",padding:"0.75rem",fontFamily:"monospace",borderRadius:"4px"}}/></div><div><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><h3 style={{color:"#94a3b8"}}>HTML</h3><button onClick={copy} style={{padding:"0.25rem 0.75rem",background:"#0ea5e9",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"0.75rem"}}>Copy</button></div><pre style={{background:"#1e293b",padding:"0.75rem",borderRadius:"4px",height:"300px",overflow:"auto",whiteSpace:"pre-wrap",color:"#a3e635",fontSize:"0.75rem"}}>{html}</pre></div></div></div>);
}