"use client";
import { useState } from "react";

export default function NumberBaseConverter() {
  const [input, setInput] = useState("");
  const [fromBase, setFromBase] = useState(10);

  const convert = (val: string, from: number) => {
    try {
      const n = parseInt(val, from);
      if (isNaN(n)) return null;
      return { bin: n.toString(2), oct: n.toString(8), dec: n.toString(10), hex: n.toString(16).toUpperCase() };
    } catch { return null; }
  };

  const result = convert(input, fromBase);

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Number Base Converter</h1>
      <p className="text-gray-400 mb-6">Convert numbers between binary, octal, decimal, and hexadecimal</p>
      <div className="max-w-xl">
        <div className="flex gap-4 mb-4">
          <input value={input} onChange={e => setInput(e.target.value)} className="flex-1 bg-gray-900 border border-gray-700 rounded p-3 font-mono" placeholder="Enter number..." />
          <select value={fromBase} onChange={e => setFromBase(Number(e.target.value))} className="bg-gray-900 border border-gray-700 rounded p-3">
            <option value={2}>Binary (base 2)</option>
            <option value={8}>Octal (base 8)</option>
            <option value={10}>Decimal (base 10)</option>
            <option value={16}>Hex (base 16)</option>
          </select>
        </div>
        {result ? (
          <div className="space-y-3">
            {[["Binary", result.bin, "2"], ["Octal", result.oct, "8"], ["Decimal", result.dec, "10"], ["Hexadecimal", result.hex, "16"]].map(([label, val, base]) => (
              <div key={base} className="bg-gray-900 border border-gray-700 rounded p-4">
                <div className="text-xs text-gray-500 mb-1">{label} (base {base})</div>
                <div className="font-mono text-lg">{val}</div>
              </div>
            ))}
          </div>
        ) : input ? <p className="text-red-400">Invalid number for base {fromBase}</p> : null}
      </div>
    </main>
  );
}
