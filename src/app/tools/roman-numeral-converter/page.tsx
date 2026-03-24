"use client";
import { useState } from "react";
export default function RomanNumeralConverter() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("to");
  const [result, setResult] = useState("");
  const toRoman = (num: number) => {
    const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const syms = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let r = "";
    for (let i=0; i<vals.length; i++) { while (num >= vals[i]) { r += syms[i]; num -= vals[i]; } }
    return r;
  };
  const fromRoman = (s: string) => {
    const m: Record<string,number> = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
    let r = 0;
    for (let i=0; i<s.length; i++) { const c=m[s[i]], n=m[s[i+1]]; r += (n&&c<n)?-c:c; }
    return r;
  };
  const convert = () => {
    if (mode === "to") { const n = parseInt(input); if (n>=1&&n<=3999) setResult(toRoman(n)); else setResult("Enter 1-3999"); }
    else { setResult(fromRoman(input.toUpperCase()).toString()); }
  };
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Roman Numeral Converter</h1>
      <p className="text-gray-400 mb-6">Convert between Arabic and Roman numerals.</p>
      <div className="flex gap-2 mb-4">
        <button onClick={() => setMode("to")} className={`flex-1 py-2 rounded ${mode==="to"?"bg-blue-600":"bg-gray-700"}`}>Number → Roman</button>
        <button onClick={() => setMode("from")} className={`flex-1 py-2 rounded ${mode==="from"?"bg-blue-600":"bg-gray-700"}`}>Roman → Number</button>
      </div>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder={mode==="to"?"Enter number (1-3999)...":"Enter Roman numeral..."} className="w-full p-3 bg-gray-800 border border-gray-600 rounded mb-4 text-white" />
      <button onClick={convert} className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded font-semibold mb-4">Convert</button>
      {result && <div className="p-4 bg-gray-800 rounded text-center"><p className="text-green-400 text-3xl font-bold">{result}</p></div>}
    </div>
  );
}