"use client";
import { useState } from "react";

const units = ["Decibel (dB)", "Neper (Np)", "Bel (B)", "Pascal (Pa)", "Micropascal (uPa)", "Bar", "Microbar", "Poundforce/sq ft"];

const conversions: Record<string, number> = {
  "Decibel (dB)": 1,
  "Neper (Np)": 1,
  "Bel (B)": 1,
  "Pascal (Pa)": 1,
  "Micropascal (uPa)": 1,
  "Bar": 1,
  "Microbar": 1,
  "Poundforce/sq ft": 1,
};

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0]);
  const [to, setTo] = useState(units[1]);
  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * conversions[from]) / conversions[to]).toPrecision(6);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Sound Level Converter</h1>
        <p className="text-gray-400 mb-6">Convert between sound level and pressure units for acoustics.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <input type="number" value={val} onChange={e => setVal(e.target.value)} placeholder="Enter value" className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          <div className="grid grid-cols-2 gap-4">
            <div><label className="text-sm text-gray-400">From</label><select value={from} onChange={e => setFrom(e.target.value)} className="w-full bg-gray-800 rounded-lg px-3 py-2 mt-1">
              <option value="Decibel (dB)">Decibel (dB)</option>
              <option value="Neper (Np)">Neper (Np)</option>
              <option value="Bel (B)">Bel (B)</option>
              <option value="Pascal (Pa)">Pascal (Pa)</option>
              <option value="Micropascal (uPa)">Micropascal (uPa)</option>
              <option value="Bar">Bar</option>
              <option value="Microbar">Microbar</option>
              <option value="Poundforce/sq ft">Poundforce/sq ft</option>
            </select></div>
            <div><label className="text-sm text-gray-400">To</label><select value={to} onChange={e => setTo(e.target.value)} className="w-full bg-gray-800 rounded-lg px-3 py-2 mt-1">
              <option value="Decibel (dB)">Decibel (dB)</option>
              <option value="Neper (Np)">Neper (Np)</option>
              <option value="Bel (B)">Bel (B)</option>
              <option value="Pascal (Pa)">Pascal (Pa)</option>
              <option value="Micropascal (uPa)">Micropascal (uPa)</option>
              <option value="Bar">Bar</option>
              <option value="Microbar">Microbar</option>
              <option value="Poundforce/sq ft">Poundforce/sq ft</option>
            </select></div>
          </div>
          {val && <div className="bg-gray-800 rounded-lg p-4 text-center"><span className="text-2xl font-bold text-blue-400">{convert()}</span><span className="ml-2 text-gray-400">{to}</span></div>}
        </div>
      </div>
    </main>
  );
}