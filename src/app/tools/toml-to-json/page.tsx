"use client";
import { useState } from "react";
export default function TomlToJson() {
  const [toml, setToml] = useState("");
  const [json, setJson] = useState("");
  const [error, setError] = useState("");
  function parseTOML(text: string): Record<string, unknown> {
    const result: Record<string, unknown> = {};
    let current = result;
    const lines = text.split("
");
    for (const line of lines) {
      const t = line.trim();
      if (!t || t.startsWith("#")) continue;
      const sectionMatch = t.match(/^\[([^\]]+)\]$/);
      if (sectionMatch) {
        const parts = sectionMatch[1].split(".");
        current = result;
        for (const part of parts) {
          if (!current[part]) current[part] = {};
          current = current[part] as Record<string, unknown>;
        }
        continue;
      }
      const kv = t.match(/^([\w.]+)\s*=\s*(.+)$/);
      if (kv) {
        const key = kv[1].trim();
        let val: unknown = kv[2].trim();
        if (typeof val === "string" && val.startsWith('"') && val.endsWith('"')) val = val.slice(1,-1);
        else if (val === "true") val = true;
        else if (val === "false") val = false;
        else if (!isNaN(Number(val as string))) val = Number(val);
        current[key] = val;
      }
    }
    return result;
  }
  function convert() {
    try {
      setError("");
      const parsed = parseTOML(toml);
      setJson(JSON.stringify(parsed, null, 2));
    } catch(e) { setError(String(e)); }
  }
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">TOML to JSON Converter</h1>
        <p className="text-gray-400 mb-6">Convert TOML configuration files to JSON format.</p>
        <textarea className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-sm font-mono h-40 mb-3" placeholder="[database]
host = "localhost"
port = 5432" value={toml} onChange={e => setToml(e.target.value)} />
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