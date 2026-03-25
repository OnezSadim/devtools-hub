'use client';
import { useState } from 'react';

export default function FlowrateconverterConverter() {
  const [val, setVal] = useState('1');
  const [from, setFrom] = useState('m3/s');
  const [to, setTo] = useState('m3/hr');

  const toBase: Record<string,number> = {
    'm3/s': 1.0,
    'm3/hr': 0.000277778,
    'L/s': 0.001,
    'L/min': 1.66667e-05,
    'L/hr': 4.16667e-06,
    'mL/s': 1e-06,
    'GPM': 6.30902e-05,
    'CFM': 0.000471947,
    'ft3/hr': 7.86579e-06,
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
        <h1 className="text-3xl font-bold mb-2">Flow Rate Converter</h1>
        <p className="text-gray-400 mb-8">Convert between volumetric flow rate units: m3/s, L/min, GPM, CFM, and more.</p>
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
      <option value="m3/s">m3/s</option>
      <option value="m3/hr">m3/hr</option>
      <option value="L/s">L/s</option>
      <option value="L/min">L/min</option>
      <option value="L/hr">L/hr</option>
      <option value="mL/s">mL/s</option>
      <option value="GPM">GPM</option>
      <option value="CFM">CFM</option>
      <option value="ft3/hr">ft3/hr</option>
            </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e=>setTo(e.target.value)}
                className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white border border-gray-700 focus:outline-none focus:border-blue-500">
      <option value="m3/s">m3/s</option>
      <option value="m3/hr">m3/hr</option>
      <option value="L/s">L/s</option>
      <option value="L/min">L/min</option>
      <option value="L/hr">L/hr</option>
      <option value="mL/s">mL/s</option>
      <option value="GPM">GPM</option>
      <option value="CFM">CFM</option>
      <option value="ft3/hr">ft3/hr</option>
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
