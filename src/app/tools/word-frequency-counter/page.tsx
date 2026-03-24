"use client";
import { useState } from "react";
export default function WordFrequencyCounter() {
  const [text, setText] = useState("");
  const getFreq = () => {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const freq: Record<string, number> = {};
    words.forEach(w => freq[w] = (freq[w] || 0) + 1);
    return Object.entries(freq).sort((a, b) => b[1] - a[1]);
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Word Frequency Counter</h1>
      <p className="text-gray-400 mb-6">Count how often each word appears in your text.</p>
      <textarea className="w-full h-40 bg-gray-900 border border-gray-700 rounded p-3 text-sm mb-4" placeholder="Paste your text here..." value={text} onChange={e => setText(e.target.value)} />
      {text && (
        <div className="bg-gray-900 border border-gray-700 rounded p-4">
          <h2 className="font-semibold mb-3">Results ({getFreq().length} unique words)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {getFreq().map(([word, count]) => (
              <div key={word} className="bg-gray-800 rounded px-3 py-2 flex justify-between">
                <span className="text-blue-300">{word}</span>
                <span className="text-gray-400">{count}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}