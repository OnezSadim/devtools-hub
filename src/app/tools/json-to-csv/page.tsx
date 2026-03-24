"use client";
import { useState } from "react";
export default function JsonToCsv() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const convert = () => {
    try {
      const data = JSON.parse(input);
      const arr = Array.isArray(data) ? data : [data];
      const keys = Object.keys(arr[0]);
      const csv = [keys.join(","), ...arr.map(r=>keys.map(k=>JSON.stringify(r[k]||"")).join(","))].join("\n");
      setOutput(csv); setError("");
    } catch(e:any) { setError(e.message); }
  };
  return (<div className="min-h-screen bg-gray-900 text-white p-8"><h1 className="text-3xl font-bold mb-6">JSON to CSV Converter</h1><div className="grid grid-cols-2 gap-4"><div><label className="block mb-2 text-gray-400">JSON Input</label><textarea className="w-full h-64 bg-gray-800 p-3 rounded font-mono text-sm" value={input} onChange={e=>setInput(e.target.value)} placeholder="[{&quot;name&quot;: &quot;Alice&quot;, &quot;age&quot;: 30}]"/></div><div><label className="block mb-2 text-gray-400">CSV Output</label><textarea className="w-full h-64 bg-gray-800 p-3 rounded font-mono text-sm" value={output} readOnly/></div></div>{error&&<p className="text-red-400 mt-2">{error}</p>}<button onClick={convert} className="bg-blue-600 px-6 py-2 rounded mt-4">Convert</button></div>);
}