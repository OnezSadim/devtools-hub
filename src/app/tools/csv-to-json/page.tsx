"use client";
import { useState } from "react";
export default function CsvToJson() {
  const [csv, setCsv] = useState("");
  const [json, setJson] = useState("");
  function convert() {
    const lines = csv.trim().split("\n");
    const headers = lines[0].split(",").map(h=>h.trim());
    const rows = lines.slice(1).map(line=>{
      const vals = line.split(",");
      return Object.fromEntries(headers.map((h,i)=>[h,(vals[i]||"").trim()]));
    });
    setJson(JSON.stringify(rows,null,2));
  }
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">CSV to JSON Converter</h1>
      <textarea className="w-full h-40 p-3 bg-gray-800 rounded border border-gray-600 text-white mb-3" placeholder="Paste CSV with header row..." value={csv} onChange={e=>setCsv(e.target.value)} />
      <button onClick={convert} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-4">Convert</button>
      {json&&<pre className="p-3 bg-gray-800 rounded text-sm overflow-auto max-h-60">{json}</pre>}
    </div>
  );
}