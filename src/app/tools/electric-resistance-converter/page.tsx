"use client";
import { useState } from "react";

export default function ElectricResistanceConverterPage() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("Ohm (Ω)");
  const [to, setTo] = useState("Milliohm (mΩ)");

  function toBase(val: number, unit: string): number {
    switch (unit) {
      case 'Ohm (Ω)': return val * 1.0;
      case 'Milliohm (mΩ)': return val * 0.001;
      case 'Microohm (μΩ)': return val * 1e-06;
      case 'Kilohm (kΩ)': return val * 1000.0;
      case 'Megaohm (MΩ)': return val * 1000000.0;
      case 'Gigaohm (GΩ)': return val * 1000000000.0;
      default: return val;
    }
  }

  function fromBase(base: number, unit: string): number {
    switch (unit) {
      case 'Ohm (Ω)': return base / 1.0;
      case 'Milliohm (mΩ)': return base / 0.001;
      case 'Microohm (μΩ)': return base / 1e-06;
      case 'Kilohm (kΩ)': return base / 1000.0;
      case 'Megaohm (MΩ)': return base / 1000000.0;
      case 'Gigaohm (GΩ)': return base / 1000000000.0;
      default: return base;
    }
  }

  const result = value !== "" ? fromBase(toBase(parseFloat(value), from), to) : null;

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Electric Resistance Converter</h1>
        <p className="text-gray-400 mb-8">Convert between electrical resistance units: Ohm, kilohm, megaohm, milliohm, and more.</p>
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
              <option value="Ohm (Ω)">Ohm (Ω)</option>
              <option value="Milliohm (mΩ)">Milliohm (mΩ)</option>
              <option value="Microohm (μΩ)">Microohm (μΩ)</option>
              <option value="Kilohm (kΩ)">Kilohm (kΩ)</option>
              <option value="Megaohm (MΩ)">Megaohm (MΩ)</option>
              <option value="Gigaohm (GΩ)">Gigaohm (GΩ)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)} className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white">
              <option value="Ohm (Ω)">Ohm (Ω)</option>
              <option value="Milliohm (mΩ)">Milliohm (mΩ)</option>
              <option value="Microohm (μΩ)">Microohm (μΩ)</option>
              <option value="Kilohm (kΩ)">Kilohm (kΩ)</option>
              <option value="Megaohm (MΩ)">Megaohm (MΩ)</option>
              <option value="Gigaohm (GΩ)">Gigaohm (GΩ)</option>
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
