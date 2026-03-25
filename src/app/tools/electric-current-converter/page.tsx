"use client";
import { useState } from "react";

export default function ElectricCurrentConverterPage() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("Ampere (A)");
  const [to, setTo] = useState("Milliampere (mA)");

  function toBase(val: number, unit: string): number {
    switch (unit) {
      case 'Ampere (A)': return val * 1.0;
      case 'Milliampere (mA)': return val * 0.001;
      case 'Microampere (μA)': return val * 1e-06;
      case 'Kiloampere (kA)': return val * 1000.0;
      case 'Megaampere (MA)': return val * 1000000.0;
      case 'Biot (Bi)': return val * 10.0;
      case 'Statampere (statA)': return val * 3.33564e-10;
      default: return val;
    }
  }

  function fromBase(base: number, unit: string): number {
    switch (unit) {
      case 'Ampere (A)': return base / 1.0;
      case 'Milliampere (mA)': return base / 0.001;
      case 'Microampere (μA)': return base / 1e-06;
      case 'Kiloampere (kA)': return base / 1000.0;
      case 'Megaampere (MA)': return base / 1000000.0;
      case 'Biot (Bi)': return base / 10.0;
      case 'Statampere (statA)': return base / 3.33564e-10;
      default: return base;
    }
  }

  const result = value !== "" ? fromBase(toBase(parseFloat(value), from), to) : null;

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Electric Current Converter</h1>
        <p className="text-gray-400 mb-8">Convert between electric current units: Ampere, milliampere, microampere, kiloampere.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Value</label>
            <input
              type="number"
              value={value}
              onChange={e => setValue(e.target.value)}
              className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
              placeholder="Enter value"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)} className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white">
              <option value="Ampere (A)">Ampere (A)</option>
              <option value="Milliampere (mA)">Milliampere (mA)</option>
              <option value="Microampere (μA)">Microampere (μA)</option>
              <option value="Kiloampere (kA)">Kiloampere (kA)</option>
              <option value="Megaampere (MA)">Megaampere (MA)</option>
              <option value="Biot (Bi)">Biot (Bi)</option>
              <option value="Statampere (statA)">Statampere (statA)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)} className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white">
              <option value="Ampere (A)">Ampere (A)</option>
              <option value="Milliampere (mA)">Milliampere (mA)</option>
              <option value="Microampere (μA)">Microampere (μA)</option>
              <option value="Kiloampere (kA)">Kiloampere (kA)</option>
              <option value="Megaampere (MA)">Megaampere (MA)</option>
              <option value="Biot (Bi)">Biot (Bi)</option>
              <option value="Statampere (statA)">Statampere (statA)</option>
              </select>
            </div>
          </div>
          {result !== null && (
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-400">Result</p>
              <p className="text-2xl font-bold text-green-400">{Number(result.toPrecision(10))} {to}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
