"use client";
import{useState}from"react";
export default function Page(){
const[val,setVal]=useState("");
const[from,setFrom]=useState("1");
const[to,setTo]=useState("0.425144");
function convert(){const v=parseFloat(val);if(isNaN(v))return"";let mpg=from==="l100km"?(235.215/v):(v*parseFloat(from));if(to==="l100km")return(235.215/mpg).toFixed(4);return(mpg/parseFloat(to)).toFixed(4);}
const opts=(<>{[['Miles per gallon (mpg)','1'],['Miles per gallon (UK)','1.20095'],['Kilometers per liter (km/L)','0.425144'],['Liters per 100 km (L/100km)','l100km'],['Miles per liter (mi/L)','0.264172'],['Kilometers per gallon (km/gal)','1.60934']].map(([n,v])=><option key={v} value={v}>{n}</option>)}</>);
return(<div style={{padding:"2rem",fontFamily:"sans-serif",maxWidth:"500px",margin:"0 auto"}}><h1>Fuel Economy Converter</h1><p>Convert between mpg, km/L, L/100km and other fuel economy units</p><input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" style={{width:"100%",padding:"0.5rem",marginBottom:"1rem"}}/><select value={from} onChange={e=>setFrom(e.target.value)} style={{width:"100%",padding:"0.5rem",marginBottom:"0.5rem"}}>{opts}</select><div style={{textAlign:"center",margin:"0.5rem"}}>&#8595;</div><select value={to} onChange={e=>setTo(e.target.value)} style={{width:"100%",padding:"0.5rem",marginBottom:"1rem"}}>{opts}</select><div style={{fontSize:"1.5rem",fontWeight:"bold",padding:"1rem",background:"#f0f0f0",borderRadius:"8px"}}><span>{convert()||"—"}</span></div></div>);}'
