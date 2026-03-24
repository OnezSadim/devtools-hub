"use client";
import { useState } from "react";
const ZONES = ["UTC","America/New_York","America/Chicago","America/Denver","America/Los_Angeles","America/Sao_Paulo","Europe/London","Europe/Paris","Europe/Berlin","Europe/Moscow","Asia/Dubai","Asia/Kolkata","Asia/Singapore","Asia/Tokyo","Asia/Shanghai","Australia/Sydney","Pacific/Auckland"];
export default function TimezoneConverter() {
  const [dt, setDt] = useState(new Date().toISOString().slice(0,16));
  const [from, setFrom] = useState("UTC");
  const [to, setTo] = useState("America/New_York");
  const convert = () => {
    try {
      const d = new Date(dt);
      return d.toLocaleString("en-US", { timeZone: to, dateStyle: "full", timeStyle: "long" });
    } catch { return "Invalid"; }
  };
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">Timezone Converter</h1>
      <p className="text-gray-400 mb-6">Convert date/time between timezones.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mb-6">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Date & Time</label>
          <input type="datetime-local" value={dt} onChange={e=>setDt(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">From</label>
          <select value={from} onChange={e=>setFrom(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white">
            {ZONES.map(z=><option key={z} value={z}>{z}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">To</label>
          <select value={to} onChange={e=>setTo(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white">
            {ZONES.map(z=><option key={z} value={z}>{z}</option>)}
          </select>
        </div>
      </div>
      <div className="p-4 bg-gray-800 rounded max-w-3xl">
        <p className="text-sm text-gray-400 mb-2">Result in {to}:</p>
        <p className="text-xl font-mono text-green-400">{convert()}</p>
      </div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl">
        {ZONES.map(z=>(
          <div key={z} className="p-3 bg-gray-800 rounded">
            <p className="text-xs text-gray-400">{z}</p>
            <p className="font-mono text-sm text-blue-300">{new Date(dt).toLocaleTimeString("en-US",{timeZone:z,hour:"2-digit",minute:"2-digit"})}</p>
          </div>
        ))}
      </div>
    </main>
  );
}