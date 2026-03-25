"use client";
import{useState}from"react";
export default function FrequencyConverter(){
const units=["Hz","kHz","MHz","GHz","THz"];
const toHz=[1,1e3,1e6,1e9,1e12];
const[val,setVal]=useState("1");
const[from,setFrom]=useState("MHz");
const fi=units.indexOf(from),inHz=(parseFloat(val)||0)*toHz[fi];
return(<div style={{padding:"2rem",background:"#0f172a",color:"#e2e8f0",minHeight:"100vh",fontFamily:"monospace"}}>
<h1>Frequency Converter</h1>
<div style={{margin:"1rem 0"}}>
<input value={val} onChange={e=>setVal(e.target.value)} style={{padding:"8px",marginRight:"8px",background:"#1e293b",color:"#e2e8f0",border:"1px solid #475569",borderRadius:"4px",width:"150px"}}/>
<select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"8px",background:"#1e293b",color:"#e2e8f0",border:"1px solid #475569",borderRadius:"4px"}}>
{units.map(u=><option key={u}>{u}</option>)}
</select>
</div>
<table style={{width:"100%",borderCollapse:"collapse"}}>
<tbody>{units.map((u,i)=><tr key={u}><td style={{padding:"8px",border:"1px solid #334155"}}>{u}</td><td style={{padding:"8px",border:"1px solid #334155"}}>{(inHz/toHz[i]).toPrecision(6)}</td></tr>)}</tbody>
</table>
</div>);
}
