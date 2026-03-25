"use client";
import { useState, useMemo } from "react";
export default function TextDiffChecker() {
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");
  const diff = useMemo(() => {
    const lLines = left.split("\n");
    const rLines = right.split("\n");
    const max = Math.max(lLines.length, rLines.length);
    const result = [];
    for (let i = 0; i < max; i++) {
      const l = lLines[i] ?? "";
      const r = rLines[i] ?? "";
      if (l === r) result.push({ type: "same", l, r, i });
      else if (!lLines[i]) result.push({ type: "added", l: "", r, i });
      else if (!rLines[i]) result.push({ type: "removed", l, r: "", i });
      else result.push({ type: "changed", l, r, i });
    }
    return result;
  }, [left, right]);
  const colors = { same: "transparent", added: "#0a2a0a", removed: "#2a0a0a", changed: "#2a2a00" };
  const borders = { same: "transparent", added: "#0f5", removed: "#f55", changed: "#ff0" };
  return (
    <div style={{maxWidth:900,margin:"0 auto",padding:24,fontFamily:"monospace"}}>
      <h1 style={{fontSize:28,marginBottom:8}}>Text Diff Checker</h1>
      <p style={{color:"#888",marginBottom:24}}>Compare two texts and see line-by-line differences.</p>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:16}}>
        <div><label style={{display:"block",marginBottom:4}}>Original</label><textarea value={left} onChange={e=>setLeft(e.target.value)} rows={10} style={{width:"100%",padding:8,background:"#1a1a1a",border:"1px solid #333",color:"#fff",borderRadius:4,fontFamily:"monospace",resize:"vertical"}} /></div>
        <div><label style={{display:"block",marginBottom:4}}>Modified</label><textarea value={right} onChange={e=>setRight(e.target.value)} rows={10} style={{width:"100%",padding:8,background:"#1a1a1a",border:"1px solid #333",color:"#fff",borderRadius:4,fontFamily:"monospace",resize:"vertical"}} /></div>
      </div>
      {(left || right) && (
        <div style={{border:"1px solid #333",borderRadius:4,overflow:"hidden"}}>
          <div style={{padding:"8px 12px",background:"#111",borderBottom:"1px solid #333",display:"flex",gap:16,fontSize:12}}>
            <span style={{color:"#0f5"}}>■ Added</span><span style={{color:"#f55"}}>■ Removed</span><span style={{color:"#ff0"}}>■ Changed</span>
          </div>
          {diff.map(({type,l,r,i})=>(
            <div key={i} style={{display:"grid",gridTemplateColumns:"1fr 1fr",background:colors[type],borderLeft:"3px solid "+borders[type]}}>
              <div style={{padding:"2px 8px",borderRight:"1px solid #222",whiteSpace:"pre-wrap",wordBreak:"break-all",fontSize:12,color:type==="removed"?"#f88":"#ccc"}}>{l||" "}</div>
              <div style={{padding:"2px 8px",whiteSpace:"pre-wrap",wordBreak:"break-all",fontSize:12,color:type==="added"?"#8f8":"#ccc"}}>{r||" "}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
