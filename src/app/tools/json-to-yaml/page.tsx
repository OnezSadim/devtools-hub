"use client";
import { useState } from "react";
function jsonToYaml(obj, indent = 0) {
  const pad = "  ".repeat(indent);
  if (obj === null) return "null";
  if (typeof obj === "boolean") return obj.toString();
  if (typeof obj === "number") return obj.toString();
  if (typeof obj === "string") return obj.includes("\n") || obj.includes(":") || obj.includes("#") ? `'${obj.replace(/'/g, "''")}' ` : obj;
  if (Array.isArray(obj)) return obj.length === 0 ? "[]" : "\n" + obj.map(v => `${pad}- ${jsonToYaml(v, indent + 1)}`).join("\n");
  if (typeof obj === "object") {
    const keys = Object.keys(obj);
    if (keys.length === 0) return "{}";
    return "\n" + keys.map(k => { const v = obj[k]; const val = jsonToYaml(v, indent + 1); return typeof v === "object" && v !== null ? `${pad}${k}:${val}` : `${pad}${k}: ${val}`; }).join("\n");
  }
  return String(obj);
}
export default function JsonToYaml() {
  const [input, setInput] = useState('{'name': 'example', 'version': 1, 'tags': ['web', 'api']}'.replace(/'/g, '"'));
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const convert = () => {
    setError("");
    try {
      const obj = JSON.parse(input);
      const yaml = Object.entries(obj).map(([k, v]) => { const val = jsonToYaml(v, 1); return typeof v === "object" && v !== null ? `${k}:${val}` : `${k}: ${val}`; }).join("\n");
      setOutput(yaml);
    } catch (e) { setError(e.message); }
  };
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">JSON to YAML Converter</h1>
        <p className="text-gray-400 mb-6">Convert JSON to YAML format instantly in your browser.</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-400 mb-1 block">JSON Input</label>
            <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" value={input} onChange={e => setInput(e.target.value)} />
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-1 block">YAML Output</label>
            <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" readOnly value={output} />
          </div>
        </div>
        {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
        <div className="flex gap-3 mt-4">
          <button onClick={convert} className="flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold">Convert</button>
          {output && <button onClick={() => navigator.clipboard.writeText(output)} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded">Copy YAML</button>}
        </div>
      </div>
    </main>
  );
}