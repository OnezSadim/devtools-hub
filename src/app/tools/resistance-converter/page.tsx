"use client";
import { useState } from "react";

const units: Record<string, number> = {
  "Ohm": 1,
  "Milliohm": 0.001,
  "Microohm": 1e-06,
  "Kilohm": 1000.0,
  "Megaohm": 1000000.0,
  "Gigaohm": 1000000000.0,
  "Statohm": 898755200000.0,
  "Abohm": 1e-09,
};

function convert(value: number, from: string, to: string): number {
  const base = value * units[from];
  return base / units[to];
}

export default function Page() {
  const [val, setVal] = useState("1");
  const [from, setFrom] = useState("Ohm");
  const [to, setTo] = useState("Milliohm");

  const numVal = parseFloat(val);
  const result = !isNaN(numVal) ? convert(numVal, from, to) : 0;

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Electrical Resistance Converter</h1>
        <p className="text-gray-400 mb-8">Convert between units of electrical resistance including ohms, kilohms, megaohms, and gigaohms.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Value</label>
            <input type="number" value={val} onChange={e => setVal(e.target.value)}
              className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white">
      <option value="Ohm">Ohm</option>
      <option value="Milliohm">Milliohm</option>
      <option value="Microohm">Microohm</option>
      <option value="Kilohm">Kilohm</option>
      <option value="Megaohm">Megaohm</option>
      <option value="Gigaohm">Gigaohm</option>
      <option value="Statohm">Statohm</option>
      <option value="Abohm">Abohm</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white">
      <option value="Ohm">Ohm</option>
      <option value="Milliohm">Milliohm</option>
      <option value="Microohm">Microohm</option>
      <option value="Kilohm">Kilohm</option>
      <option value="Megaohm">Megaohm</option>
      <option value="Gigaohm">Gigaohm</option>
      <option value="Statohm">Statohm</option>
      <option value="Abohm">Abohm</option>
              </select>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-blue-400">{result.toPrecision(6)}</div>
            <div className="text-gray-400 mt-1">{to}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
