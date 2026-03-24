"use client";
import { useState } from "react";
export default function JsonPathTester() {
  const [json, setJson] = useState("");
  const [path, setPath] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const query = () => {
    try {
      const obj = JSON.parse(json);
      const parts = path.replace(/^\$\.?/,"").split(".").filter(Boolean);
      let cur: any = obj;
      for (const p of parts) {
        const arrMatch = p.match(/^(.+)\[(\d+)\]$/);
        if (arrMatch) { cur = cur[arrMatch[1]][parseInt(arrMatch[2])]; }
        else { cur = cur[p]; }
        if (cur === undefined) { setError(`Key "${p}" not found`); setResult(""); return; }
      }
      setResult(typeof cur==="object"?JSON.stringify(cur,null,2):String(cur));
      setError("");
    } catch(e) { setError(String(e)); setResult(""); }
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">JSON Path Tester</h1>
      <p className="text-gray-400 mb-6">Query JSON data using dot notation paths</p>
      <textarea value={json} onChange={e=>setJson(e.target.value)} placeholder='Paste JSON here...' className="w-full h-40 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm mb-4" />
      <div className="flex gap-4 mb-4">
        <input value={path} onChange={e=>setPath(e.target.value)} placeholder="$.user.name or user.address[0]" className="flex-1 bg-gray-900 border border-gray-700 rounded p-3 font-mono" />
        <button onClick={query} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold">Query</button>
      </div>
      {error && <p className="text-red-400 mb-4">{error}</p>}
      {result && <pre className="bg-gray-900 border border-gray-700 rounded p-4 font-mono text-sm overflow-auto">{result}</pre>}
    </div>
  );
}