"use client";
import { useState } from "react";
export default function JsonToCsv() {
  const [json, setJson] = useState("");
  const [error, setError] = useState("");
  const [csv, setCsv] = useState("");
  function convert() {
    try {
      setError("");
      const data = JSON.parse(json);
      const arr = Array.isArray(data) ? data : [data];
      const keys = Array.from(new Set(arr.flatMap(obj => Object.keys(obj))));
      const escape = (v: unknown) => { const s = String(v ?? ""); return s.includes(",") || s.includes("'\n") ? `"${s.replace(/"/g, ''''''')}"` : s; };
      const rows = [keys.join(","), ...arr.map(row => keys.map(k => escape(row[k])).join(","))];
      setCsv(rows.join("
"));
    } catch (e) { setError(String(e)); }
  }
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">JSON to CSV Converter</h1>
        <p className="text-gray-400 mb-6">Convert JSON arrays or objects to CSV format.</p>
        <textarea className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-sm font-mono h-40 mb-3" placeholder={'[''{"name":"Alice","age":30},{"name":"Bob","age":25}]'} value={json} onChange={e => setJson(e.target.value)} />
        {error && <div className="text-red-400 text-sm mb-3">{error}</div>}
        <button onClick={convert} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm mb-4">Convert to CSV</button>
        {csv && (
          <div className="bg-gray-900 border border-gray-700 rounded p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-500">CSV Output</span>
              <button onClick={() => navigator.clipboard.writeText(csv)} className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded">Copy</button>
            </div>
            <pre className="text-sm font-mono whitespace-pre-wrap">{csv}</pre>
          </div>
        )}
      </div>
    </main>
  );
}