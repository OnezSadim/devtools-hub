"use client";
import { useState } from "react";

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [n, setN] = useState("12");
  const [result, setResult] = useState<{amount: number; interest: number} | null>(null);

  const calculate = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const nv = parseFloat(n);
    if (isNaN(P) || isNaN(r) || isNaN(t) || isNaN(nv)) return;
    const A = P * Math.pow(1 + r / nv, nv * t);
    setResult({ amount: A, interest: A - P });
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Compound Interest Calculator</h1>
        <p className="text-gray-400 mb-8">Calculate compound interest on investments and savings.</p>
        <div className="space-y-4 bg-gray-900 p-6 rounded-xl">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Principal ($)</label>
            <input type="number" value={principal} onChange={e => setPrincipal(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white" placeholder="10000" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Annual Interest Rate (%)</label>
            <input type="number" value={rate} onChange={e => setRate(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white" placeholder="7" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Time (years)</label>
            <input type="number" value={time} onChange={e => setTime(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white" placeholder="10" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Compounding Frequency</label>
            <select value={n} onChange={e => setN(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white">
              <option value="1">Annually</option>
              <option value="4">Quarterly</option>
              <option value="12">Monthly</option>
              <option value="365">Daily</option>
            </select>
          </div>
          <button onClick={calculate}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
            Calculate
          </button>
        </div>
        {result && (
          <div className="mt-6 bg-gray-900 p-6 rounded-xl space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Final Amount</span>
              <span className="text-2xl font-bold text-green-400">${result.amount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Total Interest Earned</span>
              <span className="text-xl font-semibold text-blue-400">${result.interest.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
