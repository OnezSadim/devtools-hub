"use client";
import { useState } from "react";

const conversionFactors: Record<string, number> = {
  'km/L': 1.0,
  'L/100km': 100.0,
  'mpg (US)': 0.425143707,
  'mpg (UK)': 0.354006,
  'miles/L': 1.609344,
  'km/gallon (US)': 0.264172,
  'm/L': 0.001,
};

export default function FuelEfficiencyConverterPage() {
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("km/L");
  const [toUnit, setToUnit] = useState("L/100km");

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
        <h1 className="text-3xl font-bold mb-2">Fuel Efficiency Converter</h1>
        <p className="text-gray-400 mb-8">Convert between fuel efficiency units: miles per gallon, km per liter, liters per 100km, and more.</p>
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
          <option value="km/L">km/L</option>
          <option value="L/100km">L/100km</option>
          <option value="mpg (US)">mpg (US)</option>
          <option value="mpg (UK)">mpg (UK)</option>
          <option value="miles/L">miles/L</option>
          <option value="km/gallon (US)">km/gallon (US)</option>
          <option value="m/L">m/L</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select
                value={toUnit}
                onChange={e => setToUnit(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
              >
          <option value="km/L">km/L</option>
          <option value="L/100km">L/100km</option>
          <option value="mpg (US)">mpg (US)</option>
          <option value="mpg (UK)">mpg (UK)</option>
          <option value="miles/L">miles/L</option>
          <option value="km/gallon (US)">km/gallon (US)</option>
          <option value="m/L">m/L</option>
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
