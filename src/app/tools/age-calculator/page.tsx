"use client";
import { useState } from "react";
export default function AgeCalculator() {
  const [dob, setDob] = useState("");
  const calc = () => {
    if(!dob) return null;
    const birth = new Date(dob);
    const now = new Date();
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();
    if(days < 0) { months--; const d = new Date(now.getFullYear(), now.getMonth(), 0); days += d.getDate(); }
    if(months < 0) { years--; months += 12; }
    const totalDays = Math.floor((now - birth) / 86400000);
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;
    const nextBirthday = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());
    if(nextBirthday <= now) nextBirthday.setFullYear(now.getFullYear()+1);
    const daysToNext = Math.ceil((nextBirthday - now) / 86400000);
    return {years,months,days,totalDays,totalWeeks,totalMonths,daysToNext};
  };
  const r = calc();
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-2">Age Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate exact age and birthday info.</p>
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
          <label className="block text-sm text-gray-400 mb-2">Date of Birth</label>
          <input type="date" className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-lg mb-6" value={dob} onChange={e=>setDob(e.target.value)} />
          {r && (
            <div className="space-y-3">
              <div className="bg-blue-900/30 border border-blue-700/50 rounded-xl p-4 text-center">
                <div className="text-4xl font-bold text-blue-400">{r.years} <span className="text-2xl">years</span></div>
                <div className="text-gray-400 mt-1">{r.months} months, {r.days} days</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-800 rounded-lg p-3 text-center"><div className="text-xl font-bold">{r.totalDays.toLocaleString()}</div><div className="text-xs text-gray-400">Total days</div></div>
                <div className="bg-gray-800 rounded-lg p-3 text-center"><div className="text-xl font-bold">{r.totalWeeks.toLocaleString()}</div><div className="text-xs text-gray-400">Total weeks</div></div>
                <div className="bg-gray-800 rounded-lg p-3 text-center"><div className="text-xl font-bold">{r.totalMonths.toLocaleString()}</div><div className="text-xs text-gray-400">Total months</div></div>
                <div className="bg-gray-800 rounded-lg p-3 text-center"><div className="text-xl font-bold text-green-400">{r.daysToNext}</div><div className="text-xs text-gray-400">Days to birthday</div></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}