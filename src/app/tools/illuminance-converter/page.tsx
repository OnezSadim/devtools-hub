"use client";
import { useState } from "react";

const units: { value: string; label: string; factor: number }[] = [
  { value: "lx", label: "Lux (lx)", factor: 1 },
  { value: "fc", label: "Foot-candle (fc)", factor: 10.7639 },
  { value: "ph", label: "Phot (ph)", factor: 10000 },
  { value: "nx", label: "Nox (nx)", factor: 0.001 },
  { value: "klx", label: "Kilolux (klx)", factor: 1000 },
];

export default function IlluminanceConverterPage() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState(units[0].value);
  const [to, setTo] = useState(units[1].value);

  const convert = () => {
    const num = parseFloat(value);
    if (isNaN(num)) return "";
    const fromUnit = units.find(u => u.value === from);
    const toUnit = units.find(u => u.value === to);
    if (!fromUnit || !toUnit) return "";
    const result = (num * fromUnit.factor) / toUnit.factor;
    return result.toPrecision(8).replace(/\.?0+$/, "");
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Illuminance Converter</h1>
        <p className="text-gray-400 mb-8">Convert between illuminance units: lux, foot-candle, phot, nox.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Value</label>
            <input
              type="number"
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder="Enter value"
              className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select
                value={from}
                onChange={e => setFrom(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500"
              >
                {units.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select
                value={to}
                onChange={e => setTo(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white outline-none focus:ring-2 focus:ring-blue-500"
              >
                {units.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
              </select>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg px-4 py-3">
            <p className="text-sm text-gray-400">Result</p>
            <p className="text-2xl font-mono text-green-400">{convert() || "—"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
