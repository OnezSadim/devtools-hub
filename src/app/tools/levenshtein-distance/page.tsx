"use client";
import { useState } from "react";
export default function LevenshteinDistance() {
  const [s1, setS1] = useState("");
  const [s2, setS2] = useState("");
  const levenshtein = (a: string, b: string) => {
    const dp = Array.from({length: a.length+1}, (_, i) => Array.from({length: b.length+1}, (_, j) => i===0?j:j===0?i:0));
    for (let i=1;i<=a.length;i++) for (let j=1;j<=b.length;j++) dp[i][j] = a[i-1]===b[j-1] ? dp[i-1][j-1] : 1+Math.min(dp[i-1][j-1],dp[i-1][j],dp[i][j-1]);
    return dp[a.length][b.length];
  };
  const dist = s1 && s2 ? levenshtein(s1, s2) : null;
  const similarity = dist !== null ? (1 - dist / Math.max(s1.length, s2.length, 1)) * 100 : null;
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Levenshtein Distance</h1>
      <p className="text-gray-400 mb-6">Calculate the edit distance between two strings.</p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div><label className="text-sm text-gray-400">String 1</label><input className="w-full bg-gray-900 border border-gray-700 rounded p-3 mt-1" value={s1} onChange={e => setS1(e.target.value)} /></div>
        <div><label className="text-sm text-gray-400">String 2</label><input className="w-full bg-gray-900 border border-gray-700 rounded p-3 mt-1" value={s2} onChange={e => setS2(e.target.value)} /></div>
      </div>
      {dist !== null && (
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-900 border border-gray-700 rounded p-6 text-center"><p className="text-gray-400 text-sm">Edit Distance</p><p className="text-5xl font-bold text-blue-400 mt-2">{dist}</p></div>
          <div className="bg-gray-900 border border-gray-700 rounded p-6 text-center"><p className="text-gray-400 text-sm">Similarity</p><p className="text-5xl font-bold text-green-400 mt-2">{similarity!.toFixed(1)}%</p></div>
        </div>
      )}
    </div>
  );
}