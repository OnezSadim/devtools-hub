"use client";
import { useState } from "react";
export default function ListDeduplicator() {
  const [input, setInput] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(true);
  const [copied, setCopied] = useState(false);
  const lines = input.split("\n");
  const seen = new Set();
  const unique = lines.filter(line => {
    const key = caseSensitive ? line : line.toLowerCase();
    if(seen.has(key)) return false;
    seen.add(key); return true;
  });
  const dupes = lines.length - unique.length;
  const output = unique.join("\n");
  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(()=>setCopied(false),2000); };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">List Deduplicator</h1>
        <p className="text-gray-400 mb-6">Remove duplicate lines from any list.</p>
        <div className="flex items-center gap-4 mb-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={caseSensitive} onChange={e=>setCaseSensitive(e.target.checked)} className="w-4 h-4" />
            <span className="text-sm text-gray-300">Case sensitive</span>
          </label>
          {input && <span className="text-sm text-gray-400">{dupes} duplicate{dupes!==1?"s":""} removed</span>}
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Input ({lines.length} lines)</label>
            <textarea className="w-full h-72 bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono text-sm focus:outline-none focus:border-blue-500 resize-none" placeholder="Paste your list here..." value={input} onChange={e => setInput(e.target.value)} />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm text-gray-400">Output ({unique.length} unique)</label>
              {output && <button onClick={copy} className="text-sm px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded">{copied ? "Copied!" : "Copy"}</button>}
            </div>
            <textarea className="w-full h-72 bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono text-sm resize-none" readOnly value={output} placeholder="Deduplicated output..." />
          </div>
        </div>
      </div>
    </main>
  );
}