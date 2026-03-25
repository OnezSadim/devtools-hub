"use client";
import { useState } from "react";

const conversionFactors: Record<string, number> = {
  'm³/s': 1.0,
  'm³/min': 0.016666666667,
  'm³/h': 0.000277777778,
  'L/s': 0.001,
  'L/min': 1.6666666667e-05,
  'L/h': 2.7777777778e-07,
  'mL/s': 1e-06,
  'ft³/s': 0.0283168466,
  'ft³/min': 0.000471947443,
  'gal/min (US)': 6.30901964e-05,
  'gal/h (US)': 1.05150328e-06,
  'barrel/day': 1.84013e-06,
};

export default function VolumetricFlowRateConverterPage() {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("m³/s");
  const [toUnit, setToUnit] = useState("m³/min");

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
        <h1 className="text-3xl font-bold mb-2">Volumetric Flow Rate Converter</h1>
        <p className="text-gray-400 mb-8">Convert between volumetric flow rate units: cubic meter per second, liter per second, gallon per minute, and more.</p>
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
          <option value="m³/s">m³/s</option>
          <option value="m³/min">m³/min</option>
          <option value="m³/h">m³/h</option>
          <option value="L/s">L/s</option>
          <option value="L/min">L/min</option>
          <option value="L/h">L/h</option>
          <option value="mL/s">mL/s</option>
          <option value="ft³/s">ft³/s</option>
          <option value="ft³/min">ft³/min</option>
          <option value="gal/min (US)">gal/min (US)</option>
          <option value="gal/h (US)">gal/h (US)</option>
          <option value="barrel/day">barrel/day</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select
                value={toUnit}
                onChange={e => setToUnit(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              >
          <option value="m³/s">m³/s</option>
          <option value="m³/min">m³/min</option>
          <option value="m³/h">m³/h</option>
          <option value="L/s">L/s</option>
          <option value="L/min">L/min</option>
          <option value="L/h">L/h</option>
          <option value="mL/s">mL/s</option>
          <option value="ft³/s">ft³/s</option>
          <option value="ft³/min">ft³/min</option>
          <option value="gal/min (US)">gal/min (US)</option>
          <option value="gal/h (US)">gal/h (US)</option>
          <option value="barrel/day">barrel/day</option>
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
