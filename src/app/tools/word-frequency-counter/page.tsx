"use client";
import { useState, useMemo } from "react";
export default function WordFrequencyCounter() {
  const [text, setText] = useState("");
  const stats = useMemo(() => {
    if (!text.trim()) return null;
    const words = text.toLowerCase().match(/\b[a-z]+\b/g) || [];
    const freq: Record<string, number> = {};
    words.forEach(w => { freq[w] = (freq[w] || 0) + 1; });
    const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
    return { words: words.length, unique: sorted.length, chars: text.length, sentences: text.split(/[.!?]+/).filter(Boolean).length, sorted };
  }, [text]);
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Word Frequency Counter</h1>
        <p className="text-gray-400 mb-6">Analyze word frequency and text statistics.</p>
        <textarea className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-sm h-40 mb-4" placeholder="Paste your text here..." value={text} onChange={e => setText(e.target.value)} />
        {stats && (
          <>
            <div className="grid grid-cols-4 gap-3 mb-6">
              {[{label:"Words",v:stats.words},{label:"Unique",v:stats.unique},{label:"Chars",v:stats.chars},{label:"Sentences",v:stats.sentences}].map(({label,v}) => (
                <div key={label} className="bg-gray-900 border border-gray-700 rounded p-3 text-center">
                  <div className="text-2xl font-bold text-blue-400">{v}</div>
                  <div className="text-xs text-gray-500">{label}</div>
                </div>
              ))}
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded p-3">
              <h2 className="text-sm font-semibold mb-3">Top Words</h2>
              <div className="space-y-2">
                {stats.sorted.slice(0, 20).map(([word, count]) => (
                  <div key={word} className="flex items-center gap-2">
                    <span className="font-mono text-sm w-40">{word}</span>
                    <div className="flex-1 bg-gray-800 rounded h-2">
                      <div className="bg-blue-500 h-2 rounded" style={{width: `${(count/stats.sorted[0][1])*100}%`}} />
                    </div>
                    <span className="text-xs text-gray-400 w-8 text-right">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}