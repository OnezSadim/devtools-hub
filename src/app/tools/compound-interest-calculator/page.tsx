"use client";
import { useState } from "react";
export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [n, setN] = useState("12");
  const [result, setResult] = useState<string | null>(null);
  const calculate = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const freq = parseFloat(n);
    if (isNaN(p) || isNaN(r) || isNaN(t) || isNaN(freq) || freq === 0) { setResult("Please enter valid numbers."); return; }
    const amount = p * Math.pow(1 + r / freq, freq * t);
    const interest = amount - p;
    setResult(`Final Amount: $${amount.toFixed(2)}\nCompound Interest Earned: $${interest.toFixed(2)}`);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Compound Interest Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate how your investment grows with compound interest.</p>
        <div className="space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Principal ($)</label><input type="number" value={principal} onChange={e=>setPrincipal(e.target.value)} placeholder="e.g. 1000" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"/></div>
          <div><label className="block text-sm text-gray-400 mb-1">Annual Interest Rate (%)</label><input type="number" value={rate} onChange={e=>setRate(e.target.value)} placeholder="e.g. 5" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"/></div>
          <div><label className="block text-sm text-gray-400 mb-1">Time (years)</label><input type="number" value={time} onChange={e=>setTime(e.target.value)} placeholder="e.g. 10" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"/></div>
          <div><label className="block text-sm text-gray-400 mb-1">Compounding Frequency (per year)</label><select value={n} onChange={e=>setN(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"><option value="1">Annually (1)</option><option value="4">Quarterly (4)</option><option value="12">Monthly (12)</option><option value="365">Daily (365)</option></select></div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 font-semibold">Calculate</button>
        </div>
        {result && <div className="mt-6 bg-gray-800 rounded p-4 whitespace-pre-line text-green-400 font-mono">{result}</div>}
      </div>
    </main>
  );
}
