"use client";
import { useState } from "react";
export default function AgeDifferenceCalculator() {
  const [d1, setD1] = useState("");
  const [d2, setD2] = useState("");
  const calc = () => {
    if (!d1 || !d2) return null;
    const a = new Date(d1), b = new Date(d2);
    const diff = Math.abs(b.getTime() - a.getTime());
    const days = Math.floor(diff / 86400000);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30.44);
    const years = Math.floor(days / 365.25);
    return { days, weeks, months, years };
  };
  const result = calc();
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Age Difference Calculator</h1>
        <p className="text-gray-400 mb-8">Find the exact difference between two dates.</p>
        <div className="bg-gray-900 rounded-xl p-6">
          <div className="space-y-4 mb-6">
            <div><label className="block text-sm text-gray-400 mb-1">First Date</label><input type="date" value={d1} onChange={e=>setD1(e.target.value)} className="w-full bg-gray-800 rounded-lg p-3 text-white" /></div>
            <div><label className="block text-sm text-gray-400 mb-1">Second Date</label><input type="date" value={d2} onChange={e=>setD2(e.target.value)} className="w-full bg-gray-800 rounded-lg p-3 text-white" /></div>
          </div>
          {result && (
            <div className="grid grid-cols-2 gap-3">
              {[{label:"Years",val:result.years},{label:"Months",val:result.months},{label:"Weeks",val:result.weeks},{label:"Days",val:result.days}].map(r => (
                <div key={r.label} className="bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">{r.val.toLocaleString()}</div>
                  <div className="text-gray-400 text-sm">{r.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}