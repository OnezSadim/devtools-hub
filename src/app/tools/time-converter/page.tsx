"use client";
import { useState } from "react";

const units = [
  { label: "Millisecond (ms)", factor: 0.001 },
  { label: "Second (s)", factor: 1 },
  { label: "Minute (min)", factor: 60 },
  { label: "Hour (hr)", factor: 3600 },
  { label: "Day", factor: 86400 },
  { label: "Week", factor: 604800 },
  { label: "Month (avg)", factor: 2628000 },
  { label: "Year", factor: 31536000 },
  { label: "Decade", factor: 315360000 },
];

export default function TimeConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState(3);
  const [to, setTo] = useState(4);

  const convert = () => {
    const n = parseFloat(value);
    if (isNaN(n)) return "";
    return ((n * units[from].factor) / units[to].factor).toPrecision(6);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Time Converter</h1>
        <p className="text-gray-400 mb-8">Convert between seconds, minutes, hours, days, weeks, and more.</p>
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
