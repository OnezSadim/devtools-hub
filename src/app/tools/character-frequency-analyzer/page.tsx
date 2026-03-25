"use client";
import { useState } from "react";

export default function CharacterFrequencyAnalyzer() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState<"all" | "alpha" | "num">("all");

  const analyze = (t: string) => {
    const freq: Record<string, number> = {};
    for (const c of t) {
      if (mode === "alpha" && !/[a-zA-Z]/.test(c)) continue;
      if (mode === "num" && !/[0-9]/.test(c)) continue;
      freq[c] = (freq[c] || 0) + 1;
    }
    return Object.entries(freq).sort((a, b) => b[1] - a[1]);
  };

  const freq = analyze(text);
  const total = freq.reduce((s, [, n]) => s + n, 0);
  const max = freq[0]?.[1] || 1;

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Character Frequency Analyzer</h1>
      <p className="text-gray-400 mb-6">Analyze the frequency of each character in your text</p>
      <div className="flex gap-3 mb-4">
        {(["all", "alpha", "num"] as const).map(m => (
          <button key={m} onClick={() => setMode(m)} className={"px-4 py-2 rounded capitalize " + (mode === m ? "bg-blue-600" : "bg-gray-800")}>{m === "alpha" ? "Letters" : m === "num" ? "Numbers" : "All"}</button>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <textarea value={text} onChange={e => setText(e.target.value)} className="h-48 bg-gray-900 border border-gray-700 rounded p-3" placeholder="Enter text to analyze..." />
        <div className="bg-gray-900 border border-gray-700 rounded p-4 h-80 overflow-y-auto">
          {freq.length === 0 ? <p className="text-gray-500">No characters yet</p> : freq.map(([char, count]) => (
            <div key={char} className="mb-2">
              <div className="flex justify-between text-sm mb-1">
                <span className="font-mono">{char === " " ? "[space]" : char}</span>
                <span className="text-gray-400">{count} ({((count/total)*100).toFixed(1)}%)</span>
              </div>
              <div className="h-2 bg-gray-800 rounded overflow-hidden">
                <div className="h-full bg-blue-500 rounded" style={{width: ((count/max)*100) + "%"}} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
