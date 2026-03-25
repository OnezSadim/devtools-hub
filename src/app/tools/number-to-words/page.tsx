"use client";
import { useState } from "react";

function toWords(n: number): string {
  if (n === 0) return "zero";
  const ones = ["","one","two","three","four","five","six","seven","eight","nine",
    "ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  const tens = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
  if (n < 20) return ones[n];
  if (n < 100) return tens[Math.floor(n/10)] + (n%10 ? "-"+ones[n%10] : "");
  if (n < 1000) return ones[Math.floor(n/100)]+" hundred"+(n%100 ? " "+toWords(n%100) : "");
  if (n < 1000000) return toWords(Math.floor(n/1000))+" thousand"+(n%1000 ? " "+toWords(n%1000) : "");
  if (n < 1000000000) return toWords(Math.floor(n/1000000))+" million"+(n%1000000 ? " "+toWords(n%1000000) : "");
  return toWords(Math.floor(n/1000000000))+" billion"+(n%1000000000 ? " "+toWords(n%1000000000) : "");
}

export default function NumberToWords() {
  const [input, setInput] = useState("");
  const num = parseInt(input);
  const result = !isNaN(num) && num >= 0 ? toWords(num) : "";
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Number to Words</h1>
        <p className="text-gray-400 mb-6">Convert numbers to English words.</p>
        <input type="number" value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter a number..." className="w-full bg-gray-800 rounded p-3 mb-4" />
        <div className="bg-gray-800 rounded p-4 text-xl capitalize min-h-12">{result}</div>
      </div>
    </div>
  );
}