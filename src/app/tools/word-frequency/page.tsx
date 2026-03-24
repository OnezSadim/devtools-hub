"use client";
import { useState } from "react";
export default function WordFrequency() {
  const [text, setText] = useState("");
  const [results, setResults] = useState<{word:string,count:number}[]>([]);
  function analyze() {
    const words = text.toLowerCase().match(/\b[a-z]+\b/g) || [];
    const freq: Record<string,number> = {};
    words.forEach(w => freq[w] = (freq[w]||0)+1);
    setResults(Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,50).map(([word,count])=>({word,count})));
  }
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Word Frequency Counter</h1>
      <textarea className="w-full h-40 p-3 bg-gray-800 rounded border border-gray-600 text-white mb-3" placeholder="Paste text here..." value={text} onChange={e=>setText(e.target.value)} />
      <button onClick={analyze} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-4">Analyze</button>
      {results.length>0&&<table className="w-full text-sm"><thead><tr className="text-gray-400"><th className="text-left p-2">Word</th><th className="text-right p-2">Count</th></tr></thead><tbody>{results.map(r=><tr key={r.word} className="border-t border-gray-700"><td className="p-2">{r.word}</td><td className="p-2 text-right">{r.count}</td></tr>)}</tbody></table>}
    </div>
  );
}