"use client";
import { useState } from "react";
export default function DuplicateLineRemover() {
  const [input, setInput] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(true);
  const [result, setResult] = useState("");
  const [stats, setStats] = useState<{original:number,unique:number,removed:number}|null>(null);
  const remove = () => {
    const lines = input.split("\n");
    const seen = new Set<string>();
    const unique = lines.filter(line => {
      const key = caseSensitive ? line : line.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key); return true;
    });
    setResult(unique.join("\n"));
    setStats({original: lines.length, unique: unique.length, removed: lines.length - unique.length});
  };
  const copy = () => navigator.clipboard.writeText(result);
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-white mb-2">Duplicate Line Remover</h1>
      <p className="text-gray-400 mb-6">Remove duplicate lines from text while preserving order</p>
      <textarea value={input} onChange={e => setInput(e.target.value)} rows={8} placeholder="Paste lines here..." className="w-full mb-4 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 font-mono" />
      <label className="flex items-center gap-2 mb-4 text-gray-300 cursor-pointer">
        <input type="checkbox" checked={caseSensitive} onChange={e => setCaseSensitive(e.target.checked)} className="w-4 h-4" />
        Case sensitive
      </label>
      <button onClick={remove} className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold mb-4">Remove Duplicates</button>
      {stats && <div className="flex gap-4 mb-4"><div className="flex-1 p-3 bg-gray-800 rounded-lg text-center"><p className="text-2xl font-bold text-white">{stats.original}</p><p className="text-gray-400 text-sm">Original</p></div><div className="flex-1 p-3 bg-gray-800 rounded-lg text-center"><p className="text-2xl font-bold text-green-400">{stats.unique}</p><p className="text-gray-400 text-sm">Unique</p></div><div className="flex-1 p-3 bg-gray-800 rounded-lg text-center"><p className="text-2xl font-bold text-red-400">{stats.removed}</p><p className="text-gray-400 text-sm">Removed</p></div></div>}
      {result && <div className="p-4 bg-gray-800 rounded-lg"><div className="flex justify-between mb-2"><p className="text-gray-400 text-sm">Result</p><button onClick={copy} className="text-blue-400 text-sm hover:text-blue-300">Copy</button></div><pre className="text-green-400 text-sm whitespace-pre-wrap">{result}</pre></div>}
    </div>
  );
}