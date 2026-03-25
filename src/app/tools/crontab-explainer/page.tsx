"use client";
import { useState } from "react";
export default function CrontabExplainer() {
  const [expr, setExpr] = useState("*/5 * * * *");
  const explain = (e: string) => {
    const parts = e.trim().split(/\s+/);
    if (parts.length < 5) return "Invalid cron expression";
    const [min, hour, dom, mon, dow] = parts;
    const fld = (v: string, name: string, vals?: string[]) => {
      if (v==="*") return "every " + name;
      if (v.startsWith("*/")) return "every " + v.slice(2) + " " + name + "(s)";
      if (vals) return name + " " + v.split(",").map(x=>vals[Number(x)]||x).join(", ");
      return name + " " + v;
    };
    const months = ["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    return [fld(min,"minute"),fld(hour,"hour"),fld(dom,"day-of-month"),fld(mon,"month",months),fld(dow,"day-of-week",days)].join(", ");
  };
  const presets = [["Every minute","* * * * *"],["Every hour","0 * * * *"],["Every day at midnight","0 0 * * *"],["Every Sunday","0 0 * * 0"],["Every 5 minutes","*/5 * * * *"]];
  return (<div style={{minHeight:"100vh",background:"#0f172a",color:"#e2e8f0",padding:"2rem",fontFamily:"monospace"}}>
    <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Crontab Explainer</h1>
    <input value={expr} onChange={e=>setExpr(e.target.value)} style={{width:"100%",padding:"0.5rem",background:"#1e293b",border:"1px solid #334155",borderRadius:"4px",color:"#e2e8f0",marginBottom:"0.5rem",boxSizing:"border-box",fontSize:"1.1rem"}} />
    <div style={{background:"#1e293b",padding:"1rem",borderRadius:"4px",marginBottom:"1rem",color:"#a3e635"}}>{explain(expr)}</div>
    <div style={{display:"grid",gap:"0.5rem"}}>
      {presets.map(([l,v])=>(<button key={v} onClick={()=>setExpr(v)} style={{padding:"0.4rem 0.8rem",background:"#0f172a",border:"1px solid #334155",borderRadius:"4px",color:"#94a3b8",cursor:"pointer",textAlign:"left"}}>{l}: <span style={{color:"#e2e8f0"}}>{v}</span></button>))}
    </div>
  </div>);
}