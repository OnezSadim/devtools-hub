"use client";
import { useState } from "react";
export default function NumberToWords() {
  const [num, setNum] = useState("");
  const ones = ["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  const tens = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
  function convert(n: number): string {
    if (n === 0) return "zero";
    if (n < 0) return "negative " + convert(-n);
    if (n < 20) return ones[n];
    if (n < 100) return tens[Math.floor(n/10)] + (n%10 ? "-" + ones[n%10] : "");
    if (n < 1000) return ones[Math.floor(n/100)] + " hundred" + (n%100 ? " " + convert(n%100) : "");
    if (n < 1e6) return convert(Math.floor(n/1000)) + " thousand" + (n%1000 ? " " + convert(n%1000) : "");
    if (n < 1e9) return convert(Math.floor(n/1e6)) + " million" + (n%1e6 ? " " + convert(n%1e6) : "");
    if (n < 1e12) return convert(Math.floor(n/1e9)) + " billion" + (n%1e9 ? " " + convert(n%1e9) : "");
    return "number too large";
  }
  const result = num && !isNaN(Number(num)) ? convert(Math.floor(Math.abs(Number(num)))) : "";
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Number to Words Converter</h1>
        <p className="text-gray-400 mb-6">Convert any number to its English word representation.</p>
        <input className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-lg font-mono mb-4" type="number" placeholder="Enter a number..." value={num} onChange={e => setNum(e.target.value)} />
        {result && (
          <div className="bg-gray-900 border border-gray-700 rounded p-4">
            <div className="text-sm text-gray-500 mb-1">In words:</div>
            <div className="text-xl capitalize">{result}</div>
            <button onClick={() => navigator.clipboard.writeText(result)} className="mt-3 text-sm bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Copy</button>
          </div>
        )}
      </div>
    </main>
  );
}