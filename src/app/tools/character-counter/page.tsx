"use client";
import { useState } from "react";
export default function CharacterCounter() {
  const [text, setText] = useState("");
  const chars = text.length;
  const words = text.trim()===" "?0:text.trim().split(/\s+/).filter(Boolean).length;
  const lines = text.split("\n").length;
  const sentences = text.split(/[.!?]+/).filter(Boolean).length;
  const paragraphs = text.split(/\n\n+/).filter(s=>s.trim()).length;
  const noSpaces = text.replace(/\s/g,"").length;
  return (<div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
    <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Character Counter</h1>
    <textarea value={text} onChange={e=>setText(e.target.value)} rows={8} placeholder="Type or paste text here..." style={{width:"100%",padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0",marginBottom:"1rem",boxSizing:"border-box",resize:"vertical"}} />
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1rem"}}>
      {[["Characters",chars],["Words",words],["Lines",lines],["Sentences",sentences],["Paragraphs",paragraphs],["No Spaces",noSpaces]].map(([l,v])=>(
        <div key={String(l)} style={{background:"#1e293b",padding:"1rem",borderRadius:"4px",textAlign:"center"}}>
          <div style={{fontSize:"2rem",color:"#6366f1"}}>{v}</div>
          <div style={{color:"#94a3b8",fontSize:"0.85rem"}}>{l}</div>
        </div>
      ))}
    </div>
  </div>);
}