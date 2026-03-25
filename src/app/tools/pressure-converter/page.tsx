'use client';
import { useState } from 'react';

export default function PressureconverterConverter() {
  const [val, setVal] = useState('1');
  const [from, setFrom] = useState('Pascal');
  const [to, setTo] = useState('Kilopascal');

  const toBase: Record<string,number> = {
    'Pascal': 1.0,
    'Kilopascal': 1000.0,
    'Megapascal': 1000000.0,
    'Bar': 100000.0,
    'Millibar': 100.0,
    'PSI': 6894.757,
    'Atmosphere': 101325.0,
    'Torr': 133.322,
    'mmHg': 133.322,
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
        <h1 className="text-3xl font-bold mb-2">Pressure Converter</h1>
        <p className="text-gray-400 mb-8">Convert between pressure units: Pascal, bar, PSI, atmosphere, torr, and more.</p>
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
      <option value="Pascal">Pascal</option>
      <option value="Kilopascal">Kilopascal</option>
      <option value="Megapascal">Megapascal</option>
      <option value="Bar">Bar</option>
      <option value="Millibar">Millibar</option>
      <option value="PSI">PSI</option>
      <option value="Atmosphere">Atmosphere</option>
      <option value="Torr">Torr</option>
      <option value="mmHg">mmHg</option>
            </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e=>setTo(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white border border-gray-700 focus:outline-none focus:border-blue-500">
      <option value="Pascal">Pascal</option>
      <option value="Kilopascal">Kilopascal</option>
      <option value="Megapascal">Megapascal</option>
      <option value="Bar">Bar</option>
      <option value="Millibar">Millibar</option>
      <option value="PSI">PSI</option>
      <option value="Atmosphere">Atmosphere</option>
      <option value="Torr">Torr</option>
      <option value="mmHg">mmHg</option>
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
