"use client";
import { useState } from "react";

export default function JSONMinifier() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [stats, setStats] = useState("");

  const minify = () => {
    try {
      setError("");
      const parsed = JSON.parse(input);
      const result = JSON.stringify(parsed);
      const saved = ((1 - result.length / input.length) * 100).toFixed(1);
      setOutput(result);
      setStats(`${input.length} → ${result.length} bytes (${saved}% saved)`);
    } catch(e) { setError(String(e)); }
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">JSON Minifier</h1>
        <p className="text-gray-400 mb-6">Remove whitespace from JSON to reduce payload size.</p>
        {error && <div className="bg-red-900/50 border border-red-700 rounded p-3 mb-4 text-red-300 text-sm">{error}</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Formatted JSON</label>
            <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder='{ "key": "value" }' className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Minified JSON</label>
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