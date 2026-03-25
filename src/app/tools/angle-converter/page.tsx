'use client';
import { useState } from 'react';

export default function Page() {
  const [val, setVal] = useState('1');
  const [from, setFrom] = useState('degree');
  const [to, setTo] = useState('radian');

  function convert(v: number, unit: string): number {
    let base = 0;
    switch(unit) {
      case 'degree': base = v / 1.0; break;
      case 'radian': base = v / 0.0174533; break;
      case 'gradian': base = v / 1.11111; break;
      case 'arcminute': base = v / 60.0; break;
      case 'arcsecond': base = v / 3600.0; break;
      case 'turn': base = v / 0.002777777777777778; break;
      case 'milliradian': base = v / 17.4533; break;
    }
    switch(to) {
      case 'degree': return base * 1.0;
      case 'radian': return base * 0.0174533;
      case 'gradian': return base * 1.11111;
      case 'arcminute': return base * 60.0;
      case 'arcsecond': return base * 3600.0;
      case 'turn': return base * 0.002777777777777778;
      case 'milliradian': return base * 17.4533;
    }
    return base;
  }

  const result = convert(parseFloat(val) || 0, from);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Angle Converter</h1>
        <p className="text-gray-400 mb-8">Convert between angle units.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Value</label>
            <input type="number" value={val} onChange={e=>setVal(e.target.value)} className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select value={from} onChange={e=>setFrom(e.target.value)} className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white">
          <option value="degree">degree</option>
          <option value="radian">radian</option>
          <option value="gradian">gradian</option>
          <option value="arcminute">arcminute</option>
          <option value="arcsecond">arcsecond</option>
          <option value="turn">turn</option>
          <option value="milliradian">milliradian</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e=>setTo(e.target.value)} className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white">
          <option value="degree">degree</option>
          <option value="radian">radian</option>
          <option value="gradian">gradian</option>
          <option value="arcminute">arcminute</option>
          <option value="arcsecond">arcsecond</option>
          <option value="turn">turn</option>
          <option value="milliradian">milliradian</option>
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
