"use client";
import { useState } from "react";
export default function TextDiff() {
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");
  const computeDiff = () => {
    const leftLines = left.split("
");
    const rightLines = right.split("
");
    const result: {type:string,line:string}[] = [];
    const maxLen = Math.max(leftLines.length, rightLines.length);
    for(let i=0;i<maxLen;i++) {
      const l = leftLines[i], r = rightLines[i];
      if(l===r) result.push({type:"same",line:l||""});
      else {
        if(l!==undefined) result.push({type:"removed",line:l});
        if(r!==undefined) result.push({type:"added",line:r});
      }
    }
    return result;
  };
  const diff = (left||right) ? computeDiff() : [];
  const added = diff.filter(d=>d.type==="added").length;
  const removed = diff.filter(d=>d.type==="removed").length;
  return (
    <div style={{maxWidth:900,margin:"0 auto",padding:"2rem",fontFamily:"monospace"}}>
      <h1 style={{fontSize:"1.8rem",marginBottom:"0.5rem"}}>Text Diff</h1>
      <p style={{color:"#aaa",marginBottom:"1rem"}}>Compare two blocks of text line by line.</p>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginBottom:"1rem"}}>
        <div><label style={{color:"#aaa",display:"block",marginBottom:4}}>Original</label><textarea value={left} onChange={e=>setLeft(e.target.value)} style={{width:"100%",height:200,padding:"0.75rem",background:"#1e1e1e",border:"1px solid #333",borderRadius:4,color:"#fff",fontFamily:"monospace",fontSize:"0.85rem",resize:"vertical",boxSizing:"border-box"}} /></div>
        <div><label style={{color:"#aaa",display:"block",marginBottom:4}}>Modified</label><textarea value={right} onChange={e=>setRight(e.target.value)} style={{width:"100%",height:200,padding:"0.75rem",background:"#1e1e1e",border:"1px solid #333",borderRadius:4,color:"#fff",fontFamily:"monospace",fontSize:"0.85rem",resize:"vertical",boxSizing:"border-box"}} /></div>
      </div>
      {diff.length>0 && (
        <>
          <div style={{display:"flex",gap:"1rem",marginBottom:"0.75rem"}}>
            <span style={{color:"#22c55e"}}>+{added} added</span>
            <span style={{color:"#ef4444"}}>-{removed} removed</span>
            <span style={{color:"#aaa"}}>{diff.filter(d=>d.type==="same").length} unchanged</span>
          </div>
          <div style={{background:"#1e1e1e",borderRadius:4,border:"1px solid #333",overflow:"auto",maxHeight:400}}>
            {diff.map((d,i)=>(
              <div key={i} style={{padding:"0.2rem 1rem",background:d.type==="added"?"rgba(34,197,94,0.1)":d.type==="removed"?"rgba(239,68,68,0.1)":"transparent",borderLeft:`3px solid ${d.type==="added"?"#22c55e":d.type==="removed"?"#ef4444":"transparent"}`}}>
                <span style={{color:d.type==="added"?"#22c55e":d.type==="removed"?"#ef4444":"#aaa",marginRight:8}}>{d.type==="added"?"+":d.type==="removed"?"-":" "}</span>
                {d.line||" "}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}