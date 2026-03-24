"use client";
import { useState } from "react";
export default function ScientificNotation() {
  const [input, setInput] = useState("");
  const num = parseFloat(input);
  const toSci = (n: number) => n.toExponential();
  const fromSci = (s: string) => { try { return parseFloat(s).toString(); } catch { return "Invalid"; } };
  const isSci = input.includes("e") || input.includes("E");
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Scientific Notation Converter</h1>
        <p className="text-gray-400 mb-6">Convert between standard and scientific notation.</p>
        <input className="w-full bg-gray-800 rounded p-3 font-mono mb-4" value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter number (e.g. 12345 or 1.2345e4)..." />
        {input && !isNaN(num) && <div className="space-y-3">
          <div className="bg-gray-800 p-4 rounded"><span className="text-gray-400">Scientific: </span><span className="font-mono text-green-400">{toSci(num)}</span></div>
          <div className="bg-gray-800 p-4 rounded"><span className="text-gray-400">Standard: </span><span className="font-mono text-blue-400">{isSci?fromSci(input):num.toLocaleString()}</span></div>
        </div>}
      </div>
    </main>
  );
}