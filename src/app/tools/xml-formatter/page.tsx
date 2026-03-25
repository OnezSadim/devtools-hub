"use client";
import { useState } from "react";

function formatXML(xml: string): string {
  let out = "";
  let indent = 0;
  const tokens = xml.replace(/></g, ">
<").split("
");
  for (const token of tokens) {
    const t = token.trim();
    if (!t) continue;
    if (t.startsWith("</")) indent = Math.max(0, indent - 1);
    out += "  ".repeat(indent) + t + "
";
    if (!t.startsWith("</") && !t.endsWith("/>") && t.startsWith("<") && !t.includes("</")) indent++;
  }
  return out.trim();
}

export default function XMLFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const sample = "<root><user><id>1</id><name>Alice</name><email>alice@example.com</email></user></root>";

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">XML Formatter</h1>
      <p className="text-gray-400 mb-6">Format and prettify XML documents with proper indentation.</p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-400 block mb-1">Input XML</label>
          <textarea value={input} onChange={e=>setInput(e.target.value)} className="w-full h-72 bg-gray-900 rounded p-3 font-mono text-sm resize-none" placeholder="Paste XML here..." />
        </div>
        <div>
          <label className="text-sm text-gray-400 block mb-1">Formatted XML</label>
          <textarea readOnly value={output} className="w-full h-72 bg-gray-900 rounded p-3 font-mono text-sm resize-none text-green-400" />
        </div>
      </div>
      <div className="flex gap-3 mt-4">
        <button onClick={()=>setOutput(formatXML(input))} className="bg-blue-600 hover:bg-blue-700 rounded px-6 py-2 font-semibold">Format</button>
        <button onClick={()=>{setInput(sample);setOutput("");}} className="bg-gray-700 hover:bg-gray-600 rounded px-4 py-2">Sample</button>
        <button onClick={()=>navigator.clipboard.writeText(output)} className="bg-gray-700 hover:bg-gray-600 rounded px-4 py-2">Copy</button>
      </div>
    </main>
  );
}