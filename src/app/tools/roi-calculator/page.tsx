"use client";
import { useState } from "react";
export default function RoiCalculator() {
  const [initial, setInitial] = useState("");
  const [final, setFinal] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const calculate = () => {
    const i = parseFloat(initial);
    const f = parseFloat(final);
    if (isNaN(i) || isNaN(f) || i === 0) { setResult("Please enter valid numbers (initial > 0)."); return; }
    const roi = ((f - i) / i) * 100;
    const gain = f - i;
    setResult(`ROI: ${roi.toFixed(2)}%\nNet Gain/Loss: $${gain.toFixed(2)}\nFinal Value: $${f.toFixed(2)}`);
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">ROI Calculator</h1>
        <p className="text-gray-400 mb-6">Calculate your return on investment as a percentage.</p>
        <div className="space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Initial Investment ($)</label><input type="number" value={initial} onChange={e=>setInitial(e.target.value)} placeholder="e.g. 10000" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"/></div>
          <div><label className="block text-sm text-gray-400 mb-1">Final Value ($)</label><input type="number" value={final} onChange={e=>setFinal(e.target.value)} placeholder="e.g. 15000" className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"/></div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 font-semibold">Calculate</button>
        </div>
        {result && <div className="mt-6 bg-gray-800 rounded p-4 whitespace-pre-line text-green-400 font-mono">{result}</div>}
      </div>
    </main>
  );
}
