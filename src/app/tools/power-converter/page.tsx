'use client';
import { useState } from 'react';

export default function PowerconverterConverter() {
  const [val, setVal] = useState('1');
  const [from, setFrom] = useState('Watt');
  const [to, setTo] = useState('Kilowatt');

  const toBase: Record<string,number> = {
    'Watt': 1.0,
    'Kilowatt': 1000.0,
    'Megawatt': 1000000.0,
    'Horsepower': 745.7,
    'BTU/hr': 0.29307,
    'Calorie/sec': 4.1868,
    'Foot-pound/sec': 1.35582,
    'Erg/sec': 1e-07,
  };

  const convert = () => {
    const n = parseFloat(val);
    if (isNaN(n)) return 'Invalid';
    const base = n * (toBase[from] || 1);
    const result = base / (toBase[to] || 1);
    return result.toPrecision(6);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Power Converter</h1>
        <p className="text-gray-400 mb-8">Convert between power units: Watt, kilowatt, horsepower, BTU/hr, and more.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Value</label>
            <input type="number" value={val} onChange={e=>setVal(e.target.value)}
              className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white border border-gray-700 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select value={from} onChange={e=>setFrom(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white border border-gray-700 focus:outline-none focus:border-blue-500">
      <option value="Watt">Watt</option>
      <option value="Kilowatt">Kilowatt</option>
      <option value="Megawatt">Megawatt</option>
      <option value="Horsepower">Horsepower</option>
      <option value="BTU/hr">BTU/hr</option>
      <option value="Calorie/sec">Calorie/sec</option>
      <option value="Foot-pound/sec">Foot-pound/sec</option>
      <option value="Erg/sec">Erg/sec</option>
            </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e=>setTo(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white border border-gray-700 focus:outline-none focus:border-blue-500">
      <option value="Watt">Watt</option>
      <option value="Kilowatt">Kilowatt</option>
      <option value="Megawatt">Megawatt</option>
      <option value="Horsepower">Horsepower</option>
      <option value="BTU/hr">BTU/hr</option>
      <option value="Calorie/sec">Calorie/sec</option>
      <option value="Foot-pound/sec">Foot-pound/sec</option>
      <option value="Erg/sec">Erg/sec</option>
            </select>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <span className="text-3xl font-mono text-blue-400">{convert()}</span>
            <span className="ml-2 text-gray-400">{to}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
