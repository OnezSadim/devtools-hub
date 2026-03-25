"use client";
import { useState } from "react";
export default function PalindromeChecker() {
  const [text, setText] = useState("");
  const clean = text.toLowerCase().replace(/[^a-z0-9]/g,"");
  const isPalin = clean.length>0 && clean===clean.split("").reverse().join("");
  return (<div style={{padding:24,fontFamily:"monospace",background:"#0a0a0a",minHeight:"100vh",color:"#e5e5e5"}}>
    <h1 style={{fontSize:28,marginBottom:8}}>Palindrome Checker</h1>
    <p style={{color:"#888",marginBottom:20}}>Check if a word or phrase is a palindrome.</p>
    <input value={text} onChange={e=>setText(e.target.value)} placeholder="Enter text..." style={{width:"100%",padding:12,background:"#111",color:"#e5e5e5",border:"1px solid #333",borderRadius:8,fontSize:16,boxSizing:"border-box"}} />
    {clean.length>0 && <div style={{marginTop:24,textAlign:"center"}}>
      <div style={{fontSize:80}}>{isPalin?"✅":"❌"}</div>
      <div style={{fontSize:24,marginTop:8,color:isPalin?"#22c55e":"#ef4444"}}>{isPalin?"Yes, it is a palindrome!":"No, not a palindrome."}</div>
      <div style={{color:"#888",marginTop:8}}>Cleaned: <span style={{color:"#7c3aed"}}>{clean}</span></div>
    </div>}
  </div>);
}