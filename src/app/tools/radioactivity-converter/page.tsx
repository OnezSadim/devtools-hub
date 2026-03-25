"use client";
import { useState } from "react";

export default function RadioactivityConverter() {
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("Becquerel (Bq)");
  const [to, setTo] = useState("Kilobecquerel (kBq)");
  const [result, setResult] = useState<number | null>(null);

  function convert() {
    const v = parseFloat(value);
    if (isNaN(v)) return;
    let toBase = 0;
    switch (from) {
      case "Becquerel (Bq)": toBase = v * 1.0; break;
      case "Kilobecquerel (kBq)": toBase = v * 1000.0; break;
      case "Megabecquerel (MBq)": toBase = v * 1000000.0; break;
      case "Gigabecquerel (GBq)": toBase = v * 1000000000.0; break;
      case "Terabecquerel (TBq)": toBase = v * 1000000000000.0; break;
      case "Curie (Ci)": toBase = v * 37000000000.0; break;
      case "Millicurie (mCi)": toBase = v * 37000000.0; break;
      case "Microcurie (μCi)": toBase = v * 37000.0; break;
      case "Nanocurie (nCi)": toBase = v * 37.0; break;
      case "Rutherford (Rd)": toBase = v * 1000000.0; break;
    }
    let result = 0;
    switch (to) {
FROM_      case "Becquerel (Bq)": toBase = v * 1.0; break;
      case "Kilobecquerel (kBq)": toBase = v * 1000.0; break;
      case "Megabecquerel (MBq)": toBase = v * 1000000.0; break;
      case "Gigabecquerel (GBq)": toBase = v * 1000000000.0; break;
      case "Terabecquerel (TBq)": toBase = v * 1000000000000.0; break;
      case "Curie (Ci)": toBase = v * 37000000000.0; break;
      case "Millicurie (mCi)": toBase = v * 37000000.0; break;
      case "Microcurie (μCi)": toBase = v * 37000.0; break;
      case "Nanocurie (nCi)": toBase = v * 37.0; break;
      case "Rutherford (Rd)": toBase = v * 1000000.0; break;
    }
    setResult(result);
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Radioactivity Converter</h1>
        <p className="text-gray-400 mb-6">Convert between radioactivity units: becquerel, curie, and more.</p>
        <div className="space-y-4">
          <input
            type="number"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Enter value"
            className="w-full bg-gray-800 rounded px-4 py-2 text-white"
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400 text-sm mb-1">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)} className="w-full bg-gray-800 rounded px-4 py-2 text-white">
          <option value="Becquerel (Bq)">Becquerel (Bq)</option>
          <option value="Kilobecquerel (kBq)">Kilobecquerel (kBq)</option>
          <option value="Megabecquerel (MBq)">Megabecquerel (MBq)</option>
          <option value="Gigabecquerel (GBq)">Gigabecquerel (GBq)</option>
          <option value="Terabecquerel (TBq)">Terabecquerel (TBq)</option>
          <option value="Curie (Ci)">Curie (Ci)</option>
          <option value="Millicurie (mCi)">Millicurie (mCi)</option>
          <option value="Microcurie (μCi)">Microcurie (μCi)</option>
          <option value="Nanocurie (nCi)">Nanocurie (nCi)</option>
          <option value="Rutherford (Rd)">Rutherford (Rd)</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-1">To</label>
              <select value={to} onChange={e => setTo(e.target.value)} className="w-full bg-gray-800 rounded px-4 py-2 text-white">
          <option value="Becquerel (Bq)">Becquerel (Bq)</option>
          <option value="Kilobecquerel (kBq)">Kilobecquerel (kBq)</option>
          <option value="Megabecquerel (MBq)">Megabecquerel (MBq)</option>
          <option value="Gigabecquerel (GBq)">Gigabecquerel (GBq)</option>
          <option value="Terabecquerel (TBq)">Terabecquerel (TBq)</option>
          <option value="Curie (Ci)">Curie (Ci)</option>
          <option value="Millicurie (mCi)">Millicurie (mCi)</option>
          <option value="Microcurie (μCi)">Microcurie (μCi)</option>
          <option value="Nanocurie (nCi)">Nanocurie (nCi)</option>
          <option value="Rutherford (Rd)">Rutherford (Rd)</option>
              </select>
            </div>
          </div>
          <button onClick={convert} className="w-full bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 font-semibold">Convert</button>
          {result !== null && (
            <div className="bg-gray-800 rounded p-4 text-xl font-bold text-green-400">
              {value} {from} = {result.toExponential ? result.toPrecision(6) : result} {to}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
