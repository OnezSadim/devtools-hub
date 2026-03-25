"use client";
import { useState } from "react";
export default function HexToDecimalConverter() {
  const [hex, setHex] = useState("");
  const [decimal, setDecimal] = useState("");
  const [binary, setBinary] = useState("");
  const [octal, setOctal] = useState("");
  const [error, setError] = useState("");
  const [reverseDecimal, setReverseDecimal] = useState("");
  const [reverseHex, setReverseHex] = useState("");
  const convert = () => {
    setError("");
    const cleaned = hex.trim().replace(/^0x/i, "");
    if (!/^[0-9a-fA-F]+$/.test(cleaned)) {
      setError("Invalid hex value");
      return;
    }
    const dec = parseInt(cleaned, 16);
    setDecimal(dec.toString());
    setBinary(dec.toString(2));
    setOctal(dec.toString(8));
  };
  const convertReverse = () => {
    const dec = parseInt(reverseDecimal, 10);
    if (isNaN(dec) || dec < 0) {
      setReverseHex("Invalid");
      return;
    }
    setReverseHex("0x" + dec.toString(16).toUpperCase());
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Hex to Decimal Converter</h1>
        <p className="text-gray-400 mb-8">Convert hexadecimal numbers to decimal, binary, and octal.</p>
        <div className="bg-gray-900 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Hex → Decimal</h2>
          <input value={hex} onChange={e => setHex(e.target.value)} placeholder="e.g. FF or 0xFF" className="w-full bg-gray-800 rounded-lg p-3 font-mono mb-4 outline-none" />
          {error && <p className="text-red-400 mb-3">{error}</p>}
          <button onClick={convert} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold mb-4">Convert</button>
          {decimal && (
            <div className="space-y-2">
              <div className="flex justify-between bg-gray-800 rounded p-3"><span className="text-gray-400">Decimal</span><span className="font-mono">{decimal}</span></div>
              <div className="flex justify-between bg-gray-800 rounded p-3"><span className="text-gray-400">Binary</span><span className="font-mono">{binary}</span></div>
              <div className="flex justify-between bg-gray-800 rounded p-3"><span className="text-gray-400">Octal</span><span className="font-mono">{octal}</span></div>
            </div>
          )}
        </div>
        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Decimal → Hex</h2>
          <input value={reverseDecimal} onChange={e => setReverseDecimal(e.target.value)} placeholder="e.g. 255" className="w-full bg-gray-800 rounded-lg p-3 font-mono mb-4 outline-none" />
          <button onClick={convertReverse} className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg font-semibold mb-4">Convert</button>
          {reverseHex && <div className="flex justify-between bg-gray-800 rounded p-3"><span className="text-gray-400">Hexadecimal</span><span className="font-mono">{reverseHex}</span></div>}
        </div>
      </div>
    </main>
  );
}