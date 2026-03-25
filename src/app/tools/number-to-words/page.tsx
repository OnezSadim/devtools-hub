"use client";
import { useState } from "react";
const ones=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
const tens=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
function convert(n:number):string {
  if(n<0) return "negative "+convert(-n);
  if(n<20) return ones[n];
  if(n<100) return tens[Math.floor(n/10)]+(n%10?"-"+ones[n%10]:"");
  if(n<1000) return ones[Math.floor(n/100)]+" hundred"+(n%100?" "+convert(n%100):"");
  if(n<1000000) return convert(Math.floor(n/1000))+" thousand"+(n%1000?" "+convert(n%1000):"");
  if(n<1000000000) return convert(Math.floor(n/1000000))+" million"+(n%1000000?" "+convert(n%1000000):"");
  return convert(Math.floor(n/1000000000))+" billion"+(n%1000000000?" "+convert(n%1000000000):"");
}
export default function NumberToWords() {
  const [val, setVal] = useState("");
  const n = parseInt(val);
  const result = !isNaN(n) && Math.abs(n)<=999999999 ? convert(n) : "";
  return (<div style={{padding:24,fontFamily:"monospace",background:"#0a0a0a",minHeight:"100vh",color:"#e5e5e5"}}>
    <h1 style={{fontSize:28,marginBottom:8}}>Number to Words</h1>
    <p style={{color:"#888",marginBottom:20}}>Convert any number into its English word form.</p>
    <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter a number..." style={{width:"100%",padding:12,background:"#111",color:"#e5e5e5",border:"1px solid #333",borderRadius:8,fontSize:16,boxSizing:"border-box"}} />
    {result && <div style={{marginTop:20,padding:20,background:"#111",border:"1px solid #7c3aed",borderRadius:8}}><p style={{color:"#888",marginBottom:4",fontSize:12}}>In words:</p><p style={{color:"#e5e5e5",fontSize:20,textTransform:"capitalize"}}>{result}</p></div>}
  </div>);
}