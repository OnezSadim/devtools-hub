"use client";
import { useState } from "react";
function parseYAML(yaml: string): unknown {
  const lines = yaml.split("\n");
  const result: Record<string, unknown> = {};
  const stack: {obj: Record<string, unknown>, indent: number}[] = [{obj: result, indent: -1}];
  for (const line of lines) {
    const trimmed = line.trimStart();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const indent = line.length - trimmed.length;
    const colonIdx = trimmed.indexOf(":");
    if (colonIdx === -1) continue;
    const key = trimmed.slice(0, colonIdx).trim();
    const val = trimmed.slice(colonIdx + 1).trim();
    while (stack.length > 1 && stack[stack.length-1].indent >= indent) stack.pop();
    const parent = stack[stack.length-1].obj;
    if (!val) {
      const child: Record<string, unknown> = {};
      parent[key] = child;
      stack.push({obj: child, indent});
    } else if (val === "true") parent[key] = true;
    else if (val === "false") parent[key] = false;
    else if (val === "null" || val === "~") parent[key] = null;
    else if (!isNaN(Number(val))) parent[key] = Number(val);
    else parent[key] = val.replace(/^["']|["']$/g, "");
  }
  return result;
}
export default function YamlToJson() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const convert = () => {
    try {
      const obj = parseYAML(input);
      setOutput(JSON.stringify(obj, null, 2));
      setError("");
    } catch(e) { setError(String(e)); }
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">YAML to JSON</h1>
        <p className="text-gray-400 mb-6">Convert YAML to JSON format</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-gray-400 text-sm mb-2 block">YAML Input</label>
            <textarea value={input} onChange={e=>setInput(e.target.value)} rows={16} className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm resize-none" placeholder="name: John
age: 30
active: true"/>
          </div>
          <div>
            <label className="text-gray-400 text-sm mb-2 block">JSON Output</label>
            <textarea value={output} readOnly rows={16} className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm resize-none text-green-400"/>
          </div>
        </div>
        {error && <p className="text-red-400 mt-2">{error}</p>}
        <button onClick={convert} className="mt-4 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold">Convert</button>
      </div>
    </main>
  );
}