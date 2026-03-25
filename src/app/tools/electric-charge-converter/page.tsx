"use client";
import { useState } from "react";

const units = [
  { name: 'Coulomb', factor: 1 },
  { name: 'Millicoulomb', factor: 0.001 },
  { name: 'Microcoulomb', factor: 1e-06 },
  { name: 'Nanocoulomb', factor: 1e-09 },
  { name: 'Picocoulomb', factor: 1e-12 },
  { name: 'Ampere-hour', factor: 3600 },
  { name: 'Milliampere-hour', factor: 3.6 },
  { name: 'Kiloampere-hour', factor: 3600000 },
  { name: 'Faraday', factor: 96485.3321 },
  { name: 'Statcoulomb', factor: 3.33564e-10 },
];

export default function ElectricChargeConverter() {
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
      <h1 className="text-3xl font-bold mb-2">Electric Charge Converter</h1>
      <p className="text-gray-400 mb-8">Convert between electric charge units including coulombs, milliampere-hours, and faradays.</p>
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