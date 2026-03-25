"use client";
import { useState } from "react";

const units: Record<string, number> = {
  "H": 1,
  "mH": 0.001,
  "uH": 1e-06,
  "nH": 1e-09,
};

export default function InductanceConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("H");
  const [to, setTo] = useState("mH");

  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * units[from]) / units[to]).toPrecision(6);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Inductance Converter</h1>
        <p className="text-gray-400 mb-8">Convert between henry, millihenry, microhenry, nanohenry.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Value</label>
            <input type="number" value={val} onChange={e => setVal(e.target.value)}
              className="w-full bg-gray-800 rounded px-3 py-2 text-white" placeholder="Enter value" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)}
                className="w-full bg-gray-800 rounded px-3 py-2 text-white">
          <option value="H">Henry</option>
          <option value="mH">Millihenry</option>
          <option value="uH">Microhenry</option>
          <option value="nH">Nanohenry</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full bg-gray-800 rounded px-3 py-2 text-white">
          <option value="H">Henry</option>
          <option value="mH">Millihenry</option>
          <option value="uH">Microhenry</option>
          <option value="nH">Nanohenry</option>
              </select>
            </div>
          </div>
          {val && (
            <div className="bg-gray-800 rounded p-4 text-center">
              <span className="text-2xl font-mono text-green-400">{convert()}</span>
              <span className="text-gray-400 ml-2">{to}</span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
