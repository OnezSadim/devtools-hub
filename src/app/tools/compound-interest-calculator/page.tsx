"use client";
import { useState } from "react";
export default function CompoundInterestCalculator() {
  const [p, setP] = useState("");
  const [r, setR] = useState("");
  const [t, setT] = useState("");
  const [n, setN] = useState("12");
  const [result, setResult] = useState(null);
  const calculate = () => {
    const principal = parseFloat(p);
    const rate = parseFloat(r)/100;
    const time = parseFloat(t);
    const comp = parseFloat(n);
    if (!principal || !rate || !time) return;
    const amount = principal * Math.pow(1 + rate/comp, comp*time);
    setResult({ amount: amount.toFixed(2), interest: (amount-principal).toFixed(2) });
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Compound Interest Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate how your money grows with compound interest over time.</p>
        <div className="space-y-4 mb-6">
          <div><label className="block text-sm text-gray-400 mb-1">Principal ($)</label>
            <input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" type="number" value={p} onChange={e=>setP(e.target.value)} placeholder="1000" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Annual Rate (%)</label>
            <input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" type="number" value={r} onChange={e=>setR(e.target.value)} placeholder="5" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Time (years)</label>
            <input className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" type="number" value={t} onChange={e=>setT(e.target.value)} placeholder="10" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Compounding Frequency</label>
            <select className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2" value={n} onChange={e=>setN(e.target.value)}>
              <option value="1">Annually</option><option value="4">Quarterly</option><option value="12">Monthly</option><option value="365">Daily</option>
            </select></div>
        </div>
        <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 font-semibold mb-6">Calculate</button>
        {result && <div className="bg-gray-800 rounded p-4 space-y-2">
          <div className="flex justify-between"><span className="text-gray-400">Interest Earned</span><span className="font-bold text-green-400">${result.interest}</span></div>
          <div className="flex justify-between border-t border-gray-700 pt-2"><span className="text-gray-400">Final Amount</span><span className="font-bold text-green-400 text-xl">${result.amount}</span></div>
        </div>}
      </div>
    </div>
  );
}
