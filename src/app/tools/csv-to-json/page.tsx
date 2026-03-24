"use client";
import { useState } from "react";

export default function CsvToJson() {
  const [csv, setCsv] = useState("");
  const [json, setJson] = useState("");
  const [error, setError] = useState("");

  const convert = () => {
    setError(""); setJson("");
    try {
      const lines = csv.trim().split("\n").filter(l => l.trim());
      if (lines.length < 2) { setError("Need at least a header row and one data row."); return; }
      const headers = lines[0].split(",").map(h => h.trim().replace(/^"|"$/g, ""));
      const rows = lines.slice(1).map(line => {
        const vals = line.split(",").map(v => v.trim().replace(/^"|"$/g, ""));
        const obj: Record<string,string> = {};
        headers.forEach((h, i) => { obj[h] = vals[i] || ""; });
        return obj;
      });
      setJson(JSON.stringify(rows, null, 2));
    } catch(e: unknown) { setError(String(e)); }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-blue-400">CSV to JSON Converter</h1>
        <p className="text-gray-400 mb-6">Convert CSV data to JSON format instantly.</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">CSV Input</label>
            <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono text-sm focus:outline-none focus:border-blue-500" placeholder="name,age,city
Alice,30,NYC
Bob,25,LA" value={csv} onChange={e => setCsv(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">JSON Output</label>
            <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono text-sm focus:outline-none" readOnly value={json} />
          </div>
        </div>
        <button onClick={convert} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">Convert</button>
        {error && <div className="mt-4 bg-red-900/30 border border-red-600 rounded-lg p-4 text-red-400">{error}</div>}
      </div>
    </div>
  );
}
