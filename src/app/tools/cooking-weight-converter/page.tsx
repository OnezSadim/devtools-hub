"use client";
import { useState } from "react";

const units: Record<string, number> = {
  "g": 1,
  "kg": 1000,
  "mg": 0.001,
  "oz": 28.3495,
  "lb": 453.592,
  "st": 6350.29,
};

export default function CookingWeightConverterPage() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("g");
  const [to, setTo] = useState("kg");

  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * units[from]) / units[to]).toPrecision(6);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Cooking Weight Converter</h1>
        <p className="text-gray-400 mb-6">Convert between cooking weight units: grams, ounces, pounds, kilograms and more.</p>
        <div className="space-y-4">
          <input
            type="number"
            value={val}
            onChange={e => setVal(e.target.value)}
            placeholder="Enter value"
            className="w-full bg-gray-800 rounded p-3 text-white"
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-400 mb-1 block">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)} className="w-full bg-gray-800 rounded p-3 text-white">
          <option value="g">Gram (g)</option>
          <option value="kg">Kilogram (kg)</option>
          <option value="mg">Milligram (mg)</option>
          <option value="oz">Ounce (oz)</option>
          <option value="lb">Pound (lb)</option>
          <option value="st">Stone (st)</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">To</label>
              <select value={to} onChange={e => setTo(e.target.value)} className="w-full bg-gray-800 rounded p-3 text-white">
          <option value="g">Gram (g)</option>
          <option value="kg">Kilogram (kg)</option>
          <option value="mg">Milligram (mg)</option>
          <option value="oz">Ounce (oz)</option>
          <option value="lb">Pound (lb)</option>
          <option value="st">Stone (st)</option>
              </select>
            </div>
          </div>
          {val && <div className="bg-gray-800 rounded p-4 text-2xl font-mono text-green-400">{convert()} {to}</div>}
        </div>
      </div>
    </main>
  );
}
