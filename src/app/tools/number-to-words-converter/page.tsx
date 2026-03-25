"use client";
import { useState } from "react";

const ones = ["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
const tens = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];

function toWords(n) {
  if (n === 0) return "zero";
  if (n < 0) return "negative " + toWords(-n);
  if (n < 20) return ones[n];
  if (n < 100) return tens[Math.floor(n/10)] + (n%10 ? "-" + ones[n%10] : "");
  if (n < 1000) return ones[Math.floor(n/100)] + " hundred" + (n%100 ? " " + toWords(n%100) : "");
  if (n < 1e6) return toWords(Math.floor(n/1000)) + " thousand" + (n%1000 ? " " + toWords(n%1000) : "");
  if (n < 1e9) return toWords(Math.floor(n/1e6)) + " million" + (n%1e6 ? " " + toWords(n%1e6) : "");
  return toWords(Math.floor(n/1e9)) + " billion" + (n%1e9 ? " " + toWords(n%1e9) : "");
}

export default function NumberToWords() {
  const [val, setVal] = useState("");
  const n = parseInt(val);
  const result = val === "" ? "" : isNaN(n) ? "Invalid number" : toWords(n);
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Number to Words Converter</h1>
        <p className="text-gray-400 mb-6">Convert numbers to English words.</p>
        <input className="w-full bg-gray-800 rounded p-3 mb-4 text-white text-xl" type="number" placeholder="Enter a number" value={val} onChange={e=>setVal(e.target.value)} />
        {result && <div className="bg-gray-800 rounded p-4 text-lg capitalize leading-relaxed">{result}</div>}
      </div>
    </main>
  );
}