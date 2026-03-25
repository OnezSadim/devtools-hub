"use client";
import { useState } from "react";
export default function BreakEven() {
  const [fixedCosts, setFixedCosts] = useState('');
  const [pricePerUnit, setPricePerUnit] = useState('');
  const [variableCost, setVariableCost] = useState('');
  const [result, setResult] = useState<{units: string, revenue: string} | null>(null);
  const calculate = () => {
    const fc = parseFloat(fixedCosts), p = parseFloat(pricePerUnit), vc = parseFloat(variableCost);
    if (!isNaN(fc) && !isNaN(p) && !isNaN(vc) && (p - vc) > 0) {
      const units = fc / (p - vc);
      setResult({ units: units.toFixed(2), revenue: (units * p).toFixed(2) });
    } else setResult(null);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Break-Even Calculator</h1>
        <p className="text-gray-400 mb-8">Find the point where revenue covers all costs.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Fixed Costs ($)</label><input type="number" value={fixedCosts} onChange={e => setFixedCosts(e.target.value)} placeholder="e.g. 10000" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Price Per Unit ($)</label><input type="number" value={pricePerUnit} onChange={e => setPricePerUnit(e.target.value)} placeholder="e.g. 50" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Variable Cost Per Unit ($)</label><input type="number" value={variableCost} onChange={e => setVariableCost(e.target.value)} placeholder="e.g. 20" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white" /></div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 rounded-lg p-4 space-y-2">
            <div className="text-center"><span className="text-gray-400">Break-Even Units: </span><span className="text-2xl font-bold text-green-400">{result.units}</span></div>
            <div className="text-center"><span className="text-gray-400">Break-Even Revenue: </span><span className="text-xl font-bold text-blue-400">${result.revenue}</span></div>
          </div>}
        </div>
      </div>
    </main>
  );
}