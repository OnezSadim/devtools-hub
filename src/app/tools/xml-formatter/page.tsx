"use client";
import { useState } from "react";
export default function XmlFormatter() {
  const [xml, setXml] = useState('<root><person id="1"><name>Alice</name><email>alice@example.com</email></person></root>');
  const [error, setError] = useState("");
  const format = () => {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(xml, "text/xml");
      const err = doc.querySelector("parsererror");
      if (err) { setError(err.textContent || "Parse error"); return ""; }
      setError("");
      const ser = new XMLSerializer();
      let s = ser.serializeToString(doc);
      let indent = 0;
      return s.replace(/></g, ">
<").split("
").map(line=>{
        line = line.trim();
        if (line.startsWith("</")) indent = Math.max(0,indent-1);
        const r = "  ".repeat(indent)+line;
        if (!line.startsWith("</") && !line.endsWith("/>") && line.includes("<") && !line.includes("</")) indent++;
        return r;
      }).join("
");
    } catch(e) { setError(String(e)); return ""; }
  };
  const formatted = format();
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">XML Formatter</h1>
      <p className="text-gray-400 mb-6">Format and validate XML documents.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Input XML</label>
          <textarea value={xml} onChange={e=>setXml(e.target.value)} rows={14} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white font-mono text-sm resize-none" />
        </div>
        <div>
          <div className="flex justify-between mb-1"><label className="text-sm text-gray-400">Formatted</label><button onClick={()=>navigator.clipboard.writeText(formatted)} className="text-xs text-blue-400 hover:text-blue-300">Copy</button></div>
          {error ? <p className="text-red-400 text-sm p-3 bg-red-950 rounded">{error}</p> : <pre className="w-full h-64 bg-gray-800 border border-gray-700 rounded px-3 py-2 text-green-300 font-mono text-xs overflow-auto whitespace-pre">{formatted}</pre>}
        </div>
      </div>
    </main>
  );
}