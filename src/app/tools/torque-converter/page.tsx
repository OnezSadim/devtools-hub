'use client';
import { useState } from 'react';

export default function Page() {
  const [val, setVal] = useState('1');
  const [from, setFrom] = useState('N·m');
  const [to, setTo] = useState('kN·m');

  function convert(v: number, unit: string): number {
    let base = 0;
    switch(unit) {
      case 'N·m': base = v / 1.0; break;
      case 'kN·m': base = v / 0.001; break;
      case 'lbf·ft': base = v / 0.737562; break;
      case 'lbf·in': base = v / 8.85075; break;
      case 'kgf·m': base = v / 0.101972; break;
      case 'ozf·in': base = v / 141.612; break;
    }
    switch(to) {
      case 'N·m': return base * 1.0;
      case 'kN·m': return base * 0.001;
      case 'lbf·ft': return base * 0.737562;
      case 'lbf·in': return base * 8.85075;
      case 'kgf·m': return base * 0.101972;
      case 'ozf·in': return base * 141.612;
    }
    return base;
  }

  const result = convert(parseFloat(val) || 0, from);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Torque Converter</h1>
        <p className="text-gray-400 mb-8">Convert between torque units.</p>
        <div className="bg-gray-900 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Value</label>
            <input type="number" value={val} onChange={e=>setVal(e.target.value)} className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">From</label>
              <select value={from} onChange={e=>setFrom(e.target.value)} className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white">
          <option value="N·m">N·m</option>
          <option value="kN·m">kN·m</option>
          <option value="lbf·ft">lbf·ft</option>
          <option value="lbf·in">lbf·in</option>
          <option value="kgf·m">kgf·m</option>
          <option value="ozf·in">ozf·in</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">To</label>
              <select value={to} onChange={e=>setTo(e.target.value)} className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white">
          <option value="N·m">N·m</option>
          <option value="kN·m">kN·m</option>
          <option value="lbf·ft">lbf·ft</option>
          <option value="lbf·in">lbf·in</option>
          <option value="kgf·m">kgf·m</option>
          <option value="ozf·in">ozf·in</option>
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
