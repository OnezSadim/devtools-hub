"use client";
import { useState } from "react";
function parseTOML(text: string): unknown {
  const result: Record<string, unknown> = {};
  let current = result;
  const lines = text.split("\n");
  for (const raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    if (line.startsWith("[") && !line.startsWith("[[")) {
      const key = line.slice(1, line.indexOf("]"));
      result[key] = result[key] || {};
      current = result[key] as Record<string, unknown>;
    } else if (line.includes("=")) {
      const eq = line.indexOf("=");
      const k = line.slice(0, eq).trim();
      let v: unknown = line.slice(eq + 1).trim();
      if (typeof v === "string") {
        if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1,-1);
        else if (v.startsWith("'") && v.endsWith("'")) v = v.slice(1,-1);
        else if (v === "true") v = true;
        else if (v === "false") v = false;
        else if (!isNaN(Number(v))) v = Number(v);
        else if (v.startsWith("[")) {
          try { v = JSON.parse(v.replace(/'/g,'"').replace(/(\w+)(?=\s*[,\]])/g, (m) => isNaN(Number(m)) ? `"${m}"` : m)); } catch { /* keep as string */ }
        }
      }
      current[k] = v;
    }
  }
  return result;
}
export default function TOMLParser() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const parse = () => {
    try {
      const parsed = parseTOML(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (e: unknown) { setError(e instanceof Error ? e.message : "Error"); }
  };
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">TOML Parser</h1>
        <p className="text-gray-400 mb-6">Parse TOML configuration files to JSON</p>
        <button onClick={parse} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium mb-4">Parse TOML</button>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-gray-400 text-sm mb-1 block">TOML Input</label>
            <textarea value={input} onChange={e=>setInput(e.target.value)} rows={18}
              placeholder='[database]
host = "localhost"
port = 5432
enabled = true'
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