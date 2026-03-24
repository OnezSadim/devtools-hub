"use client";
import { useState } from "react";
export default function WordFrequency() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<{word: string; count: number; pct: string}[]>([]);
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [minLength, setMinLength] = useState(1);
  const analyze = () => {
    const text = caseSensitive ? input : input.toLowerCase();
    const words = text.match(/[a-zA-Z]+/g) || [];
    const freq: Record<string, number> = {};
    for (const w of words) { if (w.length >= minLength) freq[w] = (freq[w] || 0) + 1; }
    const total = Object.values(freq).reduce((a,b)=>a+b,0);
    const sorted = Object.entries(freq).sort((a,b)=>b[1]-a[1]).map(([word,count])=>({word,count,pct: ((count/total)*100).toFixed(1)+"%"}));
    setResults(sorted);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Word Frequency Analyzer</h1>
        <p className="text-gray-400 mb-6">Analyze word frequency and distribution in text</p>
        <textarea value={input} onChange={e=>setInput(e.target.value)} rows={8}
          placeholder="Paste your text here to analyze word frequency..."
          className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-sm resize-none mb-4" />
        <div className="flex gap-4 mb-4 items-center">
          <label className="flex items-center gap-2 text-gray-300">
            <input type="checkbox" checked={caseSensitive} onChange={e=>setCaseSensitive(e.target.checked)} />
            Case sensitive
          </label>
          <label className="text-gray-300">Min length:
            <input type="number" value={minLength} onChange={e=>setMinLength(Number(e.target.value))} min={1} max={10}
              className="ml-2 w-16 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm" />
          </label>
          <button onClick={analyze} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium">Analyze</button>
        </div>
        {results.length > 0 && (
          <div>
            <p className="text-gray-400 text-sm mb-3">{results.length} unique words found</p>
            <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="text-left p-3 text-gray-300">#</th>
                    <th className="text-left p-3 text-gray-300">Word</th>
                    <th className="text-right p-3 text-gray-300">Count</th>
                    <th className="text-right p-3 text-gray-300">%</th>
                    <th className="p-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {results.slice(0,50).map((r,i)=>(
                    <tr key={r.word} className="border-t border-gray-800">
                      <td className="p-3 text-gray-500">{i+1}</td>
                      <td className="p-3 font-mono">{r.word}</td>
                      <td className="p-3 text-right">{r.count}</td>
                      <td className="p-3 text-right text-gray-400">{r.pct}</td>
                      <td className="p-3">
                        <div className="h-2 bg-blue-600 rounded" style={{width: r.pct}} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}