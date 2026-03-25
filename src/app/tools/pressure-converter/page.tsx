"use client";
import { useState } from "react";

const factors: Record<string, number> = {
  "Pascal": 1.0,
  "Kilopascal": 1000.0,
  "Megapascal": 1000000.0,
  "Bar": 100000.0,
  "Millibar": 100.0,
  "PSI": 6894.757,
  "Atmosphere": 101325.0,
  "Torr": 133.322,
  "mmHg": 133.322,
  "inHg": 3386.39
};

export default function PressureConverterPage() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("Pascal");
  const [to, setTo] = useState("Kilopascal");
  const result = val !== "" ? (parseFloat(val) * factors[from] / factors[to]).toFixed(8).replace(/\.?0+$/, "") : "";
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Pressure Converter</h1>
        <p className="text-gray-400 mb-6">Convert between pressure units: pascal, bar, psi, atm, and more.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <input type="number" value={val} onChange={e=>setVal(e.target.value)} placeholder="Enter value" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-lg outline-none focus:ring-2 focus:ring-blue-500" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-400 mb-1 block">From</label>
              <select value={from} onChange={e=>setFrom(e.target.value)} className="w-full bg-gray-800 rounded-lg px-3 py-2">
          <option value="Pascal">Pascal</option>
          <option value="Kilopascal">Kilopascal</option>
          <option value="Megapascal">Megapascal</option>
          <option value="Bar">Bar</option>
          <option value="Millibar">Millibar</option>
          <option value="PSI">PSI</option>
          <option value="Atmosphere">Atmosphere</option>
          <option value="Torr">Torr</option>
          <option value="mmHg">mmHg</option>
          <option value="inHg">inHg</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">To</label>
              <select value={to} onChange={e=>setTo(e.target.value)} className="w-full bg-gray-800 rounded-lg px-3 py-2">
          <option value="Pascal">Pascal</option>
          <option value="Kilopascal">Kilopascal</option>
          <option value="Megapascal">Megapascal</option>
          <option value="Bar">Bar</option>
          <option value="Millibar">Millibar</option>
          <option value="PSI">PSI</option>
          <option value="Atmosphere">Atmosphere</option>
          <option value="Torr">Torr</option>
          <option value="mmHg">mmHg</option>
          <option value="inHg">inHg</option>
              </select>
            </div>
          </div>
          {result !== "" && <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4 text-2xl font-mono text-center">{result} {to}</div>}
        </div>
      </div>
    </main>
  );
}
