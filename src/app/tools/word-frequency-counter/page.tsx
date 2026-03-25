"use client";
import { useState } from "react";
export default function WordFrequencyCounter() {
  const [text, setText] = useState("");
  const words = text.toLowerCase().match(/\b\w+\b/g) || [];
  const freq = words.reduce((a,w)=>{a[w]=(a[w]||0)+1;return a;},{});
  const sorted = Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,20);
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-white">Word Frequency Counter</h1>
      <textarea className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 h-32 mb-4" placeholder="Paste text here..." value={text} onChange={e=>setText(e.target.value)} />
      <div className="text-gray-400 mb-2">Total words: {words.length} | Unique: {Object.keys(freq).length}</div>
      <div className="space-y-1">
        {sorted.map(([w,c])=>(
          <div key={w} className="flex justify-between p-2 bg-gray-800 rounded text-white">
            <span>{w}</span><span className="text-blue-400">{c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}