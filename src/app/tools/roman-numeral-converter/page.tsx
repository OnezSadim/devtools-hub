"use client";
import { useState } from "react";

const vals = [[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]] as [number,string][];

const toRoman = (n: number): string => {
  if (n < 1 || n > 3999) return "Out of range (1-3999)";
  let result = "";
  for (const [val, sym] of vals) { while (n >= val) { result += sym; n -= val; } }
  return result;
};

const fromRoman = (s: string): number => {
  const map: Record<string, number> = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = map[s[i]], next = map[s[i+1]];
    if (!cur) return NaN;
    result += next > cur ? -cur : cur;
  }
  return result;
};

export default function RomanNumeralConverter() {
  const [num, setNum] = useState("");
  const [roman, setRoman] = useState("");

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Roman Numeral Converter</h1>
      <p className="text-gray-400 mb-6">Convert between Arabic and Roman numerals</p>
      <div className="max-w-xl space-y-6">
        <div className="bg-gray-900 border border-gray-700 rounded p-6">
          <label className="block text-sm text-gray-400 mb-2">Number → Roman</label>
          <input type="number" value={num} onChange={e => setNum(e.target.value)} className="w-full bg-gray-800 border border-gray-600 rounded p-3 mb-3" placeholder="Enter number (1-3999)" />
          {num && <div className="text-2xl font-mono text-blue-400">{toRoman(parseInt(num))}</div>}
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded p-6">
          <label className="block text-sm text-gray-400 mb-2">Roman → Number</label>
          <input value={roman} onChange={e => setRoman(e.target.value.toUpperCase())} className="w-full bg-gray-800 border border-gray-600 rounded p-3 mb-3" placeholder="Enter Roman numeral (e.g. XLII)" />
          {roman && <div className="text-2xl font-mono text-green-400">{isNaN(fromRoman(roman)) ? "Invalid" : fromRoman(roman)}</div>}
        </div>
      </div>
    </main>
  );
}
