"use client";
import { useState } from "react";
export default function LineSorter() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const sort = (reverse = false) => {
    const lines = input.split("\n");
    const sorted = [...lines].sort((a,b) => a.localeCompare(b));
    setResult((reverse ? sorted.reverse() : sorted).join("\n"));
  };
  const shuffle = () => {
    const lines = input.split("\n");
    for (let i = lines.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i+1)); [lines[i],lines[j]] = [lines[j],lines[i]]; }
    setResult(lines.join("\n"));
  };
  const copy = () => navigator.clipboard.writeText(result);
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-white mb-2">Line Sorter</h1>
      <p className="text-gray-400 mb-6">Sort, reverse-sort, or shuffle lines of text</p>
      <textarea value={input} onChange={e => setInput(e.target.value)} rows={8} placeholder="Paste lines here..." className="w-full mb-4 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 font-mono" />
      <div className="flex gap-2 mb-4">
        <button onClick={() => sort(false)} className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold">Sort A-Z</button>
        <button onClick={() => sort(true)} className="flex-1 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold">Sort Z-A</button>
        <button onClick={shuffle} className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold">Shuffle</button>
      </div>
      {result && <div className="p-4 bg-gray-800 rounded-lg"><div className="flex justify-between mb-2"><p className="text-gray-400 text-sm">Result ({result.split("\n").length} lines)</p><button onClick={copy} className="text-blue-400 text-sm hover:text-blue-300">Copy</button></div><pre className="text-green-400 text-sm whitespace-pre-wrap">{result}</pre></div>}
    </div>
  );
}