"use client";
import { useState } from "react";

const conversionFactors: Record<string, number> = {
  'weber': 1.0,
  'maxwell': 1e-08,
  'tesla·m²': 1.0,
  'kiloweber': 1000.0,
  'milliweber': 0.001,
  'microweber': 1e-06,
  'volt·second': 1.0,
  'unit pole': 1.2566370614359172e-07,
};

export default function MagneticFluxConverterPage() {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("weber");
  const [toUnit, setToUnit] = useState("maxwell");

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
        <h1 className="text-3xl font-bold mb-2">Magnetic Flux Converter</h1>
        <p className="text-gray-400 mb-8">Convert between magnetic flux units: weber, maxwell, tesla·m², kiloweber, milliweber, and more.</p>
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
          <option value="weber">weber</option>
          <option value="maxwell">maxwell</option>
          <option value="tesla·m²">tesla·m²</option>
          <option value="kiloweber">kiloweber</option>
          <option value="milliweber">milliweber</option>
          <option value="microweber">microweber</option>
          <option value="volt·second">volt·second</option>
          <option value="unit pole">unit pole</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select
                value={toUnit}
                onChange={e => setToUnit(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              >
          <option value="weber">weber</option>
          <option value="maxwell">maxwell</option>
          <option value="tesla·m²">tesla·m²</option>
          <option value="kiloweber">kiloweber</option>
          <option value="milliweber">milliweber</option>
          <option value="microweber">microweber</option>
          <option value="volt·second">volt·second</option>
          <option value="unit pole">unit pole</option>
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
