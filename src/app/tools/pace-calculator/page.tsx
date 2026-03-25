"use client";
import { useState } from "react";
export default function PaceCalculator() {
  const [distance, setDistance] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [unit, setUnit] = useState('km');
  const [result, setResult] = useState('');
  const calculate = () => {
    const d = parseFloat(distance);
    const totalSec = (parseFloat(hours)||0)*3600 + (parseFloat(minutes)||0)*60 + (parseFloat(seconds)||0);
    if (!isNaN(d) && d > 0 && totalSec > 0) {
      const paceSecPerUnit = totalSec / d;
      const pm = Math.floor(paceSecPerUnit / 60);
      const ps = Math.round(paceSecPerUnit % 60);
      setResult(pm + ':' + String(ps).padStart(2,'0') + ' min/' + unit);
    }
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Pace Calculator</h1>
        <p className="text-gray-400 mb-8">Calculate your running or walking pace.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div className="flex gap-2"><div className="flex-1"><label className="block text-sm text-gray-400 mb-1">Distance</label><input type="number" value={distance} onChange={e => setDistance(e.target.value)} placeholder="5" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white" /></div><div><label className="block text-sm text-gray-400 mb-1">Unit</label><select value={unit} onChange={e => setUnit(e.target.value)} className="bg-gray-800 rounded-lg px-4 py-3 text-white h-full mt-0"><option>km</option><option>mi</option></select></div></div>
          <div><label className="block text-sm text-gray-400 mb-1">Time</label><div className="flex gap-2"><input type="number" value={hours} onChange={e => setHours(e.target.value)} placeholder="HH" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white" /><input type="number" value={minutes} onChange={e => setMinutes(e.target.value)} placeholder="MM" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white" /><input type="number" value={seconds} onChange={e => setSeconds(e.target.value)} placeholder="SS" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white" /></div></div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold">Calculate Pace</button>
          {result && <div className="bg-gray-800 rounded-lg p-4 text-center text-3xl font-bold text-blue-400">{result}</div>}
        </div>
      </div>
    </main>
  );
}