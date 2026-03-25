"use client";
import { useState } from "react";
export default function SentenceCounter() {
  const [text, setText] = useState("");
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const paragraphs = text.split(/\n\n+/).filter(p => p.trim().length > 0).length;
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Sentence Counter</h1>
      <p className="text-gray-400 mb-6">Count sentences, words, characters, and paragraphs in your text.</p>
      <textarea className="w-full h-48 bg-gray-900 border border-gray-700 rounded p-3 text-white mb-4 resize-none" placeholder="Paste your text here..." value={text} onChange={e => setText(e.target.value)} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[{label:"Sentences",value:sentences},{label:"Words",value:words},{label:"Characters",value:chars},{label:"Paragraphs",value:paragraphs}].map(({label,value}) => (
          <div key={label} className="bg-gray-900 border border-gray-700 rounded p-4 text-center">
            <div className="text-3xl font-bold text-blue-400">{value}</div>
            <div className="text-gray-400 mt-1">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
