"use client";
import { useState } from "react";
export default function WordFrequency() {
  const [text, setText] = useState('');
  const getFreq = () => {
    if (!text.trim()) return [];
    const words = text.toLowerCase().match(/\b[a-z]+\b/g) || [];
    const freq: Record<string, number> = {};
    words.forEach(w => { freq[w] = (freq[w] || 0) + 1; });
    return Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 20);
  };
  const freq = getFreq();
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Word Frequency Counter</h1>
        <p className="text-gray-400 mb-8">Analyze word frequency in your text.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Paste your text here..." rows={6} className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white resize-none" />
          {freq.length > 0 && <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-300">Top Words</h2>
            {freq.map(([word, count]) => (
              <div key={word} className="flex items-center gap-3">
                <span className="w-32 text-blue-400 font-mono">{word}</span>
                <div className="flex-1 bg-gray-700 rounded-full h-4"><div className="bg-blue-600 h-4 rounded-full" style={{width: (count / freq[0][1] * 100) + '%'}} /></div>
                <span className="w-8 text-right text-gray-300">{count}</span>
              </div>
            ))}
          </div>}
        </div>
      </div>
    </main>
  );
}