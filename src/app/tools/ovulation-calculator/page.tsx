"use client";
import { useState } from "react";
export default function OvulationCalculator() {
  const [lmp, setLmp] = useState("");
  const [cycle, setCycle] = useState("28");
  const [result, setResult] = useState<any>(null);
  const calc = () => {
    if (!lmp) return;
    const lmpDate = new Date(lmp);
    const cycleLen = parseInt(cycle) || 28;
    const ovulation = new Date(lmpDate);
    ovulation.setDate(ovulation.getDate() + cycleLen - 14);
    const fertileStart = new Date(ovulation);
    fertileStart.setDate(fertileStart.getDate() - 5);
    const fertileEnd = new Date(ovulation);
    fertileEnd.setDate(fertileEnd.getDate() + 1);
    const nextPeriod = new Date(lmpDate);
    nextPeriod.setDate(nextPeriod.getDate() + cycleLen);
    setResult({ ovulation: ovulation.toDateString(), fertileStart: fertileStart.toDateString(), fertileEnd: fertileEnd.toDateString(), nextPeriod: nextPeriod.toDateString() });
  };
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Ovulation Calculator</h1>
        <p className="text-gray-400 mb-8">Estimate your ovulation and fertile window.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">First Day of Last Period</label>
            <input type="date" value={lmp} onChange={e => setLmp(e.target.value)} className="w-full bg-gray-800 rounded-lg p-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Average Cycle Length (days)</label>
            <input type="number" value={cycle} onChange={e => setCycle(e.target.value)} min="21" max="45" className="w-full bg-gray-800 rounded-lg p-2 text-white" />
          </div>
          <button onClick={calc} className="w-full bg-rose-600 hover:bg-rose-700 rounded-lg p-3 font-semibold">Calculate</button>
          {result && (
            <div className="space-y-3 mt-2">
              <div className="bg-rose-900/30 border border-rose-500/30 rounded-lg p-4 text-center">
                <div className="text-sm text-rose-300 mb-1">Estimated Ovulation Date</div>
                <div className="text-xl font-bold text-rose-400">{result.ovulation}</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-sm text-gray-400 mb-1">Fertile Window</div>
                <div className="text-lg font-semibold text-white">{result.fertileStart} – {result.fertileEnd}</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-3 text-center">
                <div className="text-sm text-gray-400">Next Period Expected</div>
                <div className="text-white font-medium">{result.nextPeriod}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}