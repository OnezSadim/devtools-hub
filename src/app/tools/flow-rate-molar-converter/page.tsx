"use client";
import { useState } from "react";

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("mol/s");
  const [to, setTo] = useState("mol/min");

  const factors: Record<string, number> = {
    "mol/s": 1.0,
    "mol/min": 0.0166667,
    "mol/h": 0.000277778,
    "mmol/s": 0.001,
    "mmol/min": 1.66667e-05,
    "mmol/h": 2.77778e-07,
    "kmol/s": 1000.0,
    "kmol/min": 16.6667,
    "kmol/h": 0.277778,
    "lbmol/s": 453.592,
    "lbmol/h": 0.125998,
  };

  const result = val !== "" && !isNaN(Number(val))
    ? (Number(val) * factors[from]) / factors[to]
    : null;

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Molar Flow Rate Converter</h1>
        <p className="text-gray-400 mb-6">Convert molar flow rates between mol/s, mol/min, kmol/h, and more.</p>
        <div className="space-y-4">
          <input
            type="number"
            value={val}
            onChange={e => setVal(e.target.value)}
            placeholder="Enter value"
            className="w-full p-3 bg-gray-800 rounded border border-gray-700 text-white"
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)}
                className="w-full p-3 bg-gray-800 rounded border border-gray-700 text-white">
          <option value="mol/s">mol/s</option>
          <option value="mol/min">mol/min</option>
          <option value="mol/h">mol/h</option>
          <option value="mmol/s">mmol/s</option>
          <option value="mmol/min">mmol/min</option>
          <option value="mmol/h">mmol/h</option>
          <option value="kmol/s">kmol/s</option>
          <option value="kmol/min">kmol/min</option>
          <option value="kmol/h">kmol/h</option>
          <option value="lbmol/s">lbmol/s</option>
          <option value="lbmol/h">lbmol/h</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full p-3 bg-gray-800 rounded border border-gray-700 text-white">
          <option value="mol/s">mol/s</option>
          <option value="mol/min">mol/min</option>
          <option value="mol/h">mol/h</option>
          <option value="mmol/s">mmol/s</option>
          <option value="mmol/min">mmol/min</option>
          <option value="mmol/h">mmol/h</option>
          <option value="kmol/s">kmol/s</option>
          <option value="kmol/min">kmol/min</option>
          <option value="kmol/h">kmol/h</option>
          <option value="lbmol/s">lbmol/s</option>
          <option value="lbmol/h">lbmol/h</option>
              </select>
            </div>
          </div>
          {result !== null && (
            <div className="p-4 bg-gray-800 rounded border border-gray-700">
              <span className="text-2xl font-mono text-green-400">
                {val} {from} = {result.toPrecision(6)} {to}
              </span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
