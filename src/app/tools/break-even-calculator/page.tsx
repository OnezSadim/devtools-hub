"use client";
import { useState } from "react";

export default function BreakEvenCalculator() {
  const [fixed, setFixed] = useState("");
  const [price, setPrice] = useState("");
  const [variable, setVariable] = useState("");
  const [result, setResult] = useState<{units: number; revenue: number; margin: number} | null>(null);

  const calculate = () => {
    const F = parseFloat(fixed);
    const P = parseFloat(price);
    const V = parseFloat(variable);
    if (isNaN(F) || isNaN(P) || isNaN(V) || P <= V) return;
    const units = F / (P - V);
    const revenue = units * P;
    const margin = ((P - V) / P) * 100;
    setResult({ units, revenue, margin });
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Break-Even Calculator</h1>
        <p className="text-gray-400 mb-8">Find how many units you need to sell to cover costs.</p>
        <div className="space-y-4 bg-gray-900 p-6 rounded-xl">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Fixed Costs ($)</label>
            <input type="number" value={fixed} onChange={e => setFixed(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white" placeholder="5000" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Selling Price per Unit ($)</label>
            <input type="number" value={price} onChange={e => setPrice(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white" placeholder="25" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Variable Cost per Unit ($)</label>
            <input type="number" value={variable} onChange={e => setVariable(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white" placeholder="10" />
          </div>
          <button onClick={calculate}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
            Calculate
          </button>
        </div>
        {result && (
          <div className="mt-6 bg-gray-900 p-6 rounded-xl space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Break-Even Units</span>
              <span className="text-2xl font-bold text-green-400">{Math.ceil(result.units)} units</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Break-Even Revenue</span>
              <span className="text-lg font-semibold text-blue-400">${result.revenue.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Contribution Margin</span>
              <span className="text-lg font-semibold text-white">{result.margin.toFixed(1)}%</span>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
