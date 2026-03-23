"use client";
import { useState } from "react";

export default function UrlEncoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encode = () => setOutput(encodeURIComponent(input));
  const decode = () => { try { setOutput(decodeURIComponent(input)); } catch { setOutput("Invalid encoded string"); } };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">URL Encoder / Decoder</h1>
      <p className="text-gray-400 mb-6">Encode and decode URL components</p>
      <label className="block text-sm text-gray-400 mb-1">Input</label>
      <textarea className="w-full h-40 bg-gray-900 border border-gray-700 rounded-lg p-3 font-mono text-sm focus:border-blue-500 focus:outline-none resize-none mb-4" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter URL or text..." />
      <div className="flex gap-3 mb-4">
        <button onClick={encode} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition">Encode</button>
        <button onClick={decode} className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition">Decode</button>
        <button onClick={() => navigator.clipboard.writeText(output)} className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition">Copy</button>
      </div>
      <label className="block text-sm text-gray-400 mb-1">Output</label>
      <textarea className="w-full h-40 bg-gray-900 border border-gray-700 rounded-lg p-3 font-mono text-sm focus:border-blue-500 focus:outline-none resize-none" value={output} readOnly />
    </div>
  );
}
