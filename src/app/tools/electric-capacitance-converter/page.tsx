"use client";
import { useState } from "react";

const units: Record<string, number> = {
    Farad (F): 1,
    Millifarad (mF): 0.001,
    Microfarad (µF): 1e-06,
    Nanofarad (nF): 1e-09,
    Picofarad (pF): 1e-12,
    Kilofarad (kF): 1000.0,
};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("Farad (F)");
  const [to, setTo] = useState("Millifarad (mF)");

  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "—";
    return ((n * units[from]) / units[to]).toPrecision(6);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Electric Capacitance Converter</h1>
        <p className="text-gray-400 mb-8">Convert between farads, microfarads, nanofarads, picofarads and more.</p>
        <div className="space-y-4">
          <input
            type="number"
            value={val}
            onChange={e => setVal(e.target.value)}
            placeholder="Enter value"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-blue-500"
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none">
          <option value="Farad (F)">Farad (F)</option>
          <option value="Millifarad (mF)">Millifarad (mF)</option>
          <option value="Microfarad (µF)">Microfarad (µF)</option>
          <option value="Nanofarad (nF)">Nanofarad (nF)</option>
          <option value="Picofarad (pF)">Picofarad (pF)</option>
          <option value="Kilofarad (kF)">Kilofarad (kF)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none">
          <option value="Farad (F)">Farad (F)</option>
          <option value="Millifarad (mF)">Millifarad (mF)</option>
          <option value="Microfarad (µF)">Microfarad (µF)</option>
          <option value="Nanofarad (nF)">Nanofarad (nF)</option>
          <option value="Picofarad (pF)">Picofarad (pF)</option>
          <option value="Kilofarad (kF)">Kilofarad (kF)</option>
              </select>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg px-4 py-3 text-xl font-mono">
            {val ? convert() : <span className="text-gray-500">Result</span>}
          </div>
        </div>
      </div>
    </main>
  );
}
