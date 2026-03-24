"use client";
import { useState } from "react";
export default function NumberBaseConverter() {
  const [value, setValue] = useState("");
  const [fromBase, setFromBase] = useState(10);
  const bases = [{label:"Binary (2)",base:2},{label:"Octal (8)",base:8},{label:"Decimal (10)",base:10},{label:"Hex (16)",base:16}];
  const convert = (b: number) => {
    try { return parseInt(value, fromBase).toString(b).toUpperCase(); }
    catch { return "Invalid"; }
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Number Base Converter</h1>
      <p className="text-gray-400 mb-6">Convert numbers between binary, octal, decimal, and hexadecimal.</p>
      <div className="flex gap-2 mb-4 flex-wrap">
        {bases.map(b => (
          <button key={b.base} onClick={() => setFromBase(b.base)} className={"px-4 py-2 rounded " + (fromBase===b.base ? "bg-blue-600" : "bg-gray-800")}>{b.label}</button>
        ))}
      </div>
      <input className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-sm mb-6" placeholder={"Enter " + fromBase + "-base number"} value={value} onChange={e => setValue(e.target.value)} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {bases.map(b => (
          <div key={b.base} className="bg-gray-900 border border-gray-700 rounded p-4">
            <p className="text-gray-400 text-xs mb-1">{b.label}</p>
            <p className="font-mono text-lg text-green-400">{value ? convert(b.base) : "—"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}