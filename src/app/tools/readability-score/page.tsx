"use client";
import { useState } from "react";

export default function ReadabilityScore() {
  const [text, setText] = useState("");

  const analyze = (t: string) => {
    const sentences = t.split(/[.!?]+/).filter(s => s.trim().length > 0).length || 1;
    const words = t.match(/\b\w+\b/g) || [];
    const syllables = words.reduce((sum, w) => {
      const count = w.toLowerCase().match(/[aeiouy]+/g)?.length || 1;
      return sum + Math.max(1, count);
    }, 0);
    const wc = words.length || 1;
    const flesch = 206.835 - 1.015 * (wc / sentences) - 84.6 * (syllables / wc);
    const fk = 0.39 * (wc / sentences) + 11.8 * (syllables / wc) - 15.59;
    return { flesch: Math.max(0, Math.min(100, flesch)), fk: Math.max(0, fk), words: wc, sentences, syllables };
  };

  const getLevel = (f: number) => f >= 90 ? "Very Easy" : f >= 80 ? "Easy" : f >= 70 ? "Fairly Easy" : f >= 60 ? "Standard" : f >= 50 ? "Fairly Difficult" : f >= 30 ? "Difficult" : "Very Difficult";
  const r = analyze(text);

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Readability Score</h1>
      <p className="text-gray-400 mb-6">Analyze how easy your text is to read</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <textarea value={text} onChange={e => setText(e.target.value)} className="h-64 bg-gray-900 border border-gray-700 rounded p-3" placeholder="Paste your text to analyze readability..." />
        <div className="space-y-4">
          <div className="bg-gray-900 border border-gray-700 rounded p-4">
            <div className="text-sm text-gray-400 mb-1">Flesch Reading Ease</div>
            <div className="text-3xl font-bold text-blue-400">{r.flesch.toFixed(1)}</div>
            <div className="text-sm text-gray-300">{getLevel(r.flesch)}</div>
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded p-4">
            <div className="text-sm text-gray-400 mb-1">Flesch-Kincaid Grade Level</div>
            <div className="text-3xl font-bold text-green-400">{r.fk.toFixed(1)}</div>
            <div className="text-sm text-gray-300">Grade {Math.round(r.fk)}</div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[["Words", r.words], ["Sentences", r.sentences], ["Syllables", r.syllables]].map(([l, v]) => (
              <div key={l} className="bg-gray-900 border border-gray-700 rounded p-3 text-center">
                <div className="text-lg font-bold">{v}</div>
                <div className="text-xs text-gray-400">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
