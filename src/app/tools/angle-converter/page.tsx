"use client";
import { useState } from "react";

const units = [
  { name: 'Degree', factor: 1 },
  { name: 'Radian', factor: 57.2958 },
  { name: 'Gradian', factor: 0.9 },
  { name: 'Milliradian', factor: 0.0572958 },
  { name: 'Arcminute', factor: 0.0166667 },
  { name: 'Arcsecond', factor: 0.000277778 },
  { name: 'Turn', factor: 360 },
  { name: 'Quadrant', factor: 90 },
  { name: 'Sextant', factor: 60 },
  { name: 'Sign', factor: 30 },
];

export default function AngleConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState(units[0].name);
  const [to, setTo] = useState(units[1].name);
  const convert = () => {
    const v = parseFloat(value);
    if (isNaN(v)) return "";
    const f = units.find(u => u.name === from)?.factor ?? 1;
    const t = units.find(u => u.name === to)?.factor ?? 1;
    return (v * f / t).toPrecision(8);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Angle Converter</h1>
      <p className="text-gray-400 mb-8">Convert between angle units including degrees, radians, gradians, and turns.</p>
      <div className="bg-gray-900 rounded-xl p-6 max-w-xl">
        <input className="w-full bg-gray-800 rounded p-3 mb-4 text-white" type="number" placeholder="Enter value" value={value} onChange={e => setValue(e.target.value)} />
        <div className="flex gap-4 mb-4">
          <select className="flex-1 bg-gray-800 rounded p-3 text-white" value={from} onChange={e => setFrom(e.target.value)}>
            {units.map(u => <option key={u.name} value={u.name}>{u.name}</option>)}
          </select>
          <select className="flex-1 bg-gray-800 rounded p-3 text-white" value={to} onChange={e => setTo(e.target.value)}>
            {units.map(u => <option key={u.name} value={u.name}>{u.name}</option>)}
          </select>
        </div>
        {value && <div className="bg-gray-800 rounded p-4 text-2xl font-mono text-green-400">{convert()} {to}</div>}
      </div>
    </main>
  );
}