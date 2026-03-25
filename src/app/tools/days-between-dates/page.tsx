"use client";
import { useState } from "react";
export default function DaysBetweenDates() {
  const [d1, setD1] = useState("");
  const [d2, setD2] = useState("");
  const diff = d1 && d2 ? Math.abs(Math.round((new Date(d2) - new Date(d1)) / 86400000)) : null;
  const weeks = diff !== null ? Math.floor(diff / 7) : null;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-2">Days Between Dates</h1>
        <p className="text-gray-400 mb-6">Calculate the number of days between two dates.</p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Start Date</label>
            <input type="date" value={d1} onChange={e=>setD1(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">End Date</label>
            <input type="date" value={d2} onChange={e=>setD2(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white" />
          </div>
        </div>
        {diff !== null && (
          <div className="mt-6 bg-gray-800 rounded-lg p-4 space-y-3">
            <div className="flex justify-between"><span className="text-gray-400">Days</span><span className="text-blue-400 font-bold text-2xl">{diff}</span></div>
            <div className="flex justify-between"><span className="text-gray-400">Weeks</span><span className="text-white font-bold">{weeks} weeks {diff % 7} days</span></div>
            <div className="flex justify-between"><span className="text-gray-400">Months (approx)</span><span className="text-white font-bold">{(diff/30.44).toFixed(1)}</span></div>
          </div>
        )}
      </div>
    </main>
  );
}