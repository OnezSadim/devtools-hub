"use client";
import { useState } from "react";
export default function SpeedCalculator() {
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [unit, setUnit] = useState('km');
  const [result, setResult] = useState<{speed: string, unit: string} | null>(null);
  const calculate = () => {
    const d = parseFloat(distance), t = parseFloat(time);
    if (!isNaN(d) && !isNaN(t) && t > 0) {
      setResult({ speed: (d / t).toFixed(4), unit: unit + '/h' });
    }
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Speed Calculator</h1>
        <p className="text-gray-400 mb-8">Calculate speed from distance and time.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Distance</label><input type="number" value={distance} onChange={e => setDistance(e.target.value)} placeholder="e.g. 100" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Time (hours)</label><input type="number" value={time} onChange={e => setTime(e.target.value)} placeholder="e.g. 2" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Unit</label><select value={unit} onChange={e => setUnit(e.target.value)} className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white"><option value="km">Kilometers</option><option value="mi">Miles</option><option value="m">Meters</option></select></div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold">Calculate Speed</button>
          {result && <div className="bg-gray-800 rounded-lg p-4 text-center"><span className="text-3xl font-bold text-blue-400">{result.speed} {result.unit}</span></div>}
        </div>
      </div>
    </main>
  );
}