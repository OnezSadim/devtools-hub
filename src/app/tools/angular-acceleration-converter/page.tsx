"use client";
import { useState } from "react";

const units: { name: string; factor: number }[] = [
  { name: "rad/s²", factor: 1.0 },
  { name: "rad/min²", factor: 0.000277778 },
  { name: "deg/s²", factor: 0.017453293 },
  { name: "deg/min²", factor: 4.8481e-06 },
  { name: "rev/s²", factor: 6.2831853 },
  { name: "rpm/s", factor: 0.10471976 },
  { name: "rpm²", factor: 0.001745329 }
];

function toBase(val: number, unit: string): number {
  const u = units.find(x => x.name === unit);
  return u ? val * u.factor : val;
}

function fromBase(val: number, unit: string): number {
  const u = units.find(x => x.name === unit);
  return u ? val / u.factor : val;
}

export default function Page() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState(units[0].name);
  const [to, setTo] = useState(units[1].name);

  const result = value !== "" ? fromBase(toBase(parseFloat(value), from), to) : null;

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-2">Angular Acceleration Converter</h1>
      <p className="text-gray-400 mb-8">Convert between angular acceleration units</p>
      <div className="bg-gray-900 rounded-xl p-6 w-full max-w-md space-y-4">
        <input
          type="number"
          className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
          placeholder="Enter value"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <div className="flex gap-4">
          <select className="flex-1 bg-gray-800 rounded-lg px-3 py-2" value={from} onChange={e => setFrom(e.target.value)}>
            {units.map(u => <option key={u.name} value={u.name}>{u.name}</option>)}
          </select>
          <span className="self-center text-gray-400">→</span>
          <select className="flex-1 bg-gray-800 rounded-lg px-3 py-2" value={to} onChange={e => setTo(e.target.value)}>
            {units.map(u => <option key={u.name} value={u.name}>{u.name}</option>)}
          </select>
        </div>
        {result !== null && (
          <div className="bg-gray-800 rounded-lg px-4 py-3 text-center">
            <span className="text-2xl font-bold text-blue-400">{isFinite(result) ? result.toPrecision(6) : "∞"}</span>
            <span className="text-gray-400 ml-2">{to}</span>
          </div>
        )}
      </div>
    </main>
  );
}
