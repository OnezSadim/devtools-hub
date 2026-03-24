
"use client";
import { useState } from "react";
export default function UnicodeLookup() {
  const [input, setInput] = useState("");
  const chars = input ? Array.from(input).map(c => ({
    char: c,
    code: c.codePointAt(0) || 0,
    hex: (c.codePointAt(0) || 0).toString(16).toUpperCase().padStart(4, "0"),
    name: `U+${(c.codePointAt(0) || 0).toString(16).toUpperCase().padStart(4, "0")}`
  })) : [];
  const [lookup, setLookup] = useState("");
  const lookupChar = lookup ? (() => { try { return String.fromCodePoint(parseInt(lookup.replace(/^U\+/i,"").replace(/^0x/i,""),16)); } catch { return null; } })() : null;
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Unicode Character Lookup</h1>
        <p className="text-gray-400 mb-6">Inspect Unicode code points for any text</p>
        <div className="mb-6">
          <label className="block text-sm text-gray-400 mb-1">Enter text to inspect</label>
          <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Type or paste text..." className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 text-white" />
        </div>
        {chars.length > 0 && (
          <div className="mb-6">
            <div className="grid grid-cols-4 gap-2 text-xs text-gray-500 mb-2 px-1">
              <span>Char</span><span>Code Point</span><span>Hex</span><span>Decimal</span>
            </div>
            <div className="space-y-1 max-h-64 overflow-y-auto">
              {chars.map((c,i) => (
                <div key={i} className="grid grid-cols-4 gap-2 bg-gray-900 border border-gray-800 rounded px-3 py-2">
                  <span className="text-2xl leading-none">{c.char}</span>
                  <code className="text-blue-400 text-sm self-center">{c.name}</code>
                  <code className="text-green-400 text-sm self-center">{c.hex}</code>
                  <code className="text-yellow-400 text-sm self-center">{c.code}</code>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="bg-gray-900 border border-gray-700 rounded p-4">
          <label className="block text-sm text-gray-400 mb-2">Lookup by code point (e.g. U+1F600 or 1F600)</label>
          <div className="flex gap-2">
            <input value={lookup} onChange={e=>setLookup(e.target.value)} placeholder="U+1F600" className="flex-1 bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono" />
            {lookupChar && <div className="bg-gray-800 border border-gray-700 rounded px-4 py-2 text-3xl">{lookupChar}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
