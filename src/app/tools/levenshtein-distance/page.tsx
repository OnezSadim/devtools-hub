"use client";
import { useState } from "react";
export default function LevenshteinDistance() {
  const [s1, setS1] = useState("");
  const [s2, setS2] = useState("");
  const levenshtein = (a: string, b: string) => {
    const m = a.length, n = b.length;
    const dp = Array.from({length: m+1}, (_,i) => Array.from({length: n+1}, (_,j) => i===0?j:j===0?i:0));
    for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i-1]===b[j-1] ? dp[i-1][j-1] : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
    }
    return dp[m][n];
  };
  const dist = levenshtein(s1, s2);
  const maxLen = Math.max(s1.length, s2.length, 1);
  const similarity = Math.round((1 - dist/maxLen)*100);
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Levenshtein Distance</h1>
        <p className="text-gray-400 mb-8">Measure the edit distance between two strings</p>
        <div className="bg-gray-900 rounded-xl p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm text-gray-400 mb-1">String 1</label>
              <input value={s1} onChange={e=>setS1(e.target.value)} placeholder="kitten" className="w-full bg-gray-800 rounded px-3 py-2 outline-none focus:ring-2 ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">String 2</label>
              <input value={s2} onChange={e=>setS2(e.target.value)} placeholder="sitting" className="w-full bg-gray-800 rounded px-3 py-2 outline-none focus:ring-2 ring-blue-500" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 rounded p-4 text-center">
              <div className="text-3xl font-bold text-blue-400">{dist}</div>
              <div className="text-sm text-gray-400">Edit Distance</div>
            </div>
            <div className="bg-gray-800 rounded p-4 text-center">
              <div className="text-3xl font-bold text-green-400">{similarity}%</div>
              <div className="text-sm text-gray-400">Similarity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}