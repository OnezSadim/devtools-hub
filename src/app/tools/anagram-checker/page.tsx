"use client";
import { useState } from "react";
export default function AnagramChecker() {
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const sort = (s: string) => s.toLowerCase().replace(/[^a-z]/g,"").split("").sort().join("");
  const isAnagram = word1 && word2 && sort(word1) === sort(word2);
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Anagram Checker</h1>
        <p className="text-gray-400 mb-8">Check if two words are anagrams of each other</p>
        <div className="bg-gray-900 rounded-xl p-6">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Word 1</label>
              <input value={word1} onChange={e=>setWord1(e.target.value)} placeholder="listen" className="w-full bg-gray-800 rounded px-3 py-2 outline-none focus:ring-2 ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Word 2</label>
              <input value={word2} onChange={e=>setWord2(e.target.value)} placeholder="silent" className="w-full bg-gray-800 rounded px-3 py-2 outline-none focus:ring-2 ring-blue-500" />
            </div>
          </div>
          {word1 && word2 && (
            <div className={`p-4 rounded-lg text-center text-xl font-bold ${isAnagram?'bg-green-900 text-green-300':'bg-red-900 text-red-300'}`}>
              {isAnagram ? '✓ Anagram!' : '✗ Not an anagram'}
            </div>
          )}
          <div className="mt-4 text-sm text-gray-500">
            <p className="mb-2">Famous anagram pairs:</p>
            {[["listen","silent"],["astronomer","moon starer"],["conversation","voices rant on"]].map(([a,b])=>(
              <button key={a} onClick={()=>{setWord1(a);setWord2(b)}} className="mr-2 mb-2 bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded text-xs">{a} / {b}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}