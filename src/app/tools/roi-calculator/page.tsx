"use client";
import { useState } from "react";
export default function ROICalculator() {
  const [invested, setInvested] = useState('');
  const [returned, setReturned] = useState('');
  const [result, setResult] = useState<{roi: string, gain: string} | null>(null);
  const calculate = () => {
    const i = parseFloat(invested), r = parseFloat(returned);
    if (!isNaN(i) && !isNaN(r) && i > 0) {
      setResult({ roi: (((r - i) / i) * 100).toFixed(2), gain: (r - i).toFixed(2) });
    }
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">ROI Calculator</h1>
        <p className="text-gray-400 mb-8">Calculate return on investment percentage.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Amount Invested ($)</label><input type="number" value={invested} onChange={e => setInvested(e.target.value)} placeholder="e.g. 1000" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Amount Returned ($)</label><input type="number" value={returned} onChange={e => setReturned(e.target.value)} placeholder="e.g. 1500" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white" /></div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold">Calculate ROI</button>
          {result && <div className="bg-gray-800 rounded-lg p-4 space-y-2">
            <div className="text-center"><span className="text-gray-400">ROI: </span><span className={"text-3xl font-bold " + (parseFloat(result.roi) >= 0 ? 'text-green-400' : 'text-red-400')}>{result.roi}%</span></div>
            <div className="text-center"><span className="text-gray-400">Net Gain/Loss: </span><span className="text-xl font-bold text-blue-400">${result.gain}</span></div>
          </div>}
        </div>
      </div>
    </main>
  );
}