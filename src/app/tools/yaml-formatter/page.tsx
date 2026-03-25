"use client";
import { useState } from "react";
export default function YamlFormatter() {
  const [input, setInput] = useState("");
  const [indentSize, setIndentSize] = useState(2);
  function formatYaml(text: string): string {
    const lines = text.split("
");
    const result: string[] = [];
    let depth = 0;
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) { result.push(trimmed); continue; }
      if (trimmed.startsWith("-")) {
        result.push(" ".repeat(depth * indentSize) + trimmed);
      } else if (trimmed.endsWith(":")) {
        result.push(" ".repeat(depth * indentSize) + trimmed);
        depth++;
      } else if (trimmed.includes(": ")) {
        result.push(" ".repeat(depth * indentSize) + trimmed);
      } else {
        result.push(" ".repeat(depth * indentSize) + trimmed);
      }
    }
    return result.join("
");
  }
  const output = input ? formatYaml(input) : "";
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">YAML Formatter</h1>
        <p className="text-gray-400 mb-6">Format and beautify YAML content with consistent indentation.</p>
        <div className="flex items-center gap-4 mb-4">
          <label className="text-sm text-gray-400">Indent size:</label>
          {[2,4].map(n => (
            <button key={n} onClick={() => setIndentSize(n)} className={`px-3 py-1 rounded text-sm ${indentSize===n?"bg-blue-600":"bg-gray-800 hover:bg-gray-700"}`}>{n} spaces</button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-xs text-gray-500 mb-1">Input</div>
            <textarea className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-sm font-mono h-72" placeholder="Paste YAML here..." value={input} onChange={e => setInput(e.target.value)} />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-500">Formatted</span>
              {output && <button onClick={() => navigator.clipboard.writeText(output)} className="text-xs bg-gray-700 px-2 py-0.5 rounded">Copy</button>}
            </div>
            <pre className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-sm font-mono h-72 overflow-auto whitespace-pre-wrap">{output || <span className="text-gray-600">output appears here</span>}</pre>
          </div>
        </div>
      </div>
    </main>
  );
}