"use client";
import { useState } from "react";

export default function HashGenerator() {
  const [input, setInput] = useState("");
  const [hashes, setHashes] = useState<Record<string, string>>({});

  const generate = async () => {
    const enc = new TextEncoder().encode(input);
    const algos = ["SHA-1", "SHA-256", "SHA-384", "SHA-512"];
    const results: Record<string, string> = {};
    for (const algo of algos) {
      const hash = await crypto.subtle.digest(algo, enc);
      results[algo] = Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, "0")).join("");
    }
    setHashes(results);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Hash Generator</h1>
      <p className="text-gray-400 mb-6">Generate SHA-1, SHA-256, SHA-384, SHA-512 hashes</p>
      <label className="block text-sm text-gray-400 mb-1">Input Text</label>
      <textarea className="w-full h-32 bg-gray-900 border border-gray-700 rounded-lg p-3 font-mono text-sm focus:border-blue-500 focus:outline-none resize-none mb-4" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter text to hash..." />
      <button onClick={generate} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition mb-6">Generate Hashes</button>
      <div className="space-y-3">
        {Object.entries(hashes).map(([algo, hash]) => (
          <div key={algo} className="bg-gray-900 border border-gray-700 rounded-lg p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-blue-400">{algo}</span>
              <button onClick={() => navigator.clipboard.writeText(hash)} className="text-xs text-gray-500 hover:text-white transition">Copy</button>
            </div>
            <p className="font-mono text-xs text-gray-300 break-all">{hash}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
