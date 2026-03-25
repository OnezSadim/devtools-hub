"use client";
import { useState } from "react";
export default function AnagramChecker() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const sort = (s:string) => s.toLowerCase().replace(/[^a-z]/g,"").split("").sort().join("");
  const isAnagram = a.trim()&&b.trim() && sort(a)===sort(b);
  const checked = a.trim()&&b.trim();
  return (<div style={{padding:24,fontFamily:"monospace",background:"#0a0a0a",minHeight:"100vh",color:"#e5e5e5"}}>
    <h1 style={{fontSize:28,marginBottom:8}}>Anagram Checker</h1>
    <p style={{color:"#888",marginBottom:20}}>Check if two words or phrases are anagrams of each other.</p>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:20}}>
      <input value={a} onChange={e=>setA(e.target.value)} placeholder="First word/phrase" style={{padding:12,background:"#111",color:"#e5e5e5",border:"1px solid #333",borderRadius:8,fontSize:16}} />
      <input value={b} onChange={e=>setB(e.target.value)} placeholder="Second word/phrase" style={{padding:12,background:"#111",color:"#e5e5e5",border:"1px solid #333",borderRadius:8,fontSize:16}} />
    </div>
    {checked&&<div style={{textAlign:"center",padding:24,background:"#111",border:'1px solid '+(isAnagram?"#22c55e":"#ef4444"),borderRadius:8}}>
      <div style={{fontSize:64}}>{isAnagram?"✅":"❌"}</div>
      <div style={{fontSize:20,color:isAnagram?"#22c55e":"#ef4444",marginTop:8}}>{isAnagram?"Yes! These are anagrams!":"No, these are not anagrams."}</div>
      <div style={{color:"#555",marginTop:12,fontSize:13}}>Sorted A: {sort(a)} | Sorted B: {sort(b)}</div>
    </div>}
  </div>);
}