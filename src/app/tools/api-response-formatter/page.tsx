"use client";
import { useState } from "react";
export default function APIResponseFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [stats, setStats] = useState<{keys:number,size:string}|null>(null);
  const format = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
      const keys = JSON.stringify(parsed).match(/"[^"]+":/g)?.length || 0;
      setStats({ keys, size: (new Blob([input]).size / 1024).toFixed(2) + " KB" });
    } catch (e) {
      setError("Invalid JSON: " + String(e));
      setOutput("");
    }
  };
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">API Response Formatter</h1>
        <p className="text-gray-400 mb-6">Paste raw API JSON responses to format and inspect them.</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Raw Response</label>
            <textarea value={input} onChange={e => setInput(e.target.value)} rows={16} placeholder='{"status":200,"data":{"id":1}}' className="w-full bg-gray-800 border border-gray-700 rounded p-3 font-mono text-sm" />
            <button onClick={format} className="mt-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-medium w-full">Format</button>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Formatted Output</label>
            {error && <p className="text-red-400 text-sm mb-2">{error}</p>}
            {stats && <p className="text-gray-400 text-xs mb-1">{stats.keys} keys · {stats.size}</p>}
            <pre className="bg-gray-900 border border-gray-700 rounded p-3 text-sm font-mono overflow-auto h-64 whitespace-pre-wrap">{output}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}