"use client";
import { useState } from "react";
export default function RomanNumeralConverter() {
  const [decimal, setDecimal] = useState("");
  const [roman, setRoman] = useState("");
  const toRoman = (n: number): string => {
    if (n < 1 || n > 3999) return "Out of range (1-3999)";
    const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const syms = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let result = "";
    for (let i=0;i<vals.length;i++) while(n>=vals[i]){result+=syms[i];n-=vals[i];}
    return result;
  };
  const fromRoman = (s: string): number => {
    const map: Record<string,number> = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
    let result = 0;
    const u = s.toUpperCase();
    for (let i=0;i<u.length;i++) {
      const cur = map[u[i]]||0, nxt = map[u[i+1]]||0;
      result += cur < nxt ? -cur : cur;
    }
    return result;
  };
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Roman Numeral Converter</h1>
      <p className="text-gray-400 mb-6">Convert between decimal numbers and Roman numerals.</p>
      <div className="bg-gray-800 rounded-xl p-6 space-y-6">
        <div>
          <label className="text-sm text-gray-400 mb-2 block">Decimal → Roman</label>
          <div className="flex gap-3">
            <input type="number" value={decimal} onChange={e=>setDecimal(e.target.value)} placeholder="e.g. 2024" min={1} max={3999} className="flex-1 bg-gray-700 rounded px-3 py-2 font-mono" />
            <button onClick={()=>setRoman(toRoman(parseInt(decimal)))} className="bg-indigo-600 hover:bg-indigo-500 px-4 rounded-lg font-semibold">Convert</button>
          </div>
          {roman && <div className="mt-3 bg-gray-700 rounded p-3 font-mono text-2xl text-green-400 text-center">{roman}</div>}
        </div>
        <div>
          <label className="text-sm text-gray-400 mb-2 block">Roman → Decimal</label>
          <div className="flex gap-3">
            <input value={roman} onChange={e=>setRoman(e.target.value)} placeholder="e.g. MMXXIV" className="flex-1 bg-gray-700 rounded px-3 py-2 font-mono uppercase" />
            <button onClick={()=>setDecimal(String(fromRoman(roman)))} className="bg-indigo-600 hover:bg-indigo-500 px-4 rounded-lg font-semibold">Convert</button>
          </div>
        </div>
      </div>
    </div>
  );
}
