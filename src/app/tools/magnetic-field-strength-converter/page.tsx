"use client";
import { useState } from "react";

const units = [
    { name: "Ampere/meter (A/m)", toBase: 1 },
    { name: "Oersted (Oe)", toBase: 79.5775 },
    { name: "Ampere/centimeter (A/cm)", toBase: 100 },
    { name: "Ampere/inch (A/in)", toBase: 39.3701 },
    { name: "Kiloampere/meter (kA/m)", toBase: 1000 },
  ];

export default function MagneticFieldStrengthConverter() {
  const [value, setValue] = useState("1");
  const [from, setFrom] = useState(units[0].name);
  const [to, setTo] = useState(units[1].name);

  function convert() {
    const v = parseFloat(value);
    if (isNaN(v)) return "Invalid";
    const fromUnit = units.find(u => u.name === from);
    const toUnit = units.find(u => u.name === to);
    if (!fromUnit || !toUnit) return "Error";
    return (v * fromUnit.toBase / toUnit.toBase).toPrecision(6);
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Magnetic Field Strength Converter</h1>
        <p className="text-gray-400 mb-8">Convert between magnetic field strength units: ampere per meter, oersted, and more.</p>
        <div className="space-y-4">
          <input type="number" value={value} onChange={e => setValue(e.target.value)}
            className="w-full bg-gray-800 rounded p-3 text-white" placeholder="Value" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)}
                className="w-full bg-gray-800 rounded p-3 text-white">
                {units.map(u => <option key={u.name} value={u.name}>{u.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full bg-gray-800 rounded p-3 text-white">
                {units.map(u => <option key={u.name} value={u.name}>{u.name}</option>)}
              </select>
            </div>
          </div>
          <div className="bg-gray-800 rounded p-4 text-center">
            <span className="text-2xl font-mono text-green-400">{convert()}</span>
            <span className="text-gray-400 ml-2">{to}</span>
          </div>
        </div>
      </div>
    </main>
  );
}