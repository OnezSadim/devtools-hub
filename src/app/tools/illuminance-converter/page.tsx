'use client';
import { useState } from 'react';

export default function IlluminanceconverterConverter() {
  const [val, setVal] = useState('1');
  const [from, setFrom] = useState('Lux');
  const [to, setTo] = useState('Foot-candle');

  const toBase: Record<string,number> = {
    'Lux': 1.0,
    'Foot-candle': 10.7639,
    'Phot': 10000.0,
    'Nox': 0.001,
    'Millilux': 0.001,
    'Kilolux': 1000.0,
    'Lumen/m2': 1.0,
    'Lumen/ft2': 10.7639,
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
        <h1 className="text-3xl font-bold mb-2">Illuminance Converter</h1>
        <p className="text-gray-400 mb-8">Convert between illuminance units: lux, foot-candle, phot, and more.</p>
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
      <option value="Lux">Lux</option>
      <option value="Foot-candle">Foot-candle</option>
      <option value="Phot">Phot</option>
      <option value="Nox">Nox</option>
      <option value="Millilux">Millilux</option>
      <option value="Kilolux">Kilolux</option>
      <option value="Lumen/m2">Lumen/m2</option>
      <option value="Lumen/ft2">Lumen/ft2</option>
            </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e=>setTo(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white border border-gray-700 focus:outline-none focus:border-blue-500">
      <option value="Lux">Lux</option>
      <option value="Foot-candle">Foot-candle</option>
      <option value="Phot">Phot</option>
      <option value="Nox">Nox</option>
      <option value="Millilux">Millilux</option>
      <option value="Kilolux">Kilolux</option>
      <option value="Lumen/m2">Lumen/m2</option>
      <option value="Lumen/ft2">Lumen/ft2</option>
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
