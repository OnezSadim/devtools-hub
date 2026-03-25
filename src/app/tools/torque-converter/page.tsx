"use client";
import { useState } from "react";

export default function TorqueConverterPage() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("Newton-meter (N·m)");
  const [to, setTo] = useState("Pound-foot (lbf·ft)");

  function toBase(val: number, unit: string): number {
    switch (unit) {
      case 'Newton-meter (N·m)': return val * 1.0;
      case 'Pound-foot (lbf·ft)': return val * 1.35582;
      case 'Pound-inch (lbf·in)': return val * 0.112985;
      case 'Kilogram-force-meter (kgf·m)': return val * 9.80665;
      case 'Dyne-centimeter (dyn·cm)': return val * 1e-07;
      case 'Millinewton-meter (mN·m)': return val * 0.001;
      default: return val;
    }
  }

  function fromBase(base: number, unit: string): number {
    switch (unit) {
      case 'Newton-meter (N·m)': return base / 1.0;
      case 'Pound-foot (lbf·ft)': return base / 1.35582;
      case 'Pound-inch (lbf·in)': return base / 0.112985;
      case 'Kilogram-force-meter (kgf·m)': return base / 9.80665;
      case 'Dyne-centimeter (dyn·cm)': return base / 1e-07;
      case 'Millinewton-meter (mN·m)': return base / 0.001;
      default: return base;
    }
  }

  const result = value !== "" ? fromBase(toBase(parseFloat(value), from), to) : null;

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Torque Converter</h1>
        <p className="text-gray-400 mb-8">Convert between torque units: Newton-meter, pound-foot, pound-inch, kilogram-force-meter.</p>
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
              <option value="Newton-meter (N·m)">Newton-meter (N·m)</option>
              <option value="Pound-foot (lbf·ft)">Pound-foot (lbf·ft)</option>
              <option value="Pound-inch (lbf·in)">Pound-inch (lbf·in)</option>
              <option value="Kilogram-force-meter (kgf·m)">Kilogram-force-meter (kgf·m)</option>
              <option value="Dyne-centimeter (dyn·cm)">Dyne-centimeter (dyn·cm)</option>
              <option value="Millinewton-meter (mN·m)">Millinewton-meter (mN·m)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)} className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white">
              <option value="Newton-meter (N·m)">Newton-meter (N·m)</option>
              <option value="Pound-foot (lbf·ft)">Pound-foot (lbf·ft)</option>
              <option value="Pound-inch (lbf·in)">Pound-inch (lbf·in)</option>
              <option value="Kilogram-force-meter (kgf·m)">Kilogram-force-meter (kgf·m)</option>
              <option value="Dyne-centimeter (dyn·cm)">Dyne-centimeter (dyn·cm)</option>
              <option value="Millinewton-meter (mN·m)">Millinewton-meter (mN·m)</option>
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
