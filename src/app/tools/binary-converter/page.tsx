"use client";
import { useState } from "react";
export default function BinaryConverter() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("dec2bin");
  const [result, setResult] = useState("");
  const convert = () => {
    try {
      if (mode === "dec2bin") setResult(parseInt(input).toString(2));
      else if (mode === "bin2dec") setResult(parseInt(input, 2).toString(10));
      else if (mode === "dec2hex") setResult(parseInt(input).toString(16).toUpperCase());
      else if (mode === "hex2dec") setResult(parseInt(input, 16).toString(10));
      else if (mode === "dec2oct") setResult(parseInt(input).toString(8));
      else if (mode === "oct2dec") setResult(parseInt(input, 8).toString(10));
    } catch { setResult("Invalid input"); }
  };
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-white mb-2">Binary Converter</h1>
      <p className="text-gray-400 mb-6">Convert between binary, decimal, hexadecimal, and octal</p>
      <select value={mode} onChange={e => setMode(e.target.value)} className="w-full mb-4 p-3 bg-gray-800 text-white rounded-lg border border-gray-700">
        <option value="dec2bin">Decimal → Binary</option>
        <option value="bin2dec">Binary → Decimal</option>
        <option value="dec2hex">Decimal → Hex</option>
        <option value="hex2dec">Hex → Decimal</option>
        <option value="dec2oct">Decimal → Octal</option>
        <option value="oct2dec">Octal → Decimal</option>
      </select>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="Enter value..." className="w-full mb-4 p-3 bg-gray-800 text-white rounded-lg border border-gray-700" />
      <button onClick={convert} className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold mb-4">Convert</button>
      {result && <div className="p-4 bg-gray-800 rounded-lg"><p className="text-gray-400 text-sm mb-1">Result</p><p className="text-2xl font-mono text-green-400">{result}</p></div>}
    </div>
  );
}