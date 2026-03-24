"use client";
import { useState } from "react";
export default function RomanNumeralConverter() {
  const [input, setInput] = useState("");
  const toRoman = (n: number) => {
    const vals=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const syms=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let r=""; vals.forEach((v,i)=>{while(n>=v){r+=syms[i];n-=v;}});
    return r;
  };
  const fromRoman = (s: string) => {
    const m:Record<string,number>={I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
    let r=0; s=s.toUpperCase();
    for(let i=0;i<s.length;i++){const c=m[s[i]],n=m[s[i+1]];if(n>c)r-=c;else r+=c;}
    return r;
  };
  const isNum = /^\d+$/.test(input.trim());
  const result = input ? (isNum ? toRoman(parseInt(input)) : fromRoman(input).toString()) : "";
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Roman Numeral Converter</h1>
        <p className="text-gray-400 mb-6">Convert between Arabic and Roman numerals.</p>
        <input className="w-full bg-gray-800 rounded p-3 font-mono mb-4" value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter number or Roman numeral (e.g. 42 or XLII)..." />
        {result && <div className="bg-gray-800 p-4 rounded text-2xl font-bold text-center text-green-400 font-mono">{result}</div>}
      </div>
    </main>
  );
}