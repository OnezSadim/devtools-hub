"use client";
import { useState } from "react";
export default function PalindromeChecker() {
  const [input, setInput] = useState("");
  const check = (s: string) => { const c = s.toLowerCase().replace(/[^a-z0-9]/g,""); return c === c.split("").reverse().join(""); };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Palindrome Checker</h1>
        <p className="text-gray-400 mb-6">Check if a word or phrase is a palindrome.</p>
        <textarea className="w-full bg-gray-800 rounded p-3 font-mono text-sm mb-4" rows={3} value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter text..." />
        {input && <div className={`p-4 rounded text-lg font-bold ${check(input)?"bg-green-900 text-green-300":"bg-red-900 text-red-300"}`}>{check(input)?"✓ Palindrome":"✗ Not a palindrome"}</div>}
      </div>
    </main>
  );
}