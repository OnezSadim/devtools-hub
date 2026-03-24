"use client";
import { useState } from "react";
export default function DateCalculator() {
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [baseDate, setBaseDate] = useState("");
  const [addDays, setAddDays] = useState("");
  const diff = date1 && date2 ? Math.round((new Date(date2) - new Date(date1)) / 86400000) : null;
  const resultDate = baseDate && addDays ? new Date(new Date(baseDate).getTime() + Number(addDays)*86400000).toISOString().split("T")[0] : null;
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Date Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate differences between dates or add/subtract days.</p>
        <div className="space-y-4">
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-5">
            <h2 className="text-lg font-semibold mb-3">Difference between two dates</h2>
            <div className="flex items-center gap-3 flex-wrap">
              <input type="date" className="bg-gray-800 border border-gray-600 rounded-lg px-3 py-2" value={date1} onChange={e=>setDate1(e.target.value)} />
              <span className="text-gray-400">to</span>
              <input type="date" className="bg-gray-800 border border-gray-600 rounded-lg px-3 py-2" value={date2} onChange={e=>setDate2(e.target.value)} />
            </div>
            {diff !== null && (
              <div className="mt-3 p-3 bg-blue-900/30 border border-blue-700/50 rounded-lg">
                <span className="text-xl font-bold text-blue-400">{Math.abs(diff)} days</span>
                <span className="text-gray-400 ml-2">({Math.floor(Math.abs(diff)/7)} weeks, {Math.abs(diff)%7} days)</span>
                {diff < 0 && <span className="text-yellow-400 ml-2">(date2 is before date1)</span>}
              </div>
            )}
          </div>
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-5">
            <h2 className="text-lg font-semibold mb-3">Add/subtract days</h2>
            <div className="flex items-center gap-3 flex-wrap">
              <input type="date" className="bg-gray-800 border border-gray-600 rounded-lg px-3 py-2" value={baseDate} onChange={e=>setBaseDate(e.target.value)} />
              <span className="text-gray-400">+</span>
              <input type="number" className="w-28 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2" placeholder="days (neg ok)" value={addDays} onChange={e=>setAddDays(e.target.value)} />
            </div>
            {resultDate && (
              <div className="mt-3 p-3 bg-green-900/30 border border-green-700/50 rounded-lg">
                <span className="text-xl font-bold text-green-400">{resultDate}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}