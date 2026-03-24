"use client";
import { useState } from "react";
export default function JSONToCSV() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [delimiter, setDelimiter] = useState(",");
  const convert = () => {
    try {
      const data = JSON.parse(input);
      const arr: Record<string, unknown>[] = Array.isArray(data) ? data : [data];
      if (arr.length === 0) throw new Error("Empty array");
      const keys = Array.from(new Set(arr.flatMap(obj => Object.keys(obj))));
      const escape = (val: unknown) => {
        const s = val == null ? "" : String(val);
        return s.includes(delimiter) || s.includes(""")||s.includes("\n") ? `"${s.replace(/"/g,''''''''''''''''''''''''''''''''''')}"` : s;
      };
      const rows = [keys.map(escape).join(delimiter)];
      arr.forEach(obj => rows.push(keys.map(k => escape(obj[k])).join(delimiter)));
      setOutput(rows.join("\n"));
      setError("");
    } catch (e: unknown) { setError(e instanceof Error ? e.message : "Error"); }
  };
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">JSON to CSV</h1>
        <p className="text-gray-400 mb-6">Convert JSON arrays to CSV format</p>
        <div className="flex gap-4 mb-4 items-center">
          <label className="text-gray-300">Delimiter:
            <select value={delimiter} onChange={e=>setDelimiter(e.target.value)}
              className="ml-2 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm">
              <option value=",">Comma (,)</option>
              <option value=";">Semicolon (;)</option>
              <option value="\t">Tab</option>
            </select>
          </label>
          <button onClick={convert} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium">Convert</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-gray-400 text-sm mb-1 block">JSON Input</label>
            <textarea value={input} onChange={e=>setInput(e.target.value)} rows={18}
              placeholder='[{"name":"Alice","age":30},{"name":"Bob","age":25}]'
              className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm resize-none" />
          </div>
          <div>
            <label className="text-gray-400 text-sm mb-1 block">CSV Output</label>
            <textarea value={output} readOnly rows={18}
              className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm resize-none" />
          </div>
        </div>
        {error && <p className="mt-2 text-red-400">{error}</p>}
        {output && <button onClick={()=>navigator.clipboard.writeText(output)} className="mt-3 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm">Copy CSV</button>}
      </div>
    </main>
  );
}