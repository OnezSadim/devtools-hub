
"use client";
import { useState } from "react";
export default function ApiResponseFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [view, setView] = useState("pretty");
  const format = () => {
    try {
      const parsed = JSON.parse(input);
      if (view === "pretty") setOutput(JSON.stringify(parsed, null, 2));
      else if (view === "minified") setOutput(JSON.stringify(parsed));
      else if (view === "table") {
        const arr = Array.isArray(parsed) ? parsed : [parsed];
        setOutput(JSON.stringify(arr, null, 2));
      }
      setError("");
    } catch(e: any) { setError(e.message); }
  };
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">API Response Formatter</h1>
        <p className="text-gray-400 mb-6">Format, validate, and analyze API responses</p>
        <div className="flex gap-2 mb-4">
          {["pretty","minified","table"].map(v=>(
            <button key={v} onClick={()=>setView(v)} className={`px-4 py-2 rounded text-sm font-medium ${view===v?"bg-blue-600":"bg-gray-800 hover:bg-gray-700"}`}>{v.charAt(0).toUpperCase()+v.slice(1)}</button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Input JSON</label>
            <textarea value={input} onChange={e=>setInput(e.target.value)} className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" placeholder="Paste API response here..." />
            <button onClick={format} className="mt-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm font-medium w-full">Format</button>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Output</label>
            {error ? <div className="text-red-400 bg-red-950 border border-red-800 rounded p-3 text-sm">{error}</div> : (
              <div className="relative">
                <pre className="h-64 overflow-auto bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm text-green-400 whitespace-pre-wrap">{output}</pre>
                {output && <button onClick={()=>navigator.clipboard.writeText(output)} className="absolute top-2 right-2 text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded">Copy</button>}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
