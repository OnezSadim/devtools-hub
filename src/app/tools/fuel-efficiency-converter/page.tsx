"use client";
import { useState } from "react";

export default function FuelEfficiencyConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("Miles per gallon (US) (mpg)");
  const [to, setTo] = useState("Miles per gallon (UK) (mpg)");
  const [result, setResult] = useState<number | null>(null);

  function convert() {
    const v = parseFloat(value);
    if (isNaN(v)) return;
    let toBase = 0;
    switch (from) {
      case "Miles per gallon (US) (mpg)": toBase = v * 235.214583; break;
      case "Miles per gallon (UK) (mpg)": toBase = v * 282.480936; break;
      case "Kilometers per liter (km/L)": toBase = v * 100.0; break;
      case "Liters per 100km (L/100km)": toBase = v * 1.0; break;
      case "Miles per liter (mi/L)": toBase = v * 160.9344; break;
      case "Nautical miles per liter (nmi/L)": toBase = v * 185.2; break;
    }
    let result = 0;
    switch (to) {
FROM_      case "Miles per gallon (US) (mpg)": toBase = v * 235.214583; break;
      case "Miles per gallon (UK) (mpg)": toBase = v * 282.480936; break;
      case "Kilometers per liter (km/L)": toBase = v * 100.0; break;
      case "Liters per 100km (L/100km)": toBase = v * 1.0; break;
      case "Miles per liter (mi/L)": toBase = v * 160.9344; break;
      case "Nautical miles per liter (nmi/L)": toBase = v * 185.2; break;
    }
    setResult(result);
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Fuel Efficiency Converter</h1>
        <p className="text-gray-400 mb-6">Convert between fuel efficiency units: miles per gallon, liters per 100km, and more.</p>
        <div className="space-y-4">
          <input
            type="number"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Enter value"
            className="w-full bg-gray-800 rounded px-4 py-2 text-white"
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400 text-sm mb-1">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)} className="w-full bg-gray-800 rounded px-4 py-2 text-white">
          <option value="Miles per gallon (US) (mpg)">Miles per gallon (US) (mpg)</option>
          <option value="Miles per gallon (UK) (mpg)">Miles per gallon (UK) (mpg)</option>
          <option value="Kilometers per liter (km/L)">Kilometers per liter (km/L)</option>
          <option value="Liters per 100km (L/100km)">Liters per 100km (L/100km)</option>
          <option value="Miles per liter (mi/L)">Miles per liter (mi/L)</option>
          <option value="Nautical miles per liter (nmi/L)">Nautical miles per liter (nmi/L)</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)} className="w-full bg-gray-800 rounded px-4 py-2 text-white">
          <option value="Miles per gallon (US) (mpg)">Miles per gallon (US) (mpg)</option>
          <option value="Miles per gallon (UK) (mpg)">Miles per gallon (UK) (mpg)</option>
          <option value="Kilometers per liter (km/L)">Kilometers per liter (km/L)</option>
          <option value="Liters per 100km (L/100km)">Liters per 100km (L/100km)</option>
          <option value="Miles per liter (mi/L)">Miles per liter (mi/L)</option>
          <option value="Nautical miles per liter (nmi/L)">Nautical miles per liter (nmi/L)</option>
              </select>
            </div>
          </div>
          <button onClick={convert} className="w-full bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 font-semibold">Convert</button>
          {result !== null && (
            <div className="bg-gray-800 rounded p-4 text-xl font-bold text-green-400">
              {value} {from} = {result.toExponential ? result.toPrecision(6) : result} {to}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
