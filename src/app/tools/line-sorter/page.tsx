"use client";
import { useState } from "react";
export default function LineSorter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);
  const sort = (reverse=false) => {
    const lines = input.split("\n");
    const sorted = [...lines].sort((a,b) => a.localeCompare(b));
    setOutput(reverse ? sorted.reverse().join("\n") : sorted.join("\n"));
  };
  const shuffle = () => {
    const lines = input.split("\n");
    for(let i=lines.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[lines[i],lines[j]]=[lines[j],lines[i]];}
    setOutput(lines.join("\n"));
  };
  const copy = () => { navigator.clipboard.writeText(output); setCopied(true); setTimeout(()=>setCopied(false),2000); };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Line Sorter</h1>
        <p className="text-gray-400 mb-6">Sort lines alphabetically, reverse, or shuffle.</p>
        <div className="flex gap-2 mb-4">
          <button onClick={() => sort(false)} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg">Sort A-Z</button>
          <button onClick={() => sort(true)} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg">Sort Z-A</button>
          <button onClick={shuffle} className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg">Shuffle</button>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Input</label>
            <textarea className="w-full h-72 bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono text-sm focus:outline-none focus:border-blue-500 resize-none" placeholder="One line per item..." value={input} onChange={e => setInput(e.target.value)} />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm text-gray-400">Output</label>
              {output && <button onClick={copy} className="text-sm px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded">{copied ? "Copied!" : "Copy"}</button>}
            </div>
            <textarea className="w-full h-72 bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono text-sm resize-none" readOnly value={output} placeholder="Sorted output..." />
          </div>
        </div>
      </div>
    </main>
  );
}