"use client";
import { useState } from "react";
export default function WordFrequency() {
  const [text, setText] = useState("");
  const freq = text.trim() ? Object.entries(text.toLowerCase().match(/\b\w+\b/g)?.reduce((a:any,w)=>{a[w]=(a[w]||0)+1;return a},{}) || {}).sort((a:any,b:any)=>b[1]-a[1]).slice(0,20) : [];
  return (<div className="min-h-screen bg-gray-900 text-white p-8"><h1 className="text-3xl font-bold mb-6">Word Frequency Counter</h1><textarea className="w-full h-40 bg-gray-800 p-3 rounded mb-4" placeholder="Paste text here" value={text} onChange={e=>setText(e.target.value)}/>{freq.length>0&&<div className="space-y-2">{freq.map(([w,c]:any)=><div key={w} className="flex justify-between bg-gray-800 p-3 rounded"><span className="font-mono">{w}</span><span className="text-blue-400 font-bold">{c}</span></div>)}</div>}</div>);
}