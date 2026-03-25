"use client";
import { useState } from "react";
export default function RomanNumeralConverter() {
  const [num, setNum] = useState("");
  const [roman, setRoman] = useState("");
  const [reverse, setReverse] = useState("");
  const toRoman = (n: number) => {
    if (n < 1 || n > 3999) return "Out of range (1-3999)";
    const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const syms = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let result = "";
    for (let i = 0; i < vals.length; i++) {
      while (n >= vals[i]) { result += syms[i]; n -= vals[i]; }
    }
    return result;
  };
  const fromRoman = (s: string) => {
    const map: Record<string,number> = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
    let result = 0;
    for (let i = 0; i < s.length; i++) {
      const cur = map[s[i]], next = map[s[i+1]];
      if (next && cur < next) result -= cur; else result += cur;
    }
    return result || "Invalid";
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Roman Numeral Converter</h1>
        <p className="text-gray-400 mb-8">Convert between numbers and Roman numerals</p>
        <div className="bg-gray-900 rounded-xl p-6 mb-4">
          <h2 className="text-lg font-semibold mb-3">Number to Roman</h2>
          <input type="number" value={num} onChange={e=>setNum(e.target.value)} placeholder="Enter number (1-3999)" className="w-full bg-gray-800 rounded px-3 py-2 mb-3 outline-none focus:ring-2 ring-blue-500" />
          <button onClick={()=>setRoman(toRoman(parseInt(num)||0))} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-medium">Convert</button>
          {roman && <div className="mt-3 p-3 bg-gray-800 rounded text-xl font-mono">{roman}</div>}
        </div>
        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-3">Roman to Number</h2>
          <input value={reverse} onChange={e=>setReverse(e.target.value.toUpperCase())} placeholder="Enter Roman numeral (e.g. XIV)" className="w-full bg-gray-800 rounded px-3 py-2 mb-3 outline-none focus:ring-2 ring-blue-500" />
          <div className="p-3 bg-gray-800 rounded text-xl font-mono">{reverse ? fromRoman(reverse) : "..."}</div>
        </div>
      </div>
    </div>
  );
}