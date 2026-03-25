"use client";
import { useState } from "react";

const conversionFactors: Record<string, number> = {
  'gray': 1.0,
  'rad': 0.01,
  'milligray': 0.001,
  'microgray': 1e-06,
  'centigray': 0.01,
  'sievert': 1.0,
  'millisievert': 0.001,
  'microsievert': 1e-06,
  'rem': 0.01,
  'millirem': 1e-05,
};

export default function RadiationDoseConverterPage() {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("gray");
  const [toUnit, setToUnit] = useState("rad");

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
        <h1 className="text-3xl font-bold mb-2">Radiation Dose Converter</h1>
        <p className="text-gray-400 mb-8">Convert between radiation dose units: gray, rad, sievert, rem, milligray, microsievert, and more.</p>
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
          <option value="gray">gray</option>
          <option value="rad">rad</option>
          <option value="milligray">milligray</option>
          <option value="microgray">microgray</option>
          <option value="centigray">centigray</option>
          <option value="sievert">sievert</option>
          <option value="millisievert">millisievert</option>
          <option value="microsievert">microsievert</option>
          <option value="rem">rem</option>
          <option value="millirem">millirem</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select
                value={toUnit}
                onChange={e => setToUnit(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              >
          <option value="gray">gray</option>
          <option value="rad">rad</option>
          <option value="milligray">milligray</option>
          <option value="microgray">microgray</option>
          <option value="centigray">centigray</option>
          <option value="sievert">sievert</option>
          <option value="millisievert">millisievert</option>
          <option value="microsievert">microsievert</option>
          <option value="rem">rem</option>
          <option value="millirem">millirem</option>
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
