"use client";
import { useState } from "react";

export default function CSVToJSON() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  function convert() {
    try {
      const lines = input.trim().split("
").filter(Boolean);
      if (lines.length < 2) { setError("Need header row + at least one data row"); setOutput(""); return; }
      const headers = lines[0].split(",").map(h=>h.trim().replace(/^"|"$/g,""));
      const rows = lines.slice(1).map(line => {
        const vals = line.split(",").map(v=>v.trim().replace(/^"|"$/g,""));
        const obj: Record<string,string> = {};
        headers.forEach((h,i)=>{ obj[h] = vals[i] || ""; });
        return obj;
      });
      setOutput(JSON.stringify(rows, null, 2));
      setError("");
    } catch(e) {
      setError("Parse error: " + (e as Error).message);
      setOutput("");
    }
  }

  const sample = "name,age,city
Alice,30,Amsterdam
Bob,25,Berlin
Carol,35,Paris";

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">CSV to JSON Converter</h1>
      <p className="text-gray-400 mb-6">Convert CSV data to JSON format instantly.</p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-400 block mb-1">CSV Input</label>
          <textarea value={input} onChange={e=>setInput(e.target.value)} className="w-full h-64 bg-gray-900 rounded p-3 font-mono text-sm resize-none" placeholder="name,age,city
Alice,30,NYC" />
        </div>
        <div>
          <label className="text-sm text-gray-400 block mb-1">JSON Output</label>
          <textarea readOnly value={output} className="w-full h-64 bg-gray-900 rounded p-3 font-mono text-sm resize-none text-green-400" />
        </div>
      </div>
      {error && <div className="text-red-400 text-sm mt-2">{error}</div>}
      <div className="flex gap-3 mt-4">
        <button onClick={convert} className="bg-blue-600 hover:bg-blue-700 rounded px-6 py-2 font-semibold">Convert</button>
        <button onClick={()=>{setInput(sample);setOutput("");}} className="bg-gray-700 hover:bg-gray-600 rounded px-4 py-2">Load Sample</button>
        <button onClick={()=>navigator.clipboard.writeText(output)} className="bg-gray-700 hover:bg-gray-600 rounded px-4 py-2">Copy JSON</button>
      </div>
    </main>
  );
}