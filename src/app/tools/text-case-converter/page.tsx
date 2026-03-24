"use client";
import { useState } from "react";

export default function TextCaseConverter() {
  const [input, setInput] = useState("");
  const conversions = [
    ["UPPERCASE", (s: string) => s.toUpperCase()],
    ["lowercase", (s: string) => s.toLowerCase()],
    ["Title Case", (s: string) => s.replace(/\w\S*/g, t => t[0].toUpperCase() + t.slice(1).toLowerCase())],
    ["camelCase", (s: string) => s.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase())],
    ["snake_case", (s: string) => s.replace(/[A-Z]/g, l => "_" + l.toLowerCase()).replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "").toLowerCase()],
    ["kebab-case", (s: string) => s.replace(/[A-Z]/g, l => "-" + l.toLowerCase()).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").toLowerCase()],
    ["CONSTANT_CASE", (s: string) => s.replace(/[A-Z]/g, l => "_" + l).replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_|_$/g, "").toUpperCase()],
  ] as [string, (s: string) => string][];

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Text Case Converter</h1>
      <p className="text-gray-400 mb-6">Convert text between camelCase, snake_case, kebab-case, and more.</p>
      <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Type or paste text here..." className="w-full h-32 bg-gray-800 border border-gray-700 rounded p-3 mb-6 font-mono text-sm" />
      {input && <div className="space-y-3">
        {conversions.map(([name, fn]) => (
          <div key={name} className="bg-gray-800 border border-gray-700 rounded p-3">
            <div className="text-xs text-gray-400 mb-1">{name}</div>
            <div className="font-mono text-sm break-all cursor-pointer hover:text-blue-400" onClick={()=>navigator.clipboard.writeText(fn(input))}>{fn(input)}</div>
          </div>
        ))}
      </div>}
    </div>
  );
}
