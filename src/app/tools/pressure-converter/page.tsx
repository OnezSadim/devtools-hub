"use client";
import { useState } from "react";

const units = [
  { label: "Pascal (Pa)", factor: 1 },
  { label: "Kilopascal (kPa)", factor: 1000 },
  { label: "Megapascal (MPa)", factor: 1000000 },
  { label: "Bar", factor: 100000 },
  { label: "Millibar (mbar)", factor: 100 },
  { label: "PSI (lb/in²)", factor: 6894.76 },
  { label: "Atmosphere (atm)", factor: 101325 },
  { label: "mmHg (Torr)", factor: 133.322 },
  { label: "inHg", factor: 3386.39 },
];

export default function PressureConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState(3);
  const [to, setTo] = useState(5);

  const convert = () => {
    const n = parseFloat(value);
    if (isNaN(n)) return "";
    return ((n * units[from].factor) / units[to].factor).toPrecision(6);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Pressure Converter</h1>
        <p className="text-gray-400 mb-8">Convert between Pa, PSI, bar, atm, and more.</p>
        <div className="space-y-4">
          <input type="number" value={value} onChange={e => setValue(e.target.value)}
            placeholder="Enter value" className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-white" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-400 mb-1 block">From</label>
              <select value={from} onChange={e => setFrom(Number(e.target.value))}
                className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-white">
                {units.map((u, i) => <option key={i} value={i}>{u.label}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">To</label>
              <select value={to} onChange={e => setTo(Number(e.target.value))}
                className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-white">
                {units.map((u, i) => <option key={i} value={i}>{u.label}</option>)}
              </select>
            </div>
          </div>
          {value && <div className="bg-blue-900/30 border border-blue-700 rounded p-4 text-center">
            <p className="text-2xl font-bold text-blue-300">{convert()}</p>
            <p className="text-gray-400 text-sm mt-1">{units[to].label}</p>
          </div>}
        </div>
      </div>
    </main>
  );
}
