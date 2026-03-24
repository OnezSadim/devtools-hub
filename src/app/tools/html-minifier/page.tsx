"use client";
import { useState } from "react";
function minifyHtml(html: string): string {
  return html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/\s+/g, " ")
    .replace(/> </g, "><")
    .replace(/ >/g, ">")
    .replace(/< /g, "<")
    .trim();
}
export default function HtmlMinifier() {
  const [input, setInput] = useState("");
  const output = minifyHtml(input);
  const saved = input.length > 0 ? Math.round((1 - output.length / input.length) * 100) : 0;
  return (
    <div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"2rem",fontWeight:700,marginBottom:"0.5rem"}}>HTML Minifier</h1>
      <p style={{color:"#94a3b8",marginBottom:"2rem"}}>Remove whitespace and comments from HTML to reduce file size.</p>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.5rem"}}>
        <div>
          <div style={{color:"#64748b",fontSize:"0.875rem",marginBottom:"0.5rem"}}>Input ({input.length} chars)</div>
          <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Paste HTML here..." rows={20} style={{width:"100%",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:8,padding:"0.75rem",fontSize:"0.875rem",resize:"vertical",boxSizing:"border-box"}} />
        </div>
        <div>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"}}>
            <span style={{color:"#64748b",fontSize:"0.875rem"}}>Output ({output.length} chars)</span>
            {saved > 0 && <span style={{color:"#22c55e",fontSize:"0.875rem"}}>{saved}% smaller</span>}
          </div>
          <textarea readOnly value={output} rows={20} style={{width:"100%",background:"#1e293b",color:"#38bdf8",border:"1px solid #334155",borderRadius:8,padding:"0.75rem",fontSize:"0.875rem",resize:"vertical",boxSizing:"border-box"}} />
          <button onClick={()=>navigator.clipboard.writeText(output)} style={{marginTop:"0.75rem",background:"#3b82f6",color:"white",border:"none",borderRadius:6,padding:"0.5rem 1.5rem",cursor:"pointer"}}>Copy</button>
        </div>
      </div>
    </div>
  );
}