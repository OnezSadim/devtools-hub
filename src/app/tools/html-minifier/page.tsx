"use client";
import { useState } from "react";

export default function HTMLMinifier() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [stats, setStats] = useState("");

  const minify = () => {
    let result = input
      .replace(/<!--(?!\[if)[\s\S]*?-->/g, "")
      .replace(/\s+/g, " ")
      .replace(/> </g, "><")
      .replace(/ >/g, ">")
      .trim();
    const saved = ((1 - result.length / input.length) * 100).toFixed(1);
    setOutput(result);
    setStats(`${input.length} → ${result.length} bytes (${saved}% saved)`);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">HTML Minifier</h1>
        <p className="text-gray-400 mb-6">Remove whitespace and comments from HTML to reduce file size.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Input HTML</label>
            <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="<html>..." className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Minified HTML</label>
            <textarea value={output} readOnly className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" />
          </div>
        </div>
        <div className="flex gap-3 mt-4 items-center">
          <button onClick={minify} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium">Minify</button>
          <button onClick={()=>{navigator.clipboard.writeText(output)}} className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded">Copy</button>
          {stats && <span className="text-green-400 text-sm">{stats}</span>}
        </div>
      </div>
    </main>
  );
}