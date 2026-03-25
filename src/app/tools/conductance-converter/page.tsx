"use client";
import { useState } from "react";

const units: Record<string, number> = {
  "Siemens": 1,
  "Millisiemens": 0.001,
  "Microsiemens": 1e-06,
  "Kilosiemens": 1000.0,
  "Megasiemens": 1000000.0,
  "Mho": 1,
  "Millimho": 0.001,
  "Micromho": 1e-06,
};

function convert(value: number, from: string, to: string): number {
  const base = value * units[from];
  return base / units[to];
}

export default function Page() {
  const [val, setVal] = useState("1");
  const [from, setFrom] = useState("Siemens");
  const [to, setTo] = useState("Millisiemens");

  const numVal = parseFloat(val);
  const result = !isNaN(numVal) ? convert(numVal, from, to) : 0;

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Electrical Conductance Converter</h1>
        <p className="text-gray-400 mb-8">Convert between units of electrical conductance including siemens, millisiemens, and mhos.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Value</label>
            <input type="number" value={val} onChange={e => setVal(e.target.value)}
              className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white">
      <option value="Siemens">Siemens</option>
      <option value="Millisiemens">Millisiemens</option>
      <option value="Microsiemens">Microsiemens</option>
      <option value="Kilosiemens">Kilosiemens</option>
      <option value="Megasiemens">Megasiemens</option>
      <option value="Mho">Mho</option>
      <option value="Millimho">Millimho</option>
      <option value="Micromho">Micromho</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white">
      <option value="Siemens">Siemens</option>
      <option value="Millisiemens">Millisiemens</option>
      <option value="Microsiemens">Microsiemens</option>
      <option value="Kilosiemens">Kilosiemens</option>
      <option value="Megasiemens">Megasiemens</option>
      <option value="Mho">Mho</option>
      <option value="Millimho">Millimho</option>
      <option value="Micromho">Micromho</option>
              </select>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-blue-400">{result.toPrecision(6)}</div>
            <div className="text-gray-400 mt-1">{to}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
