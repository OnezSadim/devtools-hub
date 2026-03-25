"use client";
import { useState } from "react";

const factors: Record<string, number> = {
  "Tesla": 1.0,
  "Millitesla": 0.001,
  "Microtesla": 1e-06,
  "Nanotesla": 1e-09,
  "Gauss": 0.0001,
  "Milligauss": 1e-07,
  "Weber/m2": 1.0,
  "Oersted": 79.5775
};

export default function MagneticFieldConverterPage() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("Tesla");
  const [to, setTo] = useState("Millitesla");
  const result = val !== "" ? (parseFloat(val) * factors[from] / factors[to]).toFixed(8).replace(/\.?0+$/, "") : "";
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Magnetic Field Converter</h1>
        <p className="text-gray-400 mb-6">Convert between magnetic field strength units: tesla, gauss, oersted, and more.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-lg outline-none focus:ring-2 focus:ring-blue-500" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-400 mb-1 block">From</label>
              <select value={from} onChange={e=>setFrom(e.target.value)} className="w-full bg-gray-800 rounded-lg px-3 py-2">
          <option value="Tesla">Tesla</option>
          <option value="Millitesla">Millitesla</option>
          <option value="Microtesla">Microtesla</option>
          <option value="Nanotesla">Nanotesla</option>
          <option value="Gauss">Gauss</option>
          <option value="Milligauss">Milligauss</option>
          <option value="Weber/m2">Weber/m2</option>
          <option value="Oersted">Oersted</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">To</label>
              <select value={to} onChange={e=>setTo(e.target.value)} className="w-full bg-gray-800 rounded-lg px-3 py-2">
          <option value="Tesla">Tesla</option>
          <option value="Millitesla">Millitesla</option>
          <option value="Microtesla">Microtesla</option>
          <option value="Nanotesla">Nanotesla</option>
          <option value="Gauss">Gauss</option>
          <option value="Milligauss">Milligauss</option>
          <option value="Weber/m2">Weber/m2</option>
          <option value="Oersted">Oersted</option>
              </select>
            </div>
          </div>
          {result !== "" && <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4 text-2xl font-mono text-center">{result} {to}</div>}
        </div>
      </div>
    </main>
  );
}
