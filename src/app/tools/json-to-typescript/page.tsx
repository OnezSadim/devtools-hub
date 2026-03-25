"use client";
import { useState } from "react";
export default function JsonToTypescript() {
  const [json, setJson] = useState('{\n  "name": "John",\n  "age": 30,\n  "tags": ["dev", "ts"],\n  "address": {\n    "city": "Amsterdam",\n    "zip": "1000AA"\n  }\n}');
  function inferType(val: unknown, indent = 0): string {
    const pad = "  ".repeat(indent);
    if (val === null) return "null";
    if (Array.isArray(val)) {
      if (val.length === 0) return "unknown[]";
      const t = inferType(val[0], indent);
      return t + "[]";
    }
    if (typeof val === "object") {
      const lines = Object.entries(val as Record<string,unknown>).map(([k,v]) => `${pad}  ${k}: ${inferType(v, indent+1)};`);
      return "{\n" + lines.join("\n") + "\n" + pad + "}";
    }
    return typeof val;
  }
  let output = "";
  try {
    const parsed = JSON.parse(json);
    output = "interface Root " + inferType(parsed);
  } catch { output = "Invalid JSON"; }
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">JSON to TypeScript</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-2 text-sm text-gray-400">JSON Input</label>
          <textarea value={json} onChange={e=>setJson(e.target.value)} rows={14} className="w-full bg-gray-800 rounded p-3 font-mono text-sm" />
        </div>
        <div>
          <label className="block mb-2 text-sm text-gray-400">TypeScript Interface</label>
          <pre className="bg-gray-900 rounded p-3 font-mono text-sm text-green-400 h-64 overflow-auto">{output}</pre>
          <button onClick={()=>navigator.clipboard.writeText(output)} className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm">Copy</button>
        </div>
      </div>
    </div>
  );
}
