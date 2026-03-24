"use client";
import { useState } from "react";
export default function NumberBaseConverter() {
  const [input, setInput] = useState("");
  const [fromBase, setFromBase] = useState("10");
  const convert = (val: string, from: number) => {
    try {
      const dec = parseInt(val, from);
      if (isNaN(dec)) return null;
      return { bin: dec.toString(2), oct: dec.toString(8), dec: dec.toString(10), hex: dec.toString(16).toUpperCase() };
    } catch { return null; }
  };
  const result = input ? convert(input, parseInt(fromBase)) : null;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Number Base Converter</h1>
      <p className="text-gray-400 mb-6">Convert between binary, octal, decimal, and hexadecimal</p>
      <div className="max-w-xl space-y-4">
        <div className="flex gap-3">
          <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter number" className="flex-1 bg-gray-800 border border-gray-700 rounded px-3 py-2 font-mono" />
          <select value={fromBase} onChange={e=>setFromBase(e.target.value)} className="bg-gray-800 border border-gray-700 rounded px-3 py-2">
            <option value="2">Binary (2)</option>
            <option value="8">Octal (8)</option>
            <option value="10">Decimal (10)</option>
            <option value="16">Hex (16)</option>
          </select>
        </div>
        {result && (
          <div className="space-y-2">
            {[{label:"Binary",val:result.bin},{label:"Octal",val:result.oct},{label:"Decimal",val:result.dec},{label:"Hexadecimal",val:result.hex}].map(r=>(
              <div key={r.label} className="flex justify-between bg-gray-800 rounded px-4 py-3">
                <span className="text-gray-400">{r.label}</span>
                <span className="font-mono text-green-400">{r.val}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}