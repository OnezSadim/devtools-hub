"use client";
import { useState } from "react";

export default function WordFrequencyCounter() {
  const [text, setText] = useState("");

  const analyze = (t: string) => {
    const words = t.toLowerCase().match(/\b[a-z]+\b/g) || [];
    const freq: Record<string, number> = {};
    for (const w of words) freq[w] = (freq[w] || 0) + 1;
    return Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 50);
  };

  const freq = analyze(text);
  const total = text.toLowerCase().match(/\b[a-z]+\b/g)?.length || 0;
  const unique = freq.length;

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Word Frequency Counter</h1>
      <p className="text-gray-400 mb-6">Analyze word frequency in your text</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <textarea value={text} onChange={e => setText(e.target.value)} className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3" placeholder="Paste your text here..." />
          <div className="flex gap-4 mt-3 text-sm text-gray-400">
            <span>Total words: <span className="text-white">{total}</span></span>
            <span>Unique words: <span className="text-white">{unique}</span></span>
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded p-4 h-80 overflow-y-auto">
          {freq.length === 0 ? <p className="text-gray-500">No words yet</p> : (
            <table className="w-full text-sm">
              <thead><tr className="text-gray-400 border-b border-gray-700"><th className="text-left py-1">Word</th><th className="text-right py-1">Count</th><th className="text-right py-1">%</th></tr></thead>
              <tbody>
                {freq.map(([word, count]) => (
                  <tr key={word} className="border-b border-gray-800">
                    <td className="py-1 font-mono">{word}</td>
                    <td className="text-right">{count}</td>
                    <td className="text-right text-gray-400">{((count/total)*100).toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </main>
  );
}
