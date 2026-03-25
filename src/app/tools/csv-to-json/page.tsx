"use client";
import { useState } from "react";
export default function CsvToJson() {
  const [csv, setCsv] = useState("");
  const [json, setJson] = useState("");
  const [error, setError] = useState("");
  function convert() {
    try {
      setError("");
      const lines = csv.trim().split("
").map(l => l.trim()).filter(Boolean);
      if (lines.length < 2) throw new Error("Need at least a header row and one data row");
      const headers = lines[0].split(",").map(h => h.trim().replace(/^"|"$/g, ""));
      const rows = lines.slice(1).map(line => {
        const vals = line.match(/('[^']*'|[^,]+)/g)?.map(v => v.trim().replace(/^"|"$/g, "")) ?? [];
        return Object.fromEntries(headers.map((h, i) => [h, isNaN(Number(vals[i])) ? (vals[i] ?? "") : Number(vals[i])]));
      });
      setJson(JSON.stringify(rows, null, 2));
    } catch(e) { setError(String(e)); }
  }
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">CSV to JSON Converter</h1>
        <p className="text-gray-400 mb-6">Convert CSV data to JSON format instantly.</p>
        <textarea className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-sm font-mono h-40 mb-3" placeholder="name,age,city&#10;Alice,30,NYC&#10;Bob,25,LA" value={csv} onChange={e => setCsv(e.target.value)} />
        {error && <div className="text-red-400 text-sm mb-3">{error}</div>}
        <button onClick={convert} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm mb-4">Convert to JSON</button>
        {json && (
          <div className="bg-gray-900 border border-gray-700 rounded p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-500">JSON Output</span>
              <button onClick={() => navigator.clipboard.writeText(json)} className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded">Copy</button>
            </div>
            <pre className="text-sm font-mono overflow-auto max-h-64">{json}</pre>
          </div>
        )}
      </div>
    </main>
  );
}