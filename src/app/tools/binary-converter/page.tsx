"use client";
import { useState } from "react";
export default function BinaryConverter() {
  const [input, setInput] = useState("");
  const [fromBase, setFromBase] = useState("10");
  const convert = (val: string, from: number) => {
    try {
      const n = parseInt(val, from);
      if (isNaN(n)) return { bin: "", oct: "", dec: "", hex: "" };
      return { bin: n.toString(2), oct: n.toString(8), dec: n.toString(10), hex: n.toString(16).toUpperCase() };
    } catch { return { bin: "", oct: "", dec: "", hex: "" }; }
  };
  const r = convert(input, parseInt(fromBase));
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Binary / Number Base Converter</h1>
      <p className="text-gray-400 mb-6">Convert between binary, octal, decimal, and hexadecimal.</p>
      <div className="bg-gray-800 rounded-xl p-6 space-y-4">
        <div className="flex gap-3">
          <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter a number" className="flex-1 bg-gray-700 rounded px-3 py-2 font-mono" />
          <select value={fromBase} onChange={e=>setFromBase(e.target.value)} className="bg-gray-700 rounded px-3 py-2">
            <option value="2">Binary (2)</option>
            <option value="8">Octal (8)</option>
            <option value="10">Decimal (10)</option>
            <option value="16">Hex (16)</option>
          </select>
        </div>
        {[{label:"Binary (base 2)",val:r.bin},{label:"Octal (base 8)",val:r.oct},{label:"Decimal (base 10)",val:r.dec},{label:"Hexadecimal (base 16)",val:r.hex}].map(({label,val})=>(
          <div key={label} className="flex items-center justify-between bg-gray-700 rounded px-4 py-3">
            <span className="text-gray-400 text-sm">{label}</span>
            <span className="font-mono text-green-400 text-lg">{val||"—"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
