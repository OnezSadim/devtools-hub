"use client";
import { useState } from "react";
export default function WordFrequencyCounter() {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);
  const analyze = () => {
    const words = text.toLowerCase().match(/\b[a-z']+\b/g) || [];
    const freq = {};
    words.forEach(w => { freq[w] = (freq[w] || 0) + 1; });
    const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
    setResults(sorted);
  };
  const totalWords = text.trim() ? (text.toLowerCase().match(/\b[a-z']+\b/g) || []).length : 0;
  const uniqueWords = results.length;
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Word Frequency Counter</h1>
        <p className="text-gray-400 mb-6">Analyze word frequency in any text.</p>
        <textarea className="w-full h-40 bg-gray-900 border border-gray-700 rounded p-3 text-sm mb-4" placeholder="Paste your text here..." value={text} onChange={e => setText(e.target.value)} />
        <button onClick={analyze} className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold mb-4">Analyze</button>
        {results.length > 0 && (
          <>
            <div className="flex gap-6 mb-4 text-sm">
              <span className="text-gray-400">Total words: <span className="text-white font-bold">{totalWords}</span></span>
              <span className="text-gray-400">Unique words: <span className="text-white font-bold">{uniqueWords}</span></span>
            </div>
            <div className="space-y-1 max-h-80 overflow-y-auto">
              {results.map(([word, count]) => (
                <div key={word} className="flex items-center gap-3 bg-gray-900 border border-gray-800 rounded px-3 py-1.5">
                  <span className="font-mono text-sm flex-1">{word}</span>
                  <div className="flex-1 bg-gray-800 rounded-full h-2 overflow-hidden">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(count / results[0][1]) * 100}%` }} />
                  </div>
                  <span className="text-gray-400 text-sm w-8 text-right">{count}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}