"use client";
import { useState } from "react";
const VALS: [number,string][] = [[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];
const RVALS: [string,number][] = [["M",1000],["CM",900],["D",500],["CD",400],["C",100],["XC",90],["L",50],["XL",40],["X",10],["IX",9],["V",5],["IV",4],["I",1]];
function toRoman(n:number):string { let r=""; for(const [v,s] of VALS){while(n>=v){r+=s;n-=v;}} return r; }
function fromRoman(s:string):number { let r=0,i=0; for(const [sym,val] of RVALS){while(s.startsWith(sym,i)){r+=val;i+=sym.length;}} return r; }
export default function RomanNumeralConverter() {
  const [num, setNum] = useState("");
  const [rom, setRom] = useState("");
  const n = parseInt(num)||0;
  return (<div style={{padding:24,fontFamily:"monospace",background:"#0a0a0a",minHeight:"100vh",color:"#e5e5e5"}}>
    <h1 style={{fontSize:28,marginBottom:8}}>Roman Numeral Converter</h1>
    <p style={{color:"#888",marginBottom:20}}>Convert between Arabic and Roman numerals.</p>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
      <div>
        <label style={{display:"block",marginBottom:8,color:"#888"}}>Arabic Number (1-3999)</label>
        <input type="number" value={num} onChange={e=>setNum(e.target.value)} placeholder="e.g. 2024" style={{width:"100%",padding:12,background:"#111",color:"#e5e5e5",border:"1px solid #333",borderRadius:8,fontSize:16,boxSizing:"border-box"}} />
        {n>0&&n<=3999&&<div style={{marginTop:12,padding:16,background:"#111",border:"1px solid #333",borderRadius:8,color:"#7c3aed",fontSize:24,textAlign:"center"}}>{toRoman(n)}</div>}
      </div>
      <div>
        <label style={{display:"block",marginBottom:8,color:"#888"}}>Roman Numeral</label>
        <input value={rom} onChange={e=>setRom(e.target.value.toUpperCase())} placeholder="e.g. MMXXIV" style={{width:"100%",padding:12,background:"#111",color:"#e5e5e5",border:"1px solid #333",borderRadius:8,fontSize:16,boxSizing:"border-box"}} />
        {rom&&<div style={{marginTop:12,padding:16,background:"#111",border:"1px solid #333",borderRadius:8,color:"#7c3aed",fontSize:24,textAlign:"center"}}>{fromRoman(rom)||"Invalid"}</div>}
      </div>
    </div>
  </div>);
}