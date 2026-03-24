"use client";
import { useState } from "react";
export default function XmlFormatter() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const format = () => {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(input, "application/xml");
      const err = doc.querySelector("parsererror");
      if (err) { setError(err.textContent || "Invalid XML"); return ""; }
      setError("");
      const ser = new XMLSerializer();
      let xml = ser.serializeToString(doc);
      let indent = 0;
      return xml.replace(/></g, ">\n<").split("\n").map(line => {
        if (line.match(/^<\//)) indent--;
        const result = "  ".repeat(Math.max(0,indent)) + line;
        if (line.match(/^<[^/][^>]*[^/]>$/) && !line.match(/^<.*\/>/)) indent++;
        return result;
      }).join("\n");
    } catch(e) { setError(String(e)); return ""; }
  };
  const output = input ? format() : "";
  return (<div className="min-h-screen bg-gray-950 text-white p-8"><h1 className="text-3xl font-bold mb-2">XML Formatter</h1><p className="text-gray-400 mb-6">Format and validate XML code online.</p><div className="grid md:grid-cols-2 gap-4"><textarea className="bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm h-96" placeholder="Paste XML here..." value={input} onChange={e => setInput(e.target.value)} /><div className={`bg-gray-900 border rounded p-3 font-mono text-sm h-96 overflow-auto whitespace-pre ${error?"border-red-500":"border-gray-700"}`}>{error ? <span className="text-red-400">{error}</span> : output || <span className="text-gray-600">Formatted XML appears here</span>}</div></div><button onClick={() => navigator.clipboard.writeText(output)} className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm">Copy</button></div>);
}