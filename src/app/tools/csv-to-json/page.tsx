"use client";
import { useState } from "react";
export default function CsvToJson() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const convert = () => {
    try {
      setError("");
      const lines = input.trim().split("
");
      if (lines.length < 2) throw new Error("Need header + at least one data row");
      const headers = lines[0].split(",").map(h => h.trim());
      const rows = lines.slice(1).map(line => {
        const vals = line.split(",").map(v => v.trim());
        return Object.fromEntries(headers.map((h, i) => [h, vals[i] ?? ""]));
      });
      setOutput(JSON.stringify(rows, null, 2));
    } catch (e: any) { setError(e.message); }
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">CSV to JSON</h1>
      <p className="text-gray-400 mb-6">Convert CSV data to a JSON array of objects.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">CSV Input</label>
          <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" value={input} onChange={e => setInput(e.target.value)} placeholder="name,age
Alice,30
Bob,25" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">JSON Output</label>
          <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" value={output} readOnly />
        </div>
      </div>
      {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
      <div className="flex gap-2 mt-3">
        <button onClick={convert} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold">Convert</button>
        {output && <button onClick={() => navigator.clipboard.writeText(output)} className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm">Copy JSON</button>}
      </div>
    </main>
  );
}