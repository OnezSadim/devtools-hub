"use client";
import { useState } from "react";

function parseYAML(text: string): {ok:boolean, msg:string, lines:number} {
  const lines = text.split("
");
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^	/.test(line)) return {ok:false, msg:`Line ${i+1}: YAML does not allow tabs for indentation`, lines: i+1};
    if (/^(\s*)([^:]+):(\s*)$/.test(line) && line.trim().endsWith(":")) continue;
    if (line.trim() === "---" || line.trim() === "...") continue;
  }
  return {ok:true, msg:"Valid YAML structure (basic check)", lines: lines.length};
}

export default function YAMLValidator() {
  const [input, setInput] = useState("");
  const [res, setRes] = useState<{ok:boolean,msg:string,lines:number}|null>(null);

  const sample = `name: my-app
version: 1.0.0
config:
  debug: true
  port: 3000
tags:
  - web
  - api`;

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">YAML Validator</h1>
      <p className="text-gray-400 mb-6">Validate YAML syntax and check for common errors.</p>
      <div className="max-w-2xl">
        <textarea value={input} onChange={e=>setInput(e.target.value)} className="w-full h-64 bg-gray-900 rounded p-3 font-mono text-sm resize-none mb-3" placeholder="Paste your YAML here..." />
        <div className="flex gap-3 mb-4">
          <button onClick={()=>setRes(parseYAML(input))} className="bg-blue-600 hover:bg-blue-700 rounded px-6 py-2 font-semibold">Validate</button>
          <button onClick={()=>{setInput(sample);setRes(null);}} className="bg-gray-700 hover:bg-gray-600 rounded px-4 py-2">Load Sample</button>
          <button onClick={()=>{setInput("");setRes(null);}} className="bg-gray-700 hover:bg-gray-600 rounded px-4 py-2">Clear</button>
        </div>
        {res && (
          <div className={`rounded-xl p-4 ${res.ok?"bg-green-900 border border-green-600":"bg-red-900 border border-red-600"}`}>
            <div className="font-semibold mb-1">{res.ok ? "Valid" : "Invalid"}</div>
            <div className="text-sm">{res.msg}</div>
            <div className="text-sm text-gray-400 mt-1">{res.lines} lines</div>
          </div>
        )}
      </div>
    </main>
  );
}