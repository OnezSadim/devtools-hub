"use client";
import { useState } from "react";
export default function SVGOptimizer() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const optimize = () => {
    let svg = input;
    svg = svg.replace(/<!--[\s\S]*?-->/g, "");
    svg = svg.replace(/\s+/g, " ");
    svg = svg.replace(/> </g, "><");
    svg = svg.replace(/ style=""/g, "");
    svg = svg.replace(/ id="[^"]*"/g, "");
    svg = svg.trim();
    setOutput(svg);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">SVG Optimizer</h1>
      <p className="text-gray-400 mb-6">Clean and minify SVG markup</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Input SVG</label>
          <textarea value={input} onChange={e=>setInput(e.target.value)} className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" placeholder="Paste SVG here..."/>
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Optimized SVG</label>
          <textarea value={output} readOnly className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm"/>
        </div>
      </div>
      <div className="mt-4 flex gap-3">
        <button onClick={optimize} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium">Optimize</button>
        <button onClick={()=>navigator.clipboard.writeText(output)} className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded">Copy</button>
      </div>
      {output && <p className="mt-3 text-sm text-green-400">Saved {input.length - output.length} characters ({Math.round((1-output.length/input.length)*100)}%)</p>}
    </main>
  );
}