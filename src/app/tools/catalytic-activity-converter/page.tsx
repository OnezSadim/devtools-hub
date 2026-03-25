"use client";
import { useState } from "react";

export default function CatalyticActivityConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("kat");
  const [to, setTo] = useState("mkat");

  function convert() {
    const v = parseFloat(value);
    if (isNaN(v)) return "—";
    let toBase = 0;
    switch (from) {
      case "kat": toBase = v * 1; break;
      case "mkat": toBase = v * 0.001; break;
      case "ukat": toBase = v * 1e-06; break;
      case "nkat": toBase = v * 1e-09; break;
      case "u": toBase = v * 1.6666666666666667e-08; break;
      case "mu": toBase = v * 1.6666666666666667e-11; break;
      case "nmol_min": toBase = v * 1.6666666666666667e-11; break;
      case "umol_min": toBase = v * 1.6666666666666667e-08; break;
      case "mmol_min": toBase = v * 1.6666666666666667e-05; break;
      default: toBase = v;
    }
    let baseVal = toBase;
    let result = 0;
    switch (to) {
FROM_      case "kat": toBase = v * 1; break;
      case "mkat": toBase = v * 0.001; break;
      case "ukat": toBase = v * 1e-06; break;
      case "nkat": toBase = v * 1e-09; break;
      case "u": toBase = v * 1.6666666666666667e-08; break;
      case "mu": toBase = v * 1.6666666666666667e-11; break;
      case "nmol_min": toBase = v * 1.6666666666666667e-11; break;
      case "umol_min": toBase = v * 1.6666666666666667e-08; break;
      case "mmol_min": toBase = v * 1.6666666666666667e-05; break;
      default: result = baseVal;
    }
    return result.toPrecision(6);
  }

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Catalytic Activity Converter</h1>
        <p className="text-gray-400 mb-8">Convert between enzyme and catalytic activity units</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <input
            type="number"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Enter value"
            className="w-full bg-gray-800 rounded-lg px-4 py-3 text-lg outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-3 py-2">
              <option value="kat">Katal (kat)</option>
              <option value="mkat">Millikatal (mkat)</option>
              <option value="ukat">Microkatal (µkat)</option>
              <option value="nkat">Nanokatal (nkat)</option>
              <option value="u">Unit (U)</option>
              <option value="mu">Milliunit (mU)</option>
              <option value="nmol_min">nmol/min</option>
              <option value="umol_min">µmol/min (U)</option>
              <option value="mmol_min">mmol/min</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-3 py-2">
              <option value="kat">Katal (kat)</option>
              <option value="mkat">Millikatal (mkat)</option>
              <option value="ukat">Microkatal (µkat)</option>
              <option value="nkat">Nanokatal (nkat)</option>
              <option value="u">Unit (U)</option>
              <option value="mu">Milliunit (mU)</option>
              <option value="nmol_min">nmol/min</option>
              <option value="umol_min">µmol/min (U)</option>
              <option value="mmol_min">mmol/min</option>
              </select>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg px-4 py-4 text-2xl font-mono text-blue-400">
            {convert()} <span className="text-sm text-gray-400">{to}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
