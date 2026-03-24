"use client";
import { useState } from "react";
export default function NumberBaseConverter() {
  const [val, setVal] = useState("255");
  const [fromBase, setFromBase] = useState(10);
  const bases = [{label:"Binary (2)",base:2},{label:"Octal (8)",base:8},{label:"Decimal (10)",base:10},{label:"Hex (16)",base:16}];
  let num = NaN;
  try { num = parseInt(val, fromBase); } catch(e) {}
  const valid = !isNaN(num);
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Number Base Converter</h1>
      <p className="text-gray-400 mb-6">Convert numbers between binary, octal, decimal, and hex.</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div><label className="block text-sm mb-1">Input value</label><input value={val} onChange={e=>setVal(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded p-2 font-mono" /></div>
        <div><label className="block text-sm mb-1">From base</label><select value={fromBase} onChange={e=>setFromBase(+e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded p-2">{bases.map(b=><option key={b.base} value={b.base}>{b.label}</option>)}</select></div>
      </div>
      {valid ? <div className="space-y-3">{bases.map(b=>(
        <div key={b.base} className="bg-gray-800 rounded p-3 flex justify-between">
          <span className="text-gray-400">{b.label}</span>
          <span className="font-mono">{num.toString(b.base).toUpperCase()}</span>
        </div>
      ))}</div> : <p className="text-red-400">Invalid input for base {fromBase}</p>}
    </div>
  );
}