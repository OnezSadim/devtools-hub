"use client";
import { useState } from "react";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const format = () => {
    try {
      setOutput(JSON.stringify(JSON.parse(input), null, 2));
      setError("");
    } catch (e: any) { setError(e.message); setOutput(""); }
  };
  const minify = () => {
    try {
      setOutput(JSON.stringify(JSON.parse(input)));
      setError("");
    } catch (e: any) { setError(e.message); setOutput(""); }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">JSON Formatter</h1>
      <p className="text-gray-400 mb-6">Format, validate and minify JSON data</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Input</label>
          <textarea className="w-full h-80 bg-gray-900 border border-gray-700 rounded-lg p-3 font-mono text-sm focus:border-blue-500 focus:outline-none resize-none" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Paste JSON here..." />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Output</label>
          <textarea className="w-full h-80 bg-gray-900 border border-gray-700 rounded-lg p-3 font-mono text-sm focus:border-blue-500 focus:outline-none resize-none" value={output} readOnly />
        </div>
      </div>
      {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
      <div className="flex gap-3 mt-4">
        <button onClick={format} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition">Format</button>
        <button onClick={minify} className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition">Minify</button>
        <button onClick={() => { navigator.clipboard.writeText(output); }} className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition">Copy Output</button>
      </div>
    </div>
  );
}
