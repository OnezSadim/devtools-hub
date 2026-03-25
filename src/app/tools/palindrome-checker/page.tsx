"use client";
import { useState } from "react";

export default function PalindromeChecker() {
  const [text, setText] = useState("");

  const clean = (t: string) => t.toLowerCase().replace(/[^a-z0-9]/g, "");
  const isPalindrome = (t: string) => { const c = clean(t); return c.length > 0 && c === c.split("").reverse().join(""); };
  const isWordPalindrome = (t: string) => { const words = t.toLowerCase().split(/\s+/).filter(Boolean); return words.length > 1 && JSON.stringify(words) === JSON.stringify([...words].reverse()); };

  const charPalin = isPalindrome(text);
  const wordPalin = isWordPalindrome(text);
  const cleaned = clean(text);

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Palindrome Checker</h1>
      <p className="text-gray-400 mb-6">Check if text reads the same forwards and backwards</p>
      <div className="max-w-xl">
        <textarea value={text} onChange={e => setText(e.target.value)} className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-3 mb-6" placeholder="Enter text to check..." />
        {text && (
          <div className="space-y-4">
            <div className={"p-4 rounded border " + (charPalin ? "border-green-500 bg-green-900/20" : "border-red-500 bg-red-900/20")}>
              <div className="font-semibold">{charPalin ? "✓ Character Palindrome" : "✗ Not a Character Palindrome"}</div>
              <div className="text-sm text-gray-400 mt-1">Cleaned: {cleaned || "(empty)"}</div>
            </div>
            <div className={"p-4 rounded border " + (wordPalin ? "border-green-500 bg-green-900/20" : "border-gray-700 bg-gray-900")}>
              <div className="font-semibold">{wordPalin ? "✓ Word Palindrome" : "✗ Not a Word Palindrome"}</div>
              <div className="text-sm text-gray-400 mt-1">Checks if words read the same in reverse order</div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
