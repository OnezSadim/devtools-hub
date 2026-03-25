"use client";
import { useState } from "react";
export default function JsonToCsv() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const convert = () => {
    try {
      setError("");
      const data = JSON.parse(input);
      const arr = Array.isArray(data) ? data : [data];
      if (arr.length === 0) { setOutput(""); return; }
      const keys = Object.keys(arr[0]);
      const header = keys.join(",");
      const rows = arr.map(row => keys.map(k => { const v = String(row[k] ?? ""); return v.includes(",") || v.includes("''") ? `'''' ${v}'''' ` : v; }).join(","));
      setOutput([header, ...rows].join("
"));
    } catch (e: any) { setError(e.message); }
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">JSON to CSV</h1>
      <p className="text-gray-400 mb-6">Convert a JSON array of objects to CSV format.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">JSON Input</label>
          <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" value={input} onChange={e => setInput(e.target.value)} placeholder={'[{"name":"Alice","age":30}]' } />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">CSV Output</label>
          <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" value={output} readOnly />
        </div>
      </div>
      {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
      <div className="flex gap-2 mt-3">
        <button onClick={convert} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold">Convert</button>
        {output && <button onClick={() => { const b = new Blob([output],{type:'text/csv'}); const a=document.createElement('a'); a.href=URL.createObjectURL(b); a.download='data.csv'; a.click(); }} className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded font-semibold">Download CSV</button>}
      </div>
    </main>
  );
}