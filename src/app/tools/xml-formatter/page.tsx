"use client";
import { useState } from "react";
export default function XmlFormatter() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"format"|"minify">("format");
  const [output, setOutput] = useState("");
  const format = (xml: string) => {
    let indent = 0;
    return xml.replace(/>\s*</g, ">
<").split("
").map(line => {
      line = line.trim();
      if (!line) return "";
      if (line.startsWith("</")) indent -= 2;
      const padded = " ".repeat(Math.max(0, indent)) + line;
      if (!line.startsWith("</") && !line.endsWith("/>") && line.includes("<") && !line.includes("</")) indent += 2;
      return padded;
    }).filter(Boolean).join("
");
  };
  const convert = () => {
    if (mode === "minify") setOutput(input.replace(/\s+/g, " ").replace(/> </g, "><").trim());
    else setOutput(format(input));
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">XML Formatter</h1>
      <p className="text-gray-400 mb-6">Pretty-print or minify XML markup.</p>
      <div className="flex gap-2 mb-4">
        <button onClick={() => setMode("format")} className={`px-4 py-2 rounded ${mode==="format"?"bg-blue-600":"bg-gray-800"}`}>Format</button>
        <button onClick={() => setMode("minify")} className={`px-4 py-2 rounded ${mode==="minify"?"bg-blue-600":"bg-gray-800"}`}>Minify</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Input XML</label>
          <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" value={input} onChange={e => setInput(e.target.value)} placeholder="<root><item>value</item></root>" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Output</label>
          <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm" value={output} readOnly />
        </div>
      </div>
      <div className="flex gap-2 mt-3">
        <button onClick={convert} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold">Convert</button>
        {output && <button onClick={() => navigator.clipboard.writeText(output)} className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm">Copy</button>}
      </div>
    </main>
  );
}