"use client";
import { useState } from "react";

const units: Record<string, number> = {
  "bit": 1,
  "byte": 8,
  "kb": 8000.0,
  "mb": 8000000.0,
  "gb": 8000000000.0,
  "tb": 8000000000000.0,
  "pb": 8000000000000000.0,
  "kib": 8192,
  "mib": 8388608,
  "gib": 8589934592,
};

export default function DigitalStorageConverterPage() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("bit");
  const [to, setTo] = useState("byte");

  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * units[from]) / units[to]).toPrecision(6);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Digital Storage Converter</h1>
        <p className="text-gray-400 mb-6">Convert between bits, bytes, kilobytes, megabytes, gigabytes, terabytes and more.</p>
        <div className="space-y-4">
          <input
            type="number"
            value={val}
            onChange={e => setVal(e.target.value)}
            placeholder="Enter value"
            className="w-full bg-gray-800 rounded p-3 text-white"
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-400 mb-1 block">From</label>
              <select value={from} onChange={e => setFrom(e.target.value)} className="w-full bg-gray-800 rounded p-3 text-white">
          <option value="bit">Bit</option>
          <option value="byte">Byte</option>
          <option value="kb">Kilobyte (KB)</option>
          <option value="mb">Megabyte (MB)</option>
          <option value="gb">Gigabyte (GB)</option>
          <option value="tb">Terabyte (TB)</option>
          <option value="pb">Petabyte (PB)</option>
          <option value="kib">Kibibyte (KiB)</option>
          <option value="mib">Mebibyte (MiB)</option>
          <option value="gib">Gibibyte (GiB)</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">To</label>
              <select value={to} onChange={e => setTo(e.target.value)} className="w-full bg-gray-800 rounded p-3 text-white">
          <option value="bit">Bit</option>
          <option value="byte">Byte</option>
          <option value="kb">Kilobyte (KB)</option>
          <option value="mb">Megabyte (MB)</option>
          <option value="gb">Gigabyte (GB)</option>
          <option value="tb">Terabyte (TB)</option>
          <option value="pb">Petabyte (PB)</option>
          <option value="kib">Kibibyte (KiB)</option>
          <option value="mib">Mebibyte (MiB)</option>
          <option value="gib">Gibibyte (GiB)</option>
              </select>
            </div>
          </div>
          {val && <div className="bg-gray-800 rounded p-4 text-2xl font-mono text-green-400">{convert()} {to}</div>}
        </div>
      </div>
    </main>
  );
}
