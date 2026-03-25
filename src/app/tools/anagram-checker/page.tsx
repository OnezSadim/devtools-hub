"use client";
import { useState } from "react";
export default function AnagramChecker() {
  const [word1, setWord1] = useState('');
  const [word2, setWord2] = useState('');
  const sort = (s: string) => s.toLowerCase().replace(/\s/g, '').split('').sort().join('');
  const isAnagram = word1 && word2 ? sort(word1) === sort(word2) : null;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Anagram Checker</h1>
        <p className="text-gray-400 mb-8">Check if two words or phrases are anagrams of each other.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">First Word/Phrase</label><input value={word1} onChange={e => setWord1(e.target.value)} placeholder="e.g. listen" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Second Word/Phrase</label><input value={word2} onChange={e => setWord2(e.target.value)} placeholder="e.g. silent" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white" /></div>
          {isAnagram !== null && <div className={"rounded-lg p-6 text-center text-2xl font-bold " + (isAnagram ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300')}>
            {isAnagram ? 'YES — They are anagrams!' : 'NO — Not anagrams'}
          </div>}
        </div>
      </div>
    </main>
  );
}