"use client";
import { useState } from "react";
export default function YamlToJson() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"yaml2json"|"json2yaml">("yaml2json");
  const [error, setError] = useState("");
  function parseYaml(yaml: string): any {
    const lines = yaml.split("
");
    const result: any = {};
    for (const line of lines) {
      const m = line.match(/^([\w-]+):\s*(.*)$/);
      if (m) result[m[1]] = isNaN(Number(m[2])) ? m[2].replace(/^['"]|['"]$/g,"") : Number(m[2]);
    }
    return result;
  }
  function objToYaml(obj: any, indent=0): string {
    return Object.entries(obj).map(([k,v]) => {
      if (typeof v === "object" && v !== null) return " ".repeat(indent)+k+":
"+objToYaml(v,indent+2);
      return " ".repeat(indent)+k+": "+v;
    }).join("
");
  }
  function convert() {
    setError("");
    try {
      if (mode==="yaml2json") { const obj=parseYaml(input); setOutput(JSON.stringify(obj,null,2)); }
      else { const obj=JSON.parse(input); setOutput(objToYaml(obj)); }
    } catch(e:any) { setError(e.message); setOutput(""); }
  }
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">YAML ↔ JSON Converter</h1>
        <p className="text-gray-400 mb-6">Convert between YAML and JSON formats instantly.</p>
        <div className="flex gap-2 mb-4">
          <button onClick={()=>setMode("yaml2json")} className={`px-4 py-2 rounded font-medium ${mode==="yaml2json"?"bg-blue-600":"bg-gray-800 hover:bg-gray-700"}`}>YAML → JSON</button>
          <button onClick={()=>setMode("json2yaml")} className={`px-4 py-2 rounded font-medium ${mode==="json2yaml"?"bg-blue-600":"bg-gray-800 hover:bg-gray-700"}`}>JSON → YAML</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">{mode==="yaml2json"?"YAML":"JSON"} Input</label>
            <textarea value={input} onChange={e=>setInput(e.target.value)} className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" placeholder={mode==="yaml2json"?"name: John
age: 30":'{"name":"John","age":30}'} />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">{mode==="yaml2json"?"JSON":"YAML"} Output</label>
            <textarea readOnly value={output} className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" />
          </div>
        </div>
        {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
        <div className="flex gap-2 mt-4">
          <button onClick={convert} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded font-medium">Convert</button>
          <button onClick={()=>{setInput("");setOutput("");setError("");}} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded">Clear</button>
          {output && <button onClick={()=>navigator.clipboard.writeText(output)} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded">Copy</button>}
        </div>
      </div>
    </main>
  );
}
