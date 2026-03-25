"use client";
import { useState } from "react";

export default function ROICalculator() {
  const [initial, setInitial] = useState("");
  const [final, setFinal] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState<{roi: number; annualized: number | null; gain: number} | null>(null);

  const calculate = () => {
    const i = parseFloat(initial);
    const f = parseFloat(final);
    const y = parseFloat(years);
    if (isNaN(i) || isNaN(f) || i === 0) return;
    const gain = f - i;
    const roi = (gain / i) * 100;
    const annualized = !isNaN(y) && y > 0 ? (Math.pow(f / i, 1 / y) - 1) * 100 : null;
    setResult({ roi, annualized, gain });
  };

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">ROI Calculator</h1>
        <p className="text-gray-400 mb-8">Calculate return on investment for any asset or project.</p>
        <div className="space-y-4 bg-gray-900 p-6 rounded-xl">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Initial Investment ($)</label>
            <input type="number" value={initial} onChange={e => setInitial(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white" placeholder="10000" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Final Value ($)</label>
            <input type="number" value={final} onChange={e => setFinal(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white" placeholder="15000" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Investment Period (years, optional)</label>
            <input type="number" value={years} onChange={e => setYears(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white" placeholder="3" />
          </div>
          <button onClick={calculate}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
            Calculate
          </button>
        </div>
        {result && (
          <div className="mt-6 bg-gray-900 p-6 rounded-xl space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Total ROI</span>
              <span className={"text-2xl font-bold " + (result.roi >= 0 ? "text-green-400" : "text-red-400")}>{result.roi.toFixed(2)}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Net Gain/Loss</span>
              <span className={"text-lg font-semibold " + (result.gain >= 0 ? "text-green-400" : "text-red-400")}>${result.gain.toFixed(2)}</span>
            </div>
            {result.annualized !== null && (
              <div className="flex justify-between">
                <span className="text-gray-400">Annualized Return</span>
                <span className="text-lg font-semibold text-blue-400">{result.annualized.toFixed(2)}%/yr</span>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
