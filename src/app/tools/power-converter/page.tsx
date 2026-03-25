"use client";
import { useState } from "react";
export default function PowerConverter() {
  const [val, setVal] = useState("1");
  const [from, setFrom] = useState("watt");
  const toW: Record<string,number> = {watt:1,kilowatt:1000,megawatt:1000000,horsepower:745.7,metric_hp:735.499,btu_hr:0.293071,calorie_s:4.18400,foot_lb_s:1.35582};
  const labels: Record<string,string> = {watt:"Watt (W)",kilowatt:"Kilowatt (kW)",megawatt:"Megawatt (MW)",horsepower:"Horsepower (hp)",metric_hp:"Metric HP",btu_hr:"BTU/hr",calorie_s:"Calorie/s",foot_lb_s:"ft·lbf/s"};
  const base = parseFloat(val||"0") * (toW[from]||1);
  return (<div style={{padding:"2rem",fontFamily:"monospace",background:"#0f172a",minHeight:"100vh",color:"#e2e8f0"}}><h1 style={{color:"#38bdf8"}}>Power Converter</h1><div style={{display:"flex",gap:"1rem",marginBottom:"1rem"}}><input type="number" value={val} onChange={e=>setVal(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px",width:"150px"}}/><select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"0.5rem",background:"#1e293b",color:"#e2e8f0",border:"1px solid #334155",borderRadius:"4px"}}>{Object.keys(toW).map(k=><option key={k} value={k}>{labels[k]}</option>)}</select></div><table style={{borderCollapse:"collapse",width:"100%"}}><thead><tr><th style={{textAlign:"left",padding:"0.5rem",borderBottom:"1px solid #334155"}}>Unit</th><th style={{textAlign:"left",padding:"0.5rem",borderBottom:"1px solid #334155"}}>Value</th></tr></thead><tbody>{Object.entries(toW).map(([k,r])=><tr key={k} style={{background:k===from?"#1e293b":"transparent"}}><td style={{padding:"0.5rem"}}>{labels[k]}</td><td style={{padding:"0.5rem",color:"#38bdf8"}}>{isNaN(base/r)?"0":(base/r).toFixed(6)}</td></tr>)}</tbody></table></div>);
}
