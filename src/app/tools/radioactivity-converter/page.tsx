"use client";
import { useState } from "react";

const units = ["Becquerel (Bq)", "Kilobecquerel (kBq)", "Megabecquerel (MBq)", "Gigabecquerel (GBq)", "Curie (Ci)", "Millicurie (mCi)", "Microcurie (uCi)", "Rutherford (Rd)", "Disintegrations/second", "Disintegrations/minute"];

const conversions: Record<string, number> = {
  "Becquerel (Bq)": 1,
  "Kilobecquerel (kBq)": 1,
  "Megabecquerel (MBq)": 1,
  "Gigabecquerel (GBq)": 1,
  "Curie (Ci)": 1,
  "Millicurie (mCi)": 1,
  "Microcurie (uCi)": 1,
  "Rutherford (Rd)": 1,
  "Disintegrations/second": 1,
  "Disintegrations/minute": 1,
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
        <h1 className="text-3xl font-bold mb-2">Radioactivity Converter</h1>
        <p className="text-gray-400 mb-6">Convert between radioactivity units like becquerel, curie, and rutherford.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <input type="number" value={val} onChange={e => setVal(e.target.value)} placeholder="Enter value" className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          <div className="grid grid-cols-2 gap-4">
            <div><label className="text-sm text-gray-400">From</label><select value={from} onChange={e => setFrom(e.target.value)} className="w-full bg-gray-800 rounded-lg px-3 py-2 mt-1">
              <option value="Becquerel (Bq)">Becquerel (Bq)</option>
              <option value="Kilobecquerel (kBq)">Kilobecquerel (kBq)</option>
              <option value="Megabecquerel (MBq)">Megabecquerel (MBq)</option>
              <option value="Gigabecquerel (GBq)">Gigabecquerel (GBq)</option>
              <option value="Curie (Ci)">Curie (Ci)</option>
              <option value="Millicurie (mCi)">Millicurie (mCi)</option>
              <option value="Microcurie (uCi)">Microcurie (uCi)</option>
              <option value="Rutherford (Rd)">Rutherford (Rd)</option>
              <option value="Disintegrations/second">Disintegrations/second</option>
              <option value="Disintegrations/minute">Disintegrations/minute</option>
            </select></div>
            <div><label className="text-sm text-gray-400">To</label><select value={to} onChange={e => setTo(e.target.value)} className="w-full bg-gray-800 rounded-lg px-3 py-2 mt-1">
              <option value="Becquerel (Bq)">Becquerel (Bq)</option>
              <option value="Kilobecquerel (kBq)">Kilobecquerel (kBq)</option>
              <option value="Megabecquerel (MBq)">Megabecquerel (MBq)</option>
              <option value="Gigabecquerel (GBq)">Gigabecquerel (GBq)</option>
              <option value="Curie (Ci)">Curie (Ci)</option>
              <option value="Millicurie (mCi)">Millicurie (mCi)</option>
              <option value="Microcurie (uCi)">Microcurie (uCi)</option>
              <option value="Rutherford (Rd)">Rutherford (Rd)</option>
              <option value="Disintegrations/second">Disintegrations/second</option>
              <option value="Disintegrations/minute">Disintegrations/minute</option>
            </select></div>
          </div>
          {val && <div className="bg-gray-800 rounded-lg p-4 text-center"><span className="text-2xl font-bold text-blue-400">{convert()}</span><span className="ml-2 text-gray-400">{to}</span></div>}
        </div>
      </div>
    </main>
  );
}