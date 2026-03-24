"use client";
import { useState } from "react";

export default function JsonToCsv() {
  const [json, setJson] = useState("");
  const [csv, setCsv] = useState("");
  const [error, setError] = useState("");

  const convert = () => {
    setError(""); setCsv("");
    try {
      const data = JSON.parse(json);
      const arr = Array.isArray(data) ? data : [data];
      if (!arr.length) { setError("Empty array."); return; }
      const headers = Object.keys(arr[0]);
      const rows = arr.map(row => headers.map(h => { const v = String(row[h] ?? ""); return v.includes(",") ? `"${v}"` : v; }).join(","));
      setCsv([headers.join(","), ...rows].join("\n"));
    } catch(e: unknown) { setError("Invalid JSON: " + String(e)); }
  };

  const download = () => {
    const blob = new Blob([csv], {type:"text/csv"});
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "data.csv"; a.click();
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-blue-400">JSON to CSV Converter</h1>
        <p className="text-gray-400 mb-6">Convert JSON arrays to CSV format for spreadsheets.</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">JSON Input</label>
            <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono text-sm focus:outline-none focus:border-blue-500" placeholder='[{"name":"Alice","age":30}]' value={json} onChange={e => setJson(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">CSV Output</label>
            <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono text-sm focus:outline-none" readOnly value={csv} />
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <button onClick={convert} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">Convert</button>
          {csv && <button onClick={download} className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg">Download CSV</button>}
        </div>
        {error && <div className="mt-4 bg-red-900/30 border border-red-600 rounded-lg p-4 text-red-400">{error}</div>}
      </div>
    </div>
  );
}
