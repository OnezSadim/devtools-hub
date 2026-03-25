"use client";
import { useState } from "react";

const vals = [[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];

function toRoman(n) {
  if (n < 1 || n > 3999) return "Out of range (1-3999)";
  let r = "";
  for (const [v, s] of vals) { while (n >= v) { r += s; n -= v; } }
  return r;
}

function fromRoman(s) {
  const m = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
  let r = 0;
  s = s.toUpperCase();
  for (let i = 0; i < s.length; i++) {
    const cur = m[s[i]] || 0;
    const nxt = m[s[i+1]] || 0;
    r += cur < nxt ? -cur : cur;
  }
  return r;
}

export default function RomanNumeralConverter() {
  const [num, setNum] = useState("");
  const [roman, setRoman] = useState("");
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Roman Numeral Converter</h1>
        <p className="text-gray-400 mb-6">Convert between Arabic and Roman numerals.</p>
        <div className="bg-gray-800 rounded p-4 mb-4">
          <label className="text-gray-400 text-sm mb-1 block">Number to Roman</label>
          <input className="w-full bg-gray-700 rounded p-2 text-white mb-2" type="number" min="1" max="3999" placeholder="1-3999" value={num} onChange={e=>setNum(e.target.value)} />
          <div className="text-2xl font-bold text-blue-400">{num ? toRoman(parseInt(num)) : ""}</div>
        </div>
        <div className="bg-gray-800 rounded p-4">
          <label className="text-gray-400 text-sm mb-1 block">Roman to Number</label>
          <input className="w-full bg-gray-700 rounded p-2 text-white mb-2" placeholder="e.g. XIV" value={roman} onChange={e=>setRoman(e.target.value)} />
          <div className="text-2xl font-bold text-green-400">{roman ? fromRoman(roman) : ""}</div>
        </div>
      </div>
    </main>
  );
}