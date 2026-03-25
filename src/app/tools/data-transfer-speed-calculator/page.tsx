"use client";
import { useState } from "react";
export default function DataTransferSpeedCalculator() {
  const [size, setSize] = useState("1");
  const [sizeUnit, setSizeUnit] = useState("GB");
  const [speed, setSpeed] = useState("100");
  const [speedUnit, setSpeedUnit] = useState("Mbps");
  const sizeBytes: Record<string,number> = { B:1, KB:1e3, MB:1e6, GB:1e9, TB:1e12 };
  const speedBps: Record<string,number> = { "bps":1, "Kbps":1e3, "Mbps":1e6, "Gbps":1e9 };
  const bytes = parseFloat(size||"0") * sizeBytes[sizeUnit];
  const bps = parseFloat(speed||"0") * speedBps[speedUnit];
  const secs = bps > 0 ? bytes*8/bps : 0;
  const fmt = (s: number) => s < 60 ? s.toFixed(1)+" sec" : s < 3600 ? (s/60).toFixed(1)+" min" : (s/3600).toFixed(2)+" hr";
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Data Transfer Speed Calculator</h1>
      <p className="text-gray-400 mb-6">Calculate how long it takes to transfer files</p>
      <div className="max-w-lg space-y-4">
        <div><label className="text-gray-400 text-sm">File Size</label><div className="flex gap-2 mt-1"><input value={size} onChange={e=>setSize(e.target.value)} className="flex-1 bg-gray-800 rounded p-3 text-white" /><select value={sizeUnit} onChange={e=>setSizeUnit(e.target.value)} className="bg-gray-800 rounded p-3 text-white">{Object.keys(sizeBytes).map(u=><option key={u}>{u}</option>)}</select></div></div>
        <div><label className="text-gray-400 text-sm">Transfer Speed</label><div className="flex gap-2 mt-1"><input value={speed} onChange={e=>setSpeed(e.target.value)} className="flex-1 bg-gray-800 rounded p-3 text-white" /><select value={speedUnit} onChange={e=>setSpeedUnit(e.target.value)} className="bg-gray-800 rounded p-3 text-white">{Object.keys(speedBps).map(u=><option key={u}>{u}</option>)}</select></div></div>
        <div className="bg-gray-800 rounded p-4 text-center"><div className="text-gray-400 mb-1">Transfer Time</div><div className="text-4xl font-bold text-cyan-400">{secs > 0 ? fmt(secs) : "—"}</div></div>
      </div>
    </main>
  );
}