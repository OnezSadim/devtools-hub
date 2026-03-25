"use client";
import { useState } from "react";

const factors: Record<string, number> = {
  "V/m": 1.0,
  "kV/m": 1000.0,
  "MV/m": 1000000.0,
  "V/cm": 100.0,
  "V/mm": 1000.0,
  "V/in": 39.3701,
  "V/ft": 3.28084,
  "mV/m": 0.001,
  "uV/m": 1e-06
};

export default function ElectricFieldConverterPage() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("V/m");
  const [to, setTo] = useState("kV/m");
  const result = val !== "" ? (parseFloat(val) * factors[from] / factors[to]).toFixed(8).replace(/\.?0+$/, "") : "";
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Electric Field Converter</h1>
        <p className="text-gray-400 mb-6">Convert between electric field strength units: V/m, kV/m, MV/m, and more.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-lg outline-none focus:ring-2 focus:ring-blue-500" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-400 mb-1 block">From</label>
              <select value={from} onChange={e=>setFrom(e.target.value)} className="w-full bg-gray-800 rounded-lg px-3 py-2">
          <option value="V/m">V/m</option>
          <option value="kV/m">kV/m</option>
          <option value="MV/m">MV/m</option>
          <option value="V/cm">V/cm</option>
          <option value="V/mm">V/mm</option>
          <option value="V/in">V/in</option>
          <option value="V/ft">V/ft</option>
          <option value="mV/m">mV/m</option>
          <option value="uV/m">uV/m</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">To</label>
              <select value={to} onChange={e=>setTo(e.target.value)} className="w-full bg-gray-800 rounded-lg px-3 py-2">
          <option value="V/m">V/m</option>
          <option value="kV/m">kV/m</option>
          <option value="MV/m">MV/m</option>
          <option value="V/cm">V/cm</option>
          <option value="V/mm">V/mm</option>
          <option value="V/in">V/in</option>
          <option value="V/ft">V/ft</option>
          <option value="mV/m">mV/m</option>
          <option value="uV/m">uV/m</option>
              </select>
            </div>
          </div>
          {result !== "" && <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4 text-2xl font-mono text-center">{result} {to}</div>}
        </div>
      </div>
    </main>
  );
}
