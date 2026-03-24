"use client";
import { useState } from "react";
export default function JSFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [indent, setIndent] = useState(2);
  const format = () => {
    try {
      // Use Function to parse and reformat JS (basic)
      const lines = input.split("\n");
      let level = 0;
      let result = "";
      for (const raw of lines) {
        const line = raw.trim();
        if (!line) continue;
        if (line.startsWith("}") || line.startsWith(")") || line.startsWith("]")) level = Math.max(0, level - 1);
        result += " ".repeat(level * indent) + line + "\n";
        if (line.endsWith("{") || line.endsWith("(") || line.endsWith("[")) level++;
      }
      setOutput(result);
      setError("");
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Format error");
    }
  };
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">JS Formatter</h1>
        <p className="text-gray-400 mb-6">Beautify and format JavaScript code</p>
        <div className="flex gap-4 mb-4">
          <label className="text-gray-300">Indent:
            <input type="number" value={indent} onChange={e=>setIndent(Number(e.target.value))} min={1} max={8}
              className="ml-2 w-16 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm" />
          </label>
          <button onClick={format} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium">Format</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-gray-400 text-sm mb-1 block">Input</label>
            <textarea value={input} onChange={e=>setInput(e.target.value)} rows={20}
              placeholder="Paste JavaScript code here..."
              className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm resize-none" />
          </div>
          <div>
            <label className="text-gray-400 text-sm mb-1 block">Output</label>
            <textarea value={output} readOnly rows={20}
              className="w-full bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm resize-none" />
          </div>
        </div>
        {error && <p className="mt-2 text-red-400">{error}</p>}
        {output && <button onClick={()=>navigator.clipboard.writeText(output)} className="mt-3 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-sm">Copy Output</button>}
      </div>
    </main>
  );
}