"use client";
import { useState } from "react";

export default function LoanPaymentCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [term, setTerm] = useState("");
  const [result, setResult] = useState<{monthly: number; total: number; interest: number} | null>(null);

  const calculate = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(term) * 12;
    if (isNaN(P) || isNaN(r) || isNaN(n) || r === 0) return;
    const M = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = M * n;
    setResult({ monthly: M, total, interest: total - P });
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Loan Payment Calculator</h1>
        <p className="text-gray-400 mb-8">Calculate monthly payments for any loan.</p>
        <div className="space-y-4 bg-gray-900 p-6 rounded-xl">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Loan Amount ($)</label>
            <input type="number" value={principal} onChange={e => setPrincipal(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white" placeholder="25000" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Annual Interest Rate (%)</label>
            <input type="number" value={rate} onChange={e => setRate(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white" placeholder="5.5" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Loan Term (years)</label>
            <input type="number" value={term} onChange={e => setTerm(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white" placeholder="5" />
          </div>
          <button onClick={calculate}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
            Calculate
          </button>
        </div>
        {result && (
          <div className="mt-6 bg-gray-900 p-6 rounded-xl space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Monthly Payment</span>
              <span className="text-2xl font-bold text-green-400">${result.monthly.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Total Payment</span>
              <span className="text-lg font-semibold text-white">${result.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Total Interest</span>
              <span className="text-lg font-semibold text-red-400">${result.interest.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
