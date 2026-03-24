"use client";
import { useState } from "react";
export default function TextCaseConverter() {
  const [input, setInput] = useState("");
  const transforms: {label: string; fn: (s: string) => string}[] = [
    { label: "UPPER CASE", fn: s => s.toUpperCase() },
    { label: "lower case", fn: s => s.toLowerCase() },
    { label: "Title Case", fn: s => s.replace(/\b\w/g, c => c.toUpperCase()) },
    { label: "Sentence case", fn: s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() },
    { label: "camelCase", fn: s => s.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_,c) => c.toUpperCase()) },
    { label: "PascalCase", fn: s => s.replace(/[^a-zA-Z0-9]+(.)/g, (_,c) => c.toUpperCase()).replace(/^(.)/, c => c.toUpperCase()) },
    { label: "snake_case", fn: s => s.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "") },
    { label: "kebab-case", fn: s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") },
    { label: "SCREAMING_SNAKE", fn: s => s.toUpperCase().replace(/[^A-Z0-9]+/g, "_").replace(/^_|_$/g, "") },
    { label: "dot.case", fn: s => s.toLowerCase().replace(/[^a-z0-9]+/g, ".") },
    { label: "Reverse Text", fn: s => s.split("").reverse().join("") },
    { label: "AlTeRnAtInG", fn: s => s.split("").map((c,i)=>i%2===0?c.toUpperCase():c.toLowerCase()).join("") },
  ];
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Text Case Converter</h1>
        <p className="text-gray-400 mb-6">Convert text between different case formats instantly</p>
        <textarea value={input} onChange={e=>setInput(e.target.value)} rows={4}
          placeholder="Type or paste your text here..."
          className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-sm resize-none mb-6" />
        <div className="space-y-3">
          {transforms.map(t => (
            <div key={t.label} className="bg-gray-900 border border-gray-700 rounded-lg p-4 flex items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="text-xs text-gray-500 mb-1">{t.label}</div>
                <div className="font-mono text-sm truncate">{input ? t.fn(input) : <span className="text-gray-600">Output appears here...</span>}</div>
              </div>
              {input && (
                <button onClick={()=>navigator.clipboard.writeText(t.fn(input))}
                  className="shrink-0 bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded text-xs">Copy</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}