"use client";
import { useState } from "react";

export default function AnagramFinder() {
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");

  const sort = (s: string) => s.toLowerCase().replace(/\s/g, "").split("").sort().join("");
  const isAnagram = word1 && word2 && sort(word1) === sort(word2);
  const diff = () => {
    const a = sort(word1).split(""), b = sort(word2).split("");
    const extra: string[] = [], missing: string[] = [];
    const bCopy = [...b];
    for (const c of a) { const i = bCopy.indexOf(c); i >= 0 ? bCopy.splice(i, 1) : missing.push(c); }
    extra.push(...bCopy);
    return { extra, missing };
  };
  const d = word1 && word2 ? diff() : null;

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Anagram Finder</h1>
      <p className="text-gray-400 mb-6">Check if two words or phrases are anagrams of each other</p>
      <div className="max-w-xl space-y-4">
        <input value={word1} onChange={e => setWord1(e.target.value)} className="w-full bg-gray-900 border border-gray-700 rounded p-3" placeholder="First word or phrase..." />
        <input value={word2} onChange={e => setWord2(e.target.value)} className="w-full bg-gray-900 border border-gray-700 rounded p-3" placeholder="Second word or phrase..." />
        {word1 && word2 && (
          <div className={"p-6 rounded border text-center " + (isAnagram ? "border-green-500 bg-green-900/20" : "border-red-500 bg-red-900/20")}>
            <div className="text-2xl font-bold mb-2">{isAnagram ? "✓ Anagram!" : "✗ Not an Anagram"}</div>
            {!isAnagram && d && (
              <div className="text-sm text-gray-300 mt-2">
                {d.missing.length > 0 && <div>Missing from second: {d.missing.join(", ")}</div>}
                {d.extra.length > 0 && <div>Extra in second: {d.extra.join(", ")}</div>}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
