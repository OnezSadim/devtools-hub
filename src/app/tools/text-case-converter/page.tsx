"use client";
import { useState } from "react";
export default function TextCaseConverter() {
  const [input, setInput] = useState("");
  const toUpper = (s: string) => s.toUpperCase();
  const toLower = (s: string) => s.toLowerCase();
  const toTitle = (s: string) => s.replace(/\w\S*/g, t => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase());
  const toCamel = (s: string) => s.replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : "").replace(/^(.)/, m => m.toLowerCase());
  const toSnake = (s: string) => s.replace(/\s+/g, "_").replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
  const toKebab = (s: string) => s.replace(/\s+/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  const toPascal = (s: string) => s.replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : "").replace(/^(.)/, m => m.toUpperCase());
  const toConstant = (s: string) => s.replace(/\s+/g, "_").replace(/([a-z])([A-Z])/g, "$1_$2").toUpperCase();
  const cases = [
    { label: "UPPERCASE", fn: toUpper },
    { label: "lowercase", fn: toLower },
    { label: "Title Case", fn: toTitle },
    { label: "camelCase", fn: toCamel },
    { label: "snake_case", fn: toSnake },
    { label: "kebab-case", fn: toKebab },
    { label: "PascalCase", fn: toPascal },
    { label: "CONSTANT_CASE", fn: toConstant },
  ];
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Text Case Converter</h1>
        <p className="text-gray-400 mb-6">Convert text between different case formats instantly.</p>
        <textarea className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-sm font-mono mb-6 h-28" placeholder="Enter your text here..." value={input} onChange={e => setInput(e.target.value)} />
        <div className="grid grid-cols-1 gap-3">
          {cases.map(({ label, fn }) => (
            <div key={label} className="bg-gray-900 border border-gray-700 rounded p-3 flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-500 mb-1">{label}</div>
                <div className="font-mono text-sm">{input ? fn(input) : <span className="text-gray-600">result</span>}</div>
              </div>
              <button onClick={() => navigator.clipboard.writeText(fn(input))} className="text-xs bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded ml-4">Copy</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}