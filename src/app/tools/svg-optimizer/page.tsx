"use client";
import { useState } from "react";
export default function SvgOptimizer() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const optimize = () => {
    let o = input
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/\s+/g, " ")
      .replace(/> </g, "><")
      .replace(/ (fill|stroke)="none"/g, "")
      .replace(/\s*([{};:,])\s*/g, "$1")
      .trim();
    setOutput(o);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">SVG Optimizer</h1>
        <p className="text-gray-400 mb-6">Remove comments, whitespace, and unnecessary attributes from SVG code.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Input SVG</label>
            <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" value={input} onChange={e => setInput(e.target.value)} placeholder="Paste SVG code here..." />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Optimized SVG</label>
            <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" value={output} readOnly placeholder="Optimized output..." />
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <button onClick={optimize} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium">Optimize</button>
          <button onClick={() => navigator.clipboard.writeText(output)} className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded">Copy</button>
          {output && <span className="text-gray-400 self-center text-sm">Saved {Math.max(0, input.length - output.length)} chars ({input.length ? Math.round((1 - output.length/input.length)*100) : 0}%)</span>}
        </div>
      </div>
    </main>
  );
}