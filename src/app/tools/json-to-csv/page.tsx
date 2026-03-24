"use client";
import { useState } from "react";
export default function JsonToCsv() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const convert = () => {
    try {
      const data = JSON.parse(input);
      const arr = Array.isArray(data) ? data : [data];
      if (!arr.length) return "";
      const keys = Object.keys(arr[0]);
      const rows = arr.map(row => keys.map(k => { const v = row[k]; return typeof v === "string" ? `"${v.replace(/"/g,'''''"'"'")}"` : String(v ?? ""); }).join(","));
      setError("");
      return [keys.join(","), ...rows].join("\n");
    } catch(e) { setError("Invalid JSON"); return ""; }
  };
  const output = input ? convert() : "";
  return (<div className="min-h-screen bg-gray-950 text-white p-8"><h1 className="text-3xl font-bold mb-2">JSON to CSV Converter</h1><p className="text-gray-400 mb-6">Convert JSON arrays to CSV format.</p><div className="grid md:grid-cols-2 gap-4"><textarea className="bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm h-80" placeholder='[{"name":"Alice","age":30}]' value={input} onChange={e=>setInput(e.target.value)} /><div className={`bg-gray-900 border rounded p-3 font-mono text-sm h-80 overflow-auto whitespace-pre ${error?"border-red-500":"border-gray-700"}`}>{error ? <span className="text-red-400">{error}</span> : output || <span className="text-gray-600">CSV output here</span>}</div></div><div className="flex gap-3 mt-3"><button onClick={()=>navigator.clipboard.writeText(output)} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm">Copy CSV</button><button onClick={()=>{const a=document.createElement('a');a.href='data:text/csv;charset=utf-8,'+encodeURIComponent(output);a.download='data.csv';a.click()}} className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-sm">Download CSV</button></div></div>);
}