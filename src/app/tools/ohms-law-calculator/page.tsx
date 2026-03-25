"use client";
import { useState } from "react";
export default function OhmsLaw() {
  const [voltage, setVoltage] = useState('');
  const [current, setCurrent] = useState('');
  const [resistance, setResistance] = useState('');
  const [result, setResult] = useState('');
  const calculate = () => {
    const v = parseFloat(voltage), i = parseFloat(current), r = parseFloat(resistance);
    if (!isNaN(v) && !isNaN(i) && isNaN(r)) setResult('Resistance: ' + (v / i).toFixed(4) + ' Ω');
    else if (!isNaN(v) && isNaN(i) && !isNaN(r)) setResult('Current: ' + (v / r).toFixed(4) + ' A');
    else if (isNaN(v) && !isNaN(i) && !isNaN(r)) setResult('Voltage: ' + (i * r).toFixed(4) + ' V');
    else setResult('Leave exactly one field empty to calculate.');
  };
  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-2">Ohm's Law Calculator</h1>
        <p className="text-gray-400 mb-8">Calculate voltage, current, or resistance. Leave one field empty.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div><label className="block text-sm text-gray-400 mb-1">Voltage (V)</label><input type="number" value={voltage} onChange={e => setVoltage(e.target.value)} placeholder="e.g. 12" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Current (A)</label><input type="number" value={current} onChange={e => setCurrent(e.target.value)} placeholder="e.g. 2" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white" /></div>
          <div><label className="block text-sm text-gray-400 mb-1">Resistance (Ω)</label><input type="number" value={resistance} onChange={e => setResistance(e.target.value)} placeholder="e.g. 6" className="w-full bg-gray-800 rounded-lg px-4 py-3 text-white" /></div>
          <button onClick={calculate} className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold">Calculate</button>
          {result && <div className="bg-gray-800 rounded-lg p-4 text-center text-xl font-bold text-blue-400">{result}</div>}
        </div>
      </div>
    </main>
  );
}