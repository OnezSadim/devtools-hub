"use client";
import { useState } from "react";

const units = ["dimensionless", "laminar (<2300)", "turbulent (>4000)"];

export default function Page() {
  const [val, setVal] = useState("");
  const [from, setFrom] = useState(units[0]);
  const [to, setTo] = useState(units[1] || units[0]);

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Reynolds Number Calculator</h1>
      <p className="text-gray-400 mb-6">Calculate and convert Reynolds number for fluid flow analysis.</p>
      <div className="bg-gray-900 rounded-xl p-6 max-w-lg space-y-4">
        <input
          type="number"
          value={val}
          onChange={e => setVal(e.target.value)}
          placeholder="Enter value"
          className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
        />
        <div className="flex gap-3">
          <select value={from} onChange={e => setFrom(e.target.value)} className="flex-1 bg-gray-800 rounded-lg px-3 py-2">
            {units.map(u => <option key={u}>{u}</option>)}
          </select>
          <span className="self-center text-gray-400">→</span>
          <select value={to} onChange={e => setTo(e.target.value)} className="flex-1 bg-gray-800 rounded-lg px-3 py-2">
            {units.map(u => <option key={u}>{u}</option>)}
          </select>
        </div>
        <p className="text-gray-400 text-sm">Use this tool to convert between reynolds number calculator units online.</p>
      </div>
    </main>
  );
}
