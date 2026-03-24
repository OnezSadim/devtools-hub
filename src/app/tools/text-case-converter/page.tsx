"use client";
import { useState } from "react";
export default function TextCaseConverter() {
  const [input, setInput] = useState("");
  const toCase = (fn) => fn(input);
  const cases = [
    { label: "lowercase", fn: s => s.toLowerCase() },
    { label: "UPPERCASE", fn: s => s.toUpperCase() },
    { label: "Title Case", fn: s => s.replace(/\w\S*/g, t => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()) },
    { label: "camelCase", fn: s => s.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase()) },
    { label: "PascalCase", fn: s => s.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase()).replace(/^(.)/, c => c.toUpperCase()) },
    { label: "snake_case", fn: s => s.replace(/\s+/g, "_").replace(/([A-Z])/g, "_$1").toLowerCase().replace(/^_/, "") },
    { label: "kebab-case", fn: s => s.replace(/\s+/g, "-").replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "") },
  ];
  return (<div className="min-h-screen bg-gray-950 text-white p-8"><h1 className="text-3xl font-bold mb-2">Text Case Converter</h1><p className="text-gray-400 mb-6">Convert text between different cases instantly.</p><textarea className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 font-mono text-sm mb-6" placeholder="Enter text..." value={input} onChange={e => setInput(e.target.value)} /><div className="grid gap-3">{cases.map(({label, fn}) => (<div key={label} className="bg-gray-900 border border-gray-700 rounded p-3"><div className="text-xs text-gray-500 mb-1">{label}</div><div className="font-mono text-sm break-all">{input ? fn(input) : <span className="text-gray-600">Output will appear here</span>}</div></div>))}</div></div>);
}