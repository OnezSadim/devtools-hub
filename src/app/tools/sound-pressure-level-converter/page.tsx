"use client";
import { useState } from "react";

const units = ["dB SPL", "Pa", "bar", "atm", "psi", "uPa"];

const conversions: Record<string, number> = {
  "dB SPL": 1,
  "Pa": 1,
  "bar": 1,
  "atm": 1,
  "psi": 1,
  "uPa": 1,
};

export default function Page() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("dB SPL");
  const [to, setTo] = useState("Pa");

  const convert = () => {
    const v = parseFloat(value);
    if (isNaN(v)) return "—";
    return ((v * conversions[from]) / conversions[to]).toFixed(6).replace(/\.?0+$/, "");
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Sound Pressure Level Converter</h1>
        <p className="text-gray-400 mb-8">Convert between dB SPL, Pa, and other acoustic pressure units.</p>
        <div className="space-y-4">
          <input type="number" value={value} onChange={e => setValue(e.target.value)}
            placeholder="Enter value" className="w-full bg-gray-800 rounded px-4 py-3 text-lg" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 text-sm mb-1 block">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)}
                className="w-full bg-gray-800 rounded px-4 py-3">
              <option value="dB SPL">dB SPL</option>
              <option value="Pa">Pa</option>
              <option value="bar">bar</option>
              <option value="atm">atm</option>
              <option value="psi">psi</option>
              <option value="uPa">uPa</option>
              </select>
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full bg-gray-800 rounded px-4 py-3">
              <option value="dB SPL">dB SPL</option>
              <option value="Pa">Pa</option>
              <option value="bar">bar</option>
              <option value="atm">atm</option>
              <option value="psi">psi</option>
              <option value="uPa">uPa</option>
              </select>
            </div>
          </div>
          <div className="bg-gray-800 rounded px-4 py-4 text-center">
            <span className="text-3xl font-mono font-bold text-green-400">{convert()}</span>
            <span className="text-gray-400 ml-2">{to}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
