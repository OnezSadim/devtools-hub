"use client";
import { useState } from "react";
export default function YamlToJson() {
  const [yaml, setYaml] = useState("");
  const [json, setJson] = useState("");
  const [error, setError] = useState("");
  const parseYaml = (text: string): any => {
    const lines = text.split("
");
    const result: Record<string, any> = {};
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const colonIdx = trimmed.indexOf(":");
      if (colonIdx === -1) continue;
      const key = trimmed.slice(0, colonIdx).trim();
      const val = trimmed.slice(colonIdx + 1).trim();
      if (!val) continue;
      result[key] = val.startsWith('"') ? val.slice(1, -1) : isNaN(Number(val)) ? (val === 'true' ? true : val === 'false' ? false : val) : Number(val);
    }
    return result;
  };
  const convert = () => {
    try {
      setError("");
      setJson(JSON.stringify(parseYaml(yaml), null, 2));
    } catch (e: any) { setError(e.message); }
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">YAML to JSON</h1>
      <p className="text-gray-400 mb-6">Convert simple YAML key-value configs to JSON format.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">YAML Input</label>
          <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" value={yaml} onChange={e => setYaml(e.target.value)} placeholder="name: Alice
age: 30
debug: true" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">JSON Output</label>
          <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" value={json} readOnly />
        </div>
      </div>
      {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
      <div className="flex gap-2 mt-3">
        <button onClick={convert} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold">Convert</button>
        {json && <button onClick={() => navigator.clipboard.writeText(json)} className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm">Copy JSON</button>}
      </div>
    </main>
  );
}