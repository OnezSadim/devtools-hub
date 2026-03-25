"use client";
import { useState } from "react";

const conversionFactors: Record<string, number> = {
  'candela/m²': 1.0,
  'nit': 1.0,
  'stilb': 10000.0,
  'lambert': 3183.0988618379065,
  'foot-lambert': 3.4262590996354,
  'candela/cm²': 10000.0,
  'candela/ft²': 10.7639104167097,
  'millilambert': 3.183098861837907,
  'apostilb': 0.3183098861837907,
  'skot': 0.0003183098861837907,
};

export default function LuminanceConverterPage() {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("candela/m²");
  const [toUnit, setToUnit] = useState("nit");

  const convert = () => {
    const val = parseFloat(inputValue);
    if (isNaN(val)) return "";
    const base = val * conversionFactors[fromUnit];
    const result = base / conversionFactors[toUnit];
    return result.toPrecision(8).replace(/\.?0+$/, "");
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Luminance Converter</h1>
        <p className="text-gray-400 mb-8">Convert between luminance units: candela per square meter, nit, stilb, lambert, foot-lambert, and more.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Value</label>
            <input
              type="number"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              placeholder="Enter value"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select
                value={fromUnit}
                onChange={e => setFromUnit(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              >
          <option value="candela/m²">candela/m²</option>
          <option value="nit">nit</option>
          <option value="stilb">stilb</option>
          <option value="lambert">lambert</option>
          <option value="foot-lambert">foot-lambert</option>
          <option value="candela/cm²">candela/cm²</option>
          <option value="candela/ft²">candela/ft²</option>
          <option value="millilambert">millilambert</option>
          <option value="apostilb">apostilb</option>
          <option value="skot">skot</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select
                value={toUnit}
                onChange={e => setToUnit(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              >
          <option value="candela/m²">candela/m²</option>
          <option value="nit">nit</option>
          <option value="stilb">stilb</option>
          <option value="lambert">lambert</option>
          <option value="foot-lambert">foot-lambert</option>
          <option value="candela/cm²">candela/cm²</option>
          <option value="candela/ft²">candela/ft²</option>
          <option value="millilambert">millilambert</option>
          <option value="apostilb">apostilb</option>
          <option value="skot">skot</option>
              </select>
            </div>
          </div>
          {inputValue && (
            <div className="bg-blue-900/30 border border-blue-700 rounded-lg px-4 py-3">
              <span className="text-2xl font-mono font-bold text-blue-300">{convert()}</span>
              <span className="text-gray-400 ml-2">{toUnit}</span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
