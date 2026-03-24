"use client";
import { useState } from "react";

export default function NumberToWords() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const ones = ["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  const tens = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];

  const convert = (n: number): string => {
    if (n === 0) return "zero";
    if (n < 0) return "negative " + convert(-n);
    if (n < 20) return ones[n];
    if (n < 100) return tens[Math.floor(n/10)] + (n%10 ? "-" + ones[n%10] : "");
    if (n < 1000) return ones[Math.floor(n/100)] + " hundred" + (n%100 ? " " + convert(n%100) : "");
    if (n < 1e6) return convert(Math.floor(n/1000)) + " thousand" + (n%1000 ? " " + convert(n%1000) : "");
    if (n < 1e9) return convert(Math.floor(n/1e6)) + " million" + (n%1e6 ? " " + convert(n%1e6) : "");
    return convert(Math.floor(n/1e9)) + " billion" + (n%1e9 ? " " + convert(n%1e9) : "");
  };

  const handleConvert = () => {
    const n = parseInt(input);
    if (isNaN(n)) { setOutput("Please enter a valid number"); return; }
    setOutput(convert(n));
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Number to Words</h1>
        <p className="text-gray-400 mb-6">Convert any number into its English word representation.</p>
        <div className="flex gap-3 mb-4">
          <input type="number" value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleConvert()} placeholder="Enter a number..." className="flex-1 bg-gray-900 border border-gray-700 rounded p-3 text-lg focus:outline-none focus:border-blue-500" />
          <button onClick={handleConvert} className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded font-medium">Convert</button>
        </div>
        {output && (
          <div className="bg-gray-900 border border-gray-700 rounded p-4">
            <p className="text-xl text-green-400 capitalize">{output}</p>
          </div>
        )}
      </div>
    </main>
  );
}