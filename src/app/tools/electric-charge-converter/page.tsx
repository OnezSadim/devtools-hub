"use client";
import { useState } from "react";

export default function ElectricChargeConverterPage() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("Coulomb (C)");
  const [to, setTo] = useState("Millicoulomb (mC)");

  function toBase(val: number, unit: string): number {
    switch (unit) {
      case 'Coulomb (C)': return val * 1.0;
      case 'Millicoulomb (mC)': return val * 0.001;
      case 'Microcoulomb (μC)': return val * 1e-06;
      case 'Nanocoulomb (nC)': return val * 1e-09;
      case 'Picocoulomb (pC)': return val * 1e-12;
      case 'Ampere-hour (A·h)': return val * 3600.0;
      case 'Milliampere-hour (mA·h)': return val * 3.6;
      default: return val;
    }
  }

  function fromBase(base: number, unit: string): number {
    switch (unit) {
      case 'Coulomb (C)': return base / 1.0;
      case 'Millicoulomb (mC)': return base / 0.001;
      case 'Microcoulomb (μC)': return base / 1e-06;
      case 'Nanocoulomb (nC)': return base / 1e-09;
      case 'Picocoulomb (pC)': return base / 1e-12;
      case 'Ampere-hour (A·h)': return base / 3600.0;
      case 'Milliampere-hour (mA·h)': return base / 3.6;
      default: return base;
    }
  }

  const result = value !== "" ? fromBase(toBase(parseFloat(value), from), to) : null;

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Electric Charge Converter</h1>
        <p className="text-gray-400 mb-8">Convert between electric charge units: Coulomb, milliampere-hour, ampere-hour, and more.</p>
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
              <option value="Coulomb (C)">Coulomb (C)</option>
              <option value="Millicoulomb (mC)">Millicoulomb (mC)</option>
              <option value="Microcoulomb (μC)">Microcoulomb (μC)</option>
              <option value="Nanocoulomb (nC)">Nanocoulomb (nC)</option>
              <option value="Picocoulomb (pC)">Picocoulomb (pC)</option>
              <option value="Ampere-hour (A·h)">Ampere-hour (A·h)</option>
              <option value="Milliampere-hour (mA·h)">Milliampere-hour (mA·h)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)} className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white">
              <option value="Coulomb (C)">Coulomb (C)</option>
              <option value="Millicoulomb (mC)">Millicoulomb (mC)</option>
              <option value="Microcoulomb (μC)">Microcoulomb (μC)</option>
              <option value="Nanocoulomb (nC)">Nanocoulomb (nC)</option>
              <option value="Picocoulomb (pC)">Picocoulomb (pC)</option>
              <option value="Ampere-hour (A·h)">Ampere-hour (A·h)</option>
              <option value="Milliampere-hour (mA·h)">Milliampere-hour (mA·h)</option>
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
