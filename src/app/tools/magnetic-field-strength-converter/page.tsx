"use client";
import { useState } from "react";

const units: Record<string, number> = {
    Ampere/meter (A/m): 1,
    Oersted (Oe): 79.5775,
    Ampere/centimeter (A/cm): 100,
    Kiloampere/meter (kA/m): 1000,
};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("Ampere/meter (A/m)");
  const [to, setTo] = useState("Oersted (Oe)");

  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "—";
    return ((n * units[from]) / units[to]).toPrecision(6);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Magnetic Field Strength Converter</h1>
        <p className="text-gray-400 mb-8">Convert between amperes per meter, oersteds and other magnetic field strength units.</p>
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
          <option value="Ampere/meter (A/m)">Ampere/meter (A/m)</option>
          <option value="Oersted (Oe)">Oersted (Oe)</option>
          <option value="Ampere/centimeter (A/cm)">Ampere/centimeter (A/cm)</option>
          <option value="Kiloampere/meter (kA/m)">Kiloampere/meter (kA/m)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none">
          <option value="Ampere/meter (A/m)">Ampere/meter (A/m)</option>
          <option value="Oersted (Oe)">Oersted (Oe)</option>
          <option value="Ampere/centimeter (A/cm)">Ampere/centimeter (A/cm)</option>
          <option value="Kiloampere/meter (kA/m)">Kiloampere/meter (kA/m)</option>
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
