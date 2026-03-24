"use client";
import { useState } from "react";
export default function RomanNumeralConverter() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"toRoman"|"fromRoman">("toRoman");
  const toRoman = (n: number): string => {
    if (n < 1 || n > 3999) return "Out of range (1-3999)";
    const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const syms = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let r = "";
    for (let i = 0; i < vals.length; i++) { while (n >= vals[i]) { r += syms[i]; n -= vals[i]; } }
    return r;
  };
  const fromRoman = (s: string): string => {
    const map: Record<string,number> = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
    let r = 0;
    for (let i = 0; i < s.length; i++) {
      const cur = map[s[i]], nxt = map[s[i+1]];
      if (!cur) return "Invalid Roman numeral";
      r += nxt > cur ? -cur : cur;
    }
    return r.toString();
  };
  const result = input ? (mode === "toRoman" ? toRoman(parseInt(input)) : fromRoman(input.toUpperCase())) : "";
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Roman Numeral Converter</h1>
        <p className="text-gray-400 mb-6">Convert between Roman numerals and Arabic numbers.</p>
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="flex gap-2 mb-4">
            <button onClick={() => setMode("toRoman")} className={`px-4 py-2 rounded ${mode==="toRoman"?"bg-blue-600":"bg-gray-700 hover:bg-gray-600"}`}>Number → Roman</button>
            <button onClick={() => setMode("fromRoman")} className={`px-4 py-2 rounded ${mode==="fromRoman"?"bg-blue-600":"bg-gray-700 hover:bg-gray-600"}`}>Roman → Number</button>
          </div>
          <input className="w-full bg-gray-800 border border-gray-700 rounded p-3 font-mono text-lg mb-4" value={input} onChange={e => setInput(e.target.value)} placeholder={mode==="toRoman" ? "Enter number (1-3999)" : "Enter Roman numerals"} />
          {result && (
            <div className="bg-gray-800 rounded p-4 text-center">
              <div className="text-gray-400 text-sm mb-1">Result</div>
              <div className="text-3xl font-bold text-green-400 font-mono">{result}</div>
              <button onClick={() => navigator.clipboard.writeText(result)} className="text-sm text-gray-500 hover:text-gray-300 mt-2">Copy</button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}