'use client';
import { useState } from 'react';

export default function Page() {
  const [val, setVal] = useState('1');
  const [from, setFrom] = useState('coulomb');
  const [to, setTo] = useState('millicoulomb');

  function convert(v: number, unit: string): number {
    let base = 0;
    switch(unit) {
      case 'coulomb': base = v / 1.0; break;
      case 'millicoulomb': base = v / 1000.0; break;
      case 'microcoulomb': base = v / 1000000.0; break;
      case 'nanocoulomb': base = v / 1000000000.0; break;
      case 'picocoulomb': base = v / 1000000000000.0; break;
      case 'ampere-hour': base = v / 0.0002777777777777778; break;
      case 'milliampere-hour': base = v / 0.2777777777777778; break;
      case 'faraday': base = v / 1.0364273106887785e-05; break;
    }
    switch(to) {
      case 'coulomb': return base * 1.0;
      case 'millicoulomb': return base * 1000.0;
      case 'microcoulomb': return base * 1000000.0;
      case 'nanocoulomb': return base * 1000000000.0;
      case 'picocoulomb': return base * 1000000000000.0;
      case 'ampere-hour': return base * 0.0002777777777777778;
      case 'milliampere-hour': return base * 0.2777777777777778;
      case 'faraday': return base * 1.0364273106887785e-05;
    }
    return base;
  }

  const result = convert(parseFloat(val) || 0, from);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Electric Charge Converter</h1>
        <p className="text-gray-400 mb-8">Convert between electric charge units.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Value</label>
            <input type="number" value={val} onChange={e=>setVal(e.target.value)} className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select value={from} onChange={e=>setFrom(e.target.value)} className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white">
          <option value="coulomb">coulomb</option>
          <option value="millicoulomb">millicoulomb</option>
          <option value="microcoulomb">microcoulomb</option>
          <option value="nanocoulomb">nanocoulomb</option>
          <option value="picocoulomb">picocoulomb</option>
          <option value="ampere-hour">ampere-hour</option>
          <option value="milliampere-hour">milliampere-hour</option>
          <option value="faraday">faraday</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e=>setTo(e.target.value)} className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white">
          <option value="coulomb">coulomb</option>
          <option value="millicoulomb">millicoulomb</option>
          <option value="microcoulomb">microcoulomb</option>
          <option value="nanocoulomb">nanocoulomb</option>
          <option value="picocoulomb">picocoulomb</option>
          <option value="ampere-hour">ampere-hour</option>
          <option value="milliampere-hour">milliampere-hour</option>
          <option value="faraday">faraday</option>
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
