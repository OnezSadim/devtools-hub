"use client";
import { useState } from "react";
function parseYAML(yaml) {
  try {
    const lines = yaml.split("\n");
    const obj = {};
    let current = obj;
    lines.forEach(line => {
      if (!line.trim() || line.trim().startsWith("#")) return;
      const match = line.match(/^(\s*)(\S+):\s*(.*)$/);
      if (match) {
        const key = match[2];
        let val = match[3].trim();
        if (val === "") return;
        if (val === "true") current[key] = true;
        else if (val === "false") current[key] = false;
        else if (!isNaN(val)) current[key] = Number(val);
        else current[key] = val.replace(/^'|^"|''$|"'$/g,"");
      }
    });
    return JSON.stringify(obj, null, 2);
  } catch(e) { return "Parse error: " + e.message; }
}
export default function YamlToJson() {
  const [input, setInput] = useState("name: John Doe\nage: 30\nactive: true\ncity: Amsterdam");
  const [output, setOutput] = useState("");
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-bold text-white">YAML to JSON Converter</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-400 mb-2 text-sm">YAML Input</p>
          <textarea value={input} onChange={e=>setInput(e.target.value)} className="w-full h-64 bg-gray-800 text-white rounded-xl p-4 font-mono text-sm" />
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-400 text-sm">JSON Output</p>
            {output && <button onClick={()=>navigator.clipboard.writeText(output)} className="text-indigo-400 text-sm">Copy</button>}
          </div>
          <pre className="w-full h-64 bg-gray-900 text-green-400 rounded-xl p-4 font-mono text-sm overflow-auto">{output || "Click Convert to see output"}</pre>
        </div>
      </div>
      <button onClick={()=>setOutput(parseYAML(input))} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold">Convert to JSON</button>
    </div>
  );
}
