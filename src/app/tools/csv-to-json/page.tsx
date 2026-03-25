"use client";
import { useState } from "react";
function csvToJson(csv) {
  try {
    const lines = csv.trim().split("\n");
    if (lines.length < 2) return "[]";
    const headers = lines[0].split(",").map(h=>h.trim());
    const rows = lines.slice(1).map(line => {
      const vals = line.split(",").map(v=>v.trim());
      const obj = {};
      headers.forEach((h,i)=>{ obj[h] = isNaN(vals[i]) ? vals[i] : Number(vals[i]); });
      return obj;
    });
    return JSON.stringify(rows, null, 2);
  } catch(e) { return "Error: " + e.message; }
}
export default function CsvToJson() {
  const [input, setInput] = useState("name,age,city\nAlice,30,Amsterdam\nBob,25,Berlin\nClara,35,Paris");
  const [output, setOutput] = useState("");
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-bold text-white">CSV to JSON Converter</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-400 mb-2 text-sm">CSV Input</p>
          <textarea value={input} onChange={e=>setInput(e.target.value)} className="w-full h-64 bg-gray-800 text-white rounded-xl p-4 font-mono text-sm" />
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-400 text-sm">JSON Output</p>
            {output && <button onClick={()=>navigator.clipboard.writeText(output)} className="text-indigo-400 text-sm">Copy</button>}
          </div>
          <pre className="w-full h-64 bg-gray-900 text-green-400 rounded-xl p-4 font-mono text-sm overflow-auto">{output || "Click Convert"}</pre>
        </div>
      </div>
      <button onClick={()=>setOutput(csvToJson(input))} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold">Convert</button>
    </div>
  );
}
