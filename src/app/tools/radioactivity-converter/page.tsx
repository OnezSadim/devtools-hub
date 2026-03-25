"use client";
import { useState } from "react";

export default function RadioactivityConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("bq");
  const [to, setTo] = useState("kbq");

  function convert() {
    const v = parseFloat(value);
    if (isNaN(v)) return "—";
    let toBase = 0;
    switch (from) {
      case "bq": toBase = v * 1; break;
      case "kbq": toBase = v * 1000.0; break;
      case "mbq": toBase = v * 1000000.0; break;
      case "gbq": toBase = v * 1000000000.0; break;
      case "ci": toBase = v * 37000000000.0; break;
      case "mci": toBase = v * 37000000.0; break;
      case "uci": toBase = v * 37000.0; break;
      case "rd": toBase = v * 1000000.0; break;
      case "dpm": toBase = v * 0.016666666666666666; break;
      default: toBase = v;
    }
    let baseVal = toBase;
    let result = 0;
    switch (to) {
FROM_      case "bq": toBase = v * 1; break;
      case "kbq": toBase = v * 1000.0; break;
      case "mbq": toBase = v * 1000000.0; break;
      case "gbq": toBase = v * 1000000000.0; break;
      case "ci": toBase = v * 37000000000.0; break;
      case "mci": toBase = v * 37000000.0; break;
      case "uci": toBase = v * 37000.0; break;
      case "rd": toBase = v * 1000000.0; break;
      case "dpm": toBase = v * 0.016666666666666666; break;
      default: result = baseVal;
    }
    return result.toPrecision(6);
  }

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Radioactivity Converter</h1>
        <p className="text-gray-400 mb-8">Convert between radioactivity units</p>
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
              <option value="bq">Becquerel (Bq)</option>
              <option value="kbq">Kilobecquerel (kBq)</option>
              <option value="mbq">Megabecquerel (MBq)</option>
              <option value="gbq">Gigabecquerel (GBq)</option>
              <option value="ci">Curie (Ci)</option>
              <option value="mci">Millicurie (mCi)</option>
              <option value="uci">Microcurie (µCi)</option>
              <option value="rd">Rutherford (Rd)</option>
              <option value="dpm">Disintegrations per minute</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-3 py-2">
              <option value="bq">Becquerel (Bq)</option>
              <option value="kbq">Kilobecquerel (kBq)</option>
              <option value="mbq">Megabecquerel (MBq)</option>
              <option value="gbq">Gigabecquerel (GBq)</option>
              <option value="ci">Curie (Ci)</option>
              <option value="mci">Millicurie (mCi)</option>
              <option value="uci">Microcurie (µCi)</option>
              <option value="rd">Rutherford (Rd)</option>
              <option value="dpm">Disintegrations per minute</option>
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
