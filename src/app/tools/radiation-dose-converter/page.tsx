"use client";
import { useState } from "react";

const units = ["Gray (Gy)", "Milligray (mGy)", "Microgray (uGy)", "Rad", "Millirad", "Centigray (cGy)", "Joule/kilogram", "Erg/gram"];

const conversions: Record<string, number> = {
  "Gray (Gy)": 1,
  "Milligray (mGy)": 1,
  "Microgray (uGy)": 1,
  "Rad": 1,
  "Millirad": 1,
  "Centigray (cGy)": 1,
  "Joule/kilogram": 1,
  "Erg/gram": 1,
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
        <h1 className="text-3xl font-bold mb-2">Radiation Dose Converter</h1>
        <p className="text-gray-400 mb-6">Convert between absorbed radiation dose units like gray and rad.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <input type="number" value={val} onChange={e => setVal(e.target.value)} placeholder="Enter value" className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          <div className="grid grid-cols-2 gap-4">
            <div><label className="text-sm text-gray-400">From</label><select value={from} onChange={e => setFrom(e.target.value)} className="w-full bg-gray-800 rounded-lg px-3 py-2 mt-1">
              <option value="Gray (Gy)">Gray (Gy)</option>
              <option value="Milligray (mGy)">Milligray (mGy)</option>
              <option value="Microgray (uGy)">Microgray (uGy)</option>
              <option value="Rad">Rad</option>
              <option value="Millirad">Millirad</option>
              <option value="Centigray (cGy)">Centigray (cGy)</option>
              <option value="Joule/kilogram">Joule/kilogram</option>
              <option value="Erg/gram">Erg/gram</option>
            </select></div>
            <div><label className="text-sm text-gray-400">To</label><select value={to} onChange={e => setTo(e.target.value)} className="w-full bg-gray-800 rounded-lg px-3 py-2 mt-1">
              <option value="Gray (Gy)">Gray (Gy)</option>
              <option value="Milligray (mGy)">Milligray (mGy)</option>
              <option value="Microgray (uGy)">Microgray (uGy)</option>
              <option value="Rad">Rad</option>
              <option value="Millirad">Millirad</option>
              <option value="Centigray (cGy)">Centigray (cGy)</option>
              <option value="Joule/kilogram">Joule/kilogram</option>
              <option value="Erg/gram">Erg/gram</option>
            </select></div>
          </div>
          {val && <div className="bg-gray-800 rounded-lg p-4 text-center"><span className="text-2xl font-bold text-blue-400">{convert()}</span><span className="ml-2 text-gray-400">{to}</span></div>}
        </div>
      </div>
    </main>
  );
}