"use client";
import { useState } from "react";
export default function XmlFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const format = () => {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(input, "application/xml");
      const err = doc.querySelector("parsererror");
      if (err) { setError("Invalid XML: " + err.textContent); setOutput(""); return; }
      const s = new XMLSerializer();
      let xml = s.serializeToString(doc);
      let indent = 0;
      const formatted = xml.replace(/>\s*</g,">
<").split("
").map(line => {
        if (line.match(/^<\//)) indent--;
        const l = "  ".repeat(Math.max(0,indent)) + line.trim();
        if (line.match(/^<[^/!?][^>]*[^/]>/) && !line.match(/<.*>.*<\/.*>/)) indent++;
        return l;
      }).join("
");
      setOutput(formatted); setError("");
    } catch(e) { setError(String(e)); }
  };
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">XML Formatter</h1>
      <p className="text-gray-400 mb-6">Prettify and validate XML documents.</p>
      <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Paste XML here..." className="w-full h-40 bg-gray-800 border border-gray-700 rounded p-3 mb-4 font-mono text-sm" />
      <button onClick={format} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded mb-4">Format XML</button>
      {error && <p className="text-red-400 mb-2">{error}</p>}
      {output && <textarea value={output} readOnly className="w-full h-40 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" />}
    </div>
  );
}