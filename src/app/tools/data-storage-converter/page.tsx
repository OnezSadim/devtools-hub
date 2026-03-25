"use client";
import { useState } from "react";

const units = ["Bit", "Byte", "Kilobyte (KB)", "Megabyte (MB)", "Gigabyte (GB)", "Terabyte (TB)", "Petabyte (PB)", "Kibibyte (KiB)", "Mebibyte (MiB)", "Gibibyte (GiB)", "Tebibyte (TiB)"];

const conversions: Record<string, number> = {
  "Bit": 1,
  "Byte": 1,
  "Kilobyte (KB)": 1,
  "Megabyte (MB)": 1,
  "Gigabyte (GB)": 1,
  "Terabyte (TB)": 1,
  "Petabyte (PB)": 1,
  "Kibibyte (KiB)": 1,
  "Mebibyte (MiB)": 1,
  "Gibibyte (GiB)": 1,
  "Tebibyte (TiB)": 1,
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
        <h1 className="text-3xl font-bold mb-2">Data Storage Converter</h1>
        <p className="text-gray-400 mb-6">Convert between digital data storage units like bytes, kilobytes, megabytes, and more.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <input type="number" value={val} onChange={e => setVal(e.target.value)} placeholder="Enter value" className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          <div className="grid grid-cols-2 gap-4">
            <div><label className="text-sm text-gray-400">From</label><select value={from} onChange={e => setFrom(e.target.value)} className="w-full bg-gray-800 rounded-lg px-3 py-2 mt-1">
              <option value="Bit">Bit</option>
              <option value="Byte">Byte</option>
              <option value="Kilobyte (KB)">Kilobyte (KB)</option>
              <option value="Megabyte (MB)">Megabyte (MB)</option>
              <option value="Gigabyte (GB)">Gigabyte (GB)</option>
              <option value="Terabyte (TB)">Terabyte (TB)</option>
              <option value="Petabyte (PB)">Petabyte (PB)</option>
              <option value="Kibibyte (KiB)">Kibibyte (KiB)</option>
              <option value="Mebibyte (MiB)">Mebibyte (MiB)</option>
              <option value="Gibibyte (GiB)">Gibibyte (GiB)</option>
              <option value="Tebibyte (TiB)">Tebibyte (TiB)</option>
            </select></div>
            <div><label className="text-sm text-gray-400">To</label><select value={to} onChange={e => setTo(e.target.value)} className="w-full bg-gray-800 rounded-lg px-3 py-2 mt-1">
              <option value="Bit">Bit</option>
              <option value="Byte">Byte</option>
              <option value="Kilobyte (KB)">Kilobyte (KB)</option>
              <option value="Megabyte (MB)">Megabyte (MB)</option>
              <option value="Gigabyte (GB)">Gigabyte (GB)</option>
              <option value="Terabyte (TB)">Terabyte (TB)</option>
              <option value="Petabyte (PB)">Petabyte (PB)</option>
              <option value="Kibibyte (KiB)">Kibibyte (KiB)</option>
              <option value="Mebibyte (MiB)">Mebibyte (MiB)</option>
              <option value="Gibibyte (GiB)">Gibibyte (GiB)</option>
              <option value="Tebibyte (TiB)">Tebibyte (TiB)</option>
            </select></div>
          </div>
          {val && <div className="bg-gray-800 rounded-lg p-4 text-center"><span className="text-2xl font-bold text-blue-400">{convert()}</span><span className="ml-2 text-gray-400">{to}</span></div>}
        </div>
      </div>
    </main>
  );
}