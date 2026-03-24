"use client";
import { useState } from "react";
export default function CSVToJSON() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [pretty, setPretty] = useState(true);
  const [delimiter, setDelimiter] = useState(",");
  const convert = () => {
    try {
      const lines = input.trim().split("\n").filter(l => l.trim());
      if (lines.length < 2) throw new Error("Need at least a header row and one data row");
      const headers = lines[0].split(delimiter).map(h => h.trim().replace(/^'|''$/g,"").replace(/^"|"$/g,""));
      const rows = lines.slice(1).map(line => {
        const vals = line.split(delimiter).map(v => v.trim().replace(/^'|''$/g,"").replace(/^"|"$/g,""));
        const obj: Record<string, string> = {};
        headers.forEach((h, i) => { obj[h] = vals[i] ?? ""; });
        return obj;
      });
      setOutput(JSON.stringify(rows, null, pretty ? 2 : undefined));
      setError("");
    } catch (e: unknown) { setError(e instanceof Error ? e.message : "Error"); }
  };
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">CSV to JSON</h1>
        <p className="text-gray-400 mb-6">Convert CSV data to JSON format</p>
        <div className="flex gap-4 mb-4 items-center">
          <label className="text-gray-300">Delimiter:
            <select value={delimiter} onChange={e=>setDelimiter(e.target.value)}
              className="ml-2 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm">
              <option value=",">Comma (,)</option>
              <option value=";">Semicolon (;)</option>
              <option value="\t">Tab</option>
              <option value="|">Pipe (|)</option>
            </select>
          </label>
          <label className="flex items-center gap-2 text-gray-300">
            <input type="checkbox" checked={pretty} onChange={e=>setPretty(e.target.checked)} />
            Pretty print
          </label>
          <button onClick={convert} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium">Convert</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-gray-400 text-sm mb-1 block">CSV Input</label>
            <textarea value={input} onChange={e=>setInput(e.target.value)} rows={18}
              placeholder="name,age,city
Alice,30,NYC
Bob,25,LA"
              className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm resize-none" />
          </div>
          <div>
            <label className="text-gray-400 text-sm mb-1 block">JSON Output</label>
            <textarea value={output} readOnly rows={18}
              className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm resize-none" />
          </div>
        </div>
        {error && <p className="mt-2 text-red-400">{error}</p>}
        {output && <button onClick={()=>navigator.clipboard.writeText(output)} className="mt-3 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm">Copy JSON</button>}
      </div>
    </main>
  );
}