"use client";
import { useState } from "react";

export default function StringLengthCounter() {
  const [input, setInput] = useState("");

  const stats = {
    chars: input.length,
    charsNoSpaces: input.replace(/\s/g,"").length,
    words: input.trim() ? input.trim().split(/\s+/).length : 0,
    lines: input ? input.split("\n").length : 0,
    sentences: input.split(/[.!?]+/).filter(s=>s.trim()).length,
    bytes: new TextEncoder().encode(input).length,
    paragraphs: input.split(/\n\s*\n/).filter(p=>p.trim()).length,
    unique: new Set(input.toLowerCase().replace(/[^a-z]/g," ").trim().split(/\s+/).filter(Boolean)).size,
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">String Length Counter</h1>
        <p className="text-gray-400 mb-6">Count characters, words, lines, and more in your text.</p>
        <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder="Type or paste text here..." className="w-full h-48 bg-gray-900 border border-gray-700 rounded p-3 text-sm focus:outline-none focus:border-blue-500" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
          {[
            {label:"Characters",value:stats.chars},
            {label:"No Spaces",value:stats.charsNoSpaces},
            {label:"Words",value:stats.words},
            {label:"Lines",value:stats.lines},
            {label:"Sentences",value:stats.sentences},
            {label:"Paragraphs",value:stats.paragraphs},
            {label:"Bytes",value:stats.bytes},
            {label:"Unique Words",value:stats.unique},
          ].map(s=>(
            <div key={s.label} className="bg-gray-900 border border-gray-700 rounded p-3 text-center">
              <div className="text-2xl font-bold text-blue-400">{s.value.toLocaleString()}</div>
              <div className="text-xs text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}