"use client";
import { useState } from "react";

const units = [
  { label: "Milligram (mg)", factor: 0.000001 },
  { label: "Gram (g)", factor: 0.001 },
  { label: "Kilogram (kg)", factor: 1 },
  { label: "Metric Ton (t)", factor: 1000 },
  { label: "Ounce (oz)", factor: 0.0283495 },
  { label: "Pound (lb)", factor: 0.453592 },
  { label: "Stone (st)", factor: 6.35029 },
  { label: "US Ton", factor: 907.185 },
  { label: "Imperial Ton", factor: 1016.05 },
];

export default function WeightConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState(2);
  const [to, setTo] = useState(5);

  const result = value !== "" ? (parseFloat(value) * units[from].factor / units[to].factor).toPrecision(8) : "";

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Weight Converter</h1>
        <p className="text-gray-400 mb-8">Convert between milligrams, grams, kilograms, ounces, pounds, stones, and more.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Value</label>
            <input type="number" value={value} onChange={e => setValue(e.target.value)}
              className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter value" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select value={from} onChange={e => setFrom(Number(e.target.value))}
                className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                {units.map((u, i) => <option key={i} value={i}>{u.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(Number(e.target.value))}
                className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                {units.map((u, i) => <option key={i} value={i}>{u.label}</option>)}
              </select>
            </div>
          </div>
          {result !== "" && (
            <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
              <p className="text-sm text-gray-400">Result</p>
              <p className="text-2xl font-bold text-blue-400">{result} {units[to].label}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
