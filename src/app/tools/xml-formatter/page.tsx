"use client";
import { useState } from "react";

export default function XMLFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const format = () => {
    try {
      setError("");
      const parser = new DOMParser();
      const doc = parser.parseFromString(input, "application/xml");
      const err = doc.querySelector("parsererror");
      if (err) { setError("Invalid XML: " + err.textContent); setOutput(""); return; }
      const xs = new XMLSerializer();
      let raw = xs.serializeToString(doc);
      // Pretty print
      let indent = 0;
      let result = "";
      raw.replace(/></g, ">
<").split("
").forEach(line => {
        if (line.match(/^<\//)){ indent--; }
        result += "  ".repeat(Math.max(0,indent)) + line + "
";
        if (line.match(/^<[^/!?]/) && !line.match(/\/>/)) { indent++; }
      });
      setOutput(result.trim());
    } catch(e) { setError(String(e)); }
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">XML Formatter</h1>
        <p className="text-gray-400 mb-6">Prettify and validate XML documents.</p>
        {error && <div className="bg-red-900/50 border border-red-700 rounded p-3 mb-4 text-red-300 text-sm">{error}</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Input XML</label>
            <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Paste XML here..." className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Formatted XML</label>
            <textarea value={output} readOnly className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" />
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <button onClick={format} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium">Format</button>
          <button onClick={()=>{navigator.clipboard.writeText(output)}} className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded">Copy</button>
          <button onClick={()=>{setInput("");setOutput("");setError("")}} className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded">Clear</button>
        </div>
      </div>
    </main>
  );
}