"use client";
import { useState } from "react";

export default function ElectricVoltageConverterPage() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("Volt (V)");
  const [to, setTo] = useState("Millivolt (mV)");

  function toBase(val: number, unit: string): number {
    switch (unit) {
      case 'Volt (V)': return val * 1.0;
      case 'Millivolt (mV)': return val * 0.001;
      case 'Microvolt (μV)': return val * 1e-06;
      case 'Kilovolt (kV)': return val * 1000.0;
      case 'Megavolt (MV)': return val * 1000000.0;
      case 'Statvolt (statV)': return val * 299.792;
      case 'Abvolt (abV)': return val * 1e-08;
      default: return val;
    }
  }

  function fromBase(base: number, unit: string): number {
    switch (unit) {
      case 'Volt (V)': return base / 1.0;
      case 'Millivolt (mV)': return base / 0.001;
      case 'Microvolt (μV)': return base / 1e-06;
      case 'Kilovolt (kV)': return base / 1000.0;
      case 'Megavolt (MV)': return base / 1000000.0;
      case 'Statvolt (statV)': return base / 299.792;
      case 'Abvolt (abV)': return base / 1e-08;
      default: return base;
    }
  }

  const result = value !== "" ? fromBase(toBase(parseFloat(value), from), to) : null;

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Electric Voltage Converter</h1>
        <p className="text-gray-400 mb-8">Convert between electric voltage units: Volt, millivolt, microvolt, kilovolt, megavolt.</p>
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
              <option value="Volt (V)">Volt (V)</option>
              <option value="Millivolt (mV)">Millivolt (mV)</option>
              <option value="Microvolt (μV)">Microvolt (μV)</option>
              <option value="Kilovolt (kV)">Kilovolt (kV)</option>
              <option value="Megavolt (MV)">Megavolt (MV)</option>
              <option value="Statvolt (statV)">Statvolt (statV)</option>
              <option value="Abvolt (abV)">Abvolt (abV)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)} className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white">
              <option value="Volt (V)">Volt (V)</option>
              <option value="Millivolt (mV)">Millivolt (mV)</option>
              <option value="Microvolt (μV)">Microvolt (μV)</option>
              <option value="Kilovolt (kV)">Kilovolt (kV)</option>
              <option value="Megavolt (MV)">Megavolt (MV)</option>
              <option value="Statvolt (statV)">Statvolt (statV)</option>
              <option value="Abvolt (abV)">Abvolt (abV)</option>
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
