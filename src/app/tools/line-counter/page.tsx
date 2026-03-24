"use client";
import { useState } from "react";
export default function LineCounter() {
  const [text, setText] = useState("");
  const lines = text.split("
");
  const nonEmpty = lines.filter(l=>l.trim().length>0);
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpace = text.replace(/\s/g,"").length;
  const sentences = text.split(/[.!?]+/).filter(s=>s.trim()).length;
  const paragraphs = text.split(/

+/).filter(p=>p.trim()).length;
  const avgWordLen = words>0 ? (charsNoSpace/words).toFixed(1) : 0;
  const readTime = Math.ceil(words/200);
  return (
    <div style={{maxWidth:700,margin:"0 auto",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"1.8rem",marginBottom:"0.5rem"}}>Line Counter & Text Stats</h1>
      <p style={{color:"#aaa",marginBottom:"1rem"}}>Count lines, words, characters and more.</p>
      <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Paste your text here..." style={{width:"100%",height:200,padding:"1rem",background:"#1e1e1e",border:"1px solid #333",borderRadius:4,color:"#fff",fontFamily:"monospace",fontSize:"0.9rem",resize:"vertical",boxSizing:"border-box"}} />
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"1rem",marginTop:"1rem"}}>
        {[{l:"Lines",v:lines.length},{l:"Non-empty",v:nonEmpty.length},{l:"Words",v:words},{l:"Characters",v:chars},{l:"No spaces",v:charsNoSpace},{l:"Sentences",v:sentences},{l:"Paragraphs",v:paragraphs},{l:"Read time",v:readTime+"m"},{l:"Avg word",v:avgWordLen+" ch"}].map(s=>(
          <div key={s.l} style={{padding:"1rem",background:"#1e1e1e",borderRadius:4,border:"1px solid #333",textAlign:"center"}}>
            <div style={{fontSize:"1.5rem",fontWeight:"bold",color:"#7c3aed"}}>{s.v}</div>
            <div style={{color:"#aaa",fontSize:"0.85rem"}}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}