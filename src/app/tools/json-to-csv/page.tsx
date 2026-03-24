"use client";
import { useState } from "react";
export default function JsonToCsv() {
  const [json, setJson] = useState("");
  const [csv, setCsv] = useState("");
  const [error, setError] = useState("");
  function convert() {
    setError("");
    try {
      const data = JSON.parse(json);
      if(!Array.isArray(data)||data.length===0) { setError("Input must be a non-empty JSON array"); return; }
      const headers = Object.keys(data[0]);
      const rows = [headers.join(","), ...data.map(row=>headers.map(h=>JSON.stringify(row[h]??"")||"")
      .join(","))];
      setCsv(rows.join("\n"));
    } catch(e) { setError("Invalid JSON"); }
  }
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">JSON to CSV Converter</h1>
      <textarea className="w-full h-40 p-3 bg-gray-800 rounded border border-gray-600 text-white mb-3" placeholder="Paste JSON array..." value={json} onChange={e=>setJson(e.target.value)} />
      <button onClick={convert} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-4">Convert</button>
      {error&&<p className="text-red-400 mb-3">{error}</p>}
      {csv&&<pre className="p-3 bg-gray-800 rounded text-sm overflow-auto max-h-60">{csv}</pre>}
    </div>
  );
}