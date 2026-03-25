"use client";
import { useState } from "react";
export default function DockerfileValidator() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<{line:number,msg:string,type:string}[]>([]);
  const validate = () => {
    const lines = input.split("\n");
    const issues: {line:number,msg:string,type:string}[] = [];
    const valid = ["FROM","RUN","CMD","LABEL","EXPOSE","ENV","ADD","COPY","ENTRYPOINT","VOLUME","USER","WORKDIR","ARG","ONBUILD","STOPSIGNAL","HEALTHCHECK","SHELL","#",""];
    let hasFrom = false;
    lines.forEach((line,i) => {
      const trimmed = line.trim();
      const instr = trimmed.split(" ")[0].toUpperCase();
      if (trimmed === "") return;
      if (instr === "FROM") hasFrom = true;
      if (!valid.includes(instr) && !trimmed.startsWith("#")) issues.push({line:i+1,msg:`Unknown instruction: ${instr}`,type:"error"});
      if (instr === "ADD" && !trimmed.includes("http")) issues.push({line:i+1,msg:"Prefer COPY over ADD for local files",type:"warn"});
      if (instr === "RUN" && trimmed.includes("apt-get install") && !trimmed.includes("-y")) issues.push({line:i+1,msg:"apt-get install should use -y flag",type:"warn"});
    });
    if (!hasFrom) issues.push({line:0,msg:"Dockerfile must start with FROM instruction",type:"error"});
    if (issues.length===0) issues.push({line:0,msg:"Dockerfile looks valid!",type:"ok"});
    setResults(issues);
  };
  const s = {bg:{background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px",padding:"0.5rem",width:"100%",display:"block",boxSizing:"border-box" as const}};
  const colors: Record<string,string> = {error:"#ef4444",warn:"#f59e0b",ok:"#10b981"};
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}>
    <h1 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>Dockerfile Validator</h1>
    <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Paste Dockerfile content..." style={{...s.bg,height:"250px",marginBottom:"0.5rem"}} />
    <button onClick={validate} style={{background:"#3b82f6",color:"white",border:"none",padding:"0.5rem 1rem",borderRadius:"4px",cursor:"pointer",marginBottom:"1rem"}}>Validate</button>
    {results.length>0&&<div>{results.map((r,i)=><div key={i} style={{color:colors[r.type],marginBottom:"0.25rem"}}>{r.line>0?`Line ${r.line}: `:""}{r.msg}</div>)}</div>}
  </div>);
}
