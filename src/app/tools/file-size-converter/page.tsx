"use client";
import { useState } from "react";

const units = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
const factors = [1, 1024, 1024**2, 1024**3, 1024**4, 1024**5];

export default function FileSizeConverter() {
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("MB");

  const bytes = parseFloat(value) * factors[units.indexOf(unit)];

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">File Size Converter</h1>
        <p className="text-gray-400 mb-6">Convert between bytes, KB, MB, GB, TB, and PB</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div className="flex gap-3">
            <input value={value} onChange={e => setValue(e.target.value)} placeholder="Enter size..." className="flex-1 bg-gray-800 rounded-lg px-3 py-2 text-lg" />
            <select value={unit} onChange={e => setUnit(e.target.value)} className="bg-gray-800 rounded-lg px-3 py-2">
              {units.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
          {value && !isNaN(bytes) && (
            <div className="space-y-2">
              {units.map((u, i) => (
                <div key={u} className={`flex justify-between bg-gray-800 rounded-lg px-4 py-3 ${u === unit ? "ring-1 ring-blue-500" : ""}`}>
                  <span className="text-gray-400">{u}</span>
                  <span className="font-mono font-bold">{(bytes / factors[i]).toLocaleString(undefined, {maximumFractionDigits: 6})}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
