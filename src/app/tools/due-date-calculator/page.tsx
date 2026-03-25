"use client";
import { useState } from "react";
export default function DueDateCalculator() {
  const [lmp, setLmp] = useState("");
  const [result, setResult] = useState<any>(null);
  const calc = () => {
    if (!lmp) return;
    const lmpDate = new Date(lmp);
    const due = new Date(lmpDate);
    due.setDate(due.getDate() + 280);
    const today = new Date();
    const diffMs = due.getTime() - today.getTime();
    const daysLeft = Math.round(diffMs / (1000 * 60 * 60 * 24));
    const weeksPregnant = Math.floor((today.getTime() - lmpDate.getTime()) / (1000 * 60 * 60 * 24 * 7));
    const daysExtra = Math.floor(((today.getTime() - lmpDate.getTime()) / (1000 * 60 * 60 * 24)) % 7);
    const trimester = weeksPregnant < 13 ? "1st" : weeksPregnant < 27 ? "2nd" : "3rd";
    setResult({ due: due.toDateString(), daysLeft, weeksPregnant, daysExtra, trimester });
  };
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Due Date Calculator</h1>
        <p className="text-gray-400 mb-8">Estimate your pregnancy due date from your last menstrual period.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">First Day of Last Menstrual Period (LMP)</label>
            <input type="date" value={lmp} onChange={e => setLmp(e.target.value)} className="w-full bg-gray-800 rounded-lg p-2 text-white" />
          </div>
          <button onClick={calc} className="w-full bg-pink-600 hover:bg-pink-700 rounded-lg p-3 font-semibold">Calculate Due Date</button>
          {result && (
            <div className="space-y-3 mt-4">
              <div className="bg-pink-900/30 border border-pink-500/30 rounded-lg p-4 text-center">
                <div className="text-sm text-pink-300 mb-1">Estimated Due Date</div>
                <div className="text-2xl font-bold text-pink-400">{result.due}</div>
                <div className="text-sm text-gray-400 mt-1">{result.daysLeft > 0 ? result.daysLeft + " days to go" : "Past due date"}</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-800 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-white">{result.weeksPregnant}w {result.daysExtra}d</div>
                  <div className="text-xs text-gray-400">Currently Pregnant</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-white">{result.trimester}</div>
                  <div className="text-xs text-gray-400">Trimester</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}