"use client";
import { useState } from "react";
export default function CharFrequency() {
  const [text, setText] = useState("");
  const freq = text.split("").reduce((acc,c)=>{acc[c]=(acc[c]||0)+1;return acc;},{} as Record<string,number>);
  const sorted = Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,20);
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Character Frequency Counter</h1>
        <p className="text-gray-400 mb-6">Analyze character frequency in text.</p>
        <textarea className="w-full bg-gray-800 rounded p-3 font-mono text-sm mb-4" rows={5} value={text} onChange={e=>setText(e.target.value)} placeholder="Paste text here..." />
        {sorted.length > 0 && <div className="space-y-2">{sorted.map(([c,count])=>(
          <div key={c} className="flex items-center gap-3">
            <span className="font-mono bg-gray-700 px-2 py-1 rounded w-10 text-center">{c==" "?"SPC":c}</span>
            <div className="flex-1 bg-gray-800 rounded h-4 overflow-hidden"><div className="bg-blue-500 h-full" style={{width:`${count/sorted[0][1]*100}%`}} /></div>
            <span className="text-gray-400 w-8 text-right">{count}</span>
          </div>
        ))}</div>}
      </div>
    </main>
  );
}