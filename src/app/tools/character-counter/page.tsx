"use client";
import { useState } from "react";
export default function CharacterCounter() {
  const [input, setInput] = useState("");
  const stats = {
    chars: input.length,
    charsNoSpaces: input.replace(/\s/g,"").length,
    words: input.trim() ? input.trim().split(/\s+/).length : 0,
    lines: input ? input.split("\n").length : 0,
    sentences: input.split(/[.!?]+/).filter(s => s.trim()).length,
    paragraphs: input.split(/\n\n+/).filter(p => p.trim()).length,
    avgWordLength: input.trim() ? (input.replace(/[^a-zA-Z]/g,"").length / (input.trim().split(/\s+/).length || 1)).toFixed(1) : "0",
    readingTime: Math.ceil((input.trim() ? input.trim().split(/\s+/).length : 0) / 200),
  };
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-white mb-2">Character Counter</h1>
      <p className="text-gray-400 mb-6">Count characters, words, sentences, and more</p>
      <textarea value={input} onChange={e => setInput(e.target.value)} rows={8} placeholder="Start typing or paste text here..." className="w-full mb-6 p-3 bg-gray-800 text-white rounded-lg border border-gray-700" />
      <div className="grid grid-cols-2 gap-3">
        {[
          {label:"Characters",value:stats.chars},
          {label:"No Spaces",value:stats.charsNoSpaces},
          {label:"Words",value:stats.words},
          {label:"Lines",value:stats.lines},
          {label:"Sentences",value:stats.sentences},
          {label:"Paragraphs",value:stats.paragraphs},
          {label:"Avg Word Length",value:stats.avgWordLength},
          {label:"Reading Time",value:stats.readingTime + " min"},
        ].map(s => (
          <div key={s.label} className="p-4 bg-gray-800 rounded-lg text-center">
            <p className="text-2xl font-bold text-white">{s.value}</p>
            <p className="text-gray-400 text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}