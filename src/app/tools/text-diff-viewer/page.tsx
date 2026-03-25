"use client";
import { useState } from "react";
export default function TextDiffViewer() {
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");
  const [diff, setDiff] = useState<string[]>([]);
  function computeDiff() {
    const a = left.split("\n");
    const b = right.split("\n");
    const result: string[] = [];
    const max = Math.max(a.length, b.length);
    for (let i = 0; i < max; i++) {
      if (a[i] === b[i]) result.push("= " + (a[i] ?? ""));
      else { if (a[i] !== undefined) result.push("- " + a[i]); if (b[i] !== undefined) result.push("+ " + b[i]); }
    }
    setDiff(result);
  }
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Text Diff Viewer</h1><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginBottom:"1rem"}}><textarea value={left} onChange={e=>setLeft(e.target.value)} placeholder="Original text" style={{height:"200px",padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px",resize:"vertical"}} /><textarea value={right} onChange={e=>setRight(e.target.value)} placeholder="Modified text" style={{height:"200px",padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px",resize:"vertical"}} /></div><button onClick={computeDiff} style={{padding:"0.5rem 1rem",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer",marginBottom:"1rem"}}>Compare</button>{diff.length>0&&<div style={{background:"#1e293b",padding:"1rem",borderRadius:"4px"}}>{diff.map((line,i)=><div key={i} style={{color:line.startsWith("+")?"#4ade80":line.startsWith("-")?"#f87171":"#94a3b8",padding:"2px 0"}}>{line}</div>)}</div>}</div>);
}
