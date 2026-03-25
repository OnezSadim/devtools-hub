"use client";
import { useState } from "react";
export default function RomanNumeralConverter() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("to");
  const [result, setResult] = useState("");
  const toRoman = (num: number) => {
    const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const syms = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let res = "";
    for (let i = 0; i < vals.length; i++) { while (num >= vals[i]) { res += syms[i]; num -= vals[i]; } }
    return res;
  };
  const fromRoman = (s: string) => {
    const map: Record<string,number> = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
    let res = 0;
    for (let i = 0; i < s.length; i++) { const cur = map[s[i]]; const next = map[s[i+1]]; res += next > cur ? -cur : cur; }
    return res;
  };
  const convert = () => {
    try {
      if (mode === "to") { const n = parseInt(input); if (n < 1 || n > 3999) { setResult("Enter 1-3999"); } else setResult(toRoman(n)); }
      else setResult(fromRoman(input.toUpperCase()).toString());
    } catch { setResult("Invalid input"); }
  };
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-white mb-2">Roman Numeral Converter</h1>
      <p className="text-gray-400 mb-6">Convert between Roman numerals and integers</p>
      <div className="flex gap-2 mb-4">
        <button onClick={() => setMode("to")} className={"flex-1 py-2 rounded-lg font-semibold " + (mode==="to" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400")}>Number → Roman</button>
        <button onClick={() => setMode("from")} className={"flex-1 py-2 rounded-lg font-semibold " + (mode==="from" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400")}>Roman → Number</button>
      </div>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder={mode==="to" ? "Enter number (1-3999)" : "Enter Roman numeral"} className="w-full mb-4 p-3 bg-gray-800 text-white rounded-lg border border-gray-700" />
      <button onClick={convert} className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold mb-4">Convert</button>
      {result && <div className="p-4 bg-gray-800 rounded-lg"><p className="text-gray-400 text-sm mb-1">Result</p><p className="text-2xl font-mono text-green-400">{result}</p></div>}
    </div>
  );
}