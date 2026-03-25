"use client";
import { useState } from "react";
export default function SVGOptimizer() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const optimize = () => {
    let r = input
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/\s+/g, " ")
      .replace(/> </g, "><")
      .replace(/ (width|height)="[^"]*"/g, "")
      .trim();
    setOutput(r);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">SVG Optimizer</h1>
      <p className="text-gray-400 mb-6">Remove comments, whitespace and unnecessary attributes from SVG markup.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Input SVG</label>
          <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" value={input} onChange={e => setInput(e.target.value)} placeholder="Paste SVG here..." />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Optimized SVG</label>
          <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" value={output} readOnly />
        </div>
      </div>
      <button onClick={optimize} className="mt-4 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold">Optimize</button>
      {output && <p className="mt-2 text-green-400 text-sm">Reduced from {input.length} to {output.length} chars ({Math.round((1-output.length/input.length)*100)}% smaller)</p>}
    </main>
  );
}