"use client";
import { useState } from "react";
function toYAML(obj: unknown, indent = 0): string {
  const pad = "  ".repeat(indent);
  if (obj === null) return "null";
  if (typeof obj === "boolean" || typeof obj === "number") return String(obj);
  if (typeof obj === "string") return obj.includes(":") || obj.includes("#") ? `'${obj}'` : obj;
  if (Array.isArray(obj)) return obj.map(v => `${pad}- ${toYAML(v, indent+1)}`).join("\n");
  if (typeof obj === "object") {
    return Object.entries(obj as Record<string,unknown>).map(([k,v]) => {
      if (typeof v === "object" && v !== null && !Array.isArray(v)) return `${pad}${k}:\n${toYAML(v, indent+1)}`;
      return `${pad}${k}: ${toYAML(v, indent+1)}`;
    }).join("\n");
  }
  return String(obj);
}
export default function JsonToYaml() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const convert = () => {
    try {
      const obj = JSON.parse(input);
      setOutput(toYAML(obj));
      setError("");
    } catch(e) { setError(String(e)); }
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">JSON to YAML</h1>
        <p className="text-gray-400 mb-6">Convert JSON to YAML format</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-gray-400 text-sm mb-2 block">JSON Input</label>
            <textarea value={input} onChange={e=>setInput(e.target.value)} rows={16} className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm resize-none" placeholder='{"name": "John", "age": 30}'/>
          </div>
          <div>
            <label className="text-gray-400 text-sm mb-2 block">YAML Output</label>
            <textarea value={output} readOnly rows={16} className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm resize-none text-green-400"/>
          </div>
        </div>
        {error && <p className="text-red-400 mt-2">{error}</p>}
        <button onClick={convert} className="mt-4 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold">Convert</button>
      </div>
    </main>
  );
}