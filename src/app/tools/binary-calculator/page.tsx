"use client";
import { useState } from "react";
export default function BinaryCalculator() {
  const [input, setInput] = useState("42");
  const [base, setBase] = useState("decimal");
  const parse = (v: string, b: string): number => {
    const n = b === "decimal" ? parseInt(v, 10) : b === "binary" ? parseInt(v, 2) : b === "octal" ? parseInt(v, 8) : parseInt(v, 16);
    return isNaN(n) ? 0 : n;
  };
  const n = parse(input, base);
  const results = [
    {label:"Decimal",val:n.toString(10)},
    {label:"Binary",val:n.toString(2)},
    {label:"Octal",val:n.toString(8)},
    {label:"Hexadecimal",val:n.toString(16).toUpperCase()},
    {label:"ASCII",val:n >= 32 && n <= 126 ? String.fromCharCode(n) : "N/A"},
    {label:"Bits",val:n.toString(2).length.toString()},
  ];
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Binary / Number Base Calculator</h1>
      <div className="flex gap-3 mb-4">
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Enter number" className="flex-1 p-2 bg-gray-800 border border-gray-700 rounded font-mono" />
        <select value={base} onChange={e => setBase(e.target.value)} className="p-2 bg-gray-800 border border-gray-700 rounded">
          <option value="decimal">Decimal</option>
          <option value="binary">Binary</option>
          <option value="octal">Octal</option>
          <option value="hexadecimal">Hex</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {results.map(r => (
          <div key={r.label} className="bg-gray-800 rounded p-3">
            <div className="text-xs text-gray-400 mb-1">{r.label}</div>
            <div className="font-mono text-lg font-bold break-all">{r.val}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 bg-gray-800 rounded p-3">
        <div className="text-xs text-gray-400 mb-2">Binary visualization</div>
        <div className="flex flex-wrap gap-1">
          {n.toString(2).padStart(Math.max(8, n.toString(2).length), "0").split("").map((b, i) => (
            <span key={i} className={`w-8 h-8 flex items-center justify-center rounded font-mono font-bold ${b==="1" ? "bg-indigo-600" : "bg-gray-700"}`}>{b}</span>
          ))}
        </div>
      </div>
    </div>
  );
}