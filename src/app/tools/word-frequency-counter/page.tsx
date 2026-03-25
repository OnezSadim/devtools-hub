"use client";
import { useState } from "react";
export default function WordFrequencyCounter() {
  const [text, setText] = useState("The quick brown fox jumps over the lazy dog. The dog barked.");
  const [sortBy, setSortBy] = useState<"freq"|"alpha">("freq");
  const analyze = () => {
    const words = text.toLowerCase().replace(/[^a-z0-9\s]/g,"").split(/\s+/).filter(Boolean);
    const freq: Record<string,number> = {};
    words.forEach(w => freq[w]=(freq[w]||0)+1);
    let entries = Object.entries(freq);
    if (sortBy==="freq") entries.sort((a,b)=>b[1]-a[1]);
    else entries.sort((a,b)=>a[0].localeCompare(b[0]));
    return {entries, total: words.length, unique: Object.keys(freq).length};
  };
  const {entries, total, unique} = analyze();
  const max = entries[0]?.[1]||1;
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Word Frequency Counter</h1>
        <p className="text-gray-400 mb-8">Analyze word frequency in your text</p>
        <textarea value={text} onChange={e=>setText(e.target.value)} rows={5} className="w-full bg-gray-900 rounded-xl p-4 mb-4 text-sm" placeholder="Paste your text here..." />
        <div className="flex gap-4 mb-6 items-center">
          <div className="flex gap-2 bg-gray-900 rounded-lg p-1">
            <button onClick={()=>setSortBy("freq")} className={`px-3 py-1 rounded text-sm ${sortBy==="freq"?"bg-blue-600":""}`}>By Frequency</button>
            <button onClick={()=>setSortBy("alpha")} className={`px-3 py-1 rounded text-sm ${sortBy==="alpha"?"bg-blue-600":""}`}>Alphabetical</button>
          </div>
          <div className="text-sm text-gray-400">{total} words · {unique} unique</div>
        </div>
        <div className="bg-gray-900 rounded-xl p-4 max-h-96 overflow-y-auto space-y-2">
          {entries.map(([word,count])=>(
            <div key={word} className="flex items-center gap-3">
              <span className="text-sm font-mono w-32 text-gray-300">{word}</span>
              <div className="flex-1 bg-gray-800 rounded-full h-4 overflow-hidden">
                <div className="bg-blue-600 h-full rounded-full" style={{width: (count/max*100)+"%"}} />
              </div>
              <span className="text-sm text-blue-400 w-8 text-right">{count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
