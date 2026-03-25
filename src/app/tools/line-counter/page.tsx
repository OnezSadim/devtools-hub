"use client";
import { useState } from "react";

export default function LineCounter() {
  const [text, setText] = useState('');

  const lines = text ? text.split('\n') : [];
  const nonEmpty = lines.filter(l => l.trim() !== '');
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpace = text.replace(/\s/g,'').length;

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Line Counter</h1>
        <p className="text-gray-400 mb-6">Count lines, words, and characters in your text.</p>
        <textarea value={text} onChange={e=>setText(e.target.value)} rows={12} placeholder="Paste your text here..." className="w-full p-3 bg-gray-800 rounded font-mono mb-6" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[['Total Lines', lines.length],['Non-Empty Lines', nonEmpty.length],['Words', words],['Characters', chars],['Chars (no spaces)', charsNoSpace]].map(([label, val]) => (
            <div key={label} className="bg-gray-800 p-4 rounded text-center">
              <div className="text-3xl font-bold text-blue-400">{val}</div>
              <div className="text-sm text-gray-400 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}