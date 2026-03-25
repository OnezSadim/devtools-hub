"use client";
import { useState } from "react";
export default function PalindromeChecker() {
  const [text, setText] = useState("");
  const clean = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  const isPalindrome = clean === clean.split("").reverse().join("");
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Palindrome Checker</h1>
        <p className="text-gray-400 mb-8">Check if a word or phrase is a palindrome</p>
        <div className="bg-gray-900 rounded-xl p-6">
          <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Enter text to check..." rows={3} className="w-full bg-gray-800 rounded px-3 py-2 mb-4 outline-none focus:ring-2 ring-blue-500 resize-none" />
          {text && (
            <>
              <div className={`p-4 rounded-lg text-center text-xl font-bold mb-4 ${isPalindrome?'bg-green-900 text-green-300':'bg-red-900 text-red-300'}`}>
                {isPalindrome ? '✓ Palindrome!' : '✗ Not a palindrome'}
              </div>
              <div className="text-sm text-gray-400">
                Cleaned: <span className="font-mono text-white">{clean}</span>
              </div>
              <div className="text-sm text-gray-400">
                Reversed: <span className="font-mono text-white">{clean.split("").reverse().join("")}</span>
              </div>
            </>
          )}
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-2">Examples:</p>
            {["racecar","A man a plan a canal Panama","hello"].map(ex=>(
              <button key={ex} onClick={()=>setText(ex)} className="mr-2 mb-2 text-xs bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded">{ex}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}