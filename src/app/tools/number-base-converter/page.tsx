
"use client";
import { useState } from "react";
export default function NumberBaseConverter() {
  const [value, setValue] = useState("");
  const [fromBase, setFromBase] = useState(10);
  const convert = (v: string, from: number) => {
    if (!v.trim()) return null;
    try { return parseInt(v.trim(), from); } catch { return null; }
  };
  const num = convert(value, fromBase);
  const bases = [
    { label: "Binary (2)", base: 2, prefix: "0b" },
    { label: "Octal (8)", base: 8, prefix: "0o" },
    { label: "Decimal (10)", base: 10, prefix: "" },
    { label: "Hexadecimal (16)", base: 16, prefix: "0x" },
    { label: "Base 32", base: 32, prefix: "" },
    { label: "Base 36", base: 36, prefix: "" },
    { label: "Base 64", base: 64, prefix: "" },
  ];
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Number Base Converter</h1>
        <p className="text-gray-400 mb-6">Convert numbers between binary, octal, decimal, hex, and more</p>
        <div className="flex gap-3 mb-6">
          <div className="flex-1">
            <label className="block text-sm text-gray-400 mb-1">Number</label>
            <input value={value} onChange={e=>setValue(e.target.value)} placeholder="Enter number..." className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 font-mono text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">From Base</label>
            <select value={fromBase} onChange={e=>setFromBase(+e.target.value)} className="bg-gray-800 border border-gray-700 rounded px-3 py-3">
              {[2,4,8,10,12,16,32,36].map(b=><option key={b} value={b}>Base {b}</option>)}
            </select>
          </div>
        </div>
        {num !== null && !isNaN(num) ? (
          <div className="space-y-3">
            {bases.map(({label, base, prefix}) => (
              <div key={base} className="flex items-center justify-between bg-gray-900 border border-gray-800 rounded px-4 py-3">
                <span className="text-sm text-gray-400 w-40">{label}</span>
                <code className="text-green-400 font-mono flex-1 px-3">{prefix}{num.toString(base).toUpperCase()}</code>
                <button onClick={()=>navigator.clipboard.writeText(num.toString(base))} className="text-xs bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded">Copy</button>
              </div>
            ))}
          </div>
        ) : value ? <p className="text-red-400">Invalid number for base {fromBase}</p> : null}
      </div>
    </div>
  );
}
