"use client";
import { useState } from "react";
export default function NumberBaseConverter() {
  const [input, setInput] = useState("");
  const [fromBase, setFromBase] = useState("10");
  const convert = (n: string, from: number) => {
    try { const dec = parseInt(n, from); if (isNaN(dec)) return null;
      return { bin: dec.toString(2), oct: dec.toString(8), dec: dec.toString(10), hex: dec.toString(16).toUpperCase() };
    } catch { return null; }
  };
  const result = convert(input, parseInt(fromBase));
  return (<div className="min-h-screen bg-gray-950 text-white p-8"><div className="max-w-2xl mx-auto"><h1 className="text-3xl font-bold mb-2">Number Base Converter</h1><p className="text-gray-400 mb-6">Convert between binary, octal, decimal, and hexadecimal.</p><div className="flex gap-4 mb-4"><input value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter number" className="flex-1 bg-gray-800 rounded p-3 text-white border border-gray-700" /><select value={fromBase} onChange={e=>setFromBase(e.target.value)} className="bg-gray-800 rounded p-3 text-white border border-gray-700"><option value="2">Binary</option><option value="8">Octal</option><option value="10">Decimal</option><option value="16">Hex</option></select></div>{result && <div className="grid grid-cols-2 gap-4">{[['Binary',result.bin],['Octal',result.oct],['Decimal',result.dec],['Hex',result.hex]].map(([l,v])=><div key={l} className="bg-gray-800 rounded p-4"><div className="text-gray-400 text-sm mb-1">{l}</div><div className="font-mono text-lg text-green-400 break-all">{v}</div></div>)}</div>}</div></div>);
}