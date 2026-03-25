"use client";
import { useState } from "react";
export default function DuplicateLineRemover() {
  const [text, setText] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(true);
  const process = () => {
    const lines = text.split("\n");
    const seen = new Set();
    return lines.filter(line => {
      const key = caseSensitive ? line : line.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    }).join("\n");
  };
  const result = process();
  const removed = text.split("\n").length - result.split("\n").length;
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Duplicate Line Remover</h1>
      <p className="text-gray-400 mb-6">Remove duplicate lines from text, keeping only unique lines.</p>
      <label className="flex items-center gap-2 mb-4 cursor-pointer">
        <input type="checkbox" checked={caseSensitive} onChange={e => setCaseSensitive(e.target.checked)} className="w-4 h-4" />
        <span className="text-gray-300">Case sensitive</span>
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="text-sm text-gray-400 mb-2">Input ({text.split("\n").length} lines)</div>
          <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 text-white resize-none" placeholder="Paste lines here..." value={text} onChange={e => setText(e.target.value)} />
        </div>
        <div>
          <div className="text-sm text-gray-400 mb-2">Output ({result.split("\n").filter(l=>l).length} unique, {removed} removed)</div>
          <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 text-green-400 resize-none" readOnly value={result} />
        </div>
      </div>
    </div>
  );
}
