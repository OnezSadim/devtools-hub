"use client";
import { useState } from "react";

export default function BinaryToDecimal() {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState("");
  const [hex, setHex] = useState("");
  const [octal, setOctal] = useState("");
  const [error, setError] = useState("");

  function convert(val) {
    setBinary(val);
    if (!val) { setDecimal(""); setHex(""); setOctal(""); setError(""); return; }
    if (!/^[01]+$/.test(val)) { setError("Invalid binary"); return; }
    setError("");
    const dec = parseInt(val, 2);
    setDecimal(dec.toString());
    setHex(dec.toString(16).toUpperCase());
    setOctal(dec.toString(8));
  }

  function fromDecimal(val) {
    setDecimal(val);
    const n = parseInt(val);
    if (!isNaN(n) && n >= 0) {
      setBinary(n.toString(2));
      setHex(n.toString(16).toUpperCase());
      setOctal(n.toString(8));
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Binary to Decimal Converter</h1>
        <p className="text-gray-400 mb-6">Convert between binary, decimal, hex, and octal</p>
        <div className="space-y-4">
          {[["Binary", binary, convert, "01001000"], ["Decimal", decimal, fromDecimal, "72"], ["Hexadecimal", hex, (v) => { const n = parseInt(v, 16); if (!isNaN(n)) { setBinary(n.toString(2)); setDecimal(n.toString()); setHex(v.toUpperCase()); setOctal(n.toString(8)); } }, "48"], ["Octal", octal, (v) => { const n = parseInt(v, 8); if (!isNaN(n)) { setBinary(n.toString(2)); setDecimal(n.toString()); setHex(n.toString(16).toUpperCase()); setOctal(v); } }, "110"]].map(([label, value, handler, ph]) => (
            <div key={label}>
              <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
              <input className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 font-mono text-green-400 focus:outline-none focus:border-blue-500" value={value} onChange={e => handler(e.target.value)} placeholder={ph} />
            </div>
          ))}
          {error && <p className="text-red-400 text-sm">{error}</p>}
        </div>
      </div>
    </div>
  );
}
