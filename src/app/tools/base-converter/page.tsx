"use client";
import { useState } from "react";
export default function BaseConverter() {
  const [input, setInput] = useState("");
  const [fromBase, setFromBase] = useState(10);
  const convert = (val: string, from: number, to: number) => {
    try { return parseInt(val, from).toString(to).toUpperCase(); } catch { return "Invalid"; }
  };
  const bases = [{label:"Binary (2)",val:2},{label:"Octal (8)",val:8},{label:"Decimal (10)",val:10},{label:"Hex (16)",val:16}];
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Base Converter</h1>
        <p className="text-gray-400 mb-8">Convert numbers between binary, octal, decimal, and hexadecimal</p>
        <div className="bg-gray-900 rounded-xl p-6">
          <div className="mb-4">
            <label className="block text-sm text-gray-400 mb-1">Input Base</label>
            <select value={fromBase} onChange={e=>setFromBase(parseInt(e.target.value))} className="bg-gray-800 rounded px-3 py-2 outline-none w-full">
              {bases.map(b=><option key={b.val} value={b.val}>{b.label}</option>)}
            </select>
          </div>
          <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter value" className="w-full bg-gray-800 rounded px-3 py-2 mb-6 outline-none focus:ring-2 ring-blue-500" />
          <div className="space-y-3">
            {bases.map(b=>(
              <div key={b.val} className="flex items-center justify-between bg-gray-800 rounded px-4 py-3">
                <span className="text-gray-400 text-sm">{b.label}</span>
                <span className="font-mono text-lg">{input ? convert(input, fromBase, b.val) : "-"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}