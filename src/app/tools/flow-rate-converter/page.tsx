"use client";
import { useState } from "react";

const units = [
  { name: 'Cubic metre per second', factor: 1 },
  { name: 'Cubic metre per hour', factor: 0.000277778 },
  { name: 'Litre per second', factor: 0.001 },
  { name: 'Litre per minute', factor: 1.66667e-05 },
  { name: 'Litre per hour', factor: 2.77778e-07 },
  { name: 'Millilitre per second', factor: 1e-06 },
  { name: 'Gallon per minute (US)', factor: 6.30902e-05 },
  { name: 'Gallon per hour (US)', factor: 1.0515e-06 },
  { name: 'Cubic foot per second', factor: 0.0283168 },
  { name: 'Cubic foot per minute', factor: 0.000471947 },
];

export default function FlowRateConverter() {
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
      <h1 className="text-3xl font-bold mb-2">Flow Rate Converter</h1>
      <p className="text-gray-400 mb-8">Convert between volumetric flow rate units including litres/second, cubic metres/hour, and gallons/minute.</p>
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