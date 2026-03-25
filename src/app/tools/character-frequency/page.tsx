"use client";
import { useState } from "react";
export default function CharFreq() {
  const [text, setText] = useState("");
  const freq: Record<string,number> = {};
  for (const c of text) freq[c] = (freq[c]||0)+1;
  const sorted = Object.entries(freq).sort((a,b)=>b[1]-a[1]);
  const max = sorted[0]?.[1]||1;
  return (<div className="min-h-screen bg-gray-950 text-gray-100 p-8"><div className="max-w-2xl mx-auto"><h1 className="text-3xl font-bold mb-2">Character Frequency Analyzer</h1><p className="text-gray-400 mb-6">Analyze character frequency in text</p><textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Paste text here..." className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 font-mono mb-4" /><div className="text-sm text-gray-400 mb-4">Total characters: {text.length} | Unique: {sorted.length}</div><div className="space-y-1">{sorted.slice(0,30).map(([ch,cnt])=>(<div key={ch} className="flex items-center gap-2"><span className="w-8 font-mono bg-gray-800 rounded text-center text-xs py-0.5">{ch==" "?"SPC":ch==="\n"?"NL":ch==="\t"?"TAB":ch}</span><div className="flex-1 bg-gray-900 rounded h-4 overflow-hidden"><div className="bg-blue-600 h-full transition-all" style={{width:`${(cnt/max)*100}%`}} /></div><span className="w-12 text-right text-xs text-gray-400">{cnt}</span></div>))}</div></div></div>);
}