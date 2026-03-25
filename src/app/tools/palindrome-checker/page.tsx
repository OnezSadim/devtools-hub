"use client";
import { useState } from "react";
export default function PalindromeChecker() {
  const [text, setText] = useState('');
  const clean = text.toLowerCase().replace(/[^a-z0-9]/g, '');
  const isPalindrome = clean.length > 0 ? clean === clean.split('').reverse().join('') : null;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Palindrome Checker</h1>
        <p className="text-gray-400 mb-8">Check if a word or phrase reads the same forwards and backwards.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <input value={text} onChange={e => setText(e.target.value)} placeholder="e.g. racecar" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white text-lg" />
          {isPalindrome !== null && <div className={"rounded-lg p-6 text-center text-2xl font-bold " + (isPalindrome ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300')}>
            {isPalindrome ? 'YES — Palindrome!' : 'NO — Not a palindrome'}
          </div>}
          {clean && <p className="text-gray-500 text-sm text-center">Cleaned: {clean}</p>}
        </div>
      </div>
    </main>
  );
}