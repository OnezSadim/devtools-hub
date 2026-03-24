"use client";
import { useState } from "react";

export default function JsonToCsv() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const convert = () => {
    try {
      const data = JSON.parse(input);
      const arr = Array.isArray(data) ? data : [data];
      if (arr.length === 0) { setOutput(""); setError(""); return; }
      const keys = [...new Set(arr.flatMap(Object.keys))];
      const esc = (v: unknown) => {
        const s = v === null || v === undefined ? "" : String(v);
        return s.includes(",") || s.includes('"') || s.includes("\n") ? '"' + s.replace(/"/g, '""') + '"' : s;
      };
      const rows = [keys.join(","), ...arr.map(r => keys.map(k => esc(r[k])).join(","))];
      setOutput(rows.join("\n"));
      setError("");
    } catch (e: any) { setError(e.message); setOutput(""); }
  };

  const download = () => {
    const blob = new Blob([output], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "data.csv";
    a.click();
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">JSON to CSV Converter</h1>
      <p className="text-gray-400 mb-6">Convert JSON arrays to CSV format with download.</p>
      <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder='[{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]' className="w-full h-40 bg-gray-800 border border-gray-700 rounded p-3 mb-3 font-mono text-sm" />
      {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
      <div className="flex gap-2 mb-4">
        <button onClick={convert} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium">Convert</button>
        {output && <button onClick={download} className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded font-medium">Download CSV</button>}
      </div>
      <textarea readOnly value={output} className="w-full h-40 bg-gray-800 border border-gray-700 rounded p-3 font-mono text-sm" />
    </div>
  );
}
