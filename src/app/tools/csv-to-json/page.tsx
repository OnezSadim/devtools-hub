"use client";
import { useState } from "react";
export default function CsvToJson() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const convert = () => {
    const lines = input.trim().split("\n");
    const headers = lines[0].split(",").map(h=>h.trim().replace(/^"|"$/g,""));
    const rows = lines.slice(1).map(line=>{
      const vals = line.split(",").map(v=>v.trim().replace(/^"|"$/g,""));
      return Object.fromEntries(headers.map((h,i)=>[h,vals[i]||""]));
    });
    setOutput(JSON.stringify(rows, null, 2));
  };
  return (<div className="min-h-screen bg-gray-900 text-white p-8"><h1 className="text-3xl font-bold mb-6">CSV to JSON Converter</h1><div className="grid grid-cols-2 gap-4"><div><label className="block mb-2 text-gray-400">CSV Input</label><textarea className="w-full h-64 bg-gray-800 p-3 rounded font-mono text-sm" value={input} onChange={e=>setInput(e.target.value)} placeholder="name,age
Alice,30"/></div><div><label className="block mb-2 text-gray-400">JSON Output</label><textarea className="w-full h-64 bg-gray-800 p-3 rounded font-mono text-sm" value={output} readOnly/></div></div><button onClick={convert} className="bg-blue-600 px-6 py-2 rounded mt-4">Convert</button></div>);
}