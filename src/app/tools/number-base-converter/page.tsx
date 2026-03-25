"use client";
import { useState } from "react";
export default function NumberBaseConverter() {
  const [val, setVal] = useState("");
  const [base, setBase] = useState("10");
  const dec = parseInt(val, parseInt(base));
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-white">Number Base Converter</h1>
      <div className="flex gap-2 mb-4">
        <input className="flex-1 p-3 rounded bg-gray-800 text-white border border-gray-700" placeholder="Enter number" value={val} onChange={e=>setVal(e.target.value)} />
        <select className="p-3 rounded bg-gray-800 text-white border border-gray-700" value={base} onChange={e=>setBase(e.target.value)}>
          <option value="2">Binary</option>
          <option value="8">Octal</option>
          <option value="10">Decimal</option>
          <option value="16">Hex</option>
        </select>
      </div>
      {!isNaN(dec) && val && (
        <div className="space-y-2">
          <div className="p-3 bg-gray-800 rounded text-white">Binary: {dec.toString(2)}</div>
          <div className="p-3 bg-gray-800 rounded text-white">Octal: {dec.toString(8)}</div>
          <div className="p-3 bg-gray-800 rounded text-white">Decimal: {dec.toString(10)}</div>
          <div className="p-3 bg-gray-800 rounded text-white">Hex: {dec.toString(16).toUpperCase()}</div>
        </div>
      )}
    </div>
  );
}