"use client";
import { useState } from "react";
export default function NumberBaseConverter() {
  const [value, setValue] = useState("");
  const [fromBase, setFromBase] = useState("10");
  const convert = (n: string, from: number) => {
    try {
      const dec = parseInt(n, from);
      if (isNaN(dec)) return null;
      return { bin: dec.toString(2), oct: dec.toString(8), dec: dec.toString(10), hex: dec.toString(16).toUpperCase() };
    } catch { return null; }
  };
  const result = value ? convert(value, parseInt(fromBase)) : null;
  const bases = [{label:"Binary (2)",val:"2"},{label:"Octal (8)",val:"8"},{label:"Decimal (10)",val:"10"},{label:"Hexadecimal (16)",val:"16"}];
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Number Base Converter</h1>
        <p className="text-gray-400 mb-6">Convert numbers between binary, octal, decimal, and hexadecimal.</p>
        <div className="bg-gray-900 rounded-lg p-6 mb-4">
          <div className="flex gap-3 mb-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Input Number</label>
              <input className="w-full bg-gray-800 border border-gray-700 rounded p-3 font-mono" value={value} onChange={e => setValue(e.target.value)} placeholder="Enter number..." />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">From Base</label>
              <select className="bg-gray-800 border border-gray-700 rounded p-3" value={fromBase} onChange={e => setFromBase(e.target.value)}>
                {bases.map(b => <option key={b.val} value={b.val}>{b.label}</option>)}
              </select>
            </div>
          </div>
        </div>
        {result && (
          <div className="grid grid-cols-2 gap-4">
            {[{l:"Binary",v:result.bin},{l:"Octal",v:result.oct},{l:"Decimal",v:result.dec},{l:"Hexadecimal",v:result.hex}].map(({l,v}) => (
              <div key={l} className="bg-gray-900 rounded-lg p-4">
                <div className="text-gray-400 text-sm mb-1">{l}</div>
                <div className="font-mono text-xl text-green-400">{v}</div>
                <button onClick={() => navigator.clipboard.writeText(v)} className="text-xs text-gray-500 hover:text-gray-300 mt-1">Copy</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}