"use client";
import { useState, useMemo } from "react";
export default function WordFrequency() {
  const [text, setText] = useState("");
  const stats = useMemo(()=>{
    if(!text.trim()) return null;
    const words = text.trim().toLowerCase().match(/\b[a-z]+\b/g)||[];
    const freq: Record<string,number> = {};
    words.forEach(w=>{freq[w]=(freq[w]||0)+1;});
    const sorted = Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,50);
    return {words:words.length,unique:Object.keys(freq).length,chars:text.length,sentences:(text.match(/[.!?]+/g)||[]).length,top:sorted};
  },[text]);
  return (<div className="min-h-screen bg-gray-950 text-gray-100 p-6"><div className="max-w-2xl mx-auto"><h1 className="text-3xl font-bold mb-2">Word Frequency Analyzer</h1><p className="text-gray-400 mb-6">Analyze text for word frequency, count words, characters, and sentences</p><textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Paste your text here..." className="w-full h-40 bg-gray-800 border border-gray-700 rounded p-3 font-mono text-sm mb-4 resize-none" />{stats&&<><div className="grid grid-cols-4 gap-3 mb-4">{[["Words",stats.words],["Unique",stats.unique],["Chars",stats.chars],["Sentences",stats.sentences]].map(([l,v])=>(<div key={l} className="bg-gray-800 border border-gray-700 rounded p-3 text-center"><p className="text-2xl font-bold">{v}</p><p className="text-gray-400 text-xs mt-1">{l}</p></div>))}</div><h2 className="text-lg font-semibold mb-2">Top Words</h2><div className="grid grid-cols-2 gap-2">{stats.top.map(([w,c])=>(<div key={w} className="bg-gray-800 rounded p-2 flex justify-between"><span className="font-mono">{w}</span><span className="text-blue-400 font-bold">{c}</span></div>))}</div></>}</div></div>);
}