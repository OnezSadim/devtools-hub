"use client";
import { useState } from "react";
export default function WordCounter() {
  const [text, setText] = useState("");
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpace = text.replace(/\s/g, "").length;
  const lines = text ? text.split("\n").length : 0;
  const sentences = text.trim() ? text.split(/[.!?]+/).filter(s => s.trim()).length : 0;
  const paragraphs = text.trim() ? text.split(/\n\n+/).filter(p => p.trim()).length : 0;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Word Counter</h1>
        <p className="text-gray-400 mb-6">Count words, characters, sentences, and more.</p>
        <textarea className="w-full h-64 bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono text-sm focus:outline-none focus:border-blue-500 resize-none" placeholder="Paste or type your text here..." value={text} onChange={e => setText(e.target.value)} />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {[{label:"Words",val:words},{label:"Characters",val:chars},{label:"Chars (no spaces)",val:charsNoSpace},{label:"Lines",val:lines},{label:"Sentences",val:sentences},{label:"Paragraphs",val:paragraphs}].map(({label,val}) => (
            <div key={label} className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-400">{val.toLocaleString()}</div>
              <div className="text-sm text-gray-400 mt-1">{label}</div>
            </div>
          ))}
        </div>
        {text && <button onClick={() => setText("")} className="mt-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm">Clear</button>}
      </div>
    </main>
  );
}