"use client";
import { useState } from "react";

const units = [
  { label: "Milliliter (mL)", factor: 0.001 },
  { label: "Liter (L)", factor: 1 },
  { label: "Cubic meter (m³)", factor: 1000 },
  { label: "Teaspoon (tsp)", factor: 0.00492892 },
  { label: "Tablespoon (tbsp)", factor: 0.0147868 },
  { label: "Fluid ounce (fl oz)", factor: 0.0295735 },
  { label: "Cup", factor: 0.236588 },
  { label: "Pint (pt)", factor: 0.473176 },
  { label: "Quart (qt)", factor: 0.946353 },
  { label: "Gallon (gal)", factor: 3.78541 },
  { label: "Cubic inch (in³)", factor: 0.0163871 },
  { label: "Cubic foot (ft³)", factor: 28.3168 },
];

export default function VolumeConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(1);

  const convert = () => {
    const n = parseFloat(value);
    if (isNaN(n)) return "";
    return ((n * units[from].factor) / units[to].factor).toPrecision(6);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Volume Converter</h1>
        <p className="text-gray-400 mb-8">Convert between mL, L, gallons, cups, and more.</p>
        <div className="space-y-4">
          <input type="number" value={value} onChange={e => setValue(e.target.value)}
            placeholder="Enter value" className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-white" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-400 mb-1 block">From</label>
              <select value={from} onChange={e => setFrom(Number(e.target.value))}
                className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-white">
                {units.map((u, i) => <option key={i} value={i}>{u.label}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">To</label>
              <select value={to} onChange={e => setTo(Number(e.target.value))}
                className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-white">
                {units.map((u, i) => <option key={i} value={i}>{u.label}</option>)}
              </select>
            </div>
          </div>
          {value && <div className="bg-blue-900/30 border border-blue-700 rounded p-4 text-center">
            <p className="text-2xl font-bold text-blue-300">{convert()}</p>
            <p className="text-gray-400 text-sm mt-1">{units[to].label}</p>
          </div>}
        </div>
      </div>
    </main>
  );
}
