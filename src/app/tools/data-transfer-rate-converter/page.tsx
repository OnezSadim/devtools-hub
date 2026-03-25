"use client";
import { useState } from "react";

const units: Record<string, number> = {
  "bps": 1,
  "kbps": 1000.0,
  "mbps": 1000000.0,
  "gbps": 1000000000.0,
  "tbps": 1000000000000.0,
  "Bps": 8,
  "KBps": 8000.0,
  "MBps": 8000000.0,
  "GBps": 8000000000.0,
};

export default function DataTransferRateConverterPage() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState("bps");
  const [to, setTo] = useState("kbps");

  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    return ((n * units[from]) / units[to]).toPrecision(6);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Data Transfer Rate Converter</h1>
        <p className="text-gray-400 mb-6">Convert between bits per second, bytes per second, kilobits, megabits, gigabits and more.</p>
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
          <option value="bps">Bits per second (bps)</option>
          <option value="kbps">Kilobits per second (kbps)</option>
          <option value="mbps">Megabits per second (Mbps)</option>
          <option value="gbps">Gigabits per second (Gbps)</option>
          <option value="tbps">Terabits per second (Tbps)</option>
          <option value="Bps">Bytes per second (B/s)</option>
          <option value="KBps">Kilobytes per second (KB/s)</option>
          <option value="MBps">Megabytes per second (MB/s)</option>
          <option value="GBps">Gigabytes per second (GB/s)</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block">To</label>
              <select value={to} onChange={e => setTo(e.target.value)} className="w-full bg-gray-800 rounded p-3 text-white">
          <option value="bps">Bits per second (bps)</option>
          <option value="kbps">Kilobits per second (kbps)</option>
          <option value="mbps">Megabits per second (Mbps)</option>
          <option value="gbps">Gigabits per second (Gbps)</option>
          <option value="tbps">Terabits per second (Tbps)</option>
          <option value="Bps">Bytes per second (B/s)</option>
          <option value="KBps">Kilobytes per second (KB/s)</option>
          <option value="MBps">Megabytes per second (MB/s)</option>
          <option value="GBps">Gigabytes per second (GB/s)</option>
              </select>
            </div>
          </div>
          {val && <div className="bg-gray-800 rounded p-4 text-2xl font-mono text-green-400">{convert()} {to}</div>}
        </div>
      </div>
    </main>
  );
}
