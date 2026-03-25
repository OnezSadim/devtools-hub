'''use client'''

import { useState } from 'react';

export default function Page() {
  const [value, setValue] = useState('');
  const [from, setFrom] = useState('base');
  const [to, setTo] = useState('base');
  const [result, setResult] = useState('');

  const units: Record<string, number> = {
    base: 1,
    kilo: 1e3,
    mega: 1e6,
    milli: 1e-3,
    micro: 1e-6,
    nano: 1e-9,
  };

  const convert = () => {
    const v = parseFloat(value);
    if (isNaN(v)) { setResult('Invalid input'); return; }
    const base_val = v * units[from];
    setResult((base_val / units[to]).toExponential(6));
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Permeability Converter</h1>
      <p className="text-gray-400 mb-6">Convert between magnetic permeability units including henries per meter and relative permeability</p>
      <div className="bg-gray-900 rounded-xl p-6 max-w-lg space-y-4">
        <input type="number" value={value} onChange={e => setValue(e.target.value)}
          placeholder="Enter value" className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white" />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">From</label>
            <select value={from} onChange={e => setFrom(e.target.value)} className="w-full bg-gray-800 rounded-lg px-3 py-2 text-white">
              {Object.keys(units).map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">To</label>
            <select value={to} onChange={e => setTo(e.target.value)} className="w-full bg-gray-800 rounded-lg px-3 py-2 text-white">
              {Object.keys(units).map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
        </div>
        <button onClick={convert} className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2 font-semibold">Convert</button>
        {result && <div className="bg-gray-800 rounded-lg p-4 text-center text-2xl font-mono">{result}</div>}
      </div>
    </main>
  );
}
