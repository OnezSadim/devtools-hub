"use client";
import { useState } from "react";

const toRoman = (num: number): string => {
  if (num < 1 || num > 3999) return "Out of range (1-3999)";
  const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const syms = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  let result = "";
  vals.forEach((v, i) => { while (num >= v) { result += syms[i]; num -= v; } });
  return result;
};

const fromRoman = (s: string): number => {
  const map: Record<string, number> = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
  let result = 0;
  const str = s.toUpperCase();
  for (let i = 0; i < str.length; i++) {
    const cur = map[str[i]] || 0;
    const next = map[str[i+1]] || 0;
    result += cur < next ? -cur : cur;
  }
  return result;
};

export default function RomanNumeralConverter() {
  const [arabic, setArabic] = useState("");
  const [roman, setRoman] = useState("");

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Roman Numeral Converter</h1>
        <p className="text-gray-400 mb-8">Convert between Arabic numbers and Roman numerals.</p>
        <div className="space-y-6">
          <div className="bg-gray-900 rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-3">Arabic → Roman</h2>
            <input
              type="number" min="1" max="3999"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 font-mono text-lg mb-3"
              placeholder="Enter a number (1-3999)"
              value={arabic}
              onChange={e => setArabic(e.target.value)}
            />
            {arabic && <div className="text-3xl font-bold text-yellow-400 font-mono text-center py-2">{toRoman(parseInt(arabic) || 0)}</div>}
          </div>
          <div className="bg-gray-900 rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-3">Roman → Arabic</h2>
            <input
              type="text"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 font-mono text-lg uppercase mb-3"
              placeholder="Enter Roman numerals (e.g. XLII)"
              value={roman}
              onChange={e => setRoman(e.target.value.toUpperCase())}
            />
            {roman && <div className="text-3xl font-bold text-yellow-400 font-mono text-center py-2">{fromRoman(roman) || "Invalid"}</div>}
          </div>
        </div>
        <div className="mt-8 bg-gray-900 rounded-xl p-4">
          <h3 className="font-semibold mb-3 text-gray-300">Quick Reference</h3>
          <div className="grid grid-cols-4 gap-2 text-sm font-mono">
            {[["I",1],["V",5],["X",10],["L",50],["C",100],["D",500],["M",1000],["IV",4],["IX",9],["XL",40],["XC",90],["CD",400],["CM",900]].map(([r,a]) => (
              <div key={String(r)} className="bg-gray-800 rounded p-2 text-center">
                <div className="text-yellow-400 font-bold">{r}</div>
                <div className="text-gray-400 text-xs">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
