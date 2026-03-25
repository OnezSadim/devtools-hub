"use client";
import{useState}from"react";
export default function FuelEfficiencyConverter(){
const[val,setVal]=useState("30");
const[from,setFrom]=useState("mpg_us");
const v=parseFloat(val)||0;
let mpgUS=v;
if(from==="mpg_uk")mpgUS=v*0.832674;
else if(from==="kml")mpgUS=v*2.35215;
else if(from==="l100km")mpgUS=v===0?0:235.215/v;
const rows=[["MPG (US)",mpgUS],["MPG (UK)",mpgUS/0.832674],["km/L",mpgUS/2.35215],["L/100km",mpgUS===0?Infinity:235.215/mpgUS]];
return(<div style={{padding:"2rem",background:"#0f172a",color:"#e2e8f0",minHeight:"100vh",fontFamily:"monospace"}}>
<h1>Fuel Efficiency Converter</h1>
<div style={{margin:"1rem 0"}}>
<input value={val} onChange={e=>setVal(e.target.value)} style={{padding:"8px",marginRight:"8px",background:"#1e293b",color:"#e2e8f0",border:"1px solid #475569",borderRadius:"4px",width:"150px"}}/>
<select value={from} onChange={e=>setFrom(e.target.value)} style={{padding:"8px",background:"#1e293b",color:"#e2e8f0",border:"1px solid #475569",borderRadius:"4px"}}>
<option value="mpg_us">MPG (US)</option>
<option value="mpg_uk">MPG (UK)</option>
<option value="kml">km/L</option>
<option value="l100km">L/100km</option>
</select>
</div>
<table style={{width:"100%",borderCollapse:"collapse"}}>
<tbody>{rows.map(([k,v])=><tr key={k}><td style={{padding:"8px",border:"1px solid #334155"}}>{k}</td><td style={{padding:"8px",border:"1px solid #334155"}}>{isFinite(Number(v))?Number(v).toPrecision(5):"∞"}</td></tr>)}</tbody>
</table>
</div>);
}
