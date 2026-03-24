"use client";
import { useState } from "react";
export default function RemoveDuplicateLines() {
  const [text, setText] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(true);
  const process = () => {
    const lines = text.split("\n");
    const seen = new Set<string>();
    return lines.filter(l => {
      const key = caseSensitive ? l : l.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key); return true;
    }).join("\n");
  };
  const dupes = text.split("\n").length - process().split("\n").length;
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Remove Duplicate Lines</h1>
      <p className="text-gray-400 mb-6">Remove duplicate lines from text.</p>
      <label className="flex items-center gap-2 mb-4 cursor-pointer"><input type="checkbox" checked={caseSensitive} onChange={e => setCaseSensitive(e.target.checked)} /><span>Case sensitive</span></label>
      <textarea className="w-full h-48 bg-gray-900 border border-gray-700 rounded p-3 text-sm mb-4" placeholder="Paste lines here..." value={text} onChange={e => setText(e.target.value)} />
      {text && (<><p className="text-sm text-gray-400 mb-2">{dupes} duplicate(s) removed</p><textarea className="w-full h-48 bg-gray-900 border border-gray-700 rounded p-3 text-sm" readOnly value={process()} /></>)}
    </div>
  );
}