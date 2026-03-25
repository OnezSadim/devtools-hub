"use client";
import { useState } from "react";
export default function MarkdownToHtml() {
  const [md, setMd] = useState("# Hello\n\nThis is **bold** and *italic* text.\n\n- Item 1\n- Item 2");
  const convert = (text: string) => {
    return text
      .replace(/^### (.+)$/gm, "<h3>$1</h3>")
      .replace(/^## (.+)$/gm, "<h2>$1</h2>")
      .replace(/^# (.+)$/gm, "<h1>$1</h1>")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/`(.+?)`/g, "<code>$1</code>")
      .replace(/^- (.+)$/gm, "<li>$1</li>")
      .replace(/(<li>.*<\/li>)/gs, "<ul>$1</ul>")
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
      .replace(/\n\n/g, "</p><p>")
      .replace(/^(?!<[hul])(.+)$/gm, "<p>$1</p>");
  };
  const html = convert(md);
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f0f0f",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Markdown to HTML</h1><p style={{color:"#94a3b8",marginBottom:"1.5rem"}}>Convert Markdown to HTML instantly.</p><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"}}><div><div style={{color:"#94a3b8",marginBottom:"0.5rem"}}>Markdown</div><textarea value={md} onChange={e=>setMd(e.target.value)} style={{width:"100%",height:"400px",background:"#1e293b",border:"1px solid #334155",borderRadius:"6px",color:"#e2e8f0",padding:"0.75rem",fontFamily:"monospace",boxSizing:"border-box"}} /></div><div><div style={{color:"#94a3b8",marginBottom:"0.5rem"}}>HTML Output</div><textarea value={html} readOnly style={{width:"100%",height:"400px",background:"#1e293b",border:"1px solid #334155",borderRadius:"6px",color:"#a3e635",padding:"0.75rem",fontFamily:"monospace",boxSizing:"border-box"}} /></div></div></div>);
}
