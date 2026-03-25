"use client";
import { useState } from "react";

const units: Record<string, number> = {
  "ml": 1,
  "tsp": 4.92892,
  "tbsp": 14.7868,
  "floz": 29.5735,
  "cup": 236.588,
  "pt": 473.176,
  "qt": 946.353,
  "gal": 3785.41,
  "l": 1000,
};

export default function CookingVolumeConverterPage() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("ml");
  const [to, setTo] = useState("tsp");

  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * units[from]) / units[to]).toPrecision(6);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Cooking Volume Converter</h1>
        <p className="text-gray-400 mb-6">Convert between cooking volume units: teaspoons, tablespoons, cups, fluid ounces, milliliters and more.</p>
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
          <option value="ml">Milliliter (ml)</option>
          <option value="tsp">Teaspoon (tsp)</option>
          <option value="tbsp">Tablespoon (tbsp)</option>
          <option value="floz">Fluid ounce (fl oz)</option>
          <option value="cup">Cup (US)</option>
          <option value="pt">Pint (US)</option>
          <option value="qt">Quart (US)</option>
          <option value="gal">Gallon (US)</option>
          <option value="l">Liter (L)</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">To</label>
              <select value={to} onChange={e => setTo(e.target.value)} className="w-full bg-gray-800 rounded p-3 text-white">
          <option value="ml">Milliliter (ml)</option>
          <option value="tsp">Teaspoon (tsp)</option>
          <option value="tbsp">Tablespoon (tbsp)</option>
          <option value="floz">Fluid ounce (fl oz)</option>
          <option value="cup">Cup (US)</option>
          <option value="pt">Pint (US)</option>
          <option value="qt">Quart (US)</option>
          <option value="gal">Gallon (US)</option>
          <option value="l">Liter (L)</option>
              </select>
            </div>
          </div>
          {val && <div className="bg-gray-800 rounded p-4 text-2xl font-mono text-green-400">{convert()} {to}</div>}
        </div>
      </div>
    </main>
  );
}
