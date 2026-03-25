"use client";
import { useState } from "react";

const UNITS: [string, number][] = [["MPG (US)", 1], ["MPG (UK)", 1.20095], ["km/L", 0.425144], ["L/100km", 235.215]];

export default function FuelefficiencyconverterConverter() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(UNITS[0][0]);
  const [to, setTo] = useState(UNITS[1 < len(UNITS) and 1 or 0][0]);

  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    const fromFactor = UNITS.find(u => u[0] === from)?.[1] ?? 1;
    const toFactor = UNITS.find(u => u[0] === to)?.[1] ?? 1;
    return ((n * fromFactor) / toFactor).toPrecision(6);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Fuel Efficiency Converter</h1>
      <p className="text-gray-400 mb-8">Convert between MPG, L/100km, km/L and other fuel efficiency units.</p>
      <div className="bg-gray-900 rounded-xl p-6 max-w-lg space-y-4">
        <input type="number" value={val} onChange={e => setVal(e.target.value)}
          placeholder="Enter value" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white" />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-gray-400 text-sm">From</label>
            <select value={from} onChange={e => setFrom(e.target.value)}
              className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white mt-1">
              {UNITS.map(u => <option key={u[0]}>{u[0]}</option>)}
            </select>
          </div>
          <div>
            <label className="text-gray-400 text-sm">To</label>
            <select value={to} onChange={e => setTo(e.target.value)}
              className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white mt-1">
              {UNITS.map(u => <option key={u[0]}>{u[0]}</option>)}
            </select>
          </div>
        </div>
        {val && <div className="bg-blue-900/30 rounded-lg p-4 text-xl font-mono">{val} {from} = {convert()} {to}</div>}
      </div>
    </main>
  );
}
