"use client";
import { useState } from "react";
export default function AnagramChecker() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const sort = (s: string) => s.toLowerCase().replace(/[^a-z]/g,"").split("").sort().join("");
  const isAnagram = a && b && sort(a) === sort(b);
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Anagram Checker</h1>
        <p className="text-gray-400 mb-6">Check if two words are anagrams of each other.</p>
        <input className="w-full bg-gray-800 rounded p-3 mb-3" value={a} onChange={e=>setA(e.target.value)} placeholder="First word..." />
        <input className="w-full bg-gray-800 rounded p-3 mb-4" value={b} onChange={e=>setB(e.target.value)} placeholder="Second word..." />
        {a && b && <div className={`p-4 rounded text-lg font-bold ${isAnagram?"bg-green-900 text-green-300":"bg-red-900 text-red-300"}`}>{isAnagram?"✓ Anagram":"✗ Not an anagram"}</div>}
      </div>
    </main>
  );
}