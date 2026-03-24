"use client";
import { useState } from "react";
export default function NumberBaseConverter() {
  const [input, setInput] = useState("");
  const [fromBase, setFromBase] = useState("10");
  const convert = (val, from) => {
    try {
      const dec = parseInt(val, parseInt(from));
      if (isNaN(dec)) return null;
      return { bin: dec.toString(2), oct: dec.toString(8), dec: dec.toString(10), hex: dec.toString(16).toUpperCase() };
    } catch { return null; }
  };
  const result = input ? convert(input, fromBase) : null;
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Number Base Converter</h1>
        <p className="text-gray-400 mb-6">Convert between binary, octal, decimal, and hexadecimal</p>
        <div className="flex gap-3 mb-4">
          <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter number..." className="flex-1 bg-gray-900 border border-gray-700 rounded px-3 py-2 font-mono" />
          <select value={fromBase} onChange={e=>setFromBase(e.target.value)} className="bg-gray-900 border border-gray-700 rounded px-3 py-2">
            <option value="2">Binary (2)</option>
            <option value="8">Octal (8)</option>
            <option value="10">Decimal (10)</option>
            <option value="16">Hex (16)</option>
          </select>
        </div>
        {result ? (
          <div className="space-y-3">
            {[['Binary', result.bin, '2'], ['Octal', result.oct, '8'], ['Decimal', result.dec, '10'], ['Hexadecimal', result.hex, '16']].map(([label, val, base]) => (
              <div key={base} className="bg-gray-900 rounded p-4 flex justify-between items-center">
                <span className="text-gray-400">{label} (base {base})</span>
                <span className="font-mono text-green-400 text-lg">{val}</span>
              </div>
            ))}
          </div>
        ) : input ? <p className="text-red-400">Invalid number for selected base</p> : null}
      </div>
    </div>
  );
}