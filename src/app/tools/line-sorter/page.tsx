"use client";
import { useState } from "react";
export default function LineSorter() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("az");
  const [dedup, setDedup] = useState(false);
  const process = () => {
    let lines = input.split("\n");
    if (dedup) lines = [...new Set(lines)];
    if (mode === "az") lines.sort();
    else if (mode === "za") lines.sort().reverse();
    else if (mode === "len") lines.sort((a,b) => a.length - b.length);
    else if (mode === "rlen") lines.sort((a,b) => b.length - a.length);
    else if (mode === "random") lines.sort(() => Math.random() - 0.5);
    return lines.join("\n");
  };
  const output = input ? process() : "";
  return (<div className="min-h-screen bg-gray-950 text-white p-8"><h1 className="text-3xl font-bold mb-2">Line Sorter</h1><p className="text-gray-400 mb-6">Sort, deduplicate, and organize lines of text.</p><div className="flex flex-wrap gap-2 mb-4">{[["az","A → Z"],["za","Z → A"],["len","Shortest first"],["rlen","Longest first"],["random","Random"]].map(([m,l]) => (<button key={m} onClick={() => setMode(m)} className={`px-3 py-1.5 rounded text-sm ${mode===m?"bg-blue-600":"bg-gray-800 hover:bg-gray-700"}`}>{l}</button>))}<label className="flex items-center gap-2 text-sm ml-2"><input type="checkbox" checked={dedup} onChange={e=>setDedup(e.target.checked)} />Remove duplicates</label></div><div className="grid md:grid-cols-2 gap-4"><textarea className="bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm h-64" placeholder="Paste lines here..." value={input} onChange={e => setInput(e.target.value)} /><div className="bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm h-64 overflow-auto whitespace-pre-wrap">{output || <span className="text-gray-600">Output appears here</span>}</div></div><button onClick={() => navigator.clipboard.writeText(output)} className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm">Copy</button></div>);
}