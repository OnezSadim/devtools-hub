'use client';
import { useState } from 'react';

export default function Page() {
  const [val, setVal] = useState('1');
  const [from, setFrom] = useState('mpg (US)');
  const [to, setTo] = useState('mpg (UK)');

  function convert(v: number, unit: string): number {
    let base = 0;
    switch(unit) {
      case 'mpg (US)': base = v / 1.0; break;
      case 'mpg (UK)': base = v / 1.20095; break;
      case 'km/L': base = v / 0.425144; break;
      case 'L/100km': base = v / 235.215; break;
    }
    switch(to) {
      case 'mpg (US)': return base * 1.0;
      case 'mpg (UK)': return base * 1.20095;
      case 'km/L': return base * 0.425144;
      case 'L/100km': return base * 235.215;
    }
    return base;
  }

  const result = convert(parseFloat(val) || 0, from);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Fuel Efficiency Converter</h1>
        <p className="text-gray-400 mb-8">Convert between fuel efficiency units.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Value</label>
            <input type="number" value={val} onChange={e=>setVal(e.target.value)} className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select value={from} onChange={e=>setFrom(e.target.value)} className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white">
          <option value="mpg (US)">mpg (US)</option>
          <option value="mpg (UK)">mpg (UK)</option>
          <option value="km/L">km/L</option>
          <option value="L/100km">L/100km</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e=>setTo(e.target.value)} className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white">
          <option value="mpg (US)">mpg (US)</option>
          <option value="mpg (UK)">mpg (UK)</option>
          <option value="km/L">km/L</option>
          <option value="L/100km">L/100km</option>
              </select>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <p className="text-3xl font-mono font-bold text-blue-400">{isNaN(result) ? '—' : result.toPrecision(6)}</p>
            <p className="text-gray-400 mt-1">{to}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
