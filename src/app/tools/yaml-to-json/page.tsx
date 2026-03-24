"use client";
import { useState } from "react";
export default function YamlToJson() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"yaml2json"|"json2yaml">("yaml2json");
  const [error, setError] = useState("");
  const parseYaml = (yaml: string): unknown => {
    const lines = yaml.split("\n");
    const obj: Record<string,unknown> = {};
    for (const line of lines) {
      const m = line.match(/^([\w-]+):\s*(.*)$/);
      if (m) obj[m[1]] = m[2].trim() || null;
    }
    return obj;
  };
  const toYaml = (obj: unknown, indent=0): string => {
    if (typeof obj !== "object" || obj === null) return String(obj);
    return Object.entries(obj as Record<string,unknown>).map(([k,v]) => {
      if (typeof v === "object" && v !== null) return `${" ".repeat(indent)}${k}:\n${toYaml(v, indent+2)}`;
      return `${" ".repeat(indent)}${k}: ${v}`;
    }).join("\n");
  };
  const convert = () => {
    setError("");
    try {
      if (mode==="yaml2json") {
        const parsed = parseYaml(input);
        setOutput(JSON.stringify(parsed, null, 2));
      } else {
        const parsed = JSON.parse(input);
        setOutput(toYaml(parsed));
      }
    } catch(e) { setError(String(e)); }
  };
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">YAML ↔ JSON Converter</h1>
      <p className="text-gray-400 mb-6">Convert between YAML and JSON formats.</p>
      <div className="flex gap-3 mb-4">
        <button onClick={()=>setMode("yaml2json")} className={`px-4 py-2 rounded-lg font-semibold ${mode==="yaml2json"?"bg-indigo-600":"bg-gray-700"}`}>YAML → JSON</button>
        <button onClick={()=>setMode("json2yaml")} className={`px-4 py-2 rounded-lg font-semibold ${mode==="json2yaml"?"bg-indigo-600":"bg-gray-700"}`}>JSON → YAML</button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-400 mb-1 block">{mode==="yaml2json"?"YAML":"JSON"} Input</label>
          <textarea value={input} onChange={e=>setInput(e.target.value)} rows={14} className="w-full bg-gray-800 rounded-lg p-3 font-mono text-sm resize-none" placeholder={mode==="yaml2json"?"name: John\nage: 30":"{}"} />
        </div>
        <div>
          <label className="text-sm text-gray-400 mb-1 block">{mode==="yaml2json"?"JSON":"YAML"} Output</label>
          <textarea value={output} readOnly rows={14} className="w-full bg-gray-800 rounded-lg p-3 font-mono text-sm resize-none text-green-400" />
        </div>
      </div>
      {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
      <button onClick={convert} className="mt-4 w-full bg-indigo-600 hover:bg-indigo-500 rounded-lg py-2 font-semibold">Convert</button>
    </div>
  );
}
